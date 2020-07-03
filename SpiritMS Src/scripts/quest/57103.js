var status = -1;
function start(mode, type, selection) {
	qm.forceStartQuest();
	qm.forceCompleteQuest();
	qm.dispose();
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
	    qm.sendNext("You don't look well, my friend.");
	} else if (status == 1) {
	    qm.sendYesNo("I will take you to the others. We have established a temporary base of operations, hidden in the forest at the top of this hill. You will see that I speak the truth.");
	} else if (status == 2) {
			qm.forceCompleteQuest();
	    qm.dispose();
			qm.gainEXP(621);
	}
  }
}
