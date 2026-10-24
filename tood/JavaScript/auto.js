
let auto = {
    mark: "Toyota",
    mudel: "Corolla L",
    aasta: 2022,
    varv: "punane",
    omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    taisnimi() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        this.omadused.forEach(omadus => console.log(omadus));
    }
};

auto.kuvaOmadused();








console.log(auto.taisnimi());



console.log(auto);


console.log(auto.mark);
console.log(auto.mudel);
console.log(auto.aasta);
console.log(auto.varv);
console.log(auto.omadused);




let autod = [
    { mark: "Toyota", mudel: "Corolla", aasta: 2007 },
    { mark: "Honda", mudel: "Civic", aasta: 2012 },
    { mark: "Tesla", mudel: "Model 3", aasta: 2019 },
    { mark: "Ford", mudel: "Focus", aasta: 2020 },
    { mark: "BMW", mudel: "320i", aasta: 2015 }
];

// Autode sorteerimine aasta järgi
autod.sort((a, b) => a.aasta - b.aasta);

console.log(autod);













