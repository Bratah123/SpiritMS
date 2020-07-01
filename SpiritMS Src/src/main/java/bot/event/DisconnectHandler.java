package bot.event;

import client.MapleCharacter;
import handling.channel.ChannelServer;
import handling.world.World;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class DisconnectHandler extends ListenerAdapter {
    public void onGuildMessageReceived(GuildMessageReceivedEvent event){
        String message = event.getMessage().getContentRaw();
        if(message.startsWith("!dc")){
            if(!event.getMember().hasPermission(Permission.ADMINISTRATOR))
            {
                event.getChannel().sendMessage("You do not have the proper permissions to use this command").queue();
                return;
            }
            String args[] = message.split(" ");
            if(args.length <= 1){
                event.getChannel().sendMessage("Please provide the necessary arguments, !dc <character>").queue();
                return;
            }
            String character = args[1];
            if (World.Find.findChannel(character) >= 0) {
                MapleCharacter c = ChannelServer.getInstance(World.Find.findChannel(character)).getPlayerStorage().getCharacterByName(character);
                if(c != null){
                    c.getClient().disconnect(true, true);
                    event.getChannel().sendMessage("Successfully disconnected " + character + ".").queue();
                    return;
                }
            }
            event.getChannel().sendMessage("Could not find " + character + ".").queue();
        }
    }
}

