var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
	if (status == 0) {
        cm.mihileMove913070050();
		cm.sendPlayerToNpc("Woah!.");
		//chat++
	//	status++;
		//cm.dispose();
		cm.introEnableUI(0);
        cm.introDisableUI(false);
	} else if (status == 1) {
		//cm.sendOk("lel");
		cm.warp(105010201, 1);
		cm.introEnableUI(0);
        cm.introDisableUI(false);
		cm.dispose();
	}
}