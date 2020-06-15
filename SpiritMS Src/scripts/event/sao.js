var i = 5;
var mapId = 100040000;
var returnMap;
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 5);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function setup(chr) {
    em.setProperty("entryPossible", "false");
    returnMap = em.getChannelServer().getMapFactory().getMap(100040000);
 //   var createInstances = new Array("sao",);
//    var x;
//    for (x = 0; x < createInstances.length; x++) {
//	var eim = em.newInstance(createInstances[x]);
//	var map = eim.createInstanceMap(mapId);
	//map.toggleDrops();
  //  }
  //  for (x = 0; x < 5; x++) {
	//em.schedule("announce", 5 * 60000 * 60000);
  //  }
  //  em.schedule("mesoDistribution", 5 * 60000 + x * 60000);

    var eim = em.newInstance("SAO");
	var map = eim.setInstanceMap(100040000);

    eim.setInstanceMap(100040000).resetFully();
	//eim.getWarpMap(100000000);
   // var map = eim.getMapFactory().getMap(100000000);
  //  chr.changeMap(100000000, map.getPortal(0));
	var mob0 = em.getMonster(8220025);
		var modified = em.newMonsterStats();
	modified.setOMp(mob0.getMobMaxMp());
	modified.setOHp(mob0.getMobMaxHp() * 2.0);
//	modified.set0Exp(mob0.getMobExp() * 1.0);
	mob0.setOverrideStats(modified);
//	map.spawnMonsterOnGroundBelow(mob0, new java.awt.Point(1287, 305));

    eim.startEventTimer(1.5* 180000); //now changed to 1 hour 15 mins
}


//function announce() {
//    em.setProperty("entryPossible", "true");
 //   if (i == 0) i = 5;
 //   em.broadcastServerMsg(6, "SAO 이벤트에서 시작됩니다 " + i + " 분", false);
 //   i--;
//}


function start() {
    setup();
	scheduleNew();
	//em.broadcastServerMsg(6, "Human Hunter July has spawned in [Golem's Temple Entrance] and is preparing to hunt you down!", false);
	em.broadcastServerMsg(6, "Hue\r\nHue", false);
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
	var eim = iter.next();
	if (eim.getPlayerCount() > 0) {
	    startInstance(eim);
	}
    }
}

function randX() {
    return 1700 + Math.floor(Math.random() * 1800);
}



function allMonstersDead(eim) {
//eim.finishPQ();
eim.broadcastPlayerMsg(6, "LELELLEELLE");
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(mapId);
    player.changeMap(map, map.getPortal(0));
}

function playerDead(eim, player) {
    player.setHp(1);
    player.changeMap(returnMap, returnMap.getPortal(0));
    eim.unregisterPlayer(player);
   // player.getClient().getSession().write(CWvsContext.serverNotice(1, "You lost with " + eim.getKillCount(player) + " points."));
}

function playerDisconnected(eim, player) {
    eim.unregisterPlayer(player);
    player.getMap().removePlayer(player);
    player.setMap(returnMap);
}


function scheduledTimeout() {
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
	var eim = iter.next();
	if (eim.getPlayerCount() > 0) {
	    var pIter = eim.getPlayers().iterator();
	    while (pIter.hasNext()) {
		playerDead(eim, pIter.next());
	    }
	}
	eim.dispose();
    }
}


function leftParty(eim, player) {
	
}

function disbandParty(eim, player) {

}

// can't happen
function playerRevive(eim, player) {

}