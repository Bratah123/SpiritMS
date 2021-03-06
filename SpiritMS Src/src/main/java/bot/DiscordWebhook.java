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
    public static void sendDamageLogMessage(String message, String username){
        TemmieWebhook webhook = new TemmieWebhook("https://discordapp.com/api/webhooks/731299088175464458/m0cJOj-AQTTU5wPLLsT3UqfdecNnvZmo1xKutsgQ6TyYeQCaB99UOEPMVX2kWD923y87");
        DiscordMessage dm = DiscordMessage.builder()
                .username(username)
                .content(message)
                .avatarUrl("https://cdn.discordapp.com/attachments/631249406775132182/728001813730689194/322c936a8c8be1b803cd94861bdfa868.png")
                .build();
        webhook.sendMessage(dm);
    }

    public static void sendServerStatusMessage(String message, String username){
        TemmieWebhook webhook = new TemmieWebhook("https://discordapp.com/api/webhooks/731578926673166336/uZ7DzCPhEvRv8PpYERGsrtbS-lTBEB3jbtmz6CZt3F7xEVlN3Ec0wtJMs6osIt-0K5Iw");
        DiscordMessage dm = DiscordMessage.builder()
                .username(username)
                .content(message)
                .avatarUrl("https://cdn.discordapp.com/avatars/722180567550132225/d676bb7eaf8fb6f14adecc938037d208.png?size=128")
                .build();
        webhook.sendMessage(dm);
    }
}
