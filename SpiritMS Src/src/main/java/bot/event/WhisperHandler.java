package bot.event;

import client.MapleCharacter;
import handling.channel.ChannelServer;
import handling.world.World;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class WhisperHandler extends ListenerAdapter {
    public void onGuildMessageReceived(GuildMessageReceivedEvent event){
        String message = event.getMessage().getContentRaw();
        if(message.startsWith("!whisper")){
            if(!event.getMember().hasPermission(Permission.ADMINISTRATOR))
            {
                event.getChannel().sendMessage("You do not have the proper permissions to use this command").queue();
                return;
            }
            String args[] = message.split(" ");
            if(args.length <= 1){
                event.getChannel().sendMessage("Please provide the necessary arguments, !whisper <character> <message>").queue();
                return;
            }
            String character = args[1];
            String playerMessage = "";
            for (int i = 2; i < args.length; i++) {
                playerMessage += args[i] + " ";
            }
            if (World.Find.findChannel(character) >= 0) {
                MapleCharacter c = ChannelServer.getInstance(World.Find.findChannel(character)).getPlayerStorage().getCharacterByName(character);
                if(c != null){
                    String discordName = event.getAuthor().getName();
                    c.getClient().getPlayer().dropMessage(6, "[Discord] "+discordName+":  "+playerMessage);
                    event.getChannel().sendMessage("Successfully sent message to " + character + ".").queue();
                    return;
                }
            }
            event.getChannel().sendMessage("Could not find " + character + ".").queue();
        }
    }
}

