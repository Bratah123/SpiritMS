/*
 Maple Team ProJect
 제작 용도 : 서버운영용
 팀원목록
 * 강동원 dongwon1852@nate.com 
 * 김선일 fileupload@nate.com
 * 김석현 azxcs3@nate.com
 * 김진성 m0nday_s@nate.com
 * 공준협 kkong1001@nate.com
 * 김민호 rubystory0603@nate.com
 * 이재왕 ejwj5592@nate.com
 * 최용재 virgo_s_t@nate.com
 * 서성덕 abq1239@nate.com
 */

package server.life;

import java.awt.Point;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.Pair;

public class MobSkillFactory {

    private static Map<Pair<Integer, Integer>, MobSkill> mobSkills = new HashMap<>();
    private static MapleDataProvider dataSource = MapleDataProviderFactory.getDataProvider(new File("wz/Skill.wz"));
    private static final MapleData skillRoot = dataSource.getData("MobSkill.img");

    public static MobSkill getMobSkill(int skillId, int level) {
        MobSkill ret = mobSkills.get(new Pair<>(Integer.valueOf(skillId), Integer.valueOf(level)));
        if (ret != null) {
            return ret;
        }

        final MapleData skillData = skillRoot.getChildByPath(skillId + "/level/" + level);
        if (skillData != null) {
            List<Integer> toSummon = new ArrayList<>();
            for (int i = 0; i > -1; i++) {
                if (skillData.getChildByPath(String.valueOf(i)) == null) {
                    break;
                }
                toSummon.add(MapleDataTool.getInt(skillData.getChildByPath(String.valueOf(i)), 0));
            }
            final MapleData ltd = skillData.getChildByPath("lt");
            Point lt = null;
            Point rb = null;
            if (ltd != null) {
                lt = (Point) ltd.getData();
                rb = (Point) skillData.getChildByPath("rb").getData();
            }
            ret = new MobSkill(skillId, level);
            ret.addSummons(toSummon);
            ret.setCoolTime(MapleDataTool.getInt("interval", skillData, 0) * 1000);
            ret.setDuration(MapleDataTool.getInt("time", skillData, 0) * 1000);
            ret.setHp(MapleDataTool.getInt("hp", skillData, 100));
            ret.setMpCon(MapleDataTool.getInt(skillData.getChildByPath("mpCon"), 0));
            ret.setSpawnEffect(MapleDataTool.getInt("summonEffect", skillData, 0));
            ret.setX(MapleDataTool.getInt("x", skillData, 1));
            ret.setY(MapleDataTool.getInt("y", skillData, 1));
            ret.setProp(MapleDataTool.getInt("prop", skillData, 100) / 100);
            ret.setLimit((short) MapleDataTool.getInt("limit", skillData, 0));
            ret.setLtRb(lt, rb);

            MobSkill put = mobSkills.put(new Pair<>(skillId, Integer.valueOf(level)), ret);
        }
        return ret;
    }
}