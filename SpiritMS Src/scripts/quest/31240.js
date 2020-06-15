var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendNext("Speak to me again if you change your mind.");
            qm.dispose();
        status--;
    }
	if (status == 0) {
	    qm.sendAcceptDecline("Do you know the land of #bTynerum#k? it is a name from ancient history... A land of Demons and Magic. If you are interested in learning more pay me a visit in Ellinia\r\n\r\n#r(You will move to Magic Library in Ellinia if you accept)");
    } else if (status == 1) {
	    qm.sendNext("I will await you at the Magic Library");
    } else if (status == 2) {
	    qm.warp(101000003,0);
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.dispose();
    }
}