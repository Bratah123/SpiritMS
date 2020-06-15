/*
Zakum Altar - Summons Zakum. 9999999
*/

function act() {
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("Pink Zakum is summoned by the force of eye of fire.");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
