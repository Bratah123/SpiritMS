var status = -1;

function start(mode, type, selection) {
	qm.sendNext("HUR DURRRR.");
	//qm.gainItem(4033619,1);
	qm.forceStartQuest();
	qm.dispose();
}
function end(mode, type, selection) {
		qm.forceCompleteQuest();
	qm.dispose();
}