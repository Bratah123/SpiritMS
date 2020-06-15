/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendNext("Luminous snap out of it, will you? I will resonate with the power of Light and draw the dark out of you, maybe then you'll come to your senses");
    } else if (status == 1) {
	    qm.sendPlayerToNpc("(Vieren's voice seems to be calming me Peculiar.)");
	} else if (status == 2) {
	    qm.sendPlayerToNpc("The Dark no longer clouds my mind. You have my thanks");
	}	else if (status == 3) {
	    qm.sendNext("It was nothing. All I did was help you find the strength to control your Dark. Here this Aurora Prism will allow you to come and go as you please.");
	//	qm.gainItem(2430874, 1);
   //     qm.changeJob(2710);
	} else if (status == 4) {
	   // qm.sendPrev("The Dark and Light magic that run thou");
	    if (qm.canHold(1142480,1) || qm.canHold(2430874,1)) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.gainItem(2430874, 1);
		qm.gainItem(1142480, 1);
        qm.changeJob(2710);
		qm.forceCompleteQuest(25519);
//		qm.gainItem(1142480);
	    qm.dispose();
	} else {
	  qm.sendSimple("Please make sure you have available slots in your USE and EQUIP tabs");
	  qm.dispose();
	}
}
}