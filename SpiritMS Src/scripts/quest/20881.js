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
            qm.sendOk("Ask Wiz the Librarian about the book you must take to Ereve.");
            qm.dispose();
        status--;
    }
    if (status == 0) {
	    qm.sendNext("I found this ancient tome while on my daily patrol of the library shelves. I recognized that the text on it was important, thanks to my Psychic Book-reading Powers. I contacted the Cygnus Knights at once, via carrier pigeon, of course.");
	} else if (status == 1) {
	    qm.sendAcceptDecline("I'm safeguarding the book in my Top Secret Super Safe Room. It's just over there. Please take it and deliver it to Nienheart.");
	    qm.forceStartQuest();
	    qm.dispose();
	}
}

//function end(mode, type, selection) {
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
          qm.changeJob(1511);
	  qm.dispose();		
	}
  }
}  