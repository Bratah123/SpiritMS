/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package server.buffs.buffclasses.cygnus;
/*
/**
 *
 * @author Mikey
 */
/*
import client.MapleBuffStat;
import client.MonsterStatus;
import constants.GameConstants;
import constants.skills.ThunderBreaker;
import server.MapleStatEffect;
import server.MapleStatInfo;
import server.buffs.AbstractBuffClass;


public class ThunderBreakerBuff extends AbstractBuffClass {

    public ThunderBreakerBuff() {
        buffs = new int[]{
            ThunderBreaker.LIGHTNING_ELEMENT,
            
        };
    }
    
    @Override
    public boolean containsJob(int job) {
        return GameConstants.isThunderBreaker(job);
    }

    @Override
    public void handleBuff(MapleStatEffect eff, int skill) {
        switch (skill) {
            case ThunderBreaker.LIGHTNING_ELEMENT:
                eff.statups.put(MapleBuffStat.LIGHTNING_ELEMENT, eff.info.get(MapleStatInfo.v));
                break;
            default:
                System.out.println("Unhandled Thunder Breaker Buff: " + skill);
                break;
        }
    }
}*/