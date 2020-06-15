/**
Author: SilentThief
Function: Beginner Quest NPC
Server: LogicMS
**/

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action (mode, type, selection) {

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
		cm.sendNext("Hi #e#h ##n, Welcome To #eViciousMS#n! \r\nEnjoy your stay!");
	}else if (status == 1) {
		cm.sendYesNo("#eThe Server Basics:#n \r\n- 8x/10x/2x \r\n- GML Currency \r\n- @npc \r\n- @help \r\n- @gm <reason> \r\n#eDo You Think You Are Ready To Take A Short Quiz, To begin your journey?#n");
	}else if (status == 2) {
		cm.sendSimple("#eWhat Is The EXP Rate:#n \r\n#L0# - 8x \r\n#L1# - 12x");
	}
	else if (selection == 0) {
			cm.sendNext("#eWhat Currency Does ViciousMS Use?#n \r\n#L2# - GML \r\n#L3# - Tokens");
		}
		else if (selection == 1) {
			cm.sendOk("Sorry, incorrect, please re-do the whole quiz!");
			cm.dispose();
		}
		else if (selection == 2) {
			cm.sendNext("#eWhat Is The Command To Call GM?#n \r\n#L4# - @gm <reason>\r\n#L5# - @gmhelp <reason>");
		}
		else if (selection == 3) {
			cm.sendOk("Sorry, incorrect, please re-do the whole quiz!");
			cm.dispose();
		}
		else if (selection == 4) {
			cm.sendNext("#eWhat's The Command To Show Everything About The Server:#n \r\n#L6# - @help \r\n#L7# - @helpme");
		}
		else if (selection == 5) {
			cm.sendOk("Sorry, incorrect, please re-do the whole quiz!");
			cm.dispose();
		}
		else if (selection == 6) {
			cm.sendNext("#eWhat's The Command To Show All in one npc:#n \r\n#L7# - @fmnpc \r\n#L8# - @npc");
		}
		else if (selection == 7) {
			cm.sendOk("Sorry, incorrect, please re-do the whole quiz!");
			cm.dispose();
		}
		else if (selection == 8) {
			cm.sendNext("Congratulations, you have finished our mini quiz! \r\n#eAre you sure you want to continue on?#n \r\n #L10#Yes, I want to continue! \r\n#L9#No, I don't!");
		}
		else if (selection == 9) {
			cm.sendOk("OK, talk to me when you are ready to leave!");
			cm.dispose();
		}
		else if (selection == 10) {
cm.msiMessage("Everyone, Please Welcome "+cm.getPlayer().getName()+", the newest player of ViciousMS. Type @help for our commands.");
cm.gainMeso(1000000);
cm.gainExp(1000);
cm.warp(100000000, 1);
cm.dispose();
		}

	}