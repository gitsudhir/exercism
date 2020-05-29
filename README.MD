## Lets learn rust with the help of javascript ❤
#
#### 1. Hello world
- javascript
```javascript {.line-numbers}
console.log("Hello world");
```
- rust
```rust {.line-numbers}
fn main() {
	println!("Hello, world!");
}
```
#
#### 2. Pattern Matching
- rust
```rust
is_leap_year_pattern(2000);
let rr = is_leap_year_pattern_return(2000);
println!(" rr is {}",rr);
fn is_leap_year_pattern(x: u32) {
	match (x % 400 == 0, x % 4 == 0, x % 100 == 0) {
		(true, _, _) => println!("{}  leap year", x),
		(_, true, false) => println!("{} leap year", x),
		(_, _, _) => println!("{} not a leap year", x),
	}
}
fn is_leap_year_pattern_return(x: u32) -> bool {
	match (x % 400 == 0, x % 4 == 0, x % 100 == 0) {
		(true, _, _) => true,
		(_, true, false) => true,
		(_, _, _) => false,
	}
}

```
#
#### 3. for loop 
- rust  
```rust
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
```
#
#### 4. nth
- rust  
`.nth(n as usize)`
What does that actually do?  
> `"nth"` (https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.nth) returns the nth element of the iterator. If I have `[1, 2, 3]`, and use `nth(1)`, I get `2`. `"nth"` takes variable of type `"usize"`, but I have an `"u32"`. I must convert this variable for `"nth"` to work. This is why I use `"as usize"`.
#
#### 5. Parallel Programming in javascript
- javascript
	- `using promise`
	```javascript
		console.time("answer time");
		let numberEnd = 100 * 100 * 100 * 100;
		let numberEndHalf = numberEnd / 2;
		console.log("ans=>", numberEnd * (numberEnd + 1) * 0.5)
		let p1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				let sum = 0;
				let start = 0;
				let end = numberEndHalf;
				console.log("p1")
				for (let i = start; i <= end; i += 1) {
					sum += i;
				}
				resolve(sum);
			}, 0);
		});
		let p2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				let sum = 0;
				let start = numberEndHalf + 1;
				let end = numberEndHalf * 2;
				console.log("p2")
				for (let i = start; i <= end; i += 1) {
					sum += i;
				}
				resolve(sum);
			}, 0);
		});
		Promise.all([p1, p2]).then(values => {
			let total = values.reduce((a, b) => a + b);
			console.log(total);
		});
		console.timeEnd("answer time");
	// answer time: 0.237060546875ms
	```
	- `using old solution`
	```javascript
		console.time("old solution");
		let sum = 0;
		let start = 0;
		let end = numberEnd;
		for (let i = start; i <= end; i += 1) {
			sum += i;
		}
		console.log("old=>>", sum);
		console.timeEnd("old solution");
    // old solution: 1584.906982421875ms 
	```
#
#### 6 . Chaining functions in javascript
- javascript
```javascript
let math = (value = 0) => {
	return {
		val: value
		, sum: (n = 0) => math(value + n)
		, mul: (n = 1) => math(value * n)
		, square: (n = 2) => math(value ** n)
	}
}

let temp = math(3).sum(8).sum(11).sum(-2).mul(3).mul(0.5).square().square(1 / 2).val
console.log('temp= ', temp);
```	
