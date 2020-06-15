var status = -1;

function start() {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.spawnMob(8880000, 1442, -1347);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}
/*
function action(mode, type, selection) {
    if (mode == 1 && cm.getMap().getAllMonstersThreadsafe().size() == 0) {
	cm.spawnMob(8880000, 1442, -1347);
	if (!cm.getPlayer().isGM()) {
		cm.getMap().startSpeedRun();
	}
    }
    cm.dispose();
}*/