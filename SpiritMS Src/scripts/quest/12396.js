/* RED 1st impact
    Third Ability - The Eye Opener
    Made by Daenerys
*/
var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else
	    status--;
	if (status == 0) {
	    qm.sendNext("Hello, #b#h0##k. You have already reached Lv. 100! When you reach #bLv. 100#k, you can receive a special power called #bAbility#k. I shall release that power for you right now.");
	} else if (status == 1) {
        qm.forceStartQuest();
	    qm.forceCompleteQuest();
		qm.UnlockHonor3();
		qm.sendNext("Well, then! I have released the new power, the Ability, for you. Check it out in your character stat window!");
	    qm.dispose();
	}
}