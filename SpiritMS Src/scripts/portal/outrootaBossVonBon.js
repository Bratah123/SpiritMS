function enter(pi) {
    var em = pi.getEventManager("QueenBattle");
	var em = pi.getEventManager("PierreBattle");

    if (em != null) {
	var map = pi.getMapId();
    
	if (map == 105200110) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
			//	pi.getPlayer().gainExp(30000, true, true, true);
			//	pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel());
			//	pi.getPlayer().dropMessage(5, 100 * pi.getPlayer().getHonourLevel()+" Honor Exp gained.");
				pi.warp(105200000,0);
			//	pi.spawnMonster(8810025, 1, new java.awt.Point(-303, 230));
			    pi.playerMessage("You sir are not yet ready to take on the Earth Dragon Vellum...");
			//	pi.worldMessage(6, "[Azwan] " + pi.getPlayer().getName() + " finished the Azwan Liberation of Hilla's Gang in Channel "+ pi.getClient().getChannel() +".");
			 } else { 
		//	 pi.gainExp(45000000);
		pi.playerMessage(6, "Congratz on defeating [Normal] Von Bon.");
		pi.warp(105200000,0);
	    }
	} else if (map == 105200510) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
			//	pi.getPlayer().gainExp(30000, true, true, true);
			//	pi.getPlayer().addHonourExp(100 * pi.getPlayer().getHonourLevel());
			//	pi.getPlayer().dropMessage(5, 100 * pi.getPlayer().getHonourLevel()+" Honor Exp gained.");
				pi.warp(105200000,0);
				pi.playerMessage("It's okay just remember that it took the whole GM Staff to subdue these fucks");
			//	pi.worldMessage(6, "[Azwan] " + pi.getPlayer().getName() + " finished the Azwan Liberation of Hilla's Gang in Channel "+ pi.getClient().getChannel() +".");
			 }
	        else {
	//    pi.gainExp(45000000);
		pi.playerMessage(6, "Congratz on defeating [Normal] Von Bon.");
		pi.warp(105200000,0);
	    }
    }
}
}