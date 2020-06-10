pub fn is_armstrong_number(num: u32) -> bool {
	let power = num.to_string().len() as u32;
	return num
		== num
			.to_string()
			.chars()
			.map(|x| x.to_digit(10).unwrap().pow(power))
			.sum();
}
