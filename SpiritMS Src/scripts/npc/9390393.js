var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
	    cm.EnableUI(1);
		cm.sendPlayerToNpc("Hey did you see a big black guy go by here?");
	} else if (status == 1) {
	     cm.EnableUI(1);
		cm.sendNextNoESC("He should be just a bit further in the forest I've got this sector checked");
	} else if (status == 2) {
		cm.sendPlayerToNpc("Alright I'll keep going!");
	} else if (status == 3) {
		cm.sendNextNoESC("Good Luck!");
	} else if (status == 4) {
		cm.sendPlayerToNpc("Thanks");
	} else if (status == 5) {
		cm.sendNextNoESC(":)");
    } else if (status == 6) {
			cm.warp(910142080,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
	   cm.dispose();
}