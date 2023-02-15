var data = {}
var root  = './img/';
var idTypeMapping ={
    0: 'common',
    1: 'common',
    2: 'uncommon',
    3: 'special',
    4: 'rare',
    5: 'legend',
    6: 'etc',
    7: 'hidden',
    8: 'alternate',
    9: 'transcendent',
    10: 'immortal',
    11: 'limited',
    12: 'eternal',
    13: "random",
    14: "another"
}

/**------------------Common Unit------------------- */
var common_folder = root + "Common/";
var common_unit = [
    {
        id: 0,
        name: "Wisp",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [],
        idType: 0,
    },
    {
        id: 1,
        name: "Luffy",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 2,
        name: "Zoro",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 3,
        name: "Nami",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 4,
        name: "Usopp",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 5,
        name: "Sanji",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 6,
        name: "Chopper",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 7,
        name: "Buggy",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 8,
        name: "Gunman",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
    },
    {
        id: 9,
        name: "Swordman",
        unit: 0,
        get img() {
            return common_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 0, amount: 1 }
        ],
        idType: 1,
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
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 8, amount: 2 },
        ],
        idType: 2,
    },
    {
        id: 11,
        name: "Fukuro",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 9, amount: 2 },
        ],
        idType: 2,
    },
    {
        id: 12,
        name: "Nico Robin",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 3, amount: 1 },
            { id: 5, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 13,
        name: "Bepo",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 6, amount: 1 },
            { id: 1, amount: 1 },
        ],
        idType: 2,

    },
    {
        id: 14,
        name: "Brook",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 2, amount: 1 },
            { id: 6, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 15,
        name: "Ace",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 8, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 16,
        name: "Inazuma",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 5, amount: 1 },
            { id: 2, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 17,
        name: "Sniper King",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 4, amount: 2 }
        ],
        idType: 2,
    },
    {
        id: 18,
        name: "Chopper Rumble",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 6, amount: 2 }
        ],
        idType: 2,
    },
    {
        id: 19,
        name: "Tashigi",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 9, amount: 1 },
            { id: 8, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 20,
        name: "Perona",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 7, amount: 1 },
            { id: 3, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 21,
        name: "Franky",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 1, amount: 1 },
            { id: 4, amount: 1 },
        ],
        idType: 2,
    },
    {
        id: 22,
        name: "Hatchan",
        unit: 0,
        get img() {
            return uncommon_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 8, amount: 1 },
            { id: 3, amount: 1 },
        ],
        idType: 2,
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
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 11, amount: 1 },
            { id: 7, amount: 1 },
            { id: 8, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 24,
        name: "Buggy",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 7, amount: 3 }
        ],
        idType: 3,
    },
    {
        id: 25,
        name: "GOD Enel",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 17, amount: 1 },
            { id: 13, amount: 1 },
            { id: 5, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 26,
        name: "Geckko Moria",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 14, amount: 2 },
            { id: 5, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 27,
        name: "Nami Clima - Tact",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 3, amount: 3 }
        ],
        idType: 3,
    },
    {
        id: 28,
        name: "Robin Ohara",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 12, amount: 2 },
            { id: 6, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 29,
        name: "Trafalgar Law",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 13, amount: 1 },
            { id: 7, amount: 1 },
            { id: 19, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 30,
        name: "Rob Lucci",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 11, amount: 1 },
            { id: 1, amount: 1 },
            { id: 12, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 31,
        name: "Luffy Gear Second",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 1, amount: 3 },
        ],
        idType: 3,
    },
    {
        id: 32,
        name: "Marco",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 10, amount: 1 },
            { id: 5, amount: 1 },
            { id: 15, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 33,
        name: "Basil Hawkins",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 20, amount: 1 },
            { id: 4, amount: 1 },
            { id: 10, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 34,
        name: "Bon Clay",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 16, amount: 1 },
            { id: 3, amount: 1 },
            { id: 12, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 35,
        name: "Sanji",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 5, amount: 3 }
        ],
        idType: 3,
    },
    {
        id: 36,
        name: "Smoker",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 8, amount: 1 },
            { id: 9, amount: 1 },
            { id: 19, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 37,
        name: "Squard",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 18, amount: 1 },
            { id: 3, amount: 1 },
            { id: 21, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 38,
        name: "Arlong",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 22, amount: 2 },
            { id: 1, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 39,
        name: "Absalom",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 139, amount: 3 },
            { id: 3, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 40,
        name: "Ace",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 15, amount: 2 },
            { id: 4, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 41,
        name: "Usopp Fire Ball",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 17, amount: 2 }
        ],
        idType: 3,
    },
    {
        id: 42,
        name: "Inazuma",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 16, amount: 2 }
        ],
        idType: 3,
    },
    {
        id: 43,
        name: "Zoro Asura",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 2, amount: 3 }
        ],
        idType: 3,
    },
    {
        id: 44,
        name: "Jinbe",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 15, amount: 1 },
            { id: 7, amount: 1 },
            { id: 11, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 45,
        name: "Chaka",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 10, amount: 1 },
            { id: 6, amount: 1 },
            { id: 11, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 46,
        name: "Chopper - Brain Point",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 18, amount: 1 },
            { id: 7, amount: 1 },
            { id: 12, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 47,
        name: "Chopper - Guard Point",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 18, amount: 1 },
            { id: 9, amount: 1 },
            { id: 16, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 48,
        name: "Captain Kuro",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 22, amount: 1 }
            { id: 2, amount: 1 },
            { id: 9, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 49,
        name: "Kuma Bartholomew",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 13, amount: 1 },
            { id: 2, amount: 1 },
            { id: 21, amount: 1 }
        ],
        idType: 3,
    },
    {
        id: 50,
        name: "Crocodile",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 21, amount: 1 },
            { id: 7, amount: 1 },
            { id: 17, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 51,
        name: "Eustass Kid",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 20, amount: 1 },
            { id: 7, amount: 1 },
            { id: 13, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 52,
        name: "Killer",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 19, amount: 1 },
            { id: 7, amount: 1 },
            { id: 14, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 53,
        name: "Franky Pirate Docking 5",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 21, amount: 2 }
            { id: 2, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 54,
        name: "Helmeppo",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 14, amount: 1 },
            { id: 2, amount: 1 },
            { id: 5, amount: 1 },
        ],
        idType: 3,
    },
    {
        id: 55,
        name: "X-Drake",
        unit: 0,
        get img() {
            return special_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 19, amount: 1 },
            { id: 6, amount: 1 },
            { id: 11, amount: 1 },
        ],
        idType: 3,
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
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 35, amount: 1 },
            { id: 41, amount: 1 }
        ],
        idType: 4,
    },
    {
        id: 57,
        name: "Monkey D. Garp",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 31, amount: 1 },
            { id: 36, amount: 1 },
            { id: 55, amount: 1 }
        ],
        idType: 4,
    },
    {
        id: 58,
        name: "Blackbeard",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 37, amount: 1 },
            { id: 40, amount: 1 },
            { id: 55, amount: 1 }
        ],
        note: "(Marshall D. Teach)",
        idType: 4,
    },
    {
        id: 59,
        name: "Doflamingo",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 30, amount: 1 },
            { id: 47, amount: 1 }
        ],
        note: "",
        idType: 4,
    },
    {
        id: 60,
        name: "Trafalgar Law",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 46, amount: 1 },
            { id: 53, amount: 1 }
        ],
        note: "",
        idType: 4,
    },
    {
        id: 61,
        name: "Luffy Gear Third",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 31, amount: 1 },
            { id: 34, amount: 1 }
        ],
        note: "",
        idType: 4,
    },
    {
        id: 62,
        name: "Ryuma",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 26, amount: 1 },
            { id: 43, amount: 1 },
            { id: 17, amount: 1 },
            { id: 20, amount: 1 },
            { id: 9, amount: 1 }
        ],
        note: "",
        idType: 4,
    },
    {
        id: 63,
        name: "Marco",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 32, amount: 1 },
            { id: 45, amount: 1 },
            { id: 47, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 64,
        name: "Magellan",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 40, amount: 1 },
            { id: 44, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 65,
        name: "Momonga",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 36, amount: 1 },
            { id: 44, amount: 1 },
            { id: 54, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 66,
        name: "Mihawk",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 43, amount: 1 },
            { id: 48, amount: 1 },
            { id: 55, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 67,
        name: "Bartolomeo",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 38, amount: 1 },
            { id: 48, amount: 1 },
            { id: 53, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 68,
        name: "Burgess Jesus",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 32, amount: 1 },
            { id: 33, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 69,
        name: "Basil Hawkins",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 33, amount: 1 },
            { id: 52, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 70,
        name: "Vander Decken",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 38, amount: 1 },
            { id: 44, amount: 1 },
            { id: 54, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 71,
        name: "Baby 5",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 30, amount: 1 },
            { id: 49, amount: 1 },
            { id: 53, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 72,
        name: "Ben Beckman",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 36, amount: 1 },
            { id: 41, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 73,
        name: "Brook",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 14, amount: 1 },
            { id: 26, amount: 1 },
            { id: 30, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 74,
        name: "Vivi",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 27, amount: 1 },
            { id: 45, amount: 1 },
            { id: 50, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 75,
        name: "Sabo",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 32, amount: 1 },
            { id: 42, amount: 1 },
            { id: 49, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 76,
        name: "Sanji",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 35, amount: 1 },
            { id: 47, amount: 1 },
            { id: 51, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 77,
        name: "Shanks",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 31, amount: 1 },
            { id: 41, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 78,
        name: "Sentoumaru",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 46, amount: 1 },
            { id: 49, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 79,
        name: "Sugar",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 4, amount: 1 },
            { id: 20, amount: 1 },
            { id: 43, amount: 1 },
            { id: 46, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 80,
        name: "Shiryu",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 35, amount: 1 },
            { id: 55, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 81,
        name: "Akainu",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 40, amount: 1 },
            { id: 42, amount: 1 },
            { id: 50, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 82,
        name: "Oars",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 26, amount: 2 },
            { id: 31, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 83,
        name: "Usopp Impact Dial",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 27, amount: 1 },
            { id: 41, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 84,
        name: "Ivankov Emporio",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 28, amount: 1 },
            { id: 42, amount: 1 },
            { id: 50, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 85,
        name: "Zeff",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 33, amount: 1 },
            { id: 34, amount: 1 },
            { id: 42, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 86,
        name: "Zoro",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 26, amount: 1 },
            { id: 43, amount: 1 },
            { id: 36, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 87,
        name: "Jozu Diamond",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 37, amount: 1 },
            { id: 48, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 88,
        name: "Chopper Horn Point",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 47, amount: 1 },
            { id: 54, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 89,
        name: "Kaku",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 28, amount: 1 },
            { id: 30, amount: 1 },
            { id: 45, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 90,
        name: "Borsalino",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 51, amount: 1 },
            { id: 54, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 91,
        name: "Kinemon",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 40, amount: 1 },
            { id: 48, amount: 1 },
            { id: 52, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 92,
        name: "Boa Hancock",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 27, amount: 1 },
            { id: 31, amount: 1 },
            { id: 38, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 93,
        name: "X-Drake",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 33, amount: 1 },
            { id: 38, amount: 1 },
            { id: 55, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 94,
        name: "Aokiji",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 28, amount: 1 },
            { id: 37, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 95,
        name: "Eustass Kid",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 27, amount: 1 },
            { id: 51, amount: 1 },
            { id: 52, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 96,
        name: "Perona",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 20, amount: 1 },
            { id: 35, amount: 1 },
            { id: 39, amount: 1 },
            { id: 46, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
    {
        id: 97,
        name: "Crocodile",
        unit: 0,
        get img() {
            return rare_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 34, amount: 1 },
            { id: 44, amount: 1 },
            { id: 50, amount: 1 },
        ],
        note: "",
        idType: 4,
    },
]
data.rare = rare_unit

