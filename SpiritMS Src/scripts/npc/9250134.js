function start() { 
	cm.sendSimple("#rWelcome#k. Alien Fields are infested with aliens who have silver coins...Good Luck... \n #b\r\n\r\n#L0#Go to Alien field 1 #l\r\n#L1#Go to Alien field 2");
} 

function action(mode, type, selection) {
	if (cm.getPlayer().getLevel() <  120) {
		cm.sendOkay("Sorry., but you must be 120+ to enter the maps.");
		cm.dispose();
		return;
	}
	else{
		if (selection == 0){
			cm.warp(502030004, 0);
			cm.dispose();
		}
		else if (selection == 1){
			cm.warp(502030005, 0);
			cm.dispose();
		}
	}
	cm.dispose();
}