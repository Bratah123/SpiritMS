var status = -1;

function start(mode, type, selection) {
}


function end(mode, type, selection) {
	if (qm.canHold(1142107,1) && !qm.haveItem(1142107,1) && qm.getPlayer().getJob() > 0 && qm.getPlayer().getJob() < 1000) {
		qm.gainItem(1142107,1);
		qm.forceStartQuest();
		qm.dropMessage(6,"lel");
		qm.forceCompleteQuest();
	}
	qm.dispose();
}