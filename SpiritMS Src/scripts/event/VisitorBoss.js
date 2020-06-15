function init() {
    // 0 = Not started, 1 = started, 2 = first head defeated, 3 = second head defeated
	em.setProperty("leader", "true");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
	em.setProperty("leader", "true");
    var eim = em.newInstance("VisitorBoss");
    var map = em.setInstanceMap(502030073);
    map.resetFully();
    var mob0 = em.getMonster(9420067);
	var modified = em.newMonsterStats();
	modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() * 5.0);
  //  eim.setInstanceMap(502030073)
	//map.resetFully();
    eim.startEventTimer(1.5* 1800000); //now changed to 1 hour 15 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(502030073);
    player.changeMap(map, map.getPortal(0));
	//em.ReloadMap();
}

function playerRevive(eim, player) {
    player.addHP(1000);
    var map = eim.getMapFactory().getMap(502030073);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 502030073:
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
    eim.disposeIfPlayerBelow(100, 502030073);
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
    return 1;
}

function allMonstersDead(eim) {
eim.broadcastPlayerMsg(6, "The Visitor is Dead, enter the Portal below you, to leave.");
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}