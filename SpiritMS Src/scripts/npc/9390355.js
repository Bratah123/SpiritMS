function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 0 && mode == 0) {
		cm.sendNext("Alright this is optional!");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if(status == 0) {
		cm.sendYesNo("Hey, Do you want your skills maxed?\r\n#rIt will cost you 1,000,000 Meso");
	}
	if (status == 1 && cm.getMeso() < 1000000) {
	    cm.sendNext("I think you're lacking mesos. There are many ways to gather up some money,#gSelling Drugs#k you know, like... selling your armor... defeating monsters... doing quests... you know what I'm talking about.");
	    cm.dispose();
	} if (status == 1 && cm.getMeso() > 1000000) {
	    cm.gainMeso(-1000000);
	    cm.maxSkillsByJob();
		cm.sendOk("done");
	    cm.dispose();
	}

}
}