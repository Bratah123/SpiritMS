var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		cm.sendPlayerToNpc("Who is she?");
	} else if (status == 1) {
		cm.sendNextNoESC("...");
	} else if (status == 2) {
		cm.sendPlayerToNpc("I feel as if.. I know her?");
	} else if (status == 3) {
		cm.sendNextNoESC("...");
	} else if (status == 4) {
		cm.sendPlayerToNpc("Gah Will is on his way! Wake up!");
	} else if (status == 5) {
		cm.sendNextNoESC("...");
	} else if (status == 6) {
		cm.sendPlayerToNpc("Please?");
	} else if (status == 7) {
	    cm.showZeroScene();
		cm.warp(320000000);
				cm.changeJob(10100);
		cm.changeJob(10110);
		cm.changeJob(10111);
		cm.changeJob(10112);
		cm.sendNextNoESC("#bYou can now use the @MirrorNPC command to talk to Cello or you can talk to him anytime in Zero's Temple");

		//cm.warp(910150001,0);
		cm.dispose();
	}
}