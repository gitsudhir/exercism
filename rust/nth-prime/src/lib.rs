pub fn nth(n: usize) -> u64 {
	// unimplemented!("What is the 0-indexed {}th prime number?", n)
	let mut prime_list = vec![0; 10_001];
	let mut index = 0;
	prime_list[0] = 2;
	index += 1;
	let mut num = 3;
	loop {
		let vv = is_prime_number(num);
		if vv == true {
			prime_list[index] = num;
			index += 1;
		}
		num += 2;
		if index >= 10_001 {
			break;
		}
	}
	return prime_list[n];
}

fn is_prime_number(num: u64) -> bool {
	if num == 2 {
		return true;
	};
	if num % 2 == 0 {
		return false;
	}
	for i in (3..num).step_by(2) {
		if num % i == 0 {
			return false;
		}
	}
	return true;
}