var legend_folder = root + "Legend/";
var legend_unit = [
    {
        id: 98,
        name: "Laboon",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 67, amount: 1 },
            { id: 73, amount: 1 },
            { id: 80, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 99,
        name: "Shanks",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 72, amount: 1 },
            { id: 76, amount: 1 },
            { id: 77, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 100,
        name: "Fujitora Ito",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 59, amount: 1 },
            { id: 91, amount: 1 },
            { id: 97, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 101,
        name: "Bartolomeo",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 67, amount: 1 },
            { id: 83, amount: 1 },
            { id: 61, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 102,
        name: "Monkey D. Dragon",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 84, amount: 1 },
            { id: 75, amount: 1 },
            { id: 74, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 103,
        name: "Shiki",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 64, amount: 1 },
            { id: 89, amount: 1 },
            { id: 56, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 104,
        name: "Calgara",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 73, amount: 1 },
            { id: 83, amount: 1 },
            { id: 56, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 105,
        name: "Whitebeard",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 63, amount: 1 },
            { id: 91, amount: 1 },
            { id: 87, amount: 1 },
        ],
        note: "Edward Newgate",
        idType: 5,
    },
    {
        id: 106,
        name: "Ulti",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 72, amount: 1 },
            { id: 88, amount: 1 },
            { id: 78, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 107,
        name: "King",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 59, amount: 1 },
            { id: 69, amount: 1 },
            { id: 93, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 108,
        name: "Smoker",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 57, amount: 1 },
            { id: 64, amount: 1 },
            { id: 65, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 109,
        name: "Sengoku",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 81, amount: 1 },
            { id: 90, amount: 1 },
            { id: 94, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 110,
        name: "Marco",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 71, amount: 1 },
            { id: 92, amount: 1 },
            { id: 63, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 111,
        name: "Rayleigh",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 44, amount: 1 },
            { id: 78, amount: 1 },
            { id: 135, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 112,
        name: "Caesar Clown",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 59, amount: 1 },
            { id: 90, amount: 1 },
            { id: 57, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 113,
        name: "Ace",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 58, amount: 1 },
            { id: 65, amount: 1 },
            { id: 63, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 114,
        name: "Charlotte Cracker",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 85, amount: 1 },
            { id: 91, amount: 1 },
            { id: 79, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 115,
        name: "Roronoa Zoro",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 86, amount: 1 },
            { id: 96, amount: 1 },
            { id: 66, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 116,
        name: "Rob Lucci",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 60, amount: 1 },
            { id: 89, amount: 1 },
            { id: 57, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 117,
        name: "Luffy Nightmare",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 39, amount: 1 },
            { id: 61, amount: 1 },
            { id: 82, amount: 1 },
            { id: 62, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 118,
        name: "Nekomamushi",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 56, amount: 1 },
            { id: 95, amount: 1 },
            { id: 93, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 119,
        name: "Blackbeard",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 68, amount: 1 },
            { id: 80, amount: 1 },
            { id: 58, amount: 1 },
        ],
        note: "Marshall D. Teach",
        idType: 5,
    },
    {
        id: 120,
        name: "Luffy Jet Gatling",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 89, amount: 1 },
            { id: 93, amount: 1 },
            { id: 61, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 121,
        name: "Zetto",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 68, amount: 1 },
            { id: 94, amount: 1 },
            { id: 75, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 122,
        name: "Law",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 78, amount: 1 },
            { id: 95, amount: 1 },
            { id: 60, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 123,
        name: "Reiju Vinsmoke",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 64, amount: 1 },
            { id: 71, amount: 1 },
            { id: 97, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 124,
        name: "Kuma Bartholomew",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 78, amount: 1 },
            { id: 71, amount: 1 },
            { id: 88, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 125,
        name: "Geckko Moria",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 62, amount: 1 },
            { id: 82, amount: 1 },
            { id: 96, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 126,
        name: "Nami",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 73, amount: 1 },
            { id: 74, amount: 1 },
            { id: 96, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 127,
        name: "Shinobu",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 58, amount: 1 },
            { id: 62, amount: 1 },
            { id: 91, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 128,
        name: "Boa Hancock",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 66, amount: 1 },
            { id: 76, amount: 1 },
            { id: 92, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 129,
        name: "Sanji",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 69, amount: 1 },
            { id: 84, amount: 1 },
            { id: 76, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 130,
        name: "Koby",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 77, amount: 1 },
            { id: 80, amount: 1 },
            { id: 85, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 131,
        name: "Sugar",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 69, amount: 1 },
            { id: 79, amount: 1 },
            { id: 83, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 132,
        name: "Jinbe",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 60, amount: 1 },
            { id: 70, amount: 1 },
            { id: 81, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 133,
        name: "Amatsuki Toki",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 86, amount: 1 },
            { id: 90, amount: 1 },
            { id: 138, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
    {
        id: 134,
        name: "Dr.Hiriluk",
        unit: 0,
        get img() {
            return legend_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 68, amount: 1 },
            { id: 70, amount: 1 },
            { id: 88, amount: 1 },
        ],
        note: "",
        idType: 5,
    },
]
data.legend = legend_unit


