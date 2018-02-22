var faker = require('faker');

console.log("=====================");
console.log("Welcome to My Shop!!!");
console.log("=====================");
for(var i=0;i<10;i++){
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}