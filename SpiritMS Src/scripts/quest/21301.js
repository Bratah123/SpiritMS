var status = -1;

function start(mode, type, selection) {
qm.forceStartQuest();
qm.dispose();
}

function end(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 0) {
	    qm.sendNext("What?! There's no way your my master then! My master would've beaten him to a pulp instantly!");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
		qm.sendYesNo("Did you slay the #rThief Crow?#k Yippy! You're my master!, indeed! Now, give me the Red Jade you found! I'll reattach it and... Wait, why aren't you saying anything? Don't tell me you didn't bring it back...");
	} else if (status == 1) {
		qm.sendNext("What? You didn't bring the Red Jade?! Why Not? Did you forget?! Yikes, I never thought the Black Mage's curse would turn you into a dummy..");
	} else if (status == 2) {
		qm.sendNextPrev("No. I can't let this drive me to despair.. Now more than ever. I must stay optimistic and alert, Argh...");
	} else if (status == 3) {
		qm.sendNextPrev("You can go back if you want, but I'm sure the thief has already fled the scene. You'll just have to make a new Red Jade. You've made one before, so you remember the required materials don't you? So hurry it up!");
	} else if (status == 4) {
		qm.sendNextPrev("   #i4001173#");
	} else if (status == 5) {
		qm.sendNextPrev("No hope. No Dreams. Noooo!")
	} else if (status == 6) {
		qm.sendNextPrevS("#bMaha is becoming volatile. You should leave the premise for now. You're sure Lilin could help you somehow", 3);
		qm.forceCompleteQuest();
		qm.dispose();
	}
	//qm.dispose();
}