/* 
	NPC Name: 		Lady syl
	Map(s): 		103050101
	Description: 		Quest - Becoming a Blade Specialist 2
*/
var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
       if (qm.getQuestStatus(2642)==1 && qm.getQuestStatus(2642)!=2){
           qm.forceStartQuest();
           qm.dispose();
           status=-2;
           mode=-2;
          return;
        }
       if (status == 0) {
           qm.sendNext("you look rather green. Are you ill? You're poisoned? Did Ryden tell you that? The potion was just apple juice. Couldn't you tell? Anyway, Ryden was just meaking a point...");
       }else if (status == 1){
           qm.sendNextPrev("Don't even THINK about betraying us. The Dual Blades do not forgive their enemies...");
       }else if (status == 2){
           qm.sendYesNo("The look in your eyes, the lift in your shoulders. You seem ready. Do you wish to advance to Rouge? Once you do, you can begin your REAL missions.");
           qm.forceCompleteQuest();
           qm.changeJob(400);
           qm.getItem(1332063);
           qm.dispose();
       } 
        
    }
}