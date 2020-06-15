var talk = "#rPick your empress equips:\r\n#k"; 
var chosen = 1;
var Error;
var one;
var menu = ["Warrior Set - 1000 DP","Mage Set - 1000 DP","Bowman Set - 1000 DP","Thief Set - 1000 DP","Pirate Set - 1000 DP\r\n","Warrior Weapons - 500 DP","Magician Weapons - 500 DP","Archer Weapons - 500 DP","Thief Weapons - 500 DP","Pirate Weapons - 500 DP"]; 
var empeq = [
/*warrioreq */[1003172, 1082295, 1052314, 1072485, 1102275],
/*mageeq*/[1003173, 1082296, 1052315, 1072486, 1102276],
/*boweq */[1003174, 1082297, 1052316, 1072487, 1102277],
/*thiefeq*/ [1003175, 1082298, 1052317, 1072488, 1102278],
/*pirateeq*/ [1003176, 1082299, 1052318, 1072489, 1102279],

/*Warriorwep*/[1302152,1312065,1322096,1402095,1412065,1422066,1432086,1442116],
/*MageWep*/   [1372084, 1382104],
/*Bowmanwep*/ [1462099, 1522018, 1452111],
/*Thiefwep*/  [1342036, 1362019, 1472122, 1332130],
/*Piratewep*/ [1492085, 1482084, 1532018]];
var c; 
status = 0; 
function start() {
    Error = "You do not have enough Donor points!\r\nYou have #r"+cm.getDPoints()+" Donation points";
	
    cm.sendAcceptDecline("Hi #b#h ##k, I am the Donation NPC for #rViciousMS#k\r\n\r\n#b1)When you donate you can get various rewards as a thank you gift from us!\r\n2)To be able to use donor commands you need to donate at least $20\r\n3)Along with donor commands you get blue text ingame\r\n4)When you donate you also get donor rank on forums, at least $5\r\n5)You can see list of all donor commands at forums in donations section\r\n6)There are also donor ocupations, for more info about that check website and click on donate page!\r\n#rClick Accept, if you accept to these terms");
} 
function action(m,t,selection) { 
    chosen = selection;
    if (m != 1) { 
        cm.dispose(); 
        return; 
    }else{ 
        status++; 
    } 
    if (status == 1) {
        cm.sendSimple ("You have #b"+cm.getDPoints()+"#k Donation Points#k\r\n#L0##bNX Prizes#l\r\n#L1#Empress Set#l\r\n#L2#Miracle Cubes#l\r\n#L3#Change NPC Pack - 20,000 DP\r\n#L4#Name Change - 10,000 DP\r\n#L5#Max Stated Item - 10000 DP\r\n#L6#Angelic Blessing Ring#l\r\n#L7#Android + Heart#l");
    }
    else if (status == 2) { 
        if (selection == 0) {//NX
            cm.sendSimple("You have #b"+cm.getDPoints()+"#k Donation Points\r\n#b#L100#12k NX - 100 DP#l\r\n#L110#75k NX - 500 DP#l\r\n#L120#250k NX - 1500 DP#l\r\n#L130#1 Million NX - 3500 DP#l");
        }else if (selection == 1) {//Empress
            var text = "Hello #r#h ##k. You have #b"+cm.getDPoints()+"#k Donation Points\r\n"+talk+""; 
            for (var z = 0; z < menu.length; z++) 
                text+= "#L"+z+"##b"+menu[z]+"#l\r\n"; 
            one = false;
            cm.sendSimple(text); 
        } else if (selection == 2) {//Cubes
            cm.sendSimple("You have #b"+cm.getDPoints()+"#k Donation Points\r\n#b#L200#Super Miracle Cubes x10 - 500 DP#l\r\n#L201#Super Miracle Cubes x50 - 2000 DP#l\r\n#L202#Super Miracle Cube x150 - 5000 DP#l\r\n#L203#Enlightening Miracle Cubes x10 - 250 DP#l\r\n#L204#Enlightening Miracle Cubes x50 - 1000 DP#l\r\n#L205#Enlightening Miracle Cubes x150 - 2500 DP#l");
        }else if (selection == 3) {//Change NPC Pack
            cm.sendSimple("If you buy this, you can change any NPC you want to Player NPC with your name and looks\r\n#e#rGive this wish ticket to either Apollo or Ivan so that they can make the Player NPC\r\n#n#r#L500#I Accept#l");
        }else if (selection == 4) {//Name Changer
            if (cm.getDPoints() > 9999) {  
                cm.sendGetText("What would you like your name to be?\r\n#eNO SPECIAL CHARACTERS #n(as in numbers)#e, OR DIE#n\r\nBe #e#rSUPER#k#n careful typing, you can't redo this!");
            }else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 5) {//MSI
            if (cm.getDPoints() > 9999) {  
                var String = "#r#eThe stats of the equip gets overwritten so if its already an msi then it gets overwritten again#n#kPlease Choose your desire item or nx you want as your new MSI. Please check your Inventory to make sure u have enough room because, we don't give back refunds.Enjoy!\r\n\r\n";
                cm.sendSimple(String+cm.EquipList(cm.getC()));
                one = true;
            }else  {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 6) {//Angelic Blessing
            cm.sendSimple("Pick an Angelic Blessing Ring:\r\n#L300##i1112585# - 500 DP#l\r\n#L302##i1112663# - 1500 DP");
        }else if (selection == 7) {//Android
            cm.sendSimple("The Android comes with a heart in the set.\r\nPick an Android:\r\n#L400##i1662002# + #i1672005# - 5000 DP\r\n#L401##i1662003# + #i1672005# - 5000 DP#l");
        }
    } else if (status == 3) {
        var name = cm.getText();
        //Starting NX
        if (selection == 100) {
            if (cm.getDPoints() > 99) {      
                cm.setDPoints(-100);                    
                cm.gainNX(24000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 110) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainNX(140000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 120) {
            if (cm.getDPoints() > 1499) {      
                cm.setDPoints(-1500);                    
                cm.gainNX(500000);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        } else if (selection == 130) {
            if (cm.getDPoints() > 3499) {      
                cm.setDPoints(-3500);                    
                cm.gainNX(2000000);//1million
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        //End of NX      
        //Start of Cubes
        else if (selection == 200) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainItem(5062002, 10);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 201) {
            if (cm.getDPoints() > 1999) {      
                cm.setDPoints(-2000);                    
                cm.gainItem(5062002, 50);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 202) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(5062002, 150);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 203) {//enlightening cubes
            if (cm.getDPoints() > 249) {      
                cm.setDPoints(-250);                    
                cm.gainItem(5062005, 10);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 204) {
            if (cm.getDPoints() > 999) {      
                cm.setDPoints(-1000);                    
                cm.gainItem(5062005, 50);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        else if (selection == 205) {
            if (cm.getDPoints() > 2499) {      
                cm.setDPoints(-2500);                    
                cm.gainItem(5062005, 150);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        //End of cubes
        //Angelic Blessing Rings
        }else if (selection == 300) {
            if (cm.getDPoints() > 499) {      
                cm.setDPoints(-500);                    
                cm.gainItem(1112585, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 302) {
            if (cm.getDPoints() > 1499) {      
                cm.setDPoints(-1500);                    
                cm.gainItem(1112663, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }
        //End of Angelic Blessing Rings
        //Start of Android
        else if (selection == 400) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(1662002, 1);
                cm.gainItem(1672005, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            }
        }else if (selection == 401) {
            if (cm.getDPoints() > 4999) {      
                cm.setDPoints(-5000);                    
                cm.gainItem(1662003, 1);
                cm.gainItem(1672005, 1);
                cm.dispose();
            } else {
                cm.sendOk(Error);
                cm.dispose();
            //End of Android
            }
        }else if(selection == 500) {
            if (cm.getDPoints() > 19999) {     
                cm.gainItem(4031544 , 1);
                cm.setDPoints(-20000);
                cm.dispose();
            }else {
                cm.sendOk(Error);
                cm.dispose();
            }	
        //End of Android
        }else {
            //MSI
            if (one == true) {
                cm.MakeMSIItem(chosen, cm.getChar(), true);//false for a 1-200 range of watt/matt || true for a higher range
                cm.reloadChar();
                cm.setDPoints(-10000);
                cm.msiMessage("[DMSI-Notice] Congratulations to "+cm.getPlayer().getName()+" on his/her newly acquired Donated Max-Stated Item");
                cm.dispose();	
            }
            //Name Changer
            if (name != null) {
                if(name.contains(" ")) {
                    cm.sendOk("Your name contains a space in it, please enter a name without a space");
                    cm.dispose();
                }else {
                    if (cm.isValid(name) == true) {
                        if (cm.ifNameExist(name) == false) {
                            //Changing the name here
                            cm.setDPoints(-10000); 
                            cm.setName(name);
                            cm.dispose();
                        }else {
                            cm.sendOk("You entered a name that already exists");
                            cm.dispose();
                        }
                    }else {
                        cm.sendOk("You entered a name with special characters");
                        cm.dispose();
                    }
                }
            }
            //Empress equips
            if (one == false) {
                c = selection; 
                for (var i = 0; i < empeq[c].length; i++) 
                    talk+="#L"+i+"##e#i"+empeq[c][i]+":##k#l"; 
                cm.sendSimple("You will be recieving all "+empeq[c].length+" items\r\n#r#eYou have to click any of these items to recieve it.#k#n\r\n"+talk);
                one = false;
            }
        }
    }else if (status == 4) {
        //Empress item getting process
        if (one == false) {
            if (c >= 5) {
                if (cm.getDPoints() > 499) {//Weapons
                    cm.setDPoints(-500); 
                    var w = empeq[c][selection];
                    //cm.sendOk("C= "+c+" selection= "+selection+"\r\n"+w);
                    cm.gainItem(w, 1);
                    cm.dispose(); 
                }else {
                    cm.sendOk(Error);
                    cm.dispose();
                }
            }else {
                if (cm.getDPoints() > 999) {//Armor
                    cm.setDPoints(-1000); 
                    for (var i = 0; i < empeq[c].length; i++) {
                    var w = empeq[c][i];					
                        cm.gainItem(w, 1);
                    }
                    //var w = empeq[c][selection];
                    //cm.sendOk("C= "+c+" selection= "+selection+"\r\n"+w);
                    cm.dispose(); 
			
                }else {
                    cm.sendOk(Error);
                    cm.dispose();  
                }              
            }	
        }
    }
}