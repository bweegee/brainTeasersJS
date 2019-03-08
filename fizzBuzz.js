const fizzBuzz = function() {
	// fizz buzz values can be set to anything
	let fizz = 3
	let buzz = 5

	for (let n = 1; n <= 100; n++) {

		if ((n % fizz === 0) && (n % buzz === 0))
			console.log("FizzBuzz");
		else if (n % fizz === 0)
			console.log("fizz");
		else if (n % buzz === 0)
			console.log("buzz");
		else
			console.log(n);
	}
}

fizzBuzz();
