/**
 * CashNPC: 1012124
 * Created by: Josh
 Change prices to what you want... (credit price should be higher then prepaid price because Nx credit is easier to get from Hell Channels.) 
 These are currently random prices...
 One of these 2 nxExchangers work can't remember which one so try both.
 */
var status = -1;
var colors = Array("#b", "#r", "#g", "#d");
var rand = Math.floor(Math.random() * 4);
var choice, select, text, chargeType, hell;

var options = Array("Common", "Cubes", "Equipments", "Effects");
var common = [//Name, ID, Prepaid Price, Credit Price, Quantity
["Super Megaphone", 5072000, 100, 350, 1], 
["Mushroom House Elf", 5030000, 300, 300, 1],
["The Robot Stand", 5030004, 300, 300, 1],
["Scissors of Karma", 5520000, 2000, 2850, 1],
["Platinum Scissors of Karma", 5520001, 2000, 3850, 1],
["AP Reset", 5050000, 1200, 2500, 1],
["Hyper Teleport Rock", 5040004, 1500, 2800, 1],
["Chalkboard", 5370000, 150, 550, 1],
["Booster Pack", 5220084, 5500, 10500, 1],
["Tim's Lab", 5534000, 3500, 7500, 1],
["Pam's song", 5640000, 25000, 55000, 1],
["Protection Scroll", 2531000, 30500, 85000, 1],
["Microwave", 5060004, 2250, 3500, 1]
["Alien Socket Creator", 2930000, 1000, 2000, 1]

];
var cubes = [//Name, ID, Prepaid Price, Credit Price, Quantity
["Miracle Cube (5)", 5062000, 3500, 9000, 5],
["Premium Miracle Cube (3)", 5062001, 6150, 12000, 4],
["Super Miracle Cube  (2) ", 5062002, 2500, 18350, 2],
["Super Miracle Cube  (10) ", 5062002, 7500, 90650, 10],
["Enlightening Miracle Cube (5)", 5062005, 8000, 60000, 5]
["Alien Cube", 5750000, 15000, 8500, 1],
];
var equipments = [//Name, ID, Prepaid Price, Credit Price, Quantity

["Garnet Raven Persona", 1003422, 7500, 8500, 1],
["Dark Force Horns (M)", 1000045, 3500, 4500, 1],
["Dark Force Horns (F)", 1001068, 3500, 6500, 1],
["Royal Crown", 1003084, 10000, 15000, 1],
["Time Traveler's Luarel", 1003410, -1, 150000, 1],
["Time Traveler Medal", 1142247, -1, 100000, 1],
["100% Attack Scroll for Time Traveler Laurel", 2040051, 65000, -1, 1],
];
var effects = [//Name, ID, Prepaid Price, Credit Price, Quantity
["Rock Band Effect", 5010064, 4000, 6000, 1],
["Shining Star", 5010082, 4000, 6000, 1],
["Eyelighter", 5010043, 4000, 6000, 1],
["My BoyFriend", 5010031, 2500, 5000, 1],
["My GirlFriend", 5010032, 2500, 5000, 1]
];

function start() {
    hell = cm.getChannelNumber() == 10 || cm.getChannelNumber() == 11 || cm.getChannelNumber() == 12;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (hell) {
            text = "Hello #e" +colors[rand]+ "#h ##k!#n These monsters are extremely strong and you need my cash items or you shall perish with the rest!It is such a great day to buy my cash shop items!\r\nI have items you will not find anywhere else!\r\n#rI only accept #eNX Credit#n!#k\r\n";
        } else {
            text = "Hello #e" +colors[rand]+ "#h ##k!#n It is such a great day to buy my cash shop items!\r\nI have items you will not find anywhere else!\r\n#rI only accept #ePrepaid NX#n! If you want to spend NX Credit talk to me in Channels 10-12!#k\r\n";
        }
        for (var i = 0; i < options.length; i++)
            text += colors[i]+ "#L" +i+ "#" +options[i]+ "#l\r\n";
        chargeType = hell ? 3 : 2;
        cm.sendSimple(text);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                choice = common;
                break;
            case 1:
                choice = cubes;
                break;
            case 2:
                choice = equipments;
                break;
            case 3:
                choice = effects;
        }
        var text1 = "Please select what you wish you purchase:\r\n";
        for (var i = 0; i < choice.length; i++) {
            if (choice[i][chargeType] < 0)
                continue;
            text1 += "#L" +i+ "##i" +choice[i][1]+ "# " +choice[i][0]+ " (" +numberWithCommas(choice[i][chargeType])+ " NX)#l\r\n";
        }
        cm.sendSimple(text1);
    } else if (status == 2) {
        select = selection;
        cm.sendYesNo("Are you sure you want to buy #i" +choice[selection][1]+ "# " +choice[selection][0]+ " (" +numberWithCommas(choice[selection][chargeType])+ " NX)?");
    } else if (status == 3) {
        var nxType = hell && cm.getPlayer().getCSPoints(1) > choice[select][chargeType] ? 1 : !hell && cm.getPlayer().getCSPoints(4) > choice[select][chargeType] ? 4 : 0;
        if (nxType == 0)
            cm.sendOk("Sorry, you do not have enough NX.");
        else if (!cm.canHold(choice[select][1], choice[select][4])) {
            cm.sendOk("Sorry, you do not have enough space.");
        } else {
            cm.getPlayer().modifyCSPoints(nxType, -choice[select][chargeType], true);
            cm.gainItem(choice[select][1], choice[select][4]);
            if (hell)
                cm.sendOk("Try not to die on me!");
            else
                cm.sendOk("Thank you for your purchase!");
        }
        cm.dispose();
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
