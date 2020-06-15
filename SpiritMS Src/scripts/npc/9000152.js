prizes=[3010077, 3010003, 3010006, 3010045, 3010013, 3010085, 3010106, 3010109, 3010112, 3010126, 3010127, 3010128, 3010129, 3010130, 3010133, 3010138, 3010141, 3010155, 3010162, 3010168, 3010169, 3010170, 3010172, 3010173, 3010175, 3010177, 3010183, 3010186, 3010189, 3010191, 3010194, 3010222, 3010283, 3010256, 3010284, 3010286, 3010289, 3010301, 3010308, 3010372, 3010424, 3012006, 3013002, 3010009, 3010014, 3010036, 3010046, 3010043, 3010047, 3010071, 3010071, 3010110, 3010111, 3010114, 3010116,  3010117, 3010117, 3010131, 3010136, 3010151, 3010179, 3010197, 3010200, 3010205, 3010188, 3010206, 3010225, 3010218, 3010253, 3010255, 3010279, 3010285, 3010288, 3010302, 3010307, 3010313, 3010321, 3010355, 3010360, 3010368, 3010421, 3010422, 3010431, 3010439, 3012011, 3013000, 3010123, 3010095, 3010224, 3010376, 3010377, 3010433, 3010139, 3010012, 3010041, 3010290, 3010399, 3010007, 3010008, 3010010, 3010016, 3010017, 3010064, 3019224, 3019223]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("Would you like to use a #i4031544# for a try at the #rChair Gachapon#k?");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.haveItem (4031544, 1)) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainMeso(100);
            cm.gainItem(4031544, -1);
            cm.gainItem(prizes[random],1);			// if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("Come back when you have a #i4031544#!");
            cm.dispose();
        }
    }else{
        cm.sendOk("Come back when your ready to take a chance at fortune!");
        cm.dispose();
    }
}  