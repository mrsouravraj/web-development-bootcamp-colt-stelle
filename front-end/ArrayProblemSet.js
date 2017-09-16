function printReverse(arr) {
	for(var i=arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse([1,2,3,4]);

//***isUniform()***
function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== first) {
			return false;
		}
	}
	return true;
}

//***sumArray()***

function sumArray(arr) {
	 sum=0;
	// for (var i = 0; i < arr.length; i++) {
	// 	sum=sum+arr[i];
	// }
	// return sum;
	arr.forEach(function(element){
		sum +=element;
	})
	return sum;

}

function max(arr){
	max=arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (max <  arr[i]) {
			max = arr[i];
		}
	}
	return max;
}