package constants;

/**
 *
 * @author Itzik
 */
public class ServerConfig {

    public static boolean adminOnly = false;
    public static boolean logPackets = true;
    public static boolean logAccounts = false; //Writes to a loose file called Account, unhashed.
    public static boolean DISABLE_PIC = false;
    public static final int flags = 3;
    public static final String serverName = "Amoria";
    public static final String eventMessage = "v146 Amoria Development!";
    public static final String rankingURL = "http://www.Amoria.org/ranking";
    public static final int flag = 3;
    public static final int maxCharacters = 20;
    public static final int STARTER_MAP = 10000; //Maple Island
    public static final int HOME_MAP_ID =  910000000; //xenon lab (mob version), map used for @home
    public static final String scrollingMessage = "";
    public static final int userLimit = 1500;
    public static String interface_;
    public static final int channelCount = 3;
    public static final String events = "" + "AutomatedEvent," + "EvolutionLab,PinkZakumEntrance,PVP,CygnusBattle,ScarTarBattle,BossBalrog_EASY,BossBalrog_NORMAL,HorntailBattle,Nibergen,PinkBeanBattle,ZakumBattle,NamelessMagicMonster,Dunas,Dunas2,2095_tokyo,ZakumPQ,LudiPQ,KerningPQ,ProtectTylus,WitchTower_EASY,WitchTower_Med,WitchTower_Hard,Vergamot,ChaosHorntail,ChaosZakum,CoreBlaze,BossQuestEASY,BossQuestMed,BossQuestHARD,BossQuestHELL,BossQuestCHAOS,Ravana_EASY,Ravana_HARD,Ravana_MED,GuildQuest,Aufhaven,Dragonica,Rex,MonsterPark,KentaPQ,ArkariumBattle,AswanOffSeason,HillaBattle,The Dragon Shout,VonLeonBattle,Ghost,OrbisPQ,Romeo,Juliet,Pirate,Amoria,Ellin,CWKPQ,DollHouse,Kenta,Prison,Azwan,HenesysPQ,jett2ndjob,cpq,cpq2,Rex,Trains,Boats,Flight,Visitor,AirPlane,Ghost,PinkBeanBattle,Aswan,AswanOffSeason,Subway,PierreBattle,PierreEasy,QueenBattle,QueenEasy,VellumBattle,VellumEasy,VonBonBattle,VonBonEasy,EasyMagnus,MagnusBattle";
    // Scripts TODO: Amoria,CWKPQ,BossBalrog_EASY,BossBalrog_NORMAL,ZakumPQ,ProtectTylus,GuildQuest,Ravana_EASY,Ravna_MED,Ravana_HARD (untested or not working)
    
    /*Rates*/
    public static boolean fixedRates = true; //use same rates for all worlds
    public static final int EXP = 4; //exp rate (only works when fixedRates = true)
    public static final int MESO = 2; //meso rate (only works when fixedRates = true)
    public static final int DROP = 1; //drop rate (only works when fixedRates = true)
    public static final int CASH_DROP_RATE = 2; //out of 100
    
    /*Red Events*/
    public static boolean RED_EVENT_10 = false; //Makes cassandra popup when you login at lvl<10 (maple island)
    public static boolean RED_EVENT = false; //Makes red even notification popup (cassandra) When you login at level 11+
    
    /*Anti-Sniff*/
    public static boolean USE_FIXED_IV;
    public static final byte[] Static_LocalIV = new byte[]{71, 113, 26, 44};
    public static final byte[] Static_RemoteIV = new byte[]{70, 112, 25, 43};

    public static enum Events {

        EVENT1("PinkZakumEntrance"),
        EVENT2("PVP"),
        EVENT3("CygnusBattle"),
        EVENT4("ScarTarBattle"),
        EVENT5("BossBalrog_EASY"),
        EVENT6("BossBalrog_NORMAL"),
        EVENT7("HorntailBattle"),
        EVENT8("Nibergen"),
        EVENT9("PinkBeanBattle"),
        EVENT10("ZakumBattle"),
        EVENT11("NamelessMagicMonster"),
        EVENT12("Dunas"),
        EVENT13("Dunas2"),
        EVENT14("2095_tokyo"),
        EVENT15("ZakumPQ"),
        EVENT16("LudiPQ"),
        EVENT17("KerningPQ"),
        EVENT18("ProtectTylus"),
        EVENT19("WitchTower_EASY"),
        EVENT20("WitchTower_Med"),
        EVENT21("WitchTower_Hard"),
        EVENT22("Vergamot"),
        EVENT23("ChaosHorntail"),
        EVENT24("ChaosZakum"),
        EVENT25("CoreBlaze"),
        EVENT26("BossQuestEASY"),
        EVENT27("BossQuestMed"),
        EVENT28("BossQuestHARD"),
        EVENT29("BossQuestHELL"),
        EVENT30("Ravana_EASY"),
        EVENT31("Ravana_HARD"),
        EVENT32("Ravana_MED"),
        EVENT33("GuildQuest"),
        EVENT34("Aufhaven"),
        EVENT35("Dragonica"),
        EVENT36("Rex"),
        EVENT37("MonsterPark"),
        EVENT38("KentaPQ"),
        EVENT39("ArkariumBattle"),
        EVENT40("AswanOffSeason"),
        EVENT41("HillaBattle"),
        EVENT42("The Dragon Shout"),
        EVENT43("VonLeonBattle"),
        EVENT44("Ghost"),
        EVENT45("OrbisPQ"),
        EVENT46("Romeo"),
        EVENT47("Juliet"),
        EVENT48("Pirate"),
        EVENT49("Amoria"),
        EVENT50("Ellin"),
        EVENT51("CWKPQ"),
        EVENT52("DollHouse"),
        EVENT53("Kenta"),
        EVENT54("Prison"),
        EVENT55("Azwan"),
        EVENT56("cpq"),
        EVENT57("cpq2"),
        EVENT58("Rex"),
        EVENT59("Trains"),
        EVENT60("Boats"),
        EVENT61("Flight"),
        EVENT62("Visitor"),
        EVENT63("AirPlane"),
        EVENT64("Ghost"),
        EVENT65("PinkBeanBattle"),
        EVENT66("Aswan"),
        EVENT67("AswanOffSeason"),
        EVENT68("Subway"),
        EVENT69("PierreBattle"),
        EVENT70("PierreEasy"),
        EVENT71("QueenBattle"),
        EVENT72("QueenEasy"),
        EVENT73("VellumBattle"),
        EVENT74("VellumEasy"),
        EVENT75("VonBonBattle"),
        EVENT76("VonBonEasy"),
        EVENT77("EasyMagnus"),
        EVENT78("MagnusBattle");
        private final String name;

        Events(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }

    public static String[] getEvents() {
        String[] eventlist = new String[Events.values().length];
        int arrayLocation = 0;
        for (Events event : Events.values()) {
            eventlist[arrayLocation] += event.getName();
            arrayLocation++;
        }
        return eventlist;
    }

    public static String getEventList() {
        String eventlist = new String();
        for (Events event : Events.values()) {
            eventlist += event.getName();
            eventlist += ", ";
        }
        eventlist += "@";
        eventlist = eventlist.replaceAll(", @", "");
        return eventlist;
    }
}
