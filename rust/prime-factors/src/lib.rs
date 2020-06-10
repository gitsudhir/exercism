pub fn factors(mut n: u64) -> Vec<u64> {
	let mut output = vec![];
	let mut num = 2;
	loop {
		if n % num == 0 {
			output.push(num);
			n = n / num;
		} else {
			num += 1;
		}
		if !(num <= n) {
			break;
		}
	}
	return output.to_vec();
}
