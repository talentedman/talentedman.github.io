

const pkRecommendArray = [
    {
        enemyList: ['潮汐', '全能骑士', '巨魔', '幻影刺客', '舞姬'],
        recommengList: [
            ['潮汐', '全能骑士', '幻影刺客', '死亡先知', '冰女']
        ]
    }
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
    return [];
}