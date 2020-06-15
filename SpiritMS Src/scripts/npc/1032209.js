var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
	    //cm.EnableUI(1);
		cm.sendPlayerToNpc("So uh.. Where am I?");
	} else if (status == 1) {
		cm.sendNextNoESC("You've entered the world of OurStory.");
	} else if (status == 2) {
		cm.sendPlayerToNpc("What's an OurStory?... is it some kind of fruit ._.?");
	} else if (status == 3) {
		cm.sendNextNoESC("Uhm no. It's not a type of fruit it's an online video game...");
	} else if (status == 4) {
		cm.sendPlayerToNpc("WHAT?! I'M IN A VIDEO GAME?!.");
	} else if (status == 5) {
		cm.sendNextNoESC("o.o Holy shit like calm the hell down it's not like you're gonna die or anything you'll be just fine as long as you follow some simple guidelines...");
	} else if (status == 6) {
		//cm.warp(180000001,0);
		cm.sendPlayerToNpc("Let me guess.. I have to be some kind of hero and #r SAAAAVVVEEEE TTTHHHHEEE WOOOORRRLLLDDDD");
	} else if (status == 7) {
		cm.sendNextNoESC("haha.. Yeah.. \r\n\r\n\r\n\r\n #b Just then your hear a big bang");
	} else if (status == 8) {
		cm.sendPlayerToNpc("...! What was that?!");
	} else if (status == 9) {
	    cm.EnableUI(1);
		cm.sendNextNoESC("Hm.. I think it's time for me to send you to another place, please meet up with a friend of mine he can help you more");
	} else if (status == 10) {
			cm.warp(910142060,0);
	//		cm.spawnMobOnPoint(1210104, 10, 55, 85);
	   cm.EnableUI(0);
		cm.dispose();
	}
}