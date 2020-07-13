package bot.event;

import net.dv8tion.jda.api.EmbedBuilder;
import net.dv8tion.jda.api.entities.MessageEmbed;
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

import java.awt.*;


public class InfoHandler extends ListenerAdapter {
    @Override
    public void onGuildMessageReceived(GuildMessageReceivedEvent event) {
        if(event.getMessage().getContentRaw().equalsIgnoreCase("!info")){
            EmbedBuilder embed = new EmbedBuilder().setColor(Color.cyan).setTitle("SpiritMS").setDescription("GMS v146.1");
            embed.setThumbnail("https://cdn.discordapp.com/attachments/631249406775132182/722198635143626762/brand2.png");
            embed.addField("Exp","6x",true);
            embed.addField("Item", "2x", true);
            embed.addField("Meso", "1x",true);
            embed.addField("Server State", "Open Alpha Testing", true);
            embed.addField("Release Date", "August 31st 2214", false);
            embed.setFooter("@SpiritMS Bot");

            event.getChannel().sendMessage(embed.build()).queue();
        }
    }
}
