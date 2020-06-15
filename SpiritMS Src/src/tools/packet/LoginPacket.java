package tools.packet;

import client.MapleCharacter;
import client.MapleClient;
import client.PartTimeJob;
import constants.GameConstants;
import constants.JobConstants;
import constants.JobConstants.LoginJob;
import constants.ServerConfig;
import constants.ServerConstants;
import constants.WorldConstants.WorldOption;
import handling.SendPacketOpcode;
import handling.login.LoginServer;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import server.Randomizer;
import tools.HexTool;
import tools.Triple;
import tools.data.MaplePacketLittleEndianWriter;

public class LoginPacket {

    public static byte[] getHello(short mapleVersion, byte[] sendIv, byte[] recvIv) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(14);
        mplew.writeShort(mapleVersion);
        mplew.writeMapleAsciiString(ServerConstants.MAPLE_PATCH);
        if (ServerConfig.USE_FIXED_IV) {
            mplew.write(HexTool.getByteArrayFromHexString("66 75 63 6B 79 6F 75 21"));
        } else {
            mplew.write(recvIv);
            mplew.write(sendIv);
        }
        mplew.write(8);

        return mplew.getPacket();
    }

    public static final byte[] getPing() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(2);
        mplew.writeShort(SendPacketOpcode.PING.getValue());
        return mplew.getPacket();
    }

    public static byte[] getAuthSuccessRequest(MapleClient client) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
        mplew.write(0);//Status
        mplew.write(0);
        mplew.writeInt(0);
        mplew.writeInt(client.getAccID());
        
        mplew.write(0);//client.getGender()
        mplew.write(0);//Admin Boolean
        mplew.write(client.isGm() ? 0x40 : 0);//0x40 for admin, 0x80 for MWLB?
        mplew.write(0);
        
        mplew.writeZeroBytes(5); //think it's an int and a byte.
        mplew.writeMapleAsciiString(client.getAccountName());
        mplew.writeLong(0);
        
        mplew.writeShort(0);
        mplew.writeLong(0);

        mplew.writeInt(0x2E); //random shit

        // Jobs
        mplew.write(JobConstants.enableJobs ? 1 : 0); //toggle
        mplew.write(JobConstants.jobOrder); //Job Order (orders are located in wz)
        for (LoginJob j : LoginJob.values()) {
            mplew.write(j.getFlag());
        }
        mplew.write(constants.ServerConfig.DISABLE_PIC ? 2 : 1);
        mplew.write(1);
        mplew.write(4);
        // End of Jobs

        mplew.writeLong(0); // Create date
       //   mplew.writeShort(2);

        return mplew.getPacket();
    }

    public static final byte[] getLoginFailed(int reason) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(16);

        mplew.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
        mplew.write(reason);
        mplew.write(0);
        mplew.writeInt(0);

        return mplew.getPacket();
    }
    /*
     * location: UI.wz/Login.img/Notice/text
     * reasons:
     * useful:
     * 32 - server under maintenance check site for updates
     * 35 - your computer is running thirdy part programs close them and play again
     * 36 - due to high population char creation has been disabled
     * 43 - revision needed your ip is temporary blocked
     * 75-78 are cool for auto register
     
     */

    public static byte[] getPermBan(byte reason) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(16);

        mplew.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
        mplew.write(2);
        mplew.write(0);
        mplew.writeInt(0);
        mplew.writeShort(reason);
        mplew.write(HexTool.getByteArrayFromHexString("01 01 01 01 00"));

        return mplew.getPacket();
    }

    public static byte[] getTempBan(long timestampTill, byte reason) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(17);

        mplew.writeShort(SendPacketOpcode.LOGIN_STATUS.getValue());
        mplew.write(2);
        mplew.write(0);
        mplew.writeInt(0);
        mplew.write(reason);
        mplew.writeLong(timestampTill);

        return mplew.getPacket();
    }
    
    
        public static byte[] sendPicResponse(int response) {
        MaplePacketLittleEndianWriter packet = new MaplePacketLittleEndianWriter();
        packet.writeShort(SendPacketOpcode.PIC_RESPONSE.getValue());
        packet.write(response);
        return packet.getPacket();
    }

    public static final byte[] getSecondAuthSuccess(MapleClient client) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.LOGIN_SECOND.getValue());
        mplew.write(0);
        mplew.writeInt(client.getAccID());
        mplew.writeZeroBytes(5);
        mplew.writeMapleAsciiString(client.getAccountName());
        mplew.writeLong(2L);
        mplew.writeZeroBytes(3);
        mplew.writeInt(Randomizer.nextInt());
        mplew.writeInt(Randomizer.nextInt());
        mplew.writeInt(28);
        mplew.writeInt(Randomizer.nextInt());
        mplew.writeInt(Randomizer.nextInt());
        mplew.write(1);

        return mplew.getPacket();
    }

    public static final byte[] deleteCharResponse(int cid, int state) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.DELETE_CHAR_RESPONSE.getValue());
        mplew.writeInt(cid);
        mplew.write(state);

        return mplew.getPacket();
    }

    public static byte[] secondPwError(byte mode) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(3);

        mplew.writeShort(SendPacketOpcode.SECONDPW_ERROR.getValue());
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] sendAuthResponse(int response) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.AUTH_RESPONSE.getValue());
        mplew.writeInt(response);

        return mplew.getPacket();
    }

    public static byte[] enableRecommended(int world) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.ENABLE_RECOMMENDED.getValue());
        mplew.writeInt(world);
        return mplew.getPacket();
    }

    public static byte[] sendRecommended(int world, String message) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.SEND_RECOMMENDED.getValue());
        mplew.write(message != null ? 1 : 0);
        if (message != null) {
            mplew.writeInt(world);
            mplew.writeMapleAsciiString(message);
        }
        return mplew.getPacket();
    }

    public static byte[] ResetScreen() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.RESET_SCREEN.getValue());

        mplew.write(HexTool.getByteArrayFromHexString("02 08 00 32 30 31 32 30 38 30 38 00 08 00 32 30 31 32 30 38 31 35 00"));

        return mplew.getPacket();
    }

    public static byte[] getServerList(int serverId, Map<Integer, Integer> channelLoad) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SERVERLIST.getValue());
        mplew.write(serverId);
        String worldName = LoginServer.getTrueServerName();
        mplew.writeMapleAsciiString(worldName);
        mplew.write(WorldOption.getById(serverId).getFlag());
        mplew.writeMapleAsciiString(LoginServer.getEventMessage());
        mplew.writeShort(100);
        mplew.writeShort(100);
        mplew.write(0);
        int lastChannel = 1;
        Set<Integer> channels = channelLoad.keySet();
        for (int i = 30; i > 0; i--) {
            if (channels.contains(Integer.valueOf(i))) {
                lastChannel = i;
                break;
            }
        }
        mplew.write(lastChannel);

        for (int i = 1; i <= lastChannel; i++) {
            int load;

            if (channels.contains(i)) {
                load = channelLoad.get(i);
            } else {
                load = 1200;
            }
            mplew.writeMapleAsciiString(worldName + "-" + i);
            mplew.writeInt(load);
            mplew.write(serverId);
            mplew.writeShort(i - 1);
        }
        mplew.writeShort(0);
        mplew.writeInt(0);
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] getEndOfServerList() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SERVERLIST.getValue());
        mplew.write(0xFF);
        mplew.write(0); //boolean disable cash shop and trade msg

        return mplew.getPacket();
    }

    public static final byte[] getLoginWelcome() {
        List flags = new LinkedList();

        return CField.spawnFlags(flags);
    }

    public static byte[] getServerStatus(int status) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SERVERSTATUS.getValue());
        mplew.writeShort(status);

        return mplew.getPacket();
    }

    public static byte[] changeBackground(List<Triple<String, Integer, Boolean>> backgrounds) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.CHANGE_BACKGROUND.getValue());
        mplew.write(backgrounds.size()); //number of bgs
        for (Triple<String, Integer, Boolean> background : backgrounds) {
            mplew.writeMapleAsciiString(background.getLeft());
            mplew.write(background.getRight() ? Randomizer.nextInt(2) : background.getMid());
        }
        /* Map.wz/Obj/login.img/WorldSelect/background/background number
         Backgrounds ids sometime have more than one background anumation */
        /* Background are like layers, backgrounds in the packets are
         removed, so the background which was hiden by the last one
         is shown.
         */

        return mplew.getPacket();
    }

    public static byte[] getChannelSelected() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.CHANNEL_SELECTED.getValue());
        mplew.writeZeroBytes(3);

        return mplew.getPacket();
    }

    public static byte[] getCharList(String secondpw, List<MapleCharacter> chars, int charslots) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.CHARLIST.getValue());
        mplew.write(0);
        mplew.write(chars.size());
        for (MapleCharacter chr : chars) {
            addCharEntry(mplew, chr, (!chr.isGM()) && (chr.getLevel() >= 30), false);
        }
        if (constants.ServerConfig.DISABLE_PIC) {
            mplew.write(2);
        } else {
            mplew.write((secondpw != null) && (secondpw.length() <= 0) ? 2 : (secondpw != null) && (secondpw.length() > 0) ? 1 : 0);
        }
        mplew.write(0);
        mplew.writeInt(charslots);
        mplew.writeInt(0);
        mplew.writeInt(-1);
        mplew.writeReversedLong(PacketHelper.getTime(System.currentTimeMillis()));
        mplew.writeZeroBytes(5);
        return mplew.getPacket();
    }

    public static byte[] addNewCharEntry(MapleCharacter chr, boolean worked) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.ADD_NEW_CHAR_ENTRY.getValue());
        mplew.write(worked ? 0 : 1);
        addCharEntry(mplew, chr, false, false);

        return mplew.getPacket();
    }

    public static byte[] charNameResponse(String charname, boolean nameUsed) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.CHAR_NAME_RESPONSE.getValue());
        mplew.writeMapleAsciiString(charname);
        mplew.write(nameUsed ? 1 : 0);

        return mplew.getPacket();
    }

    private static void addCharEntry(MaplePacketLittleEndianWriter mplew, MapleCharacter chr, boolean ranking, boolean viewAll) {
        PacketHelper.addCharStats(mplew, chr);
        PacketHelper.addCharLook(mplew, chr, true, false);
        if (GameConstants.isZero(chr.getJob())) {
            PacketHelper.addCharLook(mplew, chr, true, true);
        }
        if (!viewAll) {
            mplew.write(0);
        }
        mplew.write(ranking ? 1 : 0);
        if (ranking) {
            mplew.writeInt(chr.getRank());
            mplew.writeInt(chr.getRankMove());
            mplew.writeInt(chr.getJobRank());
            mplew.writeInt(chr.getJobRankMove());
        }
    }

    public static byte[] enableSpecialCreation(int accid, boolean enable) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SPECIAL_CREATION.getValue());
        mplew.writeInt(accid);
        mplew.write(enable ? 0 : 1);
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] partTimeJob(int cid, short type, long time) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.PART_TIME.getValue());
        mplew.writeInt(cid);
        mplew.write(0);
        mplew.write(type);
        //1) 0A D2 CD 01 70 59 9F EA
        //2) 0B D2 CD 01 B0 6B 9C 18
        mplew.writeReversedLong(PacketHelper.getTime(time));
        mplew.writeInt(0);
        mplew.write(0);

        return mplew.getPacket();
    }

    public static byte[] updatePartTimeJob(PartTimeJob partTime) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter(21);
        mplew.writeShort(SendPacketOpcode.PART_TIME.getValue());
        mplew.writeInt(partTime.getCharacterId());
        mplew.write(0);
        PacketHelper.addPartTimeJob(mplew, partTime);
        return mplew.getPacket();
    }

    public static byte[] sendLink() {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();

        mplew.writeShort(SendPacketOpcode.SEND_LINK.getValue());
        mplew.write(1);
        mplew.write(CField.Nexon_IP);
        mplew.writeShort(0x2057);
        mplew.write(0);

        return mplew.getPacket();
    }
}
