var status = -1;

function end(mode, type, selection) {
    qm.gainItem(5160011,1);
	qm.sendNext("Stan doesn't seem very happy today seems to be sighing a lot ._. #bYou've learned how to sigh a lot congratz!");
	qm.forceCompleteQuest();
	qm.dispose();
}