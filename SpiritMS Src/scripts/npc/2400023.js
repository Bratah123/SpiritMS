function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
    }

    if (mode == 1) 
        status++;

    else 
        status--;
    if (status == 0) { 
    var marr = cm.getQuestRecord(160150);
    var data = marr.getCustomData();
	var time = parseInt(data);
	//      cm.sendSimple("Vellum Will be available in OurStory v4.0!");
	//	  cm.dispose();
        cm.sendSimple("#b#L100#Map 1 Level 100 - 110 (Leafre)#l\r\n#b#L101#Map 2 Level 100 - 110 (Leafre)#l\r\n#L102#Map 3 Level 100 - 110 (Leafre)#l\r\n#L103#Map 4 Level 110 - 120 (Ariant)#l\r\n#L104#Map 5 Level 120 - 130 (Henesys)#l\r\n#L105#Map 6 Level 130 - 140 (Mu Lung)#l\r\n#L106#Map 7 Level 140 - 150 (Edelstein)#l\r\n#L107#Map 8 Level 150 - 160 (Magatia)#l\r\n#L108#Map 9 Level 160 - 170 (Ludibrium)#l\r\n#L109#Map 10 Level 170 - 180 (Temple of Time)#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                   cm.warp(321110000);
				 //  cm.sendNext("Use the portal on the right of the map to train!");
				   cm.dispose();
                    break;
		        case 101:
                   cm.warp(321111000);
					// cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
                    break;
		        case 102: // Map 3
			       cm.warp(321112000);
					// cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
					 break;
			    case 103: //Map 4
					 cm.warp(322044000);
					// cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
					 break;
				case 104: //Henesys Map 5
					 cm.warp(323022000);
				//	 cm.sendNext("Use the portal on the bottom right of the map to train!");
					 cm.dispose();
					 break;
				case 105: //Map 6 Mu Lung
					 cm.warp(324030000);
				//	 cm.sendNext("Use the portal in the center of the map to train!");
					 cm.dispose();
					 break;
				case 106: //Map 7 Edel
					 cm.warp(325024000);
				//	 cm.sendNext("Use the portals on the right or left of the map to train!");
					 cm.dispose();
					 break;
				case 107: // Map 8 Magatia
					 cm.warp(326041000);
					// cm.sendNext("Use the portal on the left of the map to train!");
					 cm.dispose();
					 break;
			    		case 108: // Map 9 Ludi
					 cm.warp(327020000);
					// cm.sendNext("Use the portal on the left of the map to train!");
					 cm.dispose();
					 break;
					 		case 109: // Map 10 ToT
					 cm.warp(328030000);
					// cm.sendNext("Use the portal on the left of the map to train!");
					 cm.dispose();
					 break;
            }
        }
}
	if (cm.getPlayer().getLevel() >= 180) {
	cm.warp(100000000);
	cm.dispose();
}
}