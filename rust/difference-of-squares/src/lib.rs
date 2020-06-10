pub fn square_of_sum(n: u32) -> u32 {
	// unimplemented!("square of sum of 1...{}", n)
	let nn: u32 = (1..=n).into_iter().sum();
	return nn * nn;
}

pub fn sum_of_squares(n: u32) -> u32 {
	// unimplemented!("sum of squares of 1...{}", n)
	return (1..=n).into_iter().map(|x| x * x).sum();
}

pub fn difference(n: u32) -> u32 {
	// unimplemented!(
	// 	"difference between square of sum of 1...{n} and sum of squares of 1...{n}",
	// 	n = n,
	// );
	square_of_sum(n) - sum_of_squares(n)
}
