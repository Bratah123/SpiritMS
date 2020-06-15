prizes=[2430351, 2430344, 2430361, 2430363, 2430080, 2430039, 2430057, 2430147, 5252000, 2430149, 2430300, 2430316, 2430330, 2430353, 2430283, 2430074, 2430476, 1702162, 1102112, 2022918, 5062000, 2049300, 1012146, 2070005, 2511106, 2028061, 5220000, 2520000, 1000016, 1003439, 4001432, 5062002, 4032055, 3991017, 3991014, 3991024, 3991000, 3991011, 2210035, 2022694, 5251004, 5220084, 2070006, 2070007, 5750000, 2430692, 4031069, 1082228, 1112917, 1112438, 1022129, 1182007, 1702309, 1102292, 1702043, 1112673, 1662000, 1662001, 2043602, 4000521, 2022878, 3010287, 1012111, 1022082, 1112629, 4310015]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("Would you like to use 10 #i4310002# for a try at the #rClaw Machine#k?");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.haveItem (4310002, 10)) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainMeso(100);
            cm.gainItem(4310002, -10);
            cm.gainItem(prizes[random],1);			// if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("Come back when you have 10 #i4310002#");
            cm.dispose();
        }
    }else{
        cm.sendOk("Come back when your ready to take a chance at fortune!");
        cm.dispose();
    }
}  