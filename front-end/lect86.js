//Print all number between -10 and 19
var num1 = -10;
console.log("Print all number between -10 and 19");
while(num1 <= 19){
	console.log(num1);
	num1++;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
var num2 = 10;
while(num2 <= 40){
		if (num2%2==0) {
		console.log(num2);
		}
	num2++;
}

//Print all add numbers between 300 and 333
console.log("Print all add numbers between 300 and 333");
var num3=300;
while(num3<=333){
	if(num3%2 != 0){
		console.log(num3);
	}
	num3++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50")
var num4=5;
while(num4 <=50){
	if (num4%3==0 && num4 % 5 ==0) {
		console.log(num4);
	}
	num4++;
}