var etc_folder = root + "ETC/"
var etc_unit = [
    {
        id: 135,
        name: "(Hidden) Rayleigh",
        unit: 0,
        get img() {
            return etc_folder + this.name + ".jpg";
        },
        recipe: [
            
        ],
        idType: 6,
    },
    {
        id: 136,
        name: "(Hidden) Pirate Ship",
        unit: 0,
        get img() {
            return etc_folder + this.name + ".jpg";
        },
        recipe: [
            
        ],
        idType: 6,
    },
    {
        id: 137,
        name: "TR KUMA",
        unit: 0,
        get img() {
            return etc_folder + this.name + ".jpg";
        },
        recipe: [
            
        ],
        idType: 6,
    },
    {
        id: 138,
        name: "Ancient Ship",
        unit: 0,
        get img() {
            return etc_folder + this.name + ".jpg";
        },
        recipe: [
            
        ],
        idType: 6,
    },
    {
        id: 139,
        name: "Zombie",
        unit: 0,
        get img() {
            return etc_folder + this.name + ".jpg";
        },
        recipe: [
            
        ],
        idType: 6,
    },
];
data.etc = etc_unit

var hidden_folder = root + "Hidden/";
var hidden_unit = [
    {
        id: 140,
        name: "Sabo",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 60, amount: 1 },
            { id: 75, amount: 1 },
            { id: 82, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 141,
        name: "Aramaki",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 49, amount: 1 },
            { id: 62, amount: 1 },
            { id: 67, amount: 1 },
            { id: 84, amount: 1 },
        ],
        note: "Ryokugyu 'Shin' Navy Admiral",
        idType: 7,
    },
    {
        id: 142,
        name: "Vergo",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 29, amount: 1 },
            { id: 36, amount: 1 },
            { id: 67, amount: 1 },
            { id: 76, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 143,
        name: "Rebecca",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 68, amount: 1 },
            { id: 79, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 144,
        name: "Mihawk",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 66, amount: 1 },
            { id: 77, amount: 1 },
            { id: 87, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 145,
        name: "Killer",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 33, amount: 1 },
            { id: 52, amount: 1 },
            { id: 54, amount: 1 },
            { id: 95, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 146,
        name: "Shiryu",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 64, amount: 1 },
            { id: 72, amount: 1 },
            { id: 80, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 147,
        name: "Akainu",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 37, amount: 1 },
            { id: 52, amount: 1 },
            { id: 70, amount: 1 },
            { id: 81, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 148,
        name: "Kinemon",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 86, amount: 1 },
            { id: 91, amount: 1 },
            { id: 51, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 149,
        name: "Carrot",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 25, amount: 1 },
            { id: 39, amount: 2 },
            { id: 88, amount: 1 },
            { id: 135, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 150,
        name: "Perona",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 17, amount: 1 },
            { id: 20, amount: 1 },
            { id: 39, amount: 1 },
            { id: 66, amount: 1 },
            { id: 125, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 151,
        name: "Ryuma",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 14, amount: 1 },
            { id: 62, amount: 1 },
            { id: 86, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 152,
        name: "Tiger Fisher",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 135, amount: 1 },
            { id: 53, amount: 1 },
            { id: 70, amount: 1 },
            { id: 92, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 153,
        name: "Aokiji",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 65, amount: 1 },
            { id: 87, amount: 1 },
            { id: 94, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 154,
        name: "Koala",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 12, amount: 1 },
            { id: 132, amount: 1 },
            { id: 74, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 155,
        name: "Ivankov",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 84, amount: 1 },
            { id: 97, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 156,
        name: "Bonkurei",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 42, amount: 1 },
            { id: 34, amount: 1 },
            { id: 92, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 157,
        name: "Redforce",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 99, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 158,
        name: "Mobydick",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 15, amount: 1 },
            { id: 32, amount: 1 },
            { id: 87, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 159,
        name: "Decken",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 38, amount: 1 },
            { id: 58, amount: 1 },
            { id: 70, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 160,
        name: "Ballatier",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 31, amount: 1 },
            { id: 85, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
    {
        id: 161,
        name: "Maxim",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 83, amount: 1 },
            { id: 56, amount: 1 },
            { id: 136, amount: 1 }
        ],
        note: "",
        idType: 7,
    },
    {
        id: 162,
        name: "Sunny",
        unit: 0,
        get img() {
            return hidden_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 95, amount: 1 },
            { id: 89, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 7,
    },
]
data.hidden = hidden_unit

