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
	cm.sendNextNoESC("You're my bitch");
	cm.getPlayer().setHp(0);
 	cm.EnableUI(0);
  //  cm.showWZEffect("Effect/SAO.img/effect/cannonshooter/face02");	
	cm.dispose();
/*	    cm.EnableUI(1);
		cm.sendPlayerToNpc("Woah... He's huge");
	} else if (status == 1) {
	    // cm.EnableUI(1);
		cm.sendNextNoESC("#rC...........");
	} else if (status == 2) {
		cm.sendPlayerToNpc("I....Is he t-trying to speak?");
	} else if (status == 3) {
		cm.sendNextNoESC("#F........R......E....E......M......E");
	} else if (status == 4) {
		cm.sendPlayerToNpc("Uhm I'm gonna have to say no.");
	} else if (status == 5) {
		cm.sendNextNoESC("#rI.....Wi....ll.........Des....troy......YOU");
    } else if (status == 6) {
	    cm.EnableUI(1);
		cm.sendPlayerToNpc("Oh boohooo I'm soo scared");
		} else if (status == 7) {
	    cm.EnableUI(1);
		cm.sendNextNoESC("#r You should be!");
	
    } else if (status == 6) {
			cm.warp(910142070,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
	   cm.dispose(); */
}
}