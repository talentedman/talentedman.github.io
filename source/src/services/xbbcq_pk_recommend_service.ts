import { HeroName } from "./xbbcq_service";

interface PkRecommend {
    enemyList: HeroName[];
    recommengList: HeroName[][];
}

const pkRecommendArray: PkRecommend[] = [
    {
        enemyList: ['潮汐', '全能骑士', '巨魔', '幻影刺客', '舞姬'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '巨魔', '舞姬', '白虎', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '巨魔', '美杜莎', '白虎', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '幻影刺客', '美杜莎', '白虎', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '敌法', '幻影刺客', '白虎', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '灰烬之灵', '美杜莎', '圣堂刺客', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['尸王', '全能骑士', '末日', '巫妖', '冰女'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['骨王', '灰烬之灵', '圣堂刺客', '白虎', '小黑'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['潮汐', '全能骑士', '灵魂守卫', '神灵武士', '小黑'],
        recommengList: [
            ['尸王', '末日', '舞姬', '巫妖', '天怒法师']
        ]
    },
    {
        enemyList: ['骨王', '末日', '巨魔', '幻影刺客', '舞姬'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    },
    {
        enemyList: ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女'],
        recommengList: [
            ['骨王', '末日', '幻影刺客', '白虎', '小黑']
        ]
    },
]

// 判断两个数组的元素是不是一样的，即使顺序不一样
function isSameArray(array1: string[], array2: string[]) {
    if (array1.length!== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) return false;
    }
    return true;
}

export function findRecommendList(inputEnemyList: string[]) {
    for (let i = 0; i < pkRecommendArray.length; i++) {
        const enemyList = pkRecommendArray[i].enemyList;
        if (isSameArray(inputEnemyList, enemyList)) {
            return pkRecommendArray[i].recommengList;
        }
    }
    return [[]];
}