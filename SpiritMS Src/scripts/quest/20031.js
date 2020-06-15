var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.sendNext("What took so long?! You better not have been rooting through my things!\r\n\r\n#b#L0#I wasn't, but I found this letter up there by the potion box... It's from some guy named Chromile.#l");
    } else if (status == 1) {	
        qm.sendNext("What?! Who told you could touch that?!");
    } else if (status == 2) {
        qm.introEnableUI(1);
        qm.sendPlayerToNpc("Another great day with the old man...");
        while (qm.getPlayer().getLevel() < 4)
            qm.getPlayer().levelUp();
        qm.getPlayer().setExp(0);
    } else if (status == 3) {
        qm.sendPlayerToNpc("Huh? What's that?");
    } else if (status == 4) {
        qm.forceCompleteQuest();
        qm.dispose();
        qm.mihileSoul();
    }
}