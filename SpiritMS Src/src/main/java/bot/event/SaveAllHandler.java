package bot.event;

import client.MapleCharacter;
import handling.channel.ChannelServer;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;


public class SaveAllHandler extends ListenerAdapter {
    @Override
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
        if(event.getMessage().getContentRaw().equalsIgnoreCase("!saveall")){
            if(!event.getMember().hasPermission(Permission.ADMINISTRATOR)){
                event.getChannel().sendMessage("You do not have the necessary permissions for that command.").queue();
                return;
            }
            for(int i = 1; i <= ChannelServer.getChannelCount(); i++){
                for (MapleCharacter mch : ChannelServer.getInstance(i).getPlayerStorage().getAllCharacters()) {
                    mch.saveToDB(false, false);
                    mch.dropMessage(6,"Your character has been successfully saved.");
                }
            }
            System.out.println("[Discord Bot] All Characters have been saved.");
            event.getChannel().sendMessage("All Characters have been saved successfully.").queue();
        }
    }
}
