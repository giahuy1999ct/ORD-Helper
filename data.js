var data = {}
var root  = './img/';
var hierachyLevelMapping ={
    0: 'common',
    1: 'common',
    2: 'uncommon',
    3: 'special',
    4: 'rare'
}

/**------------------Common Unit------------------- */
var common_folder = root + "Common/";
var common_unit = [
    {
        id: 0,
        name: "Wisp",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [],
        hierachyLevel: 0,
        upstream: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    },
    {
        id: 1,
        name: "Luffy",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 2,
        name: "Zoro",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 3,
        name: "Nami",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 4,
        name: "Usopp",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 5,
        name: "Sanji",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 6,
        name: "Chopper",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 7,
        name: "Buggy",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 8,
        name: "Gunman",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },
    {
        id: 9,
        name: "Swordman",
        unit: 0,
        get img() {
            return common_folder + this.name;
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        hierachyLevel: 1,
    },

];
data.common = common_unit
/*  -----------------Common Unit------------------ */


/**------------------------------------------------- */
var uncommon_folder = root + "Uncommon/"
var uncommon_unit = [
    {
        id: 10,
        name: "Blueno",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 8, amount: 2 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 11,
        name: "Fukuro",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 9, amount: 2 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 12,
        name: "Nico Robin",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 5, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 13,
        name: "Bepo",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 6, amount: 1 },
        ],
        hierachyLevel: 2,

    },
    {
        id: 14,
        name: "Brook",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 6, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 15,
        name: "Ace",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 8, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 16,
        name: "Inazuma",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 5, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 17,
        name: "Sniper King",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 4, amount: 2 }
        ],
        hierachyLevel: 2,
    },
    {
        id: 18,
        name: "Chopper Rumble",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 6, amount: 2 }
        ],
        hierachyLevel: 2,
    },
    {
        id: 19,
        name: "Tashigi",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 8, amount: 1 },
            { id: 9, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 20,
        name: "Perona",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 7, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 21,
        name: "Franky",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 4, amount: 1 },
        ],
        hierachyLevel: 2,
    },
    {
        id: 22,
        name: "Hatchan",
        unit: 0,
        get img() {
            return uncommon_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 8, amount: 1 },
        ],
        hierachyLevel: 2,
    }
]
data.uncommon = uncommon_unit
/**----------------------------------------------- */


