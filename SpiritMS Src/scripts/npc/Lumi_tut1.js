var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
		//cm.sendDirectionStatus(3, 1);
		cm.sendPlayerToNpc("If you wanna know how this ends play MapleStory");
    } else if (status == 1) {
		cm.showLumiVid();
		cm.dispose();
    } 
}