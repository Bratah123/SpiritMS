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
		cm.sendPlayerToNpc("Hey.. uh that other guy told me to talk to you?");
	} else if (status == 1) {
	    // cm.EnableUI(1);
		cm.sendNextNoESC("Ah.. So you're the new one listen very carefully someone somehow moved the Black Mage's seal.. He's currently residing in this forest.. It's very serious he could awaken at any moment and destroy us all we #r NEED #k to find him!");
	} else if (status == 2) {
		cm.sendPlayerToNpc("Woah Woah Woah buddy! I'm like new here and you want me to hunt down some big bad black guy? What kind of crap is this?!");
	} else if (status == 3) {
		cm.sendNextNoESC("Erm.. Yes essentially but uhm.. If he's not found we've got a lot more than lost TV's to worry about");
	} else if (status == 4) {
		cm.sendPlayerToNpc("Heh.. Fine I'll help you look for him...");
	} else if (status == 5) {
		cm.sendNextNoESC("GREAT! I'll send you into the forest to find him Goodluck!!");
    } else if (status == 6) {
			cm.warp(910142070,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
	   cm.dispose();
}
}