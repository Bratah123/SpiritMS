/* Dawnveil
    Gachapon
	The Great Gachapierrot
    Made by Daenerys
*/
var status = -1;
var selection = -1;

function start() {
    status = -1;
    selection = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;
    if (status == 0) {
        cm.playSound(true, "Voice/Alpha/0");
        cm.sendSimple("testing");
		cm.dispose();
}
}