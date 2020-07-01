package bot;

import bot.event.*;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import javax.security.auth.login.LoginException;

public class SpiritBot {

    public static void start() throws Exception{
        JDA jda = (JDA) new JDABuilder("TokenIDHERE").build();
        jda.addEventListener(new DisconnectHandler(), new InfoHandler(), new SaveAllHandler(), new OnlineHandler(), new ShutDownHandler(), new ShutDownTimeHandler(), new WhisperHandler());
    }

}
