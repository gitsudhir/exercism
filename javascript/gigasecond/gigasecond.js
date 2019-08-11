const GIGASECOND = 1E12;
export function gigasecond(date) {
	return new Date(date.getTime() + GIGASECOND); // milliseconds
}
