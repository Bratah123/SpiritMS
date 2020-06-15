function start(mode, type, selection) {
qm.forceStartQuest();
qm.dispose();
}

var status = -1;
function end(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 1) {
	    qm.sendNext("Fine! Stay a dum skilless fool!");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
		qm.sendNext("Oh, isn't that... Hey, did you remember how to make the Red Jade? You may be a dummy who has amnesia, but this is why I can't leave you. Now hurry and give me the gem!");
	} else if (status == 1) {
		qm.sendYesNo("Okay, now that I have the power of Red Jade. I'll restore more of your abilities. Your level has gotten much higer since the last time we met. so I'm sure I can work my magic a bit more this time!");
	} else if (status == 2) {
		qm.sendNext("Please get back all of your abilities soon. I want to explore with you like we did in the good old days.");
		qm.changeJob(2111);
		qm.gainSp(qm.getPlayer().getLevel() * 3 - 60 - 60 - 60);
		qm.forceCompleteQuest();
		qm.dispose();
	} 
	//qm.dispose();
}