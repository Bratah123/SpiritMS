//Maple Beryl Weapons

function start() {
    if (cm.getInventory(1).getNumFreeSlot() < 2 || cm.getInventory(2).getNumFreeSlot() < 6
        || cm.getInventory(4).getNumFreeSlot() < 1 || cm.getInventory(5).getNumFreeSlot() < 1) {
        cm.sendOk("Please make more inventory space.");
        cm.dispose();
        return;
    }

    cm.gainItem(2431676, -1);
    cm.dispose();
    }
