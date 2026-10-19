
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
    { mark: "Tesla", mudel: "Model 3", aasta: 2019 }
];

// Esimese auto eemaldamine
autod.splice(0, 1);

// Uue auto lisamine
autod.splice(1, 0, { mark: "Audi", mudel: "A4", aasta: 2018 });

console.log(autod);






