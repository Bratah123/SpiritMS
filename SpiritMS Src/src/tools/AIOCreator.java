/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tools;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.LinkedList;
import java.util.List;
import server.MapleItemInformationProvider;

/**
 *
 * @author Itzik
 */
public class AIOCreator {

    public static class ItemType {

        /*public static final int HAT = 100;
         public static final int FACE = 101;
         public static final int EYE = 102;
         public static final int EARRING = 103;
         public static final int TOP = 104;
         public static final int OVERALL = 105;
         public static final int BOTTOM = 106;
         public static final int SHOES = 107;
         public static final int GLOVE = 108;
         public static final int SHIELD = 109;
         public static final int CAPE = 110;
         public static final int RING = 111;
         public static final int PENDANT = 112;
         public static final int BELT = 113;
         public static final int MEDAL = 114;
         public static final int SHOULDER = 115;
         public static final int POCKET = 116;
         //public static final int CODEX = 117;
         public static final int BADGE = 118;
         public static final int MOUNT = 190;
         public static final int SADDLE = 191;*/
    }

    public static class WeaponType {

        /*public static final int ROD = 121;
         public static final int SOULSHOOTER = 122;
         public static final int ONESWORD = 130;
         public static final int ONEAXE = 131;
         public static final int ONEMACE = 132;
         public static final int DAGGER = 133;
         public static final int KATARA = 134;
         public static final int SUBWEP = 135;
         public static final int CANE = 136;
         public static final int WAND = 137;
         public static final int STAFF = 138;
         public static final int NOWEP = 139;
         public static final int TWOSWORD = 140;
         public static final int TWOAXE = 141;
         public static final int TWOMACE = 142;
         public static final int SPEAR = 143;
         public static final int POLEARM = 144;
         public static final int BOW = 145;
         public static final int CROSSBOW = 146;
         public static final int CLAW = 147;
         public static final int KNUCKLE = 148;
         public static final int GUN = 149;
         public static final int SHOVEL = 150;
         public static final int PICKAXE = 151;
         public static final int BOWGUN = 152;
         public static final int CANNON = 153;*/
    }

    public static class Lists {

