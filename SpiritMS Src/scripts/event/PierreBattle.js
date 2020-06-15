function init() {
    // 0 = Not started, 1 = started, 2 = first head defeated, 3 = second head defeated
	em.setProperty("leader", "true");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
	em.setProperty("leader", "true");

    var eim = em.newInstance("PierreBattle");
		var map = eim.setInstanceMap(105200610);
		map.resetFully();

   // eim.setInstanceMap(105200710).resetFully();
	 //   eim.setInstanceMap(401060200).resetFully();
	var mob0 = em.getMonster(8900001);
	var mob1 = em.getMonster(8900002);
	var modified = em.newMonsterStats();
	modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() / 2.0);
	modified.setOExp(mob0.getMobExp() * 1);
	mob0.setOverrideStats(modified);
	modified.setOMp(mob1.getMobMaxMp());
	modified.setOHp(mob1.getMobMaxHp() / 2.0);
	modified.setOExp(mob1.getMobExp() * 1);
	mob0.setOverrideStats(modified);
	mob1.setOverrideStats(modified);
	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(877, 551));
	map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point(1202, 551));
    eim.startEventTimer(2* 1800000); //now changed to 1 hour 15 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(105200610);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    player.addHP(1000);
    var map = eim.getMapFactory().getMap(105200610);
    player.changeMap(map, map.getPortal(0));
    return false;
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 105200610:
	    return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function playerDisconnected(eim, player) {
    return 0;
}


function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 105200610);
    em.setProperty("state", "0");
		em.setProperty("leader", "true");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
	em.setProperty("state", "0");
		em.setProperty("leader", "true");
    }
}

function monsterValue(eim, mobId) {
    return 2;
}

function allMonstersDead(eim) {
eim.broadcastPlayerMsg(6, "That Fucking clown got what was comin' to him!");
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}