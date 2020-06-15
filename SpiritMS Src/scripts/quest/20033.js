var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        if (qm.itemQuantity(4033196) >= 10)
            qm.sendNext("Where's the eggs? I told you to get eggs. If you broke them... Wait a second, what happened to you?\r\n\r\n#b#L0#Uh, well, you know how you told me not to mess with Bigby? Well... I kinda... he got out.#l");
        else {
            qm.forceStartQuest();
            qm.dispose();
        }
    } else if (status == 1) {	
        qm.sendNext("What?!! I swear to every deity I can think of, you will starve to death if that dog is not in my yard by dinnertime.");
    } else if (status == 2) {
        qm.gainItem(4033196, -10);
        while (qm.getPlayer().getLevel() < 8)
            qm.getPlayer().levelUp();
        qm.getPlayer().setExp(0);
        qm.forceCompleteQuest();
        qm.warp(913070004, 0);
        qm.dispose();
    }
}