/*
 * This file is part of the OdinMS MapleStory Private Server
 * Copyright (C) 2012 Patrick Huy and Matthias Butz
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation= 0, either version 3 of the License= 0, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not= 0, see <http://www.gnu.org/licenses/>.
 */
package server;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author AlphaEta
 */
public class StructItemOption {

    public byte incSTR;
    public byte incDEX;
    public byte incINT;
    public byte incLUK;
    public byte incACC;
    public byte incEVA;
    public byte incSpeed;
    public byte incJump;
    public byte incPAD;
    public byte incMAD;
    public byte incPDD;
    public byte incMDD;
    public byte prop;
    public byte time;
    public byte incSTRr;
    public byte incDEXr;
    public byte incINTr;
    public byte incLUKr;
    public byte incMHPr;
    public byte incMMPr;
    public byte incACCr;
    public byte incEVAr;
    public byte incPADr;
    public byte incMADr;
    public byte incPDDr;
    public byte incMDDr;
    public byte incCr;
    public byte incDAMr;
    public byte RecoveryHP;
    public byte RecoveryMP;
    public byte HP;
    public byte MP;
    public byte level;
    public byte ignoreTargetDEF;
    public byte ignoreDAM;
    public byte DAMreflect;
    public byte mpconReduce;
    public byte mpRestore;
    public byte incMesoProp;
    public byte incRewardProp;
    public byte incAllskill;
    public byte ignoreDAMr;
    public byte RecoveryUP;
    public byte reduceCooltime;
    public boolean boss;
    public short incMHP;
    public short incMMP;
    public short attackType;
    public int optionType;
    public int reqLevel;
    public int weight;
    public int potentialID;
    public int skillID;
    public String face;
    public String string;
    public Map<String, Integer> data = new HashMap<>();

    public int get(final String type) {
        return data.get(type) != null ? data.get(type) : 0;
    }

