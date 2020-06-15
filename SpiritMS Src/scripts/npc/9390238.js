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
        cm.sendSimple("#b#L100#Mirror Leafre Level 100 - 110#l\r\n#b#L101#Mirror Ariant Level 110 - 120#l\r\n#L102#Mirror Henesys Level 120 - 130#l\r\n#L103#Mirror Mu Lung Level 130 - 140#l\r\n#L104#Mirror Edelstein Level 140 - 150#l\r\n#L105#Mirror Magatia Level 150 - 160#l\r\n#L106#Mirror Ludibrium Level 160 - 170#l\r\n#L107#Mirror Time Temple Level 170 - 180#l");
    }else if (status == 1) {
        if (mode == 1) {
            switch (selection) {
                case 100:
                   cm.warp(321100000);
				   cm.sendNext("Use the portal on the right of the map to train!");
				   cm.dispose();
                    break;
		        case 101:
                     cm.warp(322000000);
					 cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
                    break;
		        case 102:
			         cm.warp(323000000);
					 cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
					 break;
			    case 103:
					 cm.warp(324000000);
					 cm.sendNext("Use the portal on the right of the map to train!");
					 cm.dispose();
					 break;
				case 104:
					 cm.warp(325000000);
					 cm.sendNext("Use the portal on the bottom right of the map to train!");
					 cm.dispose();
					 break;
				case 105:
					 cm.warp(326000000);
					 cm.sendNext("Use the portal in the center of the map to train!");
					 cm.dispose();
					 break;
				case 106:
					 cm.warp(327000000);
					 cm.sendNext("Use the portals on the left of the map to train!");
					 cm.dispose();
					 break;
				case 107:
					 cm.warp(328000000);
					 cm.sendNext("Use the portal on the left of the map to train!");
					 cm.dispose();
					 break;
            }
        }
}
}