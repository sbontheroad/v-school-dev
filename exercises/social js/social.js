var traveler = {
        females: [
            {
                name: "Jenny",
                age: 31,
                areasOfInterest: ["South America", "Central America", "Canada", "United States"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.females[0].name + "'s next trip will be in " + traveler.females[0].timingOfTravel);
                }
        },

            {
                name: "Dena",
                age: 40,
                areasOfInterest: ["SE Asia", "South America"],
                timingOfTravel: 2018,
                nextTrip: function() {
                    console.log(traveler.females[1].name + "'s next trip will be in " + traveler.females[1].timingOfTravel);
                }
        },
            {
                name: "Alexa",
                age: 22,
                areasOfInterest: ["United States", "Europe", "Antarctica"],
                timingOfTravel: 2020,
                nextTrip: function() {
                    console.log(traveler.females[2].name + "'s next trip will be in " + traveler.females[2].timingOfTravel);
                }
                
        },
            {
                name: "Julie",
                age: 36,
                areasOfInterest: ["Europe", "Russia", "New Zealand"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.females[3].name + "'s next trip will be in " + traveler.females[3].timingOfTravel);
                }
        },
            {
                name: "Marg",
                age: 22,
                areasOfInterest: ["United States", "Canada"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.females[4].name + "'s next trip will be in " + traveler.females[4].timingOfTravel);
                }
            }
    ],
        males: [
            {
                name: "John",
                age: 50,
                areasOfInterest: ["Europe", "Russia"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.males[0].name + "'s next trip will be in " + traveler.males[0].timingOfTravel);
                }
        },

            {
                name: "Marc",
                age: 27,
                areasOfInterest: ["SE Asia", "Central America", "Eastern Europe", "Balkans"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.males[1].name + "'s next trip will be in " + traveler.males[1].timingOfTravel);
                }
        },
            {
                name: "Allen",
                age: 31,
                areasOfInterest: ["Asia", "Australia", "Canada"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.males[2].name + "'s next trip will be in " + traveler.males[2].timingOfTravel);
                }
        },
            {
                name: "Wesley",
                age: 25,
                areasOfInterest: ["Europe", "Asia", "Central America"],
                timingOfTravel: 2017,
                nextTrip: function() {
                    console.log(traveler.males[3].name + "'s next trip will be in " + traveler.males[3].timingOfTravel);
                }
            }
    ]
    
};

traveler.males[3].nextTrip();