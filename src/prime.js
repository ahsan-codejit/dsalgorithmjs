function isPrime(n){
	if(n===2) return true;
	if(n===3) return true;
	if(n%2==0 || n%3==0) return false;
	let i=5;
	while(i*i<=n){
		if(n%i==0){
			return false;
		}
		i+=2;
	}
	return true;
}
function getPrimeFactors(n){
	let factors = [];
	for(let i=2; i<=n/2; i++){
		if(n%i==0 && isPrime(i)){
			factors.push(i);
		}
	}
	return factors;
}
module.exports = {
	isPrime: isPrime,
	getPrimeFactors: getPrimeFactors
}