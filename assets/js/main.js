let europäischeUnion = {
    Belgien: "(BE)",
    Griechenland: "(EL)",
    Litauen: "(LT)",
    Portugal: "(PT)",
    Bulgarien: "(BG)",
    Spanien: "(ES)",
    Luxemburg: "(LU)",
    Rumänien: "(RO)",
    Tschechien: "(CZ)",
    Frankreich: "(FR)",
    Ungarn: "(HU)",
    Slowenien: "(SI)",
    Dänemark: "(DK)",
    Kroatien: "(HR)",
    Malta: "(MT)",
    Slowakei: "(SK)",
    Deutschland: "(DE)",
    Italien: "(IT)",
    Niederlände: "(NL)",
    Finnland: "(FI)",
    Estland: "(EE)",
    Zypern: "(CY)",
    Österreich: "(AT)",
    Schweden: "(SE)",
    Irland: "(IE)",
    Lettland: "(LV)",
    Polen: "(PL)",
    VereinigtesKönigreich: "(UK)",
    BeneluxUnion: {
        Belgien: "(BE)",
        Niederlände: "(NL)",
        Luxemburg: "(LU)"
    }
}
console.log(europäischeUnion.Belgien);
console.log(europäischeUnion.Niederlände);
console.log(europäischeUnion.Luxemburg);


console.log(europäischeUnion.BeneluxUnion);

// ---------------------------------------------------------------//

let person = {
    firstName: "Mohammad",
    age: 37,
    sagNameAlter() {
        alert(`My name is ${this.firstName} and i am ${this.age} years old.`);
        console.log(this.firstName);
        console.log(this.age)
    }
}
person.sagNameAlter();

// ---------------------------------------------------------------//

var unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names);

// ---------------------------------------------------------------//


var unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "eine Datei",
            Ordner2: "Geheimnisse"
        },
        "Untere schublade": "Cola"
    }
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere schublade"]);
console.log(unserLager.schreibtisch.schublade);
console.log(unserLager);

// ---------------------------------------------------------------//


var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

console.log(myMusic[0].kunstler);
console.log(`Von ${myMusic[1].kunstler}: ${myMusic[1].formate[3]}`);
console.log(`Von ${myMusic[1].kunstler}: ${myMusic[1].gold}`);
console.log(`${myMusic[2].release_jahr} und ${myMusic[3].release_jahr}`);
console.log(`Von ${myMusic[3].kunstler}: ${myMusic[3].formate[2]}`);
myMusic[0].title = myMusic[0].title.split(" ");
console.log(myMusic[0].title[1]);

// ---------------------------------------------------------------//


var myMusic1 = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
myMusic1.forEach(i => {
    console.log(i.kunstler);
});
myMusic1.forEach(i => {
    console.log(i.title);
});
myMusic1.forEach(i => {
    console.log(`${i.kunstler} formats are ${i.formate}`);
});
myMusic1.forEach(i => {
    if (i.release_jahr > 1975) {
        console.log(`${i.title} from ${i.kunstler} released in ${i.release_jahr}.`);
    }
});

// ---------------------------------------------------------------//


var studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];