var alternate_folder = root + "Alternate/";
var alternate_unit = [
    {
        id: 163,
        name: "Doflamingo",
        unit: 0,
        get img() {
            return alternate_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 59, amount: 1 },
        ],
        note: "",
        idType: 8,
    },
    {
        id: 164,
        name: "Baby 5",
        unit: 0,
        get img() {
            return alternate_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 71, amount: 1 },
        ],
        note: "",
        idType: 8,
    },
    {
        id: 165,
        name: "Vivi",
        unit: 0,
        get img() {
            return alternate_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 74, amount: 1 },
        ],
        note: "",
        idType: 8,
    },
    {
        id: 166,
        name: "Ace",
        unit: 0,
        get img() {
            return alternate_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 113, amount: 1 },
        ],
        note: "",
        idType: 8,
    },
    {
        id: 167,
        name: "Carrot",
        unit: 0,
        get img() {
            return alternate_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 149, amount: 1 },
        ],
        note: "",
        idType: 8,
    },
];
data.alternate = alternate_unit;



var transcendent_folder = root + "Transcendent/";
var transcendent_unit = [
    {
        id: 168,
        name: "Joker tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 17, amount: 1 },
            { id: 79, amount: 1 },
            { id: 164, amount: 1 },
            { id: 163, amount: 1 },
            { id: 142, amount: 1 },
            { id: 137, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 169,
        name: "Robin tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 12, amount: 1 },
            { id: 50, amount: 1 },
            { id: 101, amount: 1 },
            { id: 116, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 170,
        name: "Luffy tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 56, amount: 1 },
            { id: 117, amount: 1 },
            { id: 120, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 171,
        name: "Hawkins tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 69, amount: 1 },
            { id: 90, amount: 1 },
            { id: 115, amount: 1 },
            { id: 130, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 172,
        name: "Sabo tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 15, amount: 1 },
            { id: 136, amount: 1 },
            { id: 68, amount: 1 },
            { id: 110, amount: 1 },
            { id: 140, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 173,
        name: "Usopp tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 20, amount: 1 },
            { id: 72, amount: 1 },
            { id: 104, amount: 1 },
            { id: 131, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 174,
        name: "Zoro tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 20, amount: 1 },
            { id: 67, amount: 1 },
            { id: 104, amount: 1 },
            { id: 131, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 175,
        name: "Jinbe tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 40, amount: 1 },
            { id: 98, amount: 1 },
            { id: 132, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 176,
        name: "Chopper tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 8, amount: 1 },
            { id: 106, amount: 1 },
            { id: 134, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 177,
        name: "Fujitora tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 19, amount: 1 },
            { id: 65, amount: 1 },
            { id: 148, amount: 1 },
            { id: 100, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 178,
        name: "Yamato tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 27, amount: 1 },
            { id: 40, amount: 1 },
            { id: 92, amount: 1 },
            { id: 106, amount: 1 },
            { id: 133, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 179,
        name: "Tichi tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 33, amount: 1 },
            { id: 105, amount: 1 },
            { id: 119, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 180,
        name: "Nami tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 27, amount: 1 },
            { id: 38, amount: 1 },
            { id: 103, amount: 1 },
            { id: 126, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 181,
        name: "Law tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 13, amount: 2 },
            { id: 112, amount: 1 },
            { id: 122, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 182,
        name: "Lucci tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 28, amount: 1 },
            { id: 140, amount: 1 },
            { id: 116, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 183,
        name: "Brook tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 26, amount: 1 },
            { id: 96, amount: 1 },
            { id: 98, amount: 1 },
            { id: 151, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 184,
        name: "Sanji tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 27, amount: 1 },
            { id: 114, amount: 1 },
            { id: 129, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 185,
        name: "Shanks tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 31, amount: 1 },
            { id: 95, amount: 1 },
            { id: 144, amount: 1 },
            { id: 99, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 186,
        name: "Snakeman tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 15, amount: 1 },
            { id: 75, amount: 1 },
            { id: 117, amount: 1 },
            { id: 157, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 187,
        name: "Shirahoshi tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 74, amount: 1 },
            { id: 159, amount: 1 },
            { id: 132, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 188,
        name: "Aokiji tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 19, amount: 1 },
            { id: 28, amount: 1 },
            { id: 153, amount: 1 },
            { id: 121, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 189,
        name: "Akainu tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 30, amount: 1 },
            { id: 40, amount: 1 },
            { id: 147, amount: 1 },
            { id: 109, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 190,
        name: "Kid tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 31, amount: 1 },
            { id: 51, amount: 1 },
            { id: 60, amount: 1 },
            { id: 118, amount: 1 },
            { id: 145, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 191,
        name: "Kizaru tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 33, amount: 1 },
            { id: 38, amount: 1 },
            { id: 90, amount: 1 },
            { id: 111, amount: 1 },
            { id: 100, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 192,
        name: "Franky tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 53, amount: 1 },
            { id: 89, amount: 1 },
            { id: 164, amount: 1 },
            { id: 124, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
    {
        id: 193,
        name: "Tashigi tr",
        unit: 0,
        get img() {
            return transcendent_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 137, amount: 1 },
            { id: 19, amount: 1 },
            { id: 36, amount: 1 },
            { id: 112, amount: 1 },
            { id: 130, amount: 1 },
        ],
        note: "",
        idType: 9,
    },
]
data.transcendent = transcendent_unit


var immortal_folder = root + "Immortal/";
var immortal_unit = [
    {
        id: 194,
        name: "Garp im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 120, amount: 1 },
            { id: 130, amount: 1 },
            { id: 108, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 195,
        name: "Rayleigh im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 111, amount: 1 },
            { id: 120, amount: 1 },
            { id: 128, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 196,
        name: "Roger im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 108, amount: 1 },
            { id: 113, amount: 1 },
            { id: 109, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 197,
        name: "Gaban im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 99, amount: 1 },
            { id: 115, amount: 1 },
            { id: 123, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 198,
        name: "Kaido im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 102, amount: 1 },
            { id: 107, amount: 1 },
            { id: 125, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 199,
        name: "Whitebeard im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 101, amount: 1 },
            { id: 110, amount: 1 },
            { id: 105, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 200,
        name: "Dragon im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 102, amount: 1 },
            { id: 118, amount: 1 },
            { id: 124, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 201,
        name: "Bigmam im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 106, amount: 1 },
            { id: 114, amount: 1 },
            { id: 123, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 202,
        name: "Sengoku im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 109, amount: 1 },
            { id: 116, amount: 1 },
            { id: 123, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 203,
        name: "Shiki im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 103, amount: 1 },
            { id: 104, amount: 1 },
            { id: 129, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
    {
        id: 204,
        name: "Z im",
        unit: 0,
        get img() {
            return immortal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 120, amount: 1 },
            { id: 121, amount: 1 },
            { id: 131, amount: 1 },
        ],
        note: "",
        idType: 10,
    },
];
data.immortal = immortal_unit

var limited_folder = root + "Limited/";
var limited_unit = [
    {
        id: 205,
        name: "Rebecca",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 131, amount: 1 },
            { id: 163, amount: 1 },
            { id: 143, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 206,
        name: "Katakuri",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 23, amount: 1 },
            { id: 61, amount: 1 },
            { id: 76, amount: 1 },
            { id: 114, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 207,
        name: "Crocodile",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 97, amount: 1 },
            { id: 165, amount: 1 },
            { id: 147, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 208,
        name: "King",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 107, amount: 1 },
            { id: 119, amount: 1 },
            { id: 138, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 209,
        name: "Patrick Redfield",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 73, amount: 1 },
            { id: 101, amount: 1 },
            { id: 134, amount: 1 },
        ],
        note: "B4 R41",
        idType: 11,
    },
    {
        id: 210,
        name: "Shinobu",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 127, amount: 1 },
            { id: 128, amount: 1 },
            { id: 136, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 211,
        name: "Ain",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 72, amount: 1 },
            { id: 94, amount: 1 },
            { id: 142, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
    {
        id: 212,
        name: "GOD ENEL",
        unit: 0,
        get img() {
            return limited_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 27, amount: 1 },
            { id: 136, amount: 1 },
            { id: 112, amount: 1 },
            { id: 161, amount: 1 },
        ],
        note: "",
        idType: 11,
    },
];
data.limited = limited_unit

var eternal_folder = root + "Eternal/";
var eternal_unit = [
    {
        id: 213,
        name: "Ace et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 37, amount: 1 },
            { id: 44, amount: 1 },
            { id: 110, amount: 1 },
            { id: 166, amount: 1 },
        ],
        note: "5",
        idType: 12,
    },
    {
        id: 214,
        name: "Buggy et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 24, amount: 1 },
            { id: 34, amount: 1 },
            { id: 39, amount: 1 },
            { id: 65, amount: 1 },
            { id: 77, amount: 1 },
            { id: 126, amount: 1 },
            { id: 155, amount: 1 },
        ],
        note: "5",
        idType: 12,
    },
    {
        id: 215,
        name: "Hancock et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 44, amount: 1 },
            { id: 61, amount: 1 },
            { id: 65, amount: 1 },
            { id: 128, amount: 1 },
            { id: 152, amount: 1 },
        ],
        note: "",
        idType: 12,
    },
    {
        id: 216,
        name: "Cavendish et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 48, amount: 1 },
            { id: 93, amount: 1 },
            { id: 122, amount: 1 },
            { id: 137, amount: 1 },
            { id: 145, amount: 1 },
        ],
        note: "",
        idType: 12,
    },
    {
        id: 217,
        name: "Vivi et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 28, amount: 1 },
            { id: 53, amount: 1 },
            { id: 61, amount: 1 },
            { id: 72, amount: 1 },
            { id: 165, amount: 1 },
            { id: 207, amount: 1 },//
        ],
        note: "",
        idType: 12,
    },
    {
        id: 218,
        name: "Oden et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 63, amount: 1 },
            { id: 127, amount: 1 },
            { id: 133, amount: 1 },
            { id: 148, amount: 1 },
        ],
        note: "",
        idType: 12,
    },
    {
        id: 219,
        name: "Mihawk et",
        unit: 0,
        get img() {
            return eternal_folder + this.name + ".jpg";
        },
        recipe: [
            { id: 136, amount: 2 },
            { id: 80, amount: 1 },
            { id: 144, amount: 1 },
            { id: 150, amount: 1 },
        ],
        note: "",
        idType: 12,
    },
];
data.eternal = eternal_unit;

var random_folder = root + "Random Only/";
var random_unit = [
    {
        id: 220,
        name: "Naruto",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 221,
        name: "Hanekawa Tsubasa",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 222,
        name: "Herrscher of Reason",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 223,
        name: "Kamijo Touma",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 224,
        name: "Yomi Isayama",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 225,
        name: "Yagami Light",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 226,
        name: "Sento Isuzu",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 227,
        name: "Mountain D. Higuma",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 228,
        name: "Ichigo Kurosaki",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 229,
        name: "Yotsuba Koiwai",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
    {
        id: 230,
        name: "Anything",
        unit: 0,
        get img() {
            return random_folder + this.name + ".jpg";
        },
        recipe: [],
        note: "",
        idType: 13,
    },
];
data.random = random_unit;

var another_folfer = root + "Another World/"
var another_unit = [
    {
        id: 231,
        name: "Kujo Jotaro",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 31, amount: 1},
            {id: 223, amount: 1},
            {id: 109, amount: 1},
            {id: 133, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 232,
        name: "Shiki Ryogi",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 224, amount: 1},
            {id: 126, amount: 1},
            {id: 146, amount: 1},
            {id: 151, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 233,
        name: "Tatsumaki",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 229, amount: 1},
            {id: 107, amount: 1},
            {id: 124, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 234,
        name: "Bronya",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 123, amount: 1},
            {id: 162, amount: 1},
            {id: 164, amount: 1},
            {id: 222, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 235,
        name: "Namikaze Minato",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 127, amount: 1},
            {id: 167, amount: 1},
            {id: 220, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 236,
        name: "Kikyou",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 73, amount: 1},
            {id: 116, amount: 1},
            {id: 143, amount: 1},
            {id: 221, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 237,
        name: "Byakuya Kuchiki",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 144, amount: 1},
            {id: 166, amount: 1},
            {id: 228, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 238,
        name: "Mountain.D.Higuma",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 77, amount: 1},
            {id: 118, amount: 1},
            {id: 226, amount: 1},
            {id: 230, amount: 1},
        ],
        note: "",
        idType: 14,
    },
    {
        id: 239,
        name: "Yukari Yakumo",
        unit: 0,
        get img() {
            return another_folfer + this.name + ".jpg";
        },
        recipe: [
            {id: 49, amount: 1},
            {id: 150, amount: 1},
            {id: 225, amount: 1},
            {id: 230, amount: 1},
        ],
        note: "",
        idType: 14,
    },
];

data.another = another_unit;

// var alternate_folder = root + "Alternate/";
// var alternate_unit = [
    
// ];
// data.alternate = alternate_unit;