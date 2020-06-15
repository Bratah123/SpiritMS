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
	cm.sendSimple("Hi #r#h ##k, I am prisoner here just like you.\r\ I have a way of killing the evil wizard, but I will need your help \r\ Bring me this items: \r\ #i4000019# 10 Snail Shells \r\ #i4000016# 5 Red Snail Shells\r\ #i4000000# 3 Blue Snail Shells\r\n#b#L1#I got items!#l");
	}
	if (selection == 1) {
	if (cm.haveItem(4000019, 10)&& cm.haveItem(4000016,5) && cm.haveItem(4000000,3)){
	    cm.gainItem(4000019, -10);
		cm.gainItem(4000016, -5);
		cm.gainItem(4000000, -3);
		cm.gainItem(4001162, 1);
		cm.sendOk("Poison is ready, now go get 1 green apple and then talk to evil wizard and give him poisoned apple!");
		cm.dispose();
	} else {
        cm.sendOk("I think you are missing some items");
		cm.dispose();
		}
	}
}