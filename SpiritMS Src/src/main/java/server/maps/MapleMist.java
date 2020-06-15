package server.maps;

import client.MapleCharacter;
import client.MapleClient;
import client.Skill;
import client.SkillFactory;
import java.awt.Point;
import java.awt.Rectangle;
import java.util.concurrent.ScheduledFuture;
import server.MapleStatEffect;
import server.life.MapleMonster;
import server.life.MobSkill;
import tools.packet.CField;

public class MapleMist extends MapleMapObject {

    private Rectangle mistPosition;
    private MapleCharacter owner = null;
    private MapleMonster mob = null;
    private MapleStatEffect source;
    private MobSkill skill;
    private boolean isMobMist, isShelter, isRecovery, isTimeCapsule;
    private int skillDelay, skilllevel, isPoisonMist, ownerId;
    private ScheduledFuture<?> schedule = null, poisonSchedule = null;
        private int clockType; //반반
         private boolean isUsed;

    public MapleMist(Rectangle mistPosition, MapleMonster mob, MobSkill skill) {
        this.mistPosition = mistPosition;
        this.ownerId = mob.getId();
        this.skill = skill;
        this.skilllevel = skill.getSkillLevel();
        
        isUsed = false;
        clockType = -1;
        isMobMist = true;
        isPoisonMist = 0;
        isShelter = true;
        isRecovery = true;
        skillDelay = 0;
        clockType = -1;
        isTimeCapsule = false;
    }

    public MapleMist(Rectangle mistPosition, MapleCharacter owner, MapleStatEffect source) {
        this.mistPosition = mistPosition;
        this.ownerId = owner.getId();
        this.source = source;
        this.skillDelay = 8;
        this.isMobMist = false;
        this.isShelter = false;
        this.isRecovery = false;
        this.skilllevel = owner.getTotalSkillLevel(SkillFactory.getSkill(source.getSourceId()));
        
        switch (source.getSourceId()) {
            case 4221006: // Smokescreen
            case 4121015: // Frailty Curse
            case 32121006: // Party Shield
            case 42111004: // Blossom Barrier
            case 42121005: // Bellflower Barrier
                this.isPoisonMist = 0;
                break;
            case 1076:
            case 11076:
            case 2111003: // Poison Mist
            case 12111005: // Flame Gear
            case 14111006: // Poison Bomb
                this.isPoisonMist = 1;
                break;
            case 22161003: // Recovery Aura
                this.isPoisonMist = 4;
            case 36121007: //타임 캡슐
                skillDelay = 15;
                isTimeCapsule = true;
                break;
        }

//        switch (source.getSourceId()) {
//            case 4121015: // Frailty Curse
//            case 4221006: // Smoke Screen
//            case 32121006: // Party Shield
//                isPoisonMist = 2;
//                break;
//            case 14111006:
//            case 1076:
//            case 11076:
//            case 2111003: // FP mist
//            case 12111005: // Flame wizard, [Flame Gear]
//                isPoisonMist = 1;
//                break;
//            case 22161003: //Recovery Aura
//                isPoisonMist = 4;
//                isRecovery = true;
//                break;
//        }
    }

    //fake
    public MapleMist(Rectangle mistPosition, MapleCharacter owner) {
        this.mistPosition = mistPosition;
        this.ownerId = owner.getId();
        this.source = new MapleStatEffect();
        this.source.setSourceId(2111003);
        this.source.setSourceId(12111005);
        this.skilllevel = 30;
        isMobMist = false;
        isPoisonMist = 0;
        isShelter = false;
        isRecovery = false;
        skillDelay = 8;
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.MIST;
    }

    @Override
    public Point getPosition() {
        return mistPosition.getLocation();
    }
    
        public boolean isTimeCapsule() {
        return isTimeCapsule;
    }

    public Skill getSourceSkill() {
        return SkillFactory.getSkill(source.getSourceId());
    }

    public void setSchedule(ScheduledFuture<?> s) {
        this.schedule = s;
    }
    
        public boolean isUsed() {
        return isUsed;
    }

    public void setUsed(boolean used) {
        this.isUsed = used;
    }
    
        public boolean isClock() {
        return clockType != -1;
    }
        
            public int getClockType() {
        return clockType;
    }

    public void setClockType(int clockType) {
        this.clockType = clockType;
    }

    public ScheduledFuture<?> getSchedule() {
        return schedule;
    }

    public void setPoisonSchedule(ScheduledFuture<?> s) {
        this.poisonSchedule = s;
    }

    public ScheduledFuture<?> getPoisonSchedule() {
        return poisonSchedule;
    }

    public boolean isMobMist() {
        return isMobMist;
    }

    public int isPoisonMist() {
        return isPoisonMist;
    }
    
    public boolean isShelter() {
        return isShelter;
    }
    
    public boolean isRecovery() {
        return isRecovery;
    }

    public int getSkillDelay() {
        return skillDelay;
    }

    public int getSkillLevel() {
        return skilllevel;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public MobSkill getMobSkill() {
        return this.skill;
    }

    public Rectangle getBox() {
        return mistPosition;
    }

    public MapleStatEffect getSource() {
        return source;
    }
    
        public MapleMonster getMobOwner() {
        return mob;
    }

    public MapleCharacter getOwner() {
        return owner;
    }

    @Override
    public void setPosition(Point position) {
    }

    public byte[] fakeSpawnData(int level) {
        return CField.spawnMist(this);
    }

    @Override
    public void sendSpawnData(final MapleClient c) {
        c.getSession().write(getClockType() > 0 ? CField.spawnClockMist(this) : CField.spawnMist(this));
    }

    @Override
    public void sendDestroyData(final MapleClient c) {
        c.getSession().write(CField.removeMist(getObjectId(), false));
    }

    public boolean makeChanceResult() {
        return source.makeChanceResult();
    }
}
