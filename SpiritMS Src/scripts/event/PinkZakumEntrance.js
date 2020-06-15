var i = 3;
function init() {
    em.setProperty("entryPossible", "false");
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 30);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
	nextTime += 1000 * 60 * 30 * 1; // 4 hours
    }
    setupTask = em.scheduleAtTimestamp("setup", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function setup() {
    em.setProperty("entryPossible", "true");
    var instanceName = "PinkZakumEntrance";

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    beginQuest(eim);
	
	    if (eim != null) {
        eim.startEventTimer(45000); // After 60 seconds -> scheduledTimeout()
	//	em.broadcastServerMsg(6, "k", false);
    }
    return eim;
}


function beginQuest(eim) { // Custom function
    if (eim != null) {
        eim.startEventTimer(45000); // After 60 seconds -> scheduledTimeout()
		em.broadcastServerMsg(6, "[Pink Zakum] Entry has opened use @PinkZak to join", false);		
    }
}

/*function playerEntry(eim, player) {
  //  var map = eim.getMapInstance(689010000);
	eim.registerPlayer(player);
	eim.startEventTimer(45000);
  //  player.changeMap(map, map.getPortal(0));
}*/

function changedMap(eim, player, mapid) {
    eim.unregisterPlayer(player);
    eim.disposeIfPlayerBelow(0, 0);
}

function scheduledTimeout(eim, player) {
    eim.disposeIfPlayerBelow(100, 689013000);
//	eim.unregisterPlayer(player);
    em.broadcastServerMsg(6, "[Pink Zakum] Entry has closed", false);
	em.setProperty("entryPossible", "false");
	scheduleNew();
    eim.dispose();
// When event timeout..

// restartEventTimer(long time)
// stopEventTimer()
// startEventTimer(long time)
// isTimerStarted()
}

function allMonstersDead(eim) {
// When invoking unregisterMonster(MapleMonster mob) OR killed
// Happens only when size = 0
}

function playerDead(eim, player) {
// Happens when player dies
}

function playerRevive(eim, player) {
    return true;
// Happens when player's revived.
// @Param : returns true/false
}

function playerDisconnected(eim, player) {
    return 0;
// return 0 - Deregister player normally + Dispose instance if there are zero player left
// return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
// return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    return 0;
// Invoked when a monster that's registered has been killed
// return x amount for this player - "Saved Points"
}

function leftParty(eim, player) {
    // Happens when a player left the party
}

function disbandParty(eim, player) {
    // Boot whole party and end
}

function clearPQ(eim) {
// Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
// Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
// Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
// Happens when player change map - Unused for now.
}

function cancelSchedule() {
}