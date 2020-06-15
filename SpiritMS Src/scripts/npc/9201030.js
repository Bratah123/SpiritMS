/* Created by Joris Van Wieren and Robert Dods @ RoyalMS. */
function start() { // This tells the NPC to start (obvious) ok
    cm.sendYesNo("Would you like to go to the donor map?"); // Then it sends yes or no with this message ok
}

function action(mode, type, selection) { // Then this tells you that its looking for a selection
    if(mode > 0) {
	cm.sendOk("There you go!");
    cm.warp(18000001);
	} else {
	cm.sendOk("Okay then.. fuck you too...");
  }
}
    cm.dispose();
} 