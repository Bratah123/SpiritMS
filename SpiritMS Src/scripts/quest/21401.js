var status = -1;

function start(mode, type, selection) {
	    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 3) {
	    qm.sendOk("...");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
	qm.sendNext("Why do I look like this, you ask? I don't want to talk about it, but I suppose I can't hide from you since you're my master...");
	} else if (status == 1) {
    qm.sendNextPrev("While you were trapped inside ice for hundreds of years, I, too was frozen. It was a long time to be away from you. That's when the seed of darkness was planted in my heart.");
	} else if (status == 2) {
    qm.sendNextPrev("But since you awoke. I thought the darkness had gone away. I thought things would return to the way they were, but I was mistaken");
	} else if (status == 3) {
		qm.sendAcceptDecline("Please. Aran. Please stop me from becoming enraged. Only you can control me. It's out of my hands now. Please do whatever it takes to #rstop me from going berserk");
	} else if (status == 4) {
		qm.warp(914020000);
		qm.spawnMonster(9001014, 1, 124, 86);
		qm.forceStartQuest();
		qm.dispose();
	}
}

function end(mode, type, selection) {
		    if (mode == 1) {
	status++;
	//qm.dispose();
    } else {
	if (status == 1) {
	    qm.sendOk("...");
	    qm.dispose();
	    return;
	}
	status--;
    }
	if (status == 0) {
	qm.sendNext("Thank you. Aran If it weren't for you. I would have become enraged and who knows what could have happened. Thank you. NOT! it's only your duty as my master...");
	} else if (status == 1) {
	qm.sendYesNo("Anyway, I just noticed how high of a level you've reached. if you were able to control me in my state of rage. I think you're ready to handle more abilities.");
	} else if (status == 2) {
	qm.changeJob(2112);
	qm.gainItem(1142132, 1);
	qm.gainItem(1702475, 1);
    qm.gainSp(qm.getPlayer().getLevel() * 3 - 100 - 100 - 100);
    qm.forceCompleteQuest();	
	qm.sendNext("Your skills have been restored. Those skills have been dormant for so long that you'll have to re-train yourself, but you'll be as good as new once you complete your training.");	
	}
	else if (status == 3) {
    qm.sendNext("Oh, and I've taught you Maple Hero. It isn't one of the skills you had in the past, but it could come in handy some day.");
	} else if (status == 4) {
	qm.sendNext("Even with all that, however, you still have a long way to go until you return to the old you. I heard the skills you have forgotten are floating around in the form of Skill Books You'll be able to return to the old you if you find and train all those skills");
    qm.dispose();	
	}
}