/**---------------------------------------------- */
var special_folder = root + "Special/"
var special_unit = [
    {
        id: 23,
        name: "Capone Bege",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 11, amount: 1 },
            { id: 7, amount: 1 },
            { id: 8, amount: 1 },
        ],
        hierachyLevel: 3,
    },
    {
        id: 24,
        name: "Buggy",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 3 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 25,
        name: "GOD Enel",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 13, amount: 1 },
            { id: 17, amount: 1 },
            { id: 5, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 26,
        name: "Geckko Moria",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 5, amount: 1 },
            { id: 14, amount: 2 },
        ],
        hierachyLevel: 3,
    },
    {
        id: 27,
        name: "Nami Clima - Tact",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 3 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 28,
        name: "Robin Ohara",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 12, amount: 2 },
            { id: 6, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 29,
        name: "Trafalgar Law",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 13, amount: 1 },
            { id: 19, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 30,
        name: "Rob Lucci",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 11, amount: 1 },
            { id: 12, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 31,
        name: "Luffy Gear Second",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 3 },
        ],
        hierachyLevel: 3,
    },
    {
        id: 32,
        name: "Marco",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 5, amount: 1 },
            { id: 10, amount: 1 },
            { id: 15, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 33,
        name: "Basil Hawkins",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 4, amount: 1 },
            { id: 10, amount: 1 },
            { id: 20, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 34,
        name: "Bon Clay",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 12, amount: 1 },
            { id: 16, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 35,
        name: "Sanji",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 5, amount: 3 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 36,
        name: "Smoker",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 8, amount: 1 },
            { id: 9, amount: 1 },
            { id: 19, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 37,
        name: "Squard",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 18, amount: 1 },
            { id: 21, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 38,
        name: "Arlong",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 22, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 39,
        name: "Absalom",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 0, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 40,
        name: "Ace",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 4, amount: 1 },
            { id: 15, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 41,
        name: "Usopp Fire Ball",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 17, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 42,
        name: "Inazuma",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 16, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 43,
        name: "Zoro Asura",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 3 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 44,
        name: "Jinbe",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 11, amount: 1 },
            { id: 15, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 45,
        name: "Chaka",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 6, amount: 1 },
            { id: 10, amount: 1 },
            { id: 11, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 46,
        name: "Chopper - Brain Point",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 12, amount: 1 },
            { id: 18, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 47,
        name: "Chopper - Guard Point",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 9, amount: 1 },
            { id: 16, amount: 1 },
            { id: 18, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 48,
        name: "Captain Kuro",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 9, amount: 1 },
            { id: 22, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 49,
        name: "Kuma Bartholomew",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 13, amount: 1 },
            { id: 21, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 50,
        name: "Crocodile",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 17, amount: 1 },
            { id: 21, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 51,
        name: "Eustass Kid",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 13, amount: 1 },
            { id: 20, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 52,
        name: "Killer",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 14, amount: 1 },
            { id: 19, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 53,
        name: "Franky Pirate Docking 5",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 21, amount: 2 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 54,
        name: "Helmeppo",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 5, amount: 1 },
            { id: 14, amount: 1 }
        ],
        hierachyLevel: 3,
    },
    {
        id: 55,
        name: "X-Drake",
        unit: 0,
        get img() {
            return special_folder + this.name;
        },
        recipe: [
            { id: 6, amount: 1 },
            { id: 11, amount: 1 },
            { id: 19, amount: 1 }
        ],
        hierachyLevel: 3,
    },
]
data.special = special_unit
/**---------------------------------------------- */

/**----------------Rare Unit--------------- */
var rare_folder = root + "Rare/";
var rare_unit = [
    {
        id: 56,
        name: "Wyper",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 35, amount: 1 },
            { id: 41, amount: 1 }
        ],
        hierachyLevel: 4,
    },
    {
        id: 57,
        name: "Monkey D. Garp",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 31, amount: 1 },
            { id: 36, amount: 1 },
            { id: 55, amount: 1 }
        ],
        hierachyLevel: 4,
    },
    {
        id: 58,
        name: "Blackbeard",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 37, amount: 1 },
            { id: 40, amount: 1 },
            { id: 55, amount: 1 }
        ],
        note: "(Marshall D. Teach)",
        hierachyLevel: 4,
    },
    {
        id: 59,
        name: "Doflamingo",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 30, amount: 1 },
            { id: 47, amount: 1 }
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 60,
        name: "Trafalgar Law",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 46, amount: 1 },
            { id: 53, amount: 1 }
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 61,
        name: "Luffy Gear Third",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 31, amount: 1 },
            { id: 34, amount: 1 }
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 62,
        name: "Ryuma",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 26, amount: 1 },
            { id: 43, amount: 1 },
            { id: 17, amount: 1 },
            { id: 20, amount: 1 },
            { id: 9, amount: 1 }
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 63,
        name: "Marco",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 32, amount: 1 },
            { id: 45, amount: 1 },
            { id: 47, amount: 1 },
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 64,
        name: "Magellan",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 40, amount: 1 },
            { id: 44, amount: 1 },
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 65,
        name: "Momonga",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 36, amount: 1 },
            { id: 44, amount: 1 },
            { id: 54, amount: 1 },
        ],
        note: "",
        hierachyLevel: 4,
    },
    {
        id: 66,
        name: "Mihawk",
        unit: 0,
        get img() {
            return rare_folder + this.name;
        },
        recipe: [
            { id: 43, amount: 1 },
            { id: 48, amount: 1 },
            { id: 55, amount: 1 },
        ],
        note: "",
        hierachyLevel: 4,
    },
]

data.rare = rare_unit