        /*public static List<Integer> HAT = new LinkedList<>();
         public static List<Integer> FACE = new LinkedList<>();
         public static List<Integer> EYE = new LinkedList<>();
         public static List<Integer> EARRING = new LinkedList<>();
         public static List<Integer> TOP = new LinkedList<>();
         public static List<Integer> OVERALL = new LinkedList<>();
         public static List<Integer> BOTTOM = new LinkedList<>();
         public static List<Integer> SHOES = new LinkedList<>();
         public static List<Integer> GLOVE = new LinkedList<>();
         public static List<Integer> SHIELD = new LinkedList<>();
         public static List<Integer> CAPE = new LinkedList<>();
         public static List<Integer> RING = new LinkedList<>();
         public static List<Integer> PENDANT = new LinkedList<>();
         public static List<Integer> BELT = new LinkedList<>();
         public static List<Integer> MEDAL = new LinkedList<>();
         public static List<Integer> SHOULDER = new LinkedList<>();
         public static List<Integer> POCKET = new LinkedList<>();
         //public static List<Integer> CODEX = new LinkedList<>();
         public static List<Integer> BADGE = new LinkedList<>();
         public static List<Integer> MOUNT = new LinkedList<>();
         public static List<Integer> SADDLE = new LinkedList<>();
         public static List<Integer> ROD = new LinkedList<>();
         public static List<Integer> SOULSHOOTER = new LinkedList<>();
         public static List<Integer> ONESWORD = new LinkedList<>();
         public static List<Integer> ONEAXE = new LinkedList<>();
         public static List<Integer> ONEMACE = new LinkedList<>();
         public static List<Integer> DAGGER = new LinkedList<>();
         public static List<Integer> KATARA = new LinkedList<>();
         public static List<Integer> SUBWEP = new LinkedList<>();
         public static List<Integer> CANE = new LinkedList<>();
         public static List<Integer> WAND = new LinkedList<>();
         public static List<Integer> STAFF = new LinkedList<>();
         public static List<Integer> NOWEP = new LinkedList<>();
         public static List<Integer> TWOSWORD = new LinkedList<>();
         public static List<Integer> TWOAXE = new LinkedList<>();
         public static List<Integer> TWOMACE = new LinkedList<>();
         public static List<Integer> SPEAR = new LinkedList<>();
         public static List<Integer> POLEARM = new LinkedList<>();
         public static List<Integer> BOW = new LinkedList<>();
         public static List<Integer> CROSSBOW = new LinkedList<>();
         public static List<Integer> CLAW = new LinkedList<>();
         public static List<Integer> KNUCKLE = new LinkedList<>();
         public static List<Integer> GUN = new LinkedList<>();
         public static List<Integer> SHOVEL = new LinkedList<>();
         public static List<Integer> PICKAXE = new LinkedList<>();
         public static List<Integer> BOWGUN = new LinkedList<>();
         public static List<Integer> CANNON = new LinkedList<>();*/
        public static List<Integer> ALL = new LinkedList<>();
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {
        MapleItemInformationProvider provider = MapleItemInformationProvider.getInstance();
        for (Pair<Integer, String> iteminfo : provider.getAllItems2()) {
            int id = iteminfo.getLeft();
            /*switch (id / 10000) {
             case ItemType.HAT:
             Lists.HAT.add(id);
             break;
             case ItemType.FACE:
             Lists.FACE.add(id);
             break;
             case ItemType.EYE:
             Lists.EYE.add(id);
             break;
             case ItemType.EARRING:
             Lists.EARRING.add(id);
             break;
             case ItemType.TOP:
             Lists.TOP.add(id);
             break;
             case ItemType.OVERALL:
             Lists.OVERALL.add(id);
             break;
             case ItemType.BOTTOM:
             Lists.BOTTOM.add(id);
             break;
             case ItemType.SHOES:
             Lists.SHOES.add(id);
             break;
             case ItemType.GLOVE:
             Lists.GLOVE.add(id);
             break;
             case ItemType.SHIELD:
             Lists.SHIELD.add(id);
             break;
             case ItemType.CAPE:
             Lists.CAPE.add(id);
             break;
             case ItemType.RING:
             Lists.RING.add(id);
             break;
             case ItemType.PENDANT:
             Lists.PENDANT.add(id);
             break;
             case ItemType.BELT:
             Lists.BELT.add(id);
             break;
             case ItemType.MEDAL:
             Lists.MEDAL.add(id);
             break;
             case ItemType.SHOULDER:
             Lists.SHOULDER.add(id);
             break;
             case ItemType.POCKET:
             Lists.POCKET.add(id);
             break;
             case ItemType.BADGE:
             Lists.BADGE.add(id);
             break;
             case ItemType.MOUNT:
             Lists.MOUNT.add(id);
             break;
             case ItemType.SADDLE:
             Lists.SADDLE.add(id);
             break;
             case WeaponType.ROD:
             Lists.ROD.add(id);
             break;
             case WeaponType.SOULSHOOTER:
             Lists.SOULSHOOTER.add(id);
             break;
             case WeaponType.ONESWORD:
             Lists.ONESWORD.add(id);
             break;
             case WeaponType.ONEAXE:
             Lists.ONEAXE.add(id);
             break;
             case WeaponType.ONEMACE:
             Lists.ONEMACE.add(id);
             break;
             case WeaponType.DAGGER:
             Lists.DAGGER.add(id);
             break;
             case WeaponType.KATARA:
             Lists.KATARA.add(id);
             break;
             case WeaponType.SUBWEP:
             Lists.SUBWEP.add(id);
             break;
             case WeaponType.CANE:
             Lists.CANE.add(id);
             break;
             case WeaponType.WAND:
             Lists.WAND.add(id);
             break;
             case WeaponType.STAFF:
             Lists.STAFF.add(id);
             break;
             case WeaponType.NOWEP:
             Lists.NOWEP.add(id);
             break;
             case WeaponType.TWOSWORD:
             Lists.TWOSWORD.add(id);
             break;
             case WeaponType.TWOAXE:
             Lists.TWOAXE.add(id);
             break;
             case WeaponType.TWOMACE:
             Lists.TWOMACE.add(id);
             break;
             case WeaponType.SPEAR:
             Lists.SPEAR.add(id);
             break;
             case WeaponType.POLEARM:
             Lists.POLEARM.add(id);
             break;
             case WeaponType.BOW:
             Lists.BOW.add(id);
             break;
             case WeaponType.CROSSBOW:
             Lists.CROSSBOW.add(id);
             break;
             case WeaponType.CLAW:
             Lists.CLAW.add(id);
             break;
             case WeaponType.KNUCKLE:
             Lists.KNUCKLE.add(id);
             break;
             case WeaponType.GUN:
             Lists.GUN.add(id);
             break;
             case WeaponType.SHOVEL:
             Lists.SHOVEL.add(id);
             break;
             case WeaponType.PICKAXE:
             Lists.PICKAXE.add(id);
             break;
             case WeaponType.BOWGUN:
             Lists.BOWGUN.add(id);
             break;
             case WeaponType.CANNON:
             Lists.CANNON.add(id);
             break;
             }*/
            if ((id / 10000 >= 100 && id / 10000 <= 153) || id / 10000 == 190 || id / 10000 == 191) {
                Lists.ALL.add(id);
            }
        }
        createSQLQuery();
    }

