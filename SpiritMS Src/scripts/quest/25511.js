/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendNext("Luminous, I've gathered the power of all the Auguries");
    } else if (status == 1) {
	    qm.sendNext("I'll use this power to melt the Dark right out of you.");
	} else if (status == 2) {
	    qm.sendNext("Remember it's upto you to conquer your darkness. The Auguries will only help so much.");
	}	else if (status == 3) {
	    qm.sendPlayerToNpc("Have faith. I won't let the Dark take me again!");
	} else if (status == 4) {
	    qm.sendNext("Focus on this saying #b<The Light shines brightest in the deepest Dark >#k Okay, here we go!");
	}	else if (status == 5) {
	    qm.sendPlayerToNpc("AAAUGH");
	} else if (status == 6) {
	    qm.sendNext("You did it! That wasn't so bad, was it?");
	}	else if (status == 7) {
	    qm.sendPlayerToNpc("(What is this new energy that courses through my body? It's as though the Light and Dark merged into one..)");
	} else if (status == 8) {
	    qm.sendNext("You should rest up for now. We can talk later");
	} else if (status == 9) {
        if (qm.canHold(1142481,1)) {	
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.forceCompleteQuest(25520);
		//qm.gainItem(2430874, 1);
		qm.gainItem(1142481, 1);
        qm.changeJob(2711);
	    qm.dispose();
	}  else {
	 qm.sendSimple("Please make sure you have available slots in your EQUIP tab");
	 qm.dispose();
	}
	}
}