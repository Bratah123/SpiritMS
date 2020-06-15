/* RED Zero
    End of the Knight-in-Training
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 0) {
		    qm.sendOk("I see. It's good to know your limits, but I think you're ready to move on...");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendAcceptDecline("#h0#, you have done surprisingly well. Do you wish to take the #bKnighthood Exam#k? If you pass, you will become a full-fledged knight.");
	} else if (status == 1) {
	    qm.sendOk("Come to Ereve when you are ready for the exam. Your Chief Knight will test your abilities.");
	    qm.forceStartQuest();
	    qm.dispose();
	}
}

function end(mode, type, selection) {
if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNextPrev("You have completed the Knighthood Exam. You are no longer a Knight-in-Training, but a full-fledged official knight. May your raucous adventures serve the Cygnus Knights in some way.");
	} else if (status == 1) {
	  qm.forceCompleteQuest();
          qm.changeJob(1510);
	  qm.dispose();		
	}
  }
}