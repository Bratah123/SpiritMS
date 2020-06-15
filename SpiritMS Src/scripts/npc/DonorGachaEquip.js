prizes=[1182019, 1102337, 1012309, 1022123, 1082399, 1142249, 1132115, 1112533, 1112648, 1112701, 1152079, 1122076, 1372084, 1382104, 1452111, 1462099, 1522018, 1472122, 1362019, 1342036, 1332130, 1442116, 1432086, 1422066, 1412065, 1402095, 1322096,  1312065, 1302152, 1532018, 1492085, 1482084, 1032083, 1032084, 1032084, 1032083, 1122085, 1122084, 1132040, 1132039, 1112439, 1112438, 1092074, 1092073, 1092079, 1092078, 1092084, 1092083, 1092074, 1092073, 1302147, 1302146, 1312062, 1312061, 1322090, 1322089, 1332120, 1332119, 1332125, 1332124, 1342033, 1342032, 1372078, 1372077, 1382099, 1382098, 1402090, 1402089, 1412062, 1412061, 1422063, 1422062, 1432081, 1432080, 1442111, 1442110, 1452106, 1452105, 1462091, 1462090, 1472117, 1472116, 1482079, 1482078, 1492079, 1492078]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("Would you like to spend 200 of your #r" + cm.getPlayer().getPoints() +"#k donorpoints for an awesome equip?");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.getPlayer().getPoints() >= 200) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainItem(prizes[random],1);
            cm.getPlayer().setPoints(cm.getPlayer().getPoints() - 200);  // if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("Come back when you have at least 100 donor points.");
            cm.dispose();
        }
    }
}