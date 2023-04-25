const controls = document.querySelectorAll("[data-control]");
const statistics = document.querySelectorAll("[data-statistic]");

const parts = {
    "arms": {
        "strength": 29,
        "power": 35,
        "energy": -21,
        "speed": -5
    },

    "armor": {
        "strength": 41,
        "power": 20,
        "energy": 0,
        "speed": -20
    },
    "cores":{
        "strength": 0,
        "power": 7,
        "energy": 48,
        "speed": -24
    },
    "legs":{
        "strength": 27,
        "power": 21,
        "energy": -32,
        "speed": 42
    },
    "rockets":{
        "strength": 0,
        "power": 28,
        "energy": 0,
        "speed": -2
    }
}

const skin = document.querySelector("[data-skin]");
const robotron = document.querySelector(".robot");

export {
    controls,
    statistics,
    parts,
    skin,
    robotron
}