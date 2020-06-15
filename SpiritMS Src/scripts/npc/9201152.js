/*
prizes=[0]; 
random=Math.floor(Math.random() * prizes.length++);
var gayrobby=0;  

function start() {
    cm.sendYesNo("Would you like to use your 100 donorpoints?");
}

function action(m,t,s){
    cm.dispose();
    if(m<1){
        cm.dispose();
    }else{
        gayrobby++;  
    }
    if(gayrobby==1){  
        if (cm.getPlayer().getPoints() > 100) {   // edit this item ID to whatever you want (I used the reg gachapon ticket)
            cm.gainMeso(100);
           (cm.getPlayer().getPoints() - 100);  // if you changed the above ID, make sure you change this one too
        }else{
            cm.sendOk("Come back when you have a Gachapon Ticket");
            cm.dispose();
        }
    }else{
        cm.sendOk("Come back when your ready to take a chance at fortune!");
        cm.dispose();
    }
}  