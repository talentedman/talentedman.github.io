export type HeroName = '潮汐' | '斧王' | '船长' | '屠芙' | '小小' | '刚被猪' | '人马' | '尸王' | '发条' | '黑暗骑士' | '骨王' | '酒仙' | '战神' | '狼人' | '神牛' | '全能骑士' | '末日' | '大鱼人' | '灰烬之灵' | '军团指挥' | '海民' | '神灵武士' | '小精灵' | '凤凰'
| '蓝胖' | '死亡先知' | '双头龙' | '舞姬' | '巫妖' | '宙斯' | '修补匠' | '冰女' | '骨法' | '恶魔巫师' | '天怒法师' | '术士' | '黑鸟' | '火女' | '沉默' | '暗牧' | '痛苦女王' | '德鲁伊' | '风行' | '小鹿' | '巫医' | '光法'
| '白银刺客' | '云游武僧' | '敌法' | '拍拍熊' | '剑圣' | '电魂' | '灵魂守卫' | '小娜迦' | '猴子' | '巨魔' | '影魔' | '幻影刺客' | '美杜莎' | '月骑' | '圣堂刺客' | '复仇' | '白虎' | '育母蜘蛛' | '小黑' | '骨弓' | '亚龙' | '火枪';

export interface Hero {
    name: HeroName;
    name2: string;
    name3?: string;
    name4?: string;
    imgName: string;
    order: number;
}

export const powerHeroArray: Hero[] = [
    {
        name: '潮汐',
        name2: 'cx',
        imgName: 'TH.jpg',
        order: 0,
    },
    {
        name: '斧王',
        name2: 'fw',
        imgName: 'Axe.jpg',
        order: 10,
    },
    {
        name: '船长',
        name2: 'cz',
        imgName: 'Coco.jpg',
        order: 20,
    },
    {
        name: '屠芙',
        name2: 'tf',
        imgName: 'Pudge.jpg',
        order: 30,
    },
    {
        name: '小小',
        name2: 'xx',
        imgName: 'Tiny.jpg',
        order: 40,
    },
    {
        name: '刚被猪',
        name2: 'gbz',
        imgName: 'BB.jpg',
        order: 50,
    },
    {
        name: '人马',
        name2: 'rm',
        imgName: 'CW.jpg',
        order: 60,
    },
    {
        name: '尸王',
        name2: 'sw',
        imgName: 'UD.jpg',
        order: 90,
    },
    {
        name: '发条',
        name2: 'ft',
        imgName: 'CG.jpg',
        order: 100,
    },
    {
        name: '黑暗骑士',
        name2: 'haqs',
        imgName: 'LOA.jpg',
        order: 110,
    },
    {
        name: '骨王',
        name2: 'gw',
        imgName: 'SNK.jpg',
        order: 120,
    },
    {
        name: '酒仙',
        name2: 'jx',
        name3: '熊猫',
        name4: 'xm',
        imgName: 'Panda.jpg',
        order: 130,
    },
    {
        name: '战神',
        name2: 'zs',
        imgName: 'TitanMars.jpg',
        order: 140,
    },
    {
        name: '狼人',
        name2: 'lr',
        imgName: 'LYC.jpg',
        order: 170,
    },
    {
        name: '神牛',
        name2: 'sn',
        imgName: 'ES.jpg',
        order: 180,
    },
    {
        name: '全能骑士',
        name2: 'qnqs',
        imgName: 'OK.jpg',
        order: 190,
    },
    {
        name: '末日',
        name2: 'mr',
        name3: 'doom',
        imgName: 'DOOM.jpg',
        order: 220,
    },
    {
        name: '大鱼人',
        name2: 'dyr',
        imgName: 'SG.jpg',
        order: 230,
    },
    {
        name: '灰烬之灵',
        name2: 'hjzl',
        name3: '火猫',
        name4: 'hm',
        imgName: 'EM.jpg',
        order: 270,
    },
    {
        name: '军团指挥',
        name2: 'jtzh',
        imgName: 'LC.jpg',
        order: 280,
    },
    {
        name: '海民',
        name2: 'hm',
        imgName: 'Tusk.jpg',
        order: 310,
    },
    {
        name: '神灵武士',
        name2: 'slws',
        imgName: 'Huskar.jpg',
        order: 360,
    },
    {
        name: '小精灵',
        name2: 'xjl',
        imgName: 'IO.jpg',
        order: 370,
    },
    {
        name: '凤凰',
        name2: 'fh',
        imgName: 'Phoenix.jpg',
        order: 480,
    },
]

