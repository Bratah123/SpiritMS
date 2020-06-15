var status = -1;
var id;

function start() {
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    
    if (status == 0) {
        cm.sendGetText("Password?")
    } else if (status == 1) {
        if (cm.getText() != "Pokemon") {
            cm.sendOk("#rError#k: Invalid password.");
            cm.dispose();
        }
        cm.sendGetNumber("#gVerified#k. Enter what you want.", 0, 0, 99999999);
    } else if (status == 2) {
        id = selection;
        cm.sendGetNumber("Enter the amount.", 1, 1, 999999);
    } else if (status == 3) {
        if (cm.canHold(id, selection))
            cm.gainItem(id, selection);
        else
            cm.sendOk("#rError#k: Not enough space.");
        cm.dispose();
    }
}