pub fn is_leap_year(year: u64) -> bool {
	match (year % 400 == 0, year % 4 == 0, year % 100 == 0) {
		(true, _, _) => true,
		(_, true, false) => true,
		(_, _, _) => false,
	}
}
