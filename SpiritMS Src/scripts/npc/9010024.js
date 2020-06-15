function start() {
    cm.sendYesNo("Hello #r#e#h ##k#n! Would you like me to max all your skills?");
}

function action() {
    if (cm.getPlayer().getJob() == 434 && cm.getPlayer().getLevel() >= 120) {
        cm.maxSkillsByJob();
        cm.teachSkill(4341000, 30, 30); //DB Maple Warrior
        cm.sendOk("Your skills has been maxed!");
    } else {
        cm.sendOk("Sorry, you have to be atleast level 120 and a blade master.");
    }
    cm.dispose();
}