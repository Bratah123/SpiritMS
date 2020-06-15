var status;

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


if (cm.getPlayer().getReborns() >= 500) {
	cm.sendSimple("You have enough rebirths and you have just obtained GM job.");
	cm.changeJobById(900)
	cm.msiMessage("[GM Job] Congratulations to "+cm.getPlayer().getName()+" on getting GM job.");
	cm.dispose();
	}else {
	cm.sendOk("You need at least 500 rebirths to get GM job.");
	cm.dispose();
}
}
}


