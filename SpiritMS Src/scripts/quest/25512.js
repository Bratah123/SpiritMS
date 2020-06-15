/* RED 1st impact
    First Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	if (status == 0) {
	    qm.sendSelfTalk("(I feel the Light and Dark within me coming together, merging into a new kind of energy)");
    } else if (status == 1) {
	    qm.sendSelfTalk("(I've reached a new level of balance between Light and Dark)");
    } else if (status == 2) {
	   if (qm.canHold(1142482,1)) {	
	    qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.forceCompleteQuest(25521);
		qm.gainItem(1142482, 1);
        qm.changeJob(2712);
	    qm.dispose();
	} else {
	 qm.sendSimple("Please make sure you have available slots in your EQUIP tab");
	 qm.dispose();
	}
	} 
}