function enter(pi) {
    var em = pi.getEventManager("QueenBattle");
	var em = pi.getEventManager("PierreBattle");
	var em = pi.getEventManager("QueenEasy");
	var em = pi.getEventManager("PierreEasy");
	

    if (em != null) {
	var map = pi.getMapId();
    
	if (map == 105200310) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
				pi.warp(105200000,0);
			    pi.playerMessage("You have Run from the fight you pussy...");
			 } else { 
		//	 pi.gainExp(12500000);
		     pi.playerMessage("Congrats on defeating the Queen!");
		     pi.warp(105200000,0);
	         }
	} else if (map == 105200210) {
			if (pi.getMap().getAllMonstersThreadsafe().size() == 1) {
				pi.warp(105200000,0);
				pi.playerMessage("You run from the fight");
			 } else {
	  //       pi.gainExp(12500000);
	      	pi.playerMessage("Congrats on defeating Pierre the Phyco Path!");
	    	pi.warp(105200000,0);
	        }
    }
}
}