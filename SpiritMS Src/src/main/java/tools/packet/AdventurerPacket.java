/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tools.packet;

import handling.SendPacketOpcode;
import java.awt.Point;
import java.util.List;
import server.Randomizer;
import server.life.MapleMonster;
import tools.data.MaplePacketLittleEndianWriter;

/**
 *
 * @author Mally
 */
public class AdventurerPacket {
    
     public static class AssassinPacket {
             public static byte[] giveMarkOfTheif(int cid, int oid, int skillid, List<MapleMonster> monsters, Point p1, Point p2, int starid) {
        MaplePacketLittleEndianWriter mplew = new MaplePacketLittleEndianWriter();
        mplew.writeShort(SendPacketOpcode.GAIN_FORCE.getValue());
        mplew.write(0);
        mplew.writeInt(cid);
        mplew.writeInt(oid);
        mplew.writeInt(11); //type
        mplew.write(1);
        mplew.writeInt(monsters.size());
        for (MapleMonster monster : monsters) {
            mplew.writeInt(monster.getObjectId());
        }
        mplew.writeInt(skillid); //skillid
        for (int i = 0; i < monsters.size(); i++) {
            mplew.write(1);
            mplew.writeInt(Randomizer.rand(0x2A, 0x2D));
            mplew.writeInt(2); 
            mplew.writeInt(Randomizer.rand(0x2A, 0x2D));
            mplew.writeInt(Randomizer.rand(0x03, 0x04));
            mplew.writeInt(Randomizer.rand(0x43, 0xF5));
            mplew.writeInt(200);
            mplew.writeInt(0);
            mplew.writeInt(0);
            mplew.writeInt(Randomizer.nextInt());
            mplew.writeInt(0);
        }
        mplew.write(0);
        mplew.writeInt(p1.x);
        mplew.writeInt(p1.y);
        mplew.writeInt(p2.x);
        mplew.writeInt(p2.y);
        mplew.writeInt(starid);
        return mplew.getPacket();
    }
     }
}
