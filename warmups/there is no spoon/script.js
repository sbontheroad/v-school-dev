var room = {
    chair: {
        numberOfRollers: 4,
        color: "grey",
        broken: false
    },

    screenOnDesk: {
        brand: "asus",
        size: "medium",
        description: function () {
            return(this.brand + " " + this.size);
        }
    },

    desk: {
        deskTop: "particle board",
        style: "modern",
        size: "long",
        config: 2
    },

    fridge: {
        food: ["cheese", "hummus", "grapes"],
        temperature: 45,
        printTemp: function () {
            return(this.temperature + " degrees");
        }
    },

    students: {
        names: ["Spencer", "Danyon", "Allen", "Kacie"],
        male: false
    },

    ceilingPipes: [
        {
            color: "silver",
            material: "metal"
        },
        {
            color: "beige",
            material: "metal"
        }
    ],

    personalComputers: {
        brand: "mac",
        on: false,
        onOrNot: function () {
            if (this.on === true) {
                return "the computer is on";
            } else {
                return("the computer is off");
            };
        }
    },

    floor: {
        spaces: [
            {
                space: "enclosed",
                size: "10 x 12",
                type: "private",
                available: false,
            },
            {
                space: "open",
                size: "4 x 3",
                type: "public",
                available: true,
            }
        ],
        numberAvailable: function () {
            var total = 0;
            for (var i = 0; i < this.spaces.length; i++) {
                if (this.spaces[i].available) {
                    total += 1;
                };
            };
            return("there are " + total + " spaces available.");
        }
    },
    attendance: {
        daysOfWeek: [
            {
                monday: 17
            },
            {
                tuesday: 17
            },
            {
                wednesday: 18
            },
            {
                thursday: 17
            },
            {
                friday: 18
            }
        ],
        meanAttendance: function () {
            var total = 0;

            for (var i = 0; i < this.daysOfWeek.length; i++) {
                for (var prop in room.attendance.daysOfWeek[i]) {
                    total += room.attendance.daysOfWeek[i][prop];
                }
            }
            return (total / 5);
        }
    }
}

console.log(room.ceilingPipes[1]);
console.log(room.screenOnDesk.description());
console.log(room.fridge.printTemp());
console.log(room.personalComputers.onOrNot());
console.log(room.floor.numberAvailable());
console.log(room.attendance.meanAttendance());
