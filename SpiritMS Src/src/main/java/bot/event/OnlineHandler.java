package bot.event;

import database.DatabaseConnection;
import handling.channel.ChannelServer;
import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import java.awt.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class OnlineHandler extends ListenerAdapter {
    public void onGuildMessageReceived(GuildMessageReceivedEvent e){
        if(e.getMessage().getContentRaw().equalsIgnoreCase("!online")){
           Connection con = DatabaseConnection.getConnection();
            try {
                PreparedStatement ps = con.prepareStatement("SELECT * FROM accounts WHERE loggedin > ?");
                ps.setInt(1,0);
                ResultSet rs = ps.executeQuery();
                int i = 0;
                while(rs.next()){
                    i++;
                }
                EmbedBuilder eb = new EmbedBuilder().setTitle("Online Players").setDescription("Player(s) online : " + i).setThumbnail("https://cdn.discordapp.com/attachments/631249406775132182/722198635143626762/brand2.png").setColor(Color.cyan).setFooter("@SpiritMS Bot");
                e.getChannel().sendMessage(eb.build()).queue();
            } catch (SQLException ex) {
                ex.printStackTrace();
                e.getChannel().sendMessage("Error trying to find online players.").queue();
            }
        }
    }
}
