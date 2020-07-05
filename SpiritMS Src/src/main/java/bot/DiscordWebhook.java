package bot;

import com.mrpowergamerbr.temmiewebhook.DiscordMessage;
import com.mrpowergamerbr.temmiewebhook.TemmieWebhook;

public class DiscordWebhook {
    public static void sendDiscMessage(String message, String username){ // sends it to chat-logs
        TemmieWebhook webhook = new TemmieWebhook("https://discordapp.com/api/webhooks/727988381577117777/9E1_qxPN3zS6ciZz2h7e13BnZ0rrvKlRi3mQn41rNUjFsbEUUUjyaY4FhDx1ZPLf1Ye0");
        DiscordMessage dm = DiscordMessage.builder()
                .username(username)
                .content(message)
                .avatarUrl("https://cdn.discordapp.com/attachments/631249406775132182/728001813730689194/322c936a8c8be1b803cd94861bdfa868.png")
                .build();
        webhook.sendMessage(dm);
    }
}
