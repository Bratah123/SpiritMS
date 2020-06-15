function init() {
    // 0 = Not started, 1 = started, 2 = first head defeated, 3 = second head defeated
    em.setProperty("state", "0");
	em.setProperty("leader", "true");
}

function setup(eim, leaderid, player) {
    em.setProperty("state", "1");
    em.setProperty("preheadCheck", "0");
	em.setProperty("leader", "true");

    var eim = em.newInstance("HorntailBattle");

    eim.setInstanceMap(957010000).resetFully();
	eim.setInstanceMap(957011000).resetFully();
	eim.setInstanceMap(957012000).resetFully();
	eim.setInstanceMap(957013000).resetFully();
	eim.setInstanceMap(957014000).resetFully();
	eim.setInstanceMap(957015000).resetFully();
	eim.setInstanceMap(957016000).resetFully();
	eim.setInstanceMap(957017000).resetFully();
	eim.setInstanceMap(957018000).resetFully();
	

    eim.startEventTimer(60000); //now changed to 1 hour 15 mins
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(957010000);	
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    switch (mapid) {
	case 957010000:
	case 957011000:
	case 957012000:
	case 957013000:
	case 957014000:
	case 957015000:
	case 957016000:
	case 957017000:
	case 957018000:
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
    eim.disposeIfPlayerBelow(100, 957000000);
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
}

function playerRevive(eim, player) {
    return false;
}

function clearPQ(eim) {}
function leftParty (eim, player) {}
function disbandParty (eim) {}
function playerDead(eim, player) {}
function cancelSchedule() {}