    public static void createSQLQuery() throws FileNotFoundException, IOException {
        FileOutputStream out;
        out = new FileOutputStream("AIO.txt", false);
        StringBuilder sb = new StringBuilder();
        for (int id = 100; id <= 153; id++) { //weps and items
            addLine(sb, "INSERT INTO `shops` (`shopid`, `npcid`) VALUES ('" + id * 1000 + "', '9900002');");
        }
        addLine(sb, "INSERT INTO `shops` (`shopid`, `npcid`) VALUES ('" + 190 * 1000 + "', '9900002');"); //mounts
        addLine(sb, "INSERT INTO `shops` (`shopid`, `npcid`) VALUES ('" + 191 * 1000 + "', '9900002');"); //saddles
        /*if (!Lists.HAT.isEmpty()) {
         for (int id : Lists.HAT) {
         addLine(sb, "INSERT INTO `shopitems` (`shopid`, `itemid`, `price`, `position`, `reqitem`, `reqitemq`, `rank`, `buyable`, `category`, `minLevel`, `expiration`) VALUES ('" + ItemType.HAT + "', '" + id + "', '" + getPrice(id) + "', '0', '0', '0', '0', '0', '0', '0', '0');");
         }
         }*/
        if (!Lists.ALL.isEmpty()) {
            for (int id : Lists.ALL) {
                addLine(sb, "INSERT INTO `shopitems` (`shopid`, `itemid`, `price`, `position`, `reqitem`, `reqitemq`, `rank`, `buyable`, `category`, `minLevel`, `expiration`) VALUES ('" + id / 10000 * 1000 + "', '" + id + "', '" + getPrice(id) + "', '0', '0', '0', '0', '0', '0', '0', '0');");
            }
        }
        //System.out.println(sb.toString());
        System.out.println("Success");
        out.write(sb.toString().getBytes());
    }

    /*
     INSERT INTO `shops` (`npcid`) VALUES ('" + id + "');
     INSERT INTO `shopitems` (`shopid`, `itemid`, `price`, `position`, `reqitem`, `reqitemq`, `rank`, `buyable`, `category`, `minLevel`, `expiration`) VALUES ('100', '1002000', '1', '0', '0', '0', '0', '0', '0', '0', '0');
     */
    public static void addLine(StringBuilder sb, String string) {
        sb.append(string).append("\r\n");
    }

    public static int getPrice(int id) {
        /*MapleItemInformationProvider provider = MapleItemInformationProvider.getInstance();
         int level = provider.getEquipStats(id).get("reqLevel");
         if (level < 100) { //example for price by level
         return 1;
         }*/
        return 1;
    }
}
