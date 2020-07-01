var yellowBelt = 1132211;
var yellowShoulder = 1152120;

var blackBelt = 1132215;
var blackShoulder = 1152124;

var chest = 4033667;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection)
{

    if (mode == 1) {
        status++;
    } else {
	cm.dispose();
	return;
    }

    if(status == 0){
        cm.sendSimple("Hi, I am the tinkerer's transfer NPC, what would you like to do?\r\n#b#L0#Trade my Tinkerer's Chest.");
    }
    else if(status == 1){
        cm.sendYesNo("Are you sure you want to trade a tinkerer's chest for tinkerer's equipment?")
    }
    else if(status == 2){
        if(cm.getQuantityOfItem(chest) < 1){
            cm.sendOk("You do not have any tinkerer's chest.");
            return cm.dispose();
        }
        var randomNum = Math.floor(Math.random() * 20);

        if(randomNum < 2){
            var itemArr = [blackBelt, blackShoulder];
            var randomItem = itemArr[Math.floor(Math.random() * itemArr.length)];
            cm.gainItem(chest, -1);
            cm.gainItem(randomItem, 1)
            cm.sendOk("Congratulations you got " + "#i" + randomItem + "#.")
            return cm.dispose();
        }
        else{
            var itemArr = [yellowBelt, yellowShoulder];
            var randomItem = itemArr[Math.floor(Math.random() * itemArr.length)];
            cm.gainItem(chest, -1);
            cm.gainItem(randomItem, 1);
            cm.sendOk("Congratulations you got " + "#i" + randomItem + "#.")
            return cm.dispose();
        }
    }
}