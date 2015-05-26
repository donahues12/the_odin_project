var pNum = 2;
var x = 600851475143;

while (x != pNum) {
	if (x % pNum === 0) {
		x = x/pNum;
	} else {
		pNum++;
	}
}

console.log(pNum);