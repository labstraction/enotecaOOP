let bev = new Beverage("chinotto", "san pellegrino", 2, 0);
let bev1 = new Spirit("vodka", "absolute", 30, 40);
let bev2 = new Beer("special", "messina", 3, 4, "lager");
let bev3 = new Wine("barbera", "cremaschi", 13, 14, 1998, "barbera");

let bev4 = new Spirit("rum", "pampero", 30, 40);
let bev5 = new Beer("special", "moretti", 3, 4, "ipa");
let bev6 = new Wine("barbera", "merletti", 13, 14, 1998, "barbera");


console.log(bev.toString())
console.log(bev1.toString())
console.log(bev2.toString())
console.log(bev3.toString())


if(bev3.removeQuantity(50)){
    console.log("Bottiglie rimosse!!")
}else{
    console.log("Rimozione non riuscta, controlla la quantità a magazzino!")
}

bev3.removeQuantity(50);

console.log(bev3.removeQuantity(50));

const cellar = new Cellar();

cellar.addBeer(bev2);

cellar.addBeer(bev5);


cellar.addWine(bev3);

cellar.addWine(bev6);


cellar.addSpirit(bev1);

cellar.addSpirit(bev4);


cellar.AddQuantityToCode(bev4.code, 50);

if (cellar.removeQuantityToCode(bev4.code, 80)){
    console.log("viva!");

} else {
    console.log("Accidenti!");

}

console.log(bev4);