package handling;

public enum RecvPacketOpcode implements WritableIntValueHolder {

    /*
     * General Oopcodes.
     * Used for general purposes.
     */
    RSA_KEY(false),
    STRANGE_DATA,
    LOGIN_REDIRECTOR(false, (short) 0x01),
    CRASH_INFO(false, (short) 0x2E),
    PONG(false, (short) 0x46),//2F
    /*
     * Login Opcodes.
     * Used for login packets.
     */
    GUEST_LOGIN(true, (short) 0x16),
    SERVERSTATUS_REQUEST(false, (short) 0x1D),
    TOS(true, (short) 0x1D),
    VIEW_SERVERLIST(false, (short) 0x21),
    SERVERLIST_REQUEST(false, (short) 0x22),
    REDISPLAY_SERVERLIST(true, (short) 0x23),
    CHAR_SELECT_NO_PIC(false, (short) 0x25),
    PLAYER_LOGGEDIN(false, (short) 0x27),
    CHECK_CHAR_NAME(true, (short) 0x28),
    DELETE_CHAR(true, (short) 0x2C),
    AUTH_REQUEST(false, (short) 0x30),
    CHAR_SELECT(true, (short) 0x31),
    VIEW_REGISTER_PIC(true, (short) 0x32),
    CHANGE_PIC_REQUEST(true, (short) 0x33),
    VIEW_SELECT_PIC(true, (short) 0x35),
    CLIENT_START(false, (short) 0x38),
    CLIENT_FAILED(false, (short) 0x39),
    PART_TIME_JOB(true, (short) 0x3B),
    CHARACTER_CARD(true, (short) 0x3C),
    ENABLE_LV50_CHAR(true, (short) 0x3D),
    CREATE_LV50_CHAR(true, (short) 0x3E),
    ENABLE_SPECIAL_CREATION(true, (short) 0x3E),
    CLIENT_HELLO(false, (short) 0x3F),
    LOGIN_PASSWORD(false, (short) 0x40),
    CREATE_SPECIAL_CHAR(true, (short) 0x41),
    CHARLIST_REQUEST(false, (short) 0x43),
    CREATE_CHAR(false, (short) 0x45),
    CREATE_ULTIMATE(false, (short) 0x999),//46
    AUTH_SECOND_PASSWORD(true, (short) 0x47),
    WRONG_PASSWORD(false, (short) 0x49),//v145
    CLIENT_ERROR(false, (short) 0x4A),
    /*
     * Channel Opcodes.
     * Used for in-game packets.
     */
    CHANGE_MAP(true, (short) 0x51),
    CHANGE_CHANNEL(true, (short) 0x52),
    ENTER_CASH_SHOP(true, (short) 0x54),
    ENTER_FARM(true, (short) 0x57),
    ENTER_AZWAN(true, (short) 0x4D),
    ENTER_AZWAN_EVENT(true, (short) 0x4A),
    LEAVE_AZWAN(true, (short) 0x4B),
    ENTER_PVP(true, (short) 0x5C),
    ENTER_PVP_PARTY(true, (short) 0x5C),
    LEAVE_PVP(true, (short) 0x999),
    MOVE_PLAYER(true, (short) 0x5E),
    CANCEL_CHAIR(true, (short) 0x60),
    USE_CHAIR(true, (short) 0x61),
    CLOSE_RANGE_ATTACK(true, (short) 0x62),
    RANGED_ATTACK(true, (short) 0x63),
    MAGIC_ATTACK(true, (short) 0x64),
    PASSIVE_ENERGY(true, (short) 0x65),
    TAKE_DAMAGE(true, (short) 0x68),
    PVP_ATTACK(true, (short) 0x69),
    GENERAL_CHAT(true, (short) 0x6A),
    CLOSE_CHALKBOARD(true, (short) 0x6B),
    FACE_EXPRESSION(true, (short) 0x6C),
    FACE_ANDROID(true, (short) 0x6D),
    USE_ITEMEFFECT(true, (short) 0x6E),
    WHEEL_OF_FORTUNE(true, (short) 0x6F),
    USE_TITLE(true, (short) 0x72),//70
    ANGELIC_CHANGE(true, (short) 0x73),//71
    CHANGE_CODEX_SET(true, (short) 0x7A),//79
    CODEX_UNK(true, (short) 0x7B),
    MONSTER_BOOK_DROPS(true, (short) 0x7D),//7C
    NPC_TALK(true, (short) 0x7F),//7E
    NPC_TALK_MORE(true, (short) 0x81),//80
    NPC_SHOP(true, (short) 0x82),//81
    STORAGE(true, (short) 0x84),//83
    USE_HIRED_MERCHANT(true, (short) 0x85),//84
    MERCH_ITEM_STORE(true, (short) 0x86),//85
    PACKAGE_OPERATION(true, (short) 0x7F),//87
    MECH_CANCEL(true, (short) 0x89),//87
    HOLLY(true, (short) 0xF0),
    OWL(true, (short) 0x8C),//8A
    OWL_WARP(true, (short) 0x8D),//8A
    ITEM_SORT(true, (short) 0x92),//90
    ITEM_GATHER(true, (short) 0x93),//91
    ITEM_MOVE(true, (short) 0x94),//92
    MOVE_BAG(true, (short) 0x95),//93
    SWITCH_BAG(true, (short) 0x96),//94
    USE_ITEM(true, (short) 0x98),//96
    CANCEL_ITEM_EFFECT(true, (short) 0x99),//97
    USE_SUMMON_BAG(true, (short) 0x9B),//99
    PET_FOOD(true, (short) 0x9C),//9A
    USE_MOUNT_FOOD(true, (short) 0x9D),//9B
    USE_SCRIPTED_NPC_ITEM(true, (short) 0x9E),//9C
    USE_RECIPE(true, (short) 0x9F),//9D
    USE_NEBULITE(true, (short) 0xA0),//9E
    USE_ALIEN_SOCKET(true, (short) 0xA1),//9F
    USE_ALIEN_SOCKET_RESPONSE(true, (short) 0xA2),//A0
    USE_NEBULITE_FUSION(true, (short) 0xA3),//A1
    USE_CASH_ITEM(true, (short) 0xA4),//A2
    USE_CATCH_ITEM(true, (short) 0xA6),//A4
    USE_SKILL_BOOK(true, (short) 0xAB),//A9
    USE_EXP_POTION(true, (short) 0xAE),//A8
    TOT_GUIDE(true, (short) 0xB5),
    USE_OWL_MINERVA(true, (short) 0xBC),//+1 (v144)
    USE_TELE_ROCK(true, (short) 0xBD),//+1 (v144)
    USE_RETURN_SCROLL(true, (short) 0xBF),//+1 (v144)
    USE_UPGRADE_SCROLL(true, (short) 0xC0),//+1 (v144)
    USE_FLAG_SCROLL(true, (short) 0xC1),//+1 (v144)
    USE_EQUIP_SCROLL(true, (short) 0xC2),//+1 (v144)
    USE_POTENTIAL_SCROLL(true, (short) 0xC6),//C3
    USE_BONUS_POTENTIAL(true, (short) 0xC8), //UNHANDLED
    USE_ABYSS_SCROLL(true, (short) 0xC7),//C4
    USE_CARVED_SEAL(true, (short) 0xC9),//C5
    USE_BAG(true, (short) 0xC9),
    USE_CRAFTED_CUBE(true, (short) 0xCA),
    USE_MAGNIFY_GLASS(true, (short) 0xCD),//CA
    DISTRIBUTE_AP(true, (short) 0xD0),//CD
    AUTO_ASSIGN_AP(true, (short) 0xD1),//CE
    HEAL_OVER_TIME(true, (short) 0xD2),//CF
    LINK_SKILL(true, (short) 0xD4),//Confirmed
        IDK_1(true, (short) 0x49),
    IDK_2(true, (short) 0x70),
    IDK_3(true, (short) 0x71),
    IDK_4(true, (short) 0xE2),
    DISTRIBUTE_SP(true, (short) 0xD5),//D2
    SPECIAL_MOVE(true, (short) 0xD6),//D3
    CANCEL_BUFF(true, (short) 0xD7),//D4
    SKILL_EFFECT(true, (short) 0xD8),//D5
    MESO_DROP(true, (short) 0xD9),//D6
    GIVE_FAME(true, (short) 0xDA),//D7
    CHAR_INFO_REQUEST(true, (short) 0xDC),//D9
    SPAWN_PET(true, (short) 0xDD),//DA
    GET_BOOK_INFO(true, (short) 0xDF),//DC
    USE_FAMILIAR(true, (short) 0xE0),//DD
    SPAWN_FAMILIAR(true, (short) 0xE1),//DE
    RENAME_FAMILIAR(true, (short) 0xE2),//DF
    PET_BUFF(true, (short) 0xE3),//E0
    CANCEL_DEBUFF(true, (short) 0xE4),//E1
    CHANGE_MAP_SPECIAL(true, (short) 0xE5),//e2
    USE_INNER_PORTAL(true, (short) 0xE6),//E3
    TROCK_ADD_MAP(true, (short) 0xE7),//e4
    LIE_DETECTOR(true, (short) 0xE8),//E5
    LIE_DETECTOR_SKILL(true, (short) 0xE9),//E6
    LIE_DETECTOR_RESPONSE(true, (short) 0xEA),//E7
    REPORT(true, (short) 0xEC),//E9
    QUEST_ACTION(true, (short) 0xED),//EA
    REISSUE_MEDAL(true, (short) 0xEE),//EB
//    BUFF_RESPONSE(true, (short) 0xEF),//EC
    SKILL_MACRO(true, (short) 0xF5),//was 0xF3
    REWARD_ITEM(true, (short) 0xF7),//F2
    ITEM_MAKER(true, (short) 0x999),
    REPAIR_ALL(true, (short) 0xFE),//C7
    REPAIR(true, (short) 0xFF),//C8
    SOLOMON(true, (short) 0xC9),
    GACH_EXP(true, (short) 0xCA),
    FOLLOW_REQUEST(true, (short) 0xFD),
    PQ_REWARD(true, (short) 0xFE),
    FOLLOW_REPLY(true, (short) 0x101),
    AUTO_FOLLOW_REPLY(true, (short) 0x999),
    USE_TREASURE_CHEST(true, (short) 0x999),
    PROFESSION_INFO(true, (short) 0x102),
    USE_POT(true, (short) 0x999),//D6
    CLEAR_POT(true, (short) 0xD7),
    FEED_POT(true, (short) 0xD8),
    CURE_POT(true, (short) 0xD9),
    REWARD_POT(true, (short) 0xDA),
    AZWAN_REVIVE(true, (short) 0xDB),
    ZERO_TAG(true, (short) 0x123),
    USE_COSMETIC(true, (short) 0x124),
    INNER_CIRCULATOR(true, (short) 0x11A),
    PVP_RESPAWN(true, (short) 0xCF),
    GAIN_FORCE(true, (short) 0x1FFF),
    ADMIN_CHAT(true, (short) 0x126),//119
    PARTYCHAT(true, (short) 0x127),//120
    COMMAND(true, (short) 0x129),//121
    SPOUSE_CHAT(true, (short) 0x12A),//122
    MESSENGER(true, (short) 0x12B),//123
    PLAYER_INTERACTION(true, (short) 0x12C),//124
    PARTY_OPERATION(true, (short) 0x12D),//125
    DENY_PARTY_REQUEST(true, (short) 0x12E),//126
    ALLOW_PARTY_INVITE(true, (short) 0x12F),//127
    EXPEDITION_OPERATION(true, (short) 0x130),//128
    EXPEDITION_LISTING(true, (short) 0x131),//129
    GUILD_OPERATION(true, (short) 0x132),//12A
    DENY_GUILD_REQUEST(true, (short) 0x133),//12B
    ADMIN_COMMAND(true, (short) 0x134),//12C
    ADMIN_LOG(true, (short) 0x135),//12D
    BUDDYLIST_MODIFY(true, (short) 0x137), //12E
    NOTE_ACTION(true, (short) 0x999),//127
    USE_DOOR(true, (short) 0x13A),//131
    USE_MECH_DOOR(true, (short) 0x13B),//132
    CHANGE_KEYMAP(true, (short) 0x13D), //134
    RPS_GAME(true, (short) 0x135),
    RING_ACTION(true, (short) 0x136),
    WEDDING_ACTION(true, (short) 0x137),
    ALLIANCE_OPERATION(true, (short) 0x13B),
    DENY_ALLIANCE_REQUEST(true, (short) 0x13C),
    REQUEST_FAMILY(true, (short) 0x999),//13D
    OPEN_FAMILY(true, (short) 0x13E),//13E
    FAMILY_OPERATION(true, (short) 0x13F),
    DELETE_JUNIOR(true, (short) 0x140),
    DELETE_SENIOR(true, (short) 0x141),
    ACCEPT_FAMILY(true, (short) 0x142),
    USE_FAMILY(true, (short) 0x143),
    FAMILY_PRECEPT(true, (short) 0x144),
    FAMILY_SUMMON(true, (short) 0x145),
    BBS_OPERATION(true, (short) 0x150),//10B
    SOLOMON_EXP(true, (short) 0x151),//10C
    NEW_YEAR_CARD(true, (short) 0x11E),
    XMAS_SURPRISE(true, (short) 0x111),
    TWIN_DRAGON_EGG(true, (short) 0x112),
    ARAN_COMBO(true, (short) 0x15D),//0x152
    REMOVE_ARAN_COMBO(true, (short) 0x15E),
    TRANSFORM_PLAYER(true, (short) 0x999),
    CYGNUS_SUMMON(true, (short) 0x999),
    CRAFT_DONE(true, (short) 0x162),//157
    CRAFT_EFFECT(true, (short) 0x163),//158
    CRAFT_MAKE(true, (short) 0x164),//159
    CHANGE_ROOM_CHANNEL(true, (short) 0x169),//15D
    EVENT_CARD(true, (short) 0x15F),
    CHOOSE_SKILL(true, (short) 0x175),//0x16B
    SKILL_SWIPE(true, (short) 0x176), //0x16C
    VIEW_SKILLS(true, (short) 0x177),//0x16D
    CANCEL_OUT_SWIPE(true, (short) 0x16F),
    YOUR_INFORMATION(true, (short) 0x16E),//163
    FIND_FRIEND(true, (short) 0x16F),//164
    PINKBEAN_CHOCO_OPEN(true, (short) 0x170),//165
    PINKBEAN_CHOCO_SUMMON(true, (short) 0x171),//166
    CASSANDRAS_COLLECTION(true, (short) 0x178),//new v145
    BUY_SILENT_CRUSADE(true, (short) 0x128),
    BUDDY_ADD(true, (short) 0x1A2),
    MOVE_PET(true, (short) 0x1B8),//1A8
    PET_CHAT(true, (short) 0x1B9),//1A9
    PET_COMMAND(true, (short) 0x1BA),//1AA
    PET_LOOT(true, (short) 0x1BB),//1AB
    PET_AUTO_POT(true, (short) 0x1BC),//1AC
    PET_IGNORE(true, (short) 0x1BD),//1AD
    MOVE_HAKU(true, (short) 0x1C1),//1B1
    CHANGE_HAKU(true, (short) 0x1C2),//1B2
    //HAKU_1D8(true, (short) 0x1D8),//test
    //HAKU_1D9(true, (short) 0x1D9),//test
    MOVE_SUMMON(true, (short) 0x1C8),//1b8
    SUMMON_ATTACK(true, (short) 0x1C9),//1B9
    DAMAGE_SUMMON(true, (short) 0x1CA),//1BA
    SUB_SUMMON(true, (short) 0x1CB),//1BB
    REMOVE_SUMMON(true, (short) 0x1CC),//1BC
    PVP_SUMMON(true, (short) 0x1CE),//1BE
    MOVE_DRAGON(true, (short) 0x1D0),//1C0
    USE_ITEM_QUEST(true, (short) 0x1D2),//1C4
    MOVE_ANDROID(true, (short) 0x1D4),//1C5
    UPDATE_QUEST(true, (short) 0x1D5),//1C7//+16
    QUEST_ITEM(true, (short) 0x1D6),//1C8
    MOVE_FAMILIAR(true, (short) 0x1DC),//1CC
    TOUCH_FAMILIAR(true, (short) 0x1DD),//1CD
    ATTACK_FAMILIAR(true, (short) 0x1DE),//1CE
    REVEAL_FAMILIAR(true, (short) 0x1DF),//1CF
    QUICK_SLOT(true, (short) 0x1D7),
    PAM_SONG(true, (short) 0x1D8),
    MOVE_LIFE(true, (short) 0x20B),//1EC
    AUTO_AGGRO(true, (short) 0x1EE),
    FRIENDLY_DAMAGE(true, (short) 0x999),//1ef
    MONSTER_BOMB(true, (short) 0x1F0),
    HYPNOTIZE_DMG(true, (short) 0x1F1),
    MOB_BOMB(true, (short) 0x1F5),
    MOB_NODE(true, (short) 0x1F6),
    DISPLAY_NODE(true, (short) 0x1F7),
    MONSTER_CARNIVAL(true, (short) 0x1F8),
    NPC_ACTION(true, (short) 0x222),//203
    ITEM_PICKUP(true, (short) 0x22A),//208
    DAMAGE_REACTOR(true, (short) 0x22D),//v145 Confirmed
    TOUCH_REACTOR(true, (short) 0x22E),//v145 Confirmed
    CLICK_REACTOR(true, (short) 0x22F),//v145 Confirmed
    MAKE_EXTRACTOR(true, (short) 0x22F),//v145 Confirmed
    RECEIVE_GIFT_EFFECT(true, (short) 0x2F5),//new v145
    UPDATE_ENV(true, (short) 0x17E),
    SNOWBALL(true, (short) 0x239),//0x182
    LEFT_KNOCK_BACK(true, (short) 0x183),
    CANDY_RANKING(true, (short) 0x185),//
    START_EVOLUTION(true, (short) 0x186),
    COCONUT(true, (short) 0x999),
    SHIP_OBJECT(true, (short) 0x999),
    PARTY_SEARCH_START(true, (short) 0x197),
    PARTY_SEARCH_STOP(true, (short) 0x198),
    START_HARVEST(true, (short) 0x251),//22F
    STOP_HARVEST(true, (short) 0x252),//230
    QUICK_MOVE(true, (short) 0x252),
    CS_UPDATE(true, (short) 0x28D),//v145 was 28A
    BUY_CS_ITEM(true, (short) 0x28E),//v145
    COUPON_CODE(true, (short) 0x28F),//v145
    CASH_CATEGORY(true, (short) 0x294),//v145
    PLACE_FARM_OBJECT(false, (short) 0x278),
    FARM_SHOP_BUY(false, (short) 0x27D),
    FARM_COMPLETE_QUEST(false, (short) 0x281),
    FARM_NAME(false, (short) 0x282),
    HARVEST_FARM_BUILDING(false, (short) 0x283),
    USE_FARM_ITEM(false, (short) 0x284),
    RENAME_MONSTER(false, (short) 0x999),//0x294
    NURTURE_MONSTER(false, (short) 0x999), //Surprise box?
    CS_SURPRISE(false, (short) 0x295),
    EXIT_FARM(false, (short) 0x299),
    FARM_QUEST_CHECK(false, (short) 0x29D),
    FARM_FIRST_ENTRY(false, (short) 0x2A7),
    GOLDEN_HAMMER(true, (short) 0x2A4),//1BB
    VICIOUS_HAMMER(true, (short) 0x1BD),
    PYRAMID_BUY_ITEM(true, (short) 0x999),
    CLASS_COMPETITION(true, (short) 0x999),
    MAGIC_WHEEL(true, (short) 0x2EE),
    REWARD(true, (short) 0x2EF),//0x2EC 
    BLACK_FRIDAY(true, (short) 0x2BE),
    UPDATE_RED_LEAF(true, (short) 0x29C),
    //Not Placed:
    SPECIAL_STAT(false, (short) 0x10C),//107
    UPDATE_HYPER(true, (short) 0x171),//
    RESET_HYPER(true, (short) 0x172),//
    DRESSUP_TIME(true, (short) 0x17F),
    DF_COMBO(true, (short) 0x10F),
    BUTTON_PRESSED(true, (short) 0x1E3),//1D3
    OS_INFORMATION(true, (short) 0x1E6),//1D6
    LUCKY_LOGOUT(true, (short) 0x2B6),
    MESSENGER_RANKING(true, (short) 0x1DD);
    private short code = -2;

    @Override
    public void setValue(short code) {
        this.code = code;
    }

    @Override
    public final short getValue() {
        return code;
    }
    private final boolean CheckState;

    private RecvPacketOpcode() {
        this.CheckState = true;
    }

    private RecvPacketOpcode(final boolean CheckState) {
        this.CheckState = CheckState;
    }

    private RecvPacketOpcode(final boolean CheckState, short code) {
        this.CheckState = CheckState;
        this.code = code;
    }

    public final boolean NeedsChecking() {
        return CheckState;
    }

    public static String nameOf(short value) {
        for (RecvPacketOpcode header : RecvPacketOpcode.values()) {
            if (header.getValue() == value) {
                return header.name();
            }
        }
        return "UNKNOWN";
    }
}
