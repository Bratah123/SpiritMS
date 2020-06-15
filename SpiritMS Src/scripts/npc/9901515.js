var status = 0;


function start() {
    
status = -1;
    
action(1, 0, 0);

}
var status = -1;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
    }
}

if (mode == 1) 
   status++;

else 
   status--;
    if (status == 0) { 
	cm.sendSimple("Hi #r#h ##k, I am the Starter NPC for ViciousMS.\r\ You need 15 Red snail shells to get out of here\r\n#b#L1#Let me out of here#l");
	}
	if (selection == 1) {
	if (cm.haveItem(4000016, 15)) {
		cm.gainItem(4000016, -15);
		cm.gainExp(800);
        cm.gainMeso(1000000);
                	cm.msiMessage("Everyone, Please Welcome "+cm.getPlayer().getName()+", the newest player of ViciousMS.");

		cm.sendOk("Enjoy ViciousMS! Type @help for all our commands.");
		cm.warp(910000000, 0);
		cm.dispose();
	} else {
        cm.sendOk("Sorry, I don't think you have the 15 Red Snail Shells #i4000016#");
		cm.dispose();
		}
	}
} 

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0)
        status--;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("You, who are destined to be a Dragon Master... You have\r\nfinally arrived.");
    } else if (status == 1) {
        cm.sendNextPrev("Go and fulfill your duties as the Dragon Master...");
    } else if (status == 2) {
        cm.warp(900090101);
        cm.dispose();
    }
}