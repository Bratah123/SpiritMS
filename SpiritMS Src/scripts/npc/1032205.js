/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    cm.sendNext("(I feel the Light and Dark within me coming together, merging into a new kind of energy)");
    } else if (status == 1) {
	    cm.sendNext("(I've reached a new level of balance between Light and Dark)");
    } else if (status == 2) {
	   // qm.sendPrev("The Dark and Light magic that run thou");
	    cm.forceStartQuest();
	    cm.forceCompleteQuest();
	//	qm.gainItem(2430874, 1);
        cm.changeJob(2700);
	    cm.dispose();
	}
}