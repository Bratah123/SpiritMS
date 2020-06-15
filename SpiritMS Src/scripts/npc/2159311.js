var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (selection == 0) {
	    cm.sendNext("Luminous snap out of it, will you? I will resonate with the power of Light and draw the dark out of you, maybe then you'll come to your senses");
    } else if (status == 1) {
	    cm.sendNext("(Vieren's voice seems to be calming me Peculiar.)");
	} else if (status == 2) {
	    cm.sendNext("The Dark no longer clouds my mind. You have my thanks");
	}	else if (status == 3) {
	    cm.sendNext("It was nothing. All I did was help you find the strength to control your Dark. Here this Aurora Prism will allow you to come and go as you please.");
	//	cm.gainItem(2430874, 1);
   //     cm.changeJob(2710);
	} else if (status == 4) {
	   // cm.sendPrev("The Dark and Light magic that run thou");
	    cm.forceStartQuest();
	    cm.forceCompleteQuest();
		cm.gainItem(2430874, 1);
        cm.changeJob(2710);
	    cm.dispose();
	}
}