    @Override
    public final String toString() {
        final StringBuilder ret = new StringBuilder();
        if (incMesoProp > 0) {
            ret.append("Meso Drop Rate ");
            ret.append(incMesoProp);
            ret.append("%");
            ret.append(" ");
        }
        if (incRewardProp > 0) {
            ret.append("Item Drop Rate ");
            ret.append(incRewardProp);
            ret.append("%");
            ret.append(" ");
        }
        if (prop > 0) {
            ret.append("Probability(not coded): ");
            ret.append(prop);
            ret.append(" ");
        }
        if (time > 0) {
            ret.append("Duration(not coded): ");
            ret.append(time);
            ret.append(" ");
        }
        if (attackType > 0) {
            ret.append("Attack Type(not coded): ");
            ret.append(attackType);
            ret.append(" ");
        }
        if (incAllskill > 0) {
            ret.append("Gives ALL SKILLS: ");
            ret.append(incAllskill);
            ret.append(" ");
        }
        if (skillID > 0) {
            ret.append("Gives SKILL: ");
            ret.append(skillID);
            ret.append(" ");
        }
        if (boss) {
            ret.append("Boss Damage ");
        }
        if (face.length() > 0) {
            ret.append("Face Expression: ");
            ret.append(face);
            ret.append(" ");
        }
        if (RecoveryUP > 0) {
            ret.append("Gives Recovery % on potions: ");
            ret.append(RecoveryUP);
            ret.append(" ");
        }
        if (DAMreflect > 0) {
            ret.append("Reflects Damage when Hit: ");
            ret.append(DAMreflect);
            ret.append(" ");
        }
        if (mpconReduce > 0) {
            ret.append("Reduces MP Needed for skills: ");
            ret.append(mpconReduce);
            ret.append(" ");
        }
        if (ignoreTargetDEF > 0) {
            ret.append("Ignores Monster DEF ");
            ret.append(ignoreTargetDEF);
            ret.append("%");
            ret.append(" ");
        }
        if (RecoveryHP > 0) {
            ret.append("Recovers HP: ");
            ret.append(RecoveryHP);
            ret.append(" ");
        }
        if (RecoveryMP > 0) {
            ret.append("Recovers MP: ");
            ret.append(RecoveryMP);
            ret.append(" ");
        }
        if (HP > 0) {
            ret.append("Recovers HP: ");
            ret.append(HP);
            ret.append(" ");
        }
        if (MP > 0) {
            ret.append("Recovers MP: ");
            ret.append(MP);
            ret.append(" ");
        }
        if (mpRestore > 0) {
            ret.append("Recovers MP: ");
            ret.append(mpRestore);
            ret.append(" ");
        }
        if (ignoreDAM > 0) {
            ret.append("Ignores Monster Damage +");
            ret.append(ignoreDAM);
            ret.append(" ");
        }
        if (ignoreDAMr > 0) {
            ret.append("Ignores Monster Damage ");
            ret.append(ignoreDAMr);
            ret.append("%");
            ret.append(" ");
        }
        if (incMHP > 0) {
            ret.append("HP +");
            ret.append(incMHP);
            ret.append(" ");
        }
        if (incMMP > 0) {
            ret.append("MP +");
            ret.append(incMMP);
            ret.append(" ");
        }
        if (incMHPr > 0) {
            ret.append("HP ");
            ret.append(incMHPr);
            ret.append("%");
            ret.append(" ");
        }
        if (incMMPr > 0) {
            ret.append("MP ");
            ret.append(incMMPr);
            ret.append("%");
            ret.append(" ");
        }
        if (incSTR > 0 && incLUK <= 0 && incDEX <= 0 && incINT <= 0) {
            ret.append("STR +");
            ret.append(incSTR);
            ret.append(" ");
        }
        if (incDEX > 0 && incLUK <= 0 && incSTR <= 0 && incINT <= 0) {
            ret.append("DEX +");
            ret.append(incDEX);
            ret.append(" ");
        }
        if (incINT > 0 && incLUK <= 0 && incDEX <= 0 && incSTR <= 0) {
            ret.append("INT +");
            ret.append(incINT);
            ret.append(" ");
        }
        if (incLUK > 0 && incSTR <= 0 && incDEX <= 0 && incINT <= 0) {
            ret.append("LUK +");
            ret.append(incLUK);
            ret.append(" ");
        }
        if (incACC > 0) {
            ret.append("ACC +");
            ret.append(incACC);
            ret.append(" ");
        }
        if (incEVA > 0) {
            ret.append("Avoidability +");
            ret.append(incEVA);
            ret.append(" ");
        }
        if (incSpeed > 0) {
            ret.append("Speed +");
            ret.append(incSpeed);
            ret.append(" ");
        }
        if (incJump > 0) {
            ret.append("Jump +");
            ret.append(incJump);
            ret.append(" ");
        }
        if (incPAD > 0) {
            ret.append("ATT +");
            ret.append(incPAD);
            ret.append(" ");
        }
        if (incMAD > 0) {
            ret.append("Magic ATT +");
            ret.append(incMAD);
            ret.append(" ");
        }
        if (incPDD > 0) {
            ret.append("DEF +");
            ret.append(incPDD);
            ret.append(" ");
        }
        if (incMDD > 0) {
            ret.append("Magic DEF +");
            ret.append(incMDD);
            ret.append(" ");
        }
        if (incSTRr > 0 && incLUKr <= 0 && incDEXr <= 0 && incINTr <= 0) {
            ret.append("STR ");
            ret.append(incSTRr);
            ret.append("%");
            ret.append(" ");
        }
        if (incDEXr > 0 && incLUKr <= 0 && incSTRr <= 0 && incINTr <= 0) {
            ret.append("DEX ");
            ret.append(incDEXr);
            ret.append("%");
            ret.append(" ");
        }
        if (incINTr > 0 && incLUKr <= 0 && incDEXr <= 0 && incSTRr <= 0) {
            ret.append("INT ");
            ret.append(incINTr);
            ret.append("%");
            ret.append(" ");
        }
        if (incLUKr > 0 && incSTRr <= 0 && incDEXr <= 0 && incINTr <= 0) {
            ret.append("LUK ");
            ret.append(incLUKr);
            ret.append("%");
            ret.append(" ");
        }
        if (incACCr > 0) {
            ret.append("ACC ");
            ret.append(incACCr);
            ret.append("%");
            ret.append(" ");
        }
        if (incEVAr > 0) {
            ret.append("Avoidability ");
            ret.append(incEVAr);
            ret.append("%");
            ret.append(" ");
        }
        if (incPADr > 0) {
            ret.append("ATT ");
            ret.append(incPADr);
            ret.append("%");
            ret.append(" ");
        }
        if (incMADr > 0) {
            ret.append("Magic ATT ");
            ret.append(incMADr);
            ret.append("%");
            ret.append(" ");
        }
        if (incPDDr > 0) {
            ret.append("DEF ");
            ret.append(incPDDr);
            ret.append("%");
            ret.append(" ");
        }
        if (incMDDr > 0) {
            ret.append("Magic DEF ");
            ret.append(incMDDr);
            ret.append("%");
            ret.append(" ");
        }
        if (incCr > 0) {
            ret.append("Critical ");
            ret.append(incCr);
            ret.append("%");
            ret.append(" ");
        }
        if (incDAMr > 0) {
            ret.append("Total Damage ");
            ret.append(incDAMr);
            ret.append("%");
            ret.append(" ");
        }
        if (level > 0) {
            ret.append("Level: ");
            ret.append(level);
            ret.append(" ");
        }
        if(incSTRr > 0 && incINTr > 0 && incLUKr > 0 && incDEXr > 0)
        {
            ret.append("All Stat ");
            ret.append(incSTRr);
            ret.append("%");
            ret.append(" ");
        }
        if(incSTR > 0 && incLUK > 0 && incDEX > 0 && incINT > 0)
        {
            ret.append("All Stat +");
            ret.append(incSTR);
            ret.append(" ");
        }
        return ret.toString();
    }
}
