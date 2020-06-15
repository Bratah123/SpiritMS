var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("This is an important decision to make.");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0)
        qm.sendNext("Do you see now, Neinheart?");
    else if (status == 1)
        qm.sendNextPrevS("I suppose the Empress is correct. You will have to learn the ways of a true knight, shopkeep. Your skills with a broom won't get you far on the battlefield.", 0, 0, 1106000);
    else if (status == 2)
        qm.sendNextPrevS("My father was the Knight of Light? What does that even mean? I'm just an ordinary kid...", 2);
    else if (status == 3)
        qm.sendAcceptDecline("The choice is yours. Listen to your heart. The voice of destiny will guide you down the correct path. For the good of your own soul, and the good of the world...\r\nWill you come with me?");
    else if (status == 4) {
        qm.sendNextS("You need a name. How about... #b'Mihile'#k? It means 'Born of Light'? I think it will suit you well, in the end. Let us go to Ereve. A brilliant new life awaits you.", 1);
        qm.gainItem(1302182,1);
        qm.gainItem(1052444,1);
        qm.expandInventory(1, 4);
        qm.expandInventory(2, 4);
        qm.expandInventory(4, 4);
    } else if (status == 5) {
        qm.changeJob(5100);
        qm.forceCompleteQuest();
        qm.warp(913070071);
        qm.dispose();
    }
}