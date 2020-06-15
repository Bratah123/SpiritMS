package bot.event;

import handling.world.World;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;
import server.ShutdownServer;
import server.Timer;
import tools.packet.CWvsContext;

import java.util.concurrent.ScheduledFuture;

public class ShutDownTimeHandler extends ListenerAdapter {

    public void onGuildMessageReceived(GuildMessageReceivedEvent e){
        String[] args = e.getMessage().getContentRaw().split(" ");
        if(e.getMessage().getContentRaw().startsWith("!shutdowntime")){
            if(!e.getAuthor().getId().equals("207371595113562124"))
            {
                e.getChannel().sendMessage("You do not have the proper permissions for this command.").queue();
            }
            if(args.length < 2){
                e.getChannel().sendMessage("Please provide the necessary arguments, !shutdowntime <minutes>").queue();
                return;
            }
            final int[] minutesLeft = {Integer.parseInt(args[1])};
            ScheduledFuture<?> ts = null;
            Thread t = null;
            e.getGuild().getTextChannelById("722160746565468291").sendMessage("Server will be shutting down in " + minutesLeft[0] + " minutes, please log off safely.").queue();
            if (ts == null && (t == null || !t.isAlive())) {
                t = new Thread(ShutdownServer.getInstance());
                Thread finalT = t;
                ScheduledFuture<?> finalTs = ts;
                ts = Timer.EventTimer.getInstance().register(new Runnable() {
                    @Override
                    public void run() {
                        if (minutesLeft[0] == 0) {
                            e.getGuild().getTextChannelById("722160746565468291").sendMessage("Server is down.").queue();
                            ShutdownServer.getInstance().shutdown();
                            finalT.start();
                            finalTs.cancel(false);
                            return;
                        }
                        World.Broadcast.broadcastMessage(CWvsContext.broadcastMsg(0, "The server will shutdown in " + minutesLeft[0] + " minutes. please log off safely."));
                        e.getGuild().getTextChannelById("722160746565468291").sendMessage("Sever will be shutting down in " + minutesLeft[0] + " minutes, please log off safely.").queue();
                        minutesLeft[0]--;
                    }
                }, 60000);
            } else {
                e.getChannel().sendMessage("A shutdown thread is already in progress or shutdown has not been done. Please wait.").queue();
                return;
            }
        }
    }
}
