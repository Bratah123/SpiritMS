package bot.event;

import handling.world.World;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import tools.packet.CWvsContext;

public class NoticeHandler extends ListenerAdapter {
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
        String message = event.getMessage().getContentRaw();
        if (message.startsWith("!notice")) {
            if (!event.getMember().hasPermission(Permission.ADMINISTRATOR)) {
                event.getChannel().sendMessage("You do not have the proper permissions to use this command").queue();
                return;
            }
            String args[] = message.split(" ");
            if (args.length <= 1) {
                event.getChannel().sendMessage("Please provide the necessary arguments, !notice <message>").queue();
                return;
            }
            String playerMessage = "";
            for (int i = 1; i < args.length; i++) {
                playerMessage += args[i] + " ";
            }
            World.Broadcast.broadcastMessage(CWvsContext.broadcastMsg(0, playerMessage));
            event.getChannel().sendMessage("Successfully sent message").queue();
            return;
        }
    }
}


