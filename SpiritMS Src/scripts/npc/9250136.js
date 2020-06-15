function start() {
	cm.sendYesNo("Do you want to go to the Alien PQ?");
}

function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(502029000, 0);
    }
    cm.dispose();
}