export const intelligenceHeroArray: Hero[] = [
    {
        name: '蓝胖',
        name2: 'lp',
        imgName: 'OM.jpg',
        order: 160,
    },
    {
        name: '死亡先知',
        name2: 'swxz',
        imgName: 'DP.jpg',
        order: 330,
    },
    {
        name: '双头龙',
        name2: 'stl',
        imgName: 'THD.jpg',
        order: 340,
    },
    {
        name: '舞姬',
        name2: 'wj',
        imgName: 'Dancer.jpg',
        order: 350,
    },
    {
        name: '巫妖',
        name2: 'wy',
        imgName: 'Lich.jpg',
        order: 380,
    },
    {
        name: '宙斯',
        name2: 'zs',
        imgName: 'Zeus.jpg',
        order: 390,
    },
    {
        name: '修补匠',
        name2: 'xbj',
        name3: 'tk',
        imgName: 'TK.jpg',
        order: 400,
    },
    {
        name: '冰女',
        name2: 'bn',
        imgName: 'CM.jpg',
        order: 420,
    },
    {
        name: '骨法',
        name2: 'gf',
        imgName: 'Pugna.jpg',
        order: 430,
    },
    
    {
        name: '恶魔巫师',
        name2: 'emws',
        imgName: 'Lion.jpg',
        order: 440,
    },
    {
        name: '天怒法师',
        name2: 'tnfs',
        imgName: 'SM.jpg',
        order: 450,
    },
    {
        name: '术士',
        name2: 'ss',
        imgName: 'WL.jpg',
        order: 460,
    },
    {
        name: '黑鸟',
        name2: 'hn',
        imgName: 'OD.jpg',
        order: 470,
    },
    {
        name: '火女',
        name2: 'hn',
        imgName: 'Lina.jpg',
        order: 490,
    },
    {
        name: '沉默',
        name2: 'cm',
        imgName: 'Sil.jpg',
        order: 500,
    },
    {
        name: '暗牧',
        name2: 'am',
        imgName: 'SP.jpg',
        order: 510,
    },
    {
        name: '痛苦女王',
        name2: 'tknw',
        imgName: 'QOP.jpg',
        order: 530,
    },
    {
        name: '德鲁伊',
        name2: 'dly',
        imgName: 'TitanDruid.jpg',
        order: 540,
    },
    {
        name: '风行',
        name2: 'fx',
        imgName: 'WR.jpg',
        order: 560,
    },
    {
        name: '小鹿',
        name2: 'xl',
        imgName: 'Ench.jpg',
        order: 570,
    },
    {
        name: '巫医',
        name2: 'wy',
        imgName: 'WD.jpg',
        order: 580,
    },
    {
        name: '光法',
        name2: 'gf',
        imgName: 'KOTL.jpg',
        order: 620,
    },
]

export const agileHeroArray: Hero[] = [
    {
        name: '白银刺客',
        name2: 'byck',
        imgName: 'Nana.jpg',
        order: 70,
    },
    {
        name: '云游武僧',
        name2: 'yyws',
        imgName: 'Monk.jpg',
        order: 80,
    },
    {
        name: '敌法',
        name2: 'df',
        imgName: 'AM.jpg',
        order: 150,
    },
    {
        name: '拍拍熊',
        name2: 'ppx',
        imgName: 'Ursa.jpg',
        order: 200,
    },
    {
        name: '剑圣',
        name2: 'js',
        imgName: 'JUGG.jpg',
        order: 210,
    },
    {
        name: '电魂',
        name2: 'dh',
        imgName: 'Razor.jpg',
        order: 240,
    },
    {
        name: '灵魂守卫',
        name2: 'lhsw',
        name3: 'tb',
        imgName: 'TB.jpg',
        order: 250,
    },
    {
        name: '小娜迦',
        name2: 'xnj',
        imgName: 'Naga.jpg',
        order: 260,
    },
    {
        name: '猴子',
        name2: 'hz',
        imgName: 'Lancer.jpg',
        order: 290,
    },
    {
        name: '巨魔',
        name2: 'jm',
        imgName: 'Troll.jpg',
        order: 300,
    },
    {
        name: '影魔',
        name2: 'ym',
        imgName: 'SF.jpg',
        order: 320,
    },
    {
        name: '幻影刺客',
        name2: 'hyck',
        name3: 'pa',
        imgName: 'PA.jpg',
        order: 325,
    },
    {
        name: '美杜莎',
        name2: 'mds',
        name3: '一姐',
        name4: 'yj',
        imgName: 'Med.jpg',
        order: 410,
    },
    {
        name: '月骑',
        name2: 'yq',
        imgName: 'Luna.jpg',
        order: 505,
    },
    {
        name: '圣堂刺客',
        name2: 'stck',
        name3: 'ta',
        imgName: 'TA.jpg',
        order: 520,
    },
    {
        name: '复仇',
        name2: 'fc',
        imgName: 'VS.jpg',
        order: 550,
    },
    {
        name: '白虎',
        name2: 'bh',
        imgName: 'POM.jpg',
        order: 590,
    },
    {
        name: '育母蜘蛛',
        name2: 'ymzz',
        imgName: 'BR.jpg',
        order: 600,
    },
    {
        name: '小黑',
        name2: 'xh',
        imgName: 'DR.jpg',
        order: 610,
    },
    {
        name: '骨弓',
        name2: 'gg',
        imgName: 'Bone.jpg',
        order: 630,
    },
    {
        name: '亚龙',
        name2: 'yl',
        imgName: 'Viper.jpg',
        order: 640,
    },
    {
        name: '火枪',
        name2: 'hq',
        imgName: 'Sniper.jpg',
        order: 650,
    },
    // {
    //     name: '死灵法师',
    //     name2: 'slfs',
    //     imgName: 'NEC.jpg',
    // },
]

export const heroArray = [
    ...powerHeroArray,
   ...intelligenceHeroArray,
   ...agileHeroArray,
]

export const orderHeroArray = heroArray.sort((a, b) => a.order - b.order)

export function findHeroImg(heroName: string) {
    const hero = heroArray.find(hero => hero.name === heroName)
    return hero!.imgName;
}
