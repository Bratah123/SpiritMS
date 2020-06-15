package bot;

import bot.event.DisconnectHandler;
import bot.event.InfoHandler;
import bot.event.SaveAllHandler;
import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import javax.security.auth.login.LoginException;

public class SpiritBot {

    public static void start() throws Exception{
        JDA jda = (JDA) new JDABuilder("NzIyMTgwNTY3NTUwMTMyMjI1.XufVNA.-4xF0U8xi1gbSW4xQwI9-fXihB0").build();
        jda.addEventListener(new DisconnectHandler(), new InfoHandler(), new SaveAllHandler());
    }

}
