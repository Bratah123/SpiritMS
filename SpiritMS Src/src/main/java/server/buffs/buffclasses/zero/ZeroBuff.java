/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.zero;

import client.MapleBuffStat;
import constants.GameConstants;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;

/**
 *
 * @author Itzik
 */
public class ZeroBuff extends AbstractBuffClass {

    public ZeroBuff() { //since only beginner job has buffs we put them in first job buffs
        buffs = new int[]{
            100001005, // Temple Recall
            100001263, // Divine Force
            100001264, // Divine Speed
            100001268, // Rhinne's Protection
            100001269,
            131072000, // Devine Force
            100001270,
            100001272};
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isZero(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        // If this initial check and the corresponding arrays are removed, 
        // there should not be any impact (i.e., it will keep its functionality). 
        if (!containsSkill(skill)) {
            return;
        }

        switch (skill) {
            case 100001005: //Focused Time
                eff.statups.put(MapleBuffStat.ATTACK, eff.info.get(MapleStatInfo.x));
                break;
            case 100001268: // Rhinne's Protection
                eff.statups.put(MapleBuffStat.MAPLE_WARRIOR, eff.info.get(MapleStatInfo.x));
                break;
            case 100001263: // Divine Force
                eff.statups.put(MapleBuffStat.DIVINE_FORCE_AURA, 1);// 0x1000, 11
                eff.statups.put(MapleBuffStat.STATUS_RESIST_TWO, eff.info.get(MapleStatInfo.indieTerR));// 0x10, 9
                eff.statups.put(MapleBuffStat.ELEMENT_RESIST, eff.info.get(MapleStatInfo.indieAsrR));// 0x20, 9
                eff.statups.put(MapleBuffStat.WDEF_BOOST2, eff.info.get(MapleStatInfo.indiePdd)); // 0x2000, 6
                eff.statups.put(MapleBuffStat.MDEF_BOOST2, eff.info.get(MapleStatInfo.indieMdd)); // 0x4000, 6
                eff.statups.put(MapleBuffStat.INDIE_PAD, eff.info.get(MapleStatInfo.indieMad)); //0x400, 5
                eff.statups.put(MapleBuffStat.INDIE_MAD, eff.info.get(MapleStatInfo.indiePad)); //0x800, 5
                break;
            case 100001264: // Divine Speed
                eff.statups.put(MapleBuffStat.DIVINE_SPEED_AURA, 1);
                eff.statups.put(MapleBuffStat.ATTACK_SPEED, 2);
                eff.statups.put(MapleBuffStat.ANGEL_ACC, eff.info.get(MapleStatInfo.indieAcc));
                eff.statups.put(MapleBuffStat.ANGEL_AVOID, eff.info.get(MapleStatInfo.indieEva));
                eff.statups.put(MapleBuffStat.ANGEL_JUMP, eff.info.get(MapleStatInfo.indieJump));
                eff.statups.put(MapleBuffStat.INDIE_SPEED, eff.info.get(MapleStatInfo.indieSpeed));
                break;
            default:
                //System.out.println("Unhandled Buff: " + skill);
                break;
        }
    }
}
