/* Dawnveil
    Evolving Tutorial 2
	Orchid + Gelimer
    Made by Daenerys
*/
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0) {
	    cm.sendNext("Evolution System Initiating...");	
	//	cm.introEnableUI(0);
    //    cm.introDisableUI(false);
	  //  cm.warp(310010000,0);
	    cm.forceCompleteQuest(1803);
		cm.forceCompleteQuest(1804);
        cm.forceCompleteQuest(1805);
		cm.forceCompleteQuest(1807);
		cm.forceCompleteQuest(1806);
      //  cm.spawnNpc(9075006, -173, 98);		
        cm.dispose();
    }
}