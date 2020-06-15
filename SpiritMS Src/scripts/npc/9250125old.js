var status = -1; 

function start() 
{ 
    status = -1; 
    action(1, 0, 0); 
}

function action(mode, type, selection) { 
    if (mode == 1) 
    status++; 
    else
    status--;
    if (status == -1) {
            cm.dispose();
    } else if (status == 0) {
        cm.sendSimple("Hi, I'm the #rJQ warper#k of #bRoyalMS#k! Wich JQ would you like to try? \r\n#L0#Breath of Lava \r\n#L1#Toy Factory \r\n#L2#Forest of Patience \r\n#L3#B1: Area 1 \r\n#L4#B2: Area 1 \r\n#L5#B3: Area 1");
    } else if (status == 1) {
    if (selection == 0) {
        cm.warp(280020000);
		cm.dispose();
    } else if (selection == 1) {
        cm.warp(922000000);
		cm.dispose();
    } else if (selection == 2) {
        cm.warp(690000066);
		cm.dispose();
    } else if (selection == 3) {
        cm.warp(910360000);
		cm.dispose();
	} else if (selection == 4) {
        cm.warp(910360100);
		cm.dispose();
	} else if (selection == 5) {
        cm.warp(910360200);
		cm.dispose();
        }
        cm.dispose();
    }
}  