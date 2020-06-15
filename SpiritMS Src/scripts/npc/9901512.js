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
	cm.sendSimple("Hi #r#h ##k, I heard you killed evil wizard. Thank you for that, I will now give you some items and meso to help you on your journey!\r\n#b#L1#OK, thanks!#l");
	}
	if (selection == 1) {
	cm.warp(910000000,0);
	cm.gainItem(2001505, 200);
	cm.MakeHItem(1003439, cm.getChar(), 50,10,10);
	cm.MakeHItem(1102337, cm.getChar(), 50,10,10);
	cm.MakeHItem(1142014, cm.getChar(), 100,10,10);
	cm.gainMeso(10000000);
	cm.getPlayer().dropMessage(6,"@crusader to fix the annoying popup");
	cm.msiMessage("Everyone, Please Welcome "+cm.getPlayer().getName()+", the newest player of ViciousMS.");
	cm.dispose();
	}
}