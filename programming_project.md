
# The Art of Assembly Language
[Art Of Intel x86 Assembly](https://www.ic.unicamp.br/~pannain/mc404/aulas/pdfs/Art%20Of%20Intel%20x86%20Assembly.pdf) 
# 1.15 Programming Projects
The following programming projects assume you are using C, C++, Turbo Pascal, Borland Pascal, Delphi, or some other programming language that supports bitwise logical
operations. Note that C and C++ use the “&”, “|”, and “^” operators for logical AND, OR,
and XOR, respectively. The Borland Pascal products let you use the “and”, “or”, and “xor”
operators on integers to perform bitwise logical operations. The following projects all
expect you to use these logical operators. There are other solutions to these problems that
do not involve the use of logical operations, do not employ such a solution. The purpose
of these exercises is to introduce you to the logical operations available in high level languages. Be sure to check with your instructor to determine which language you are to
use.  
The following descriptions typically describe functions you are to write. However,
you will need to write a main program to call and test each of the functions you write as
part of the assignment.  
1) Write to functions, toupper and tolower, that take a single character as their parameter and
convert this character to upper case (if it was lowercase) or to lowercase (if it was uppercase) respectively. Use the logical operations to do the conversion. Pascal users may need
to use the chr() and ord() functions to successfully complete this assignment.  
2) Write a function “CharToInt” that you pass a string of characters and it returns the corresponding integer value. Do not use a built-in library routine like atoi (C) or strtoint (Pascal) to
do this conversion. You are to process each character passed in the input string, convert it
from a character to an integer using the logical operations, and accumulate the result until
you reach the end of the string. An easy algorithm for this task is to multiply the accumulated result by 10 and then add in the next digit. Repeat this until you reach the end of the
string. Pascal users will probably need to use the ord() function in this assignment.
3) Write a ToDate function that accepts three parameters, a month, day, and year value. This
function should return the 16-bit packed date value using the format given in this chapter
(see “Bit Fields and Packed Data” on page 28). Write three corresponding functions
ExtractMonth, ExtractDay, and ExtractYear that expect a 16-bit date value and return the
corresponding month, day, or year value. The ToDate function should automatically convert dates in the range 1900-1999 to the range 0..99.
4) Write a “CntBits” function that counts the number of one bits in a 16-bit integer value. Do
not use any built-in functions in your language’s library to count these bits for you.
5) Write a “TestBit” function. This function requires two 16-bit integer parameters. The first
parameter is a 16-bit value to test; the second parameter is a value in the range 0..15
describing which bit to test. The function should return true if the corresponding bit contains a one, the function should return false if that bit position contains a zero. The function should always return false if the second parameter holds a value outside the range
0..15.
6) Pascal and C/C++ provide shift left and shift right operators (SHL/SHR in Pascal, “<<“
and “>>” in C/C++). However, they do not provide rotate right and rotate left operators.
Write a pair of functions, ROL and ROR, that perform the rotate tasks. Hint: use the function from exercise five to test the H.O. bit. Then use the corresponding shift operation and
the logical OR operation to perform the rotate.

# 2.10 Programming Projects
You may write these programs in any HLL your instructor allows (typically C, C++,
or some version of Borland Pascal or Delphi). You may use the generic logic functions
appearing in this chapter if you so desire.
1) Write a program that reads four values from the user, I, J, K, and L, and plugs these values
into a truth table with B’A’ = I, B’A = J, BA’ = K, and BA = L. Ensure that these input values are only zero or one. Then input a series of pairs of zeros or ones from the user and
W X Y
Clk (#)
A Three-bit Shift Register Built from D Flip-flops
Data In
D D D
QQQ
Chapter 02
Page 78
plug them into the truth table. Display the result for each computation. Note: do not use
the generic logic function for this program.
2) Write a program that, given a 4-bit logic function number, displays the truth table for that
function of two variables.
3) Write a program that, given an 8-bit logic function number, displays the truth table for
that function of three variables.
4) Write a program that, given a 16-bit logic function number, displays the truth table for that
function of four variables.
5) Write a program that, given a 16-bit logic function number, displays the canonical equation for that function (hint: build the truth table).

# 3.7 Programming Projects
Note: You are to write these programs in x86 assembly language code using the
SIMx86 program. Include a specification document, a test plan, a program listing, and
sample output with your program submissions
1) The x86 instruction set does not include a multiply instruction. Write a short program that
reads two values from the user and displays their product (hint: remember that multiplication is just repeated addition).
2) Create a callable subroutine that performs the multplication inproblem (1) above. Pass the
two values to multiple to the subroutine in the ax and bx registers. Return the product in
the cx register. Use the self-modifying code technique found in the section “Self Modifying
Code Exercises” on page 136.
3) Write a program that reads two two-bit numbers from switches (FFF0/FFF2) and
(FFF4/FFF6). Treating these bits as logical values, your code should compute the three-bit
sum of these two values (two-bit result plus a carry). Use the logic equations for the full
adder from the previous chapter. Do not simply add these values using the x86 add instruction.
Display the three-bit result on LEDs FFF8, FFFA, and FFFC.
4) Write a subroutine that expects an address in BX, a count in CX, and a value in AX. It
should write CX copies of AX to successive words in memory starting at address BX.
Write a main program that calls this subroutine several times with different addresses.
Use the self-modifying code subroutine call and return mechanism described in the laboratory exercises.
5) Write the generic logic function for the x86 processor (see Chapter Two). Hint: add ax, ax
does a shift left on the value in ax. You can test to see if the high order bit is set by checking
to see if ax is greater than 8000h.
6) Write a program that reads the generic function number for a four-input function from the
user and then continually reads the switches and writes the result to an LED.
7) Write a program that scans an array of words starting at address 1000h and memory, of
the length specified by the value in cx, and locates the maximum value in that array. Display the value after scanning the array.
8) Write a program that computes the two’s complement of an array of values starting at
location 1000h. CX should contain the number of values in the array. Assume each array
element is a two-byte integer.
9) Write a “light show” program that displays a “light show” on the SIMx86’s LEDs. It
should accomplish this by writing a set of values to the LEDs, delaying for some time
System Organization
Page 139
period (by executing an empty loop) and then repeating the process over and over again.
Store the values to write to the LEDs in an array in memory and fetch a new set of LED
values from this array on each loop iteration.
10) Write a simple program that sorts the words in memory locations 1000..10FF in ascending
order. You can use a simple insertion sort algorithm. The Pascal code for such a sort is
```
for i := 0 to n-1 do
	for j := i+1 to n do
		if (memory[i] > memory[j]) then
		begin
			temp := memory[i];
			memory[i] := memory[j];
			memory[j] := temp;
		end;
```
# 4.10 Programming Projects
Note: You are to write these programs in 80x86 assembly language code using a copy of
the X86.ASM file as the starting point for your programs. The 80x86 instruction set is
almost a superset of the x86 instruction set. Therefore, you can use most of the instructions
you learned in the last chapter. Read the comments at the beginning of the x86.ASM file
for more details. Note in particular that you cannot use the label “C” in your program
because “C” is a reserved word in MASM. Include a specification document, a test plan,
a program listing, and sample output with your program submissions.
1) The following projects are modifications of the programming assignments in the previous
chapter. Convert those x86 programs to their 80x86 counterparts.  
1a. The x86 instruction set does not include a multiply instruction. Write a short program that
reads two values from the user and displays their product (hint: remember that multiplication is just repeated addition).  
1b. Write a program that reads three values from the user: an address it puts into BX, a count
it puts into CX, and a value it puts in AX. It should write CX copies of AX to successive
words in memory starting at address BX (in the data segment). 
Chapter 04
Page 188  
1c. Write the generic logic function for the x86 processor (see Chapter Two). Hint: add ax, ax
does a shift left on the value in ax. You can test to see if the high order bit is set by checking
to see if ax is greater than 8000h.   
1d. Write a program that scans an array of words starting at address 1000h and memory, of
the length specified by the value in cx, and locates the maximum value in that array. Display the value after scanning the array.       
1e. Write a program that computes the two’s complement of an array of values starting at
location 1000h. CX should contain the number of values in the array. Assume each array
element is a two-byte integer.  
1f. Write a simple program that sorts the words in memory locations 1000..10FF in ascending
order. You can use a simple insertion sort algorithm. The Pascal code for such a sort is
```
for i := 0 to n-1 do
	for j := i+1 to n do
		if (memory[i] > memory[j]) then
		begin
			temp := memory[i];
			memory[i] := memory[j];
			memory[j] := temp;
		end;
```
For the following projects, feel free to use any additional 80x86 addressing modes that
might make the project easier to write.
2) Write a program that stores the values 0, 1, 2, 3, ..., into successive words in the data segment starting at offset 3000h and ending at offset 3FFEh (the last value written will be
7FFh). Then store the value 3000h to location 1000h. Next, write a code segment that sums
the 512 words starting at the address found in location 1000h. This portion of the program
cannot assume that 1000h contains 3000h. Print the sum and then quit.
# 5.9 Programming Projects
1) The PC’s video display is a memory mapped I/O device. That is, the display adapter maps
each character on the text display to a word in memory. The display is an 80x25 array of
words declared as follows:
display:array[0..24,0..79] of word;
Display[0,0] corresponds to the upper left hand corner of the screen, display[0,79] is the
upper right hand corner, display[24,0] is the lower left hand corner, and display[24,79] is
the lower right hand corner of the display.
The L.O. byte of each word holds the ASCII code of the character to appear on the screen.
The H.O. byte of each word contains the attribute byte (see “The PC Video Display” on
page 1247 for more details on the attribute byte). The base address of this array is B000:0
for monochrome displays and B800:0 for color displays.
The Chapter Five subdirectory contains a file named PGM5_1.ASM. This file is a skeletal
program that manipulates the PC’s video display. This program, when complete, writes a
series of period to the screen and then it writes a series of blues spaces to the screen. It contains a main program that uses several instructions you probably haven’t seen yet. These
instructions essentially execute a for loop as follows:
```
for i:= 0 to 79 do
	for j := 0 to 24 do
		putscreen(i,j,value);
```
Inside this program you will find some comments that instruct you to supply the code
that stores the value in AX to location display[i,j]. Modify this program as described in its
comments and test the result.
For this project, you need to declare two word variables, I and J, in the data segment. Then
you will need to modify the “PutScreen” procedure. Inside this procedure, as directed by
the comments in the file, you will need to compute the index into the screen array and
then store the value in the ax register to location es:[bx+0] (assuming you’ve computed the
index into bx). Note that es:[0] is the base address of the video display in this procedure.
Check your code carefully before attempting to run it. If your code malfunctions, it may
crash the system and you will have to reboot. This program, if operating properly, will fill
the screen with periods and wait until you press a key. Then it will fill the screen with blue
spaces. You should probably execute the DOS “CLS” (clear screen) command after this
program executes properly. Note that there is a working version of this program named
p5_1.exe in the Chapter Five directory. You can run this program to check out it’s operation if you are having problems.
2) The Chapter  Five subdirectory contains a file named PGM5_2.ASM. This file is a program
(except for two short subroutines) that generates mazes and solves them on the screen.
This program requires that you complete two subroutines: MazeAdrs and ScrnAdrs.
These two procedures appear at the beginning of the file; you should ignore the remainder
Variables and Data Structures
Page 239
of this program. When the program calls the MazeAdrs function, it passes an X coordinate
in the dx register and a Y-coordinate in the cx register. You need to compute the index into
an 27x82 array defined as follows:
```
maze:array[0..26, 0..81] of word;
```
Return the index in the ax register. Do not access the maze array; the calling code will do that for
you.
The ScrnAdrs function is almost identical to the MazeAdrs function except it computes an
index into a 25x80 array rather than a 27x82 array. As with MazeAdrs, the X-coordinate
will be in the dx register and the Y-coordinate will be in the cx register.
Complete these two functions, assemble the program, and run it. Be sure to check your
work over carefully. If you make any mistakes you will probably crash the system.
3) Create a program with a single dimension array of structures. Place at least four fields
(your choice) in the structure. Write a code segment to access element “i” (“i” being a
word variable) in the array.
4) Write a program which copies the data from a 3x3 array and stores the data into a second
3x3 array. For the first 3x3 array, store the data in row major order. For the second 3x3
array, store the data in column major order. Use nine sequences of instructions which fetch
the word at location (i,j) (i=0..2, j=0..2).
5) Rewrite the code sequence above just using MOV instructions. Read and write the array
locations directly, do not perform the array address computations
# 6.13 Programming Projects
1) Write a short “GetLine” routine which reads up to 80 characters from the user and places
these characters in successive locations in a buffer in your data segment. Use the INT 16h
and INT 10h system BIOS calls described in this chapter to input and output the characters typed by the user. Terminate input upon encountering a carriage return (ASCII code
0Dh) or after the user types the 80th character. Be sure to count the number of characters
actually typed by the user for later use. There is a “shell” program specifically designed
for this project on the companion CD-ROM (proj6_1.asm).
2) Modify the above routine so that it properly handles the backspace character (ASCII code
08h). Whenever the user presses a backspace key, you should remove the previous keystroke from the input buffer (unless there are no previous characters in the input buffer, in
which case you ignore the backspace).
3) You can use the XOR operation to encrypt and decrypt data. If you XOR all the characters in
a message with some value you will effectively scramble that message. You can retrieve the
original message by XOR’ing the characters in the message with the same value again.
Modify the code in Program #2 so that it encrypts each byte in the message with the value
0Fh and displays the encrypted message to the screen. After displaying the message,
decrypt it by XOR’ing with 0Fh again and display the decrypted message. Note that you
should use the count value computed by the “GetLine” code to determine how many
characters to process.
4) Write a “PutString” routine that prints the characters pointed at by the es:di register pair.
This routine should print all characters up to (but not including) a zero terminating byte.
This routine should preserve all registers it modifies. There is a “shell” program specifically designed for this project on the companion CD-ROM (proj6_4.asm).
5) To output a 16-bit integer value as the corresponding string of decimal digits, you can use
the following algorithm:
Chapter 06
Page 328
```
if value = 0 then write(‘0’)
else begin
	DivVal := 10000;
	while (Value mod DivVal) = 0 do begin
		Value := Value mod DivVal;
		DivVal := DivVal div 10;
	end;
	while (DivVal > 1) do begin
		write ( chr( Value div DivVal + 48)); (* 48 = ‘0’ *)
		Value := Value mod DivVal;
		DivVal := DivVal div 10;
	end;
end;
```
Provide a short routine that takes an arbitrary value in ax and outputs it as the corresponding decimal string. Use the int 10h instruction to output the characters to the display. You can use the “shell” program provided on the companion CD-ROM to begin this
project (proj6_5.asm).  
6) To input a 16-bit integer from the keyboard, you need to use code that uses the following
algorithm:
Value := 0
repeat
getchar(ch);
if (ch >= ‘0’) and (ch <= ‘9’) then begin
Value := Value * 10 + ord(ch) - ord(‘0’);
end;
until (ch < ‘0’) or (ch > ‘9’);
Use the INT 16h instruction (described in this chapter) to read characters from the keyboard. Use the output routine in program #4 to display the input result. You can use the
“shell” file proj6_6.asm to start this project.
# 7.4 Programming Projects
1) Write any program of your choice that uses at least fifteen different UCR Standard Library
routines. Consult the appendix in your textbook and the STDLIB\DOC directory for
details on the various StdLib routines. At least five of the routines you choose should not
appear in this chapter. Learn those routines yourself by studying the UCR StdLib documentation.
2) Write a program that demonstrates the use of each of the format options in the PRINTF
StdLib routine.
3) Write a program that reads 16 signed integers from a user and stores these values into a
4x4 matrix. The program should then print the 4x4 matrix in matrix form (i.e., four rows of
four numbers with each column nicely aligned).
4) Modify the program in problem (3) above so that figures out which number requires the
largest number of print positions and then it outputs the matrix using this value plus one
as the field width for all the numbers in the matrix. For example, if the largest number in
the matrix is 1234, then the program would print the numbers in the matrix using a minimum field width of five.
# 8.24 Programming Projects
1) Write a program that inputs two 4x4 integer matrices from the user and compute their
matrix product. The matrix multiply algorithm (computing C := A * B) is
```
for i := 0 to 3 do
	for j := 0 to 3 do begin
		c[i,j] := 0;
		for k := 0 to 3 do
			c[i,j] := c[i,j] + a[i,k] * b[k,j];
	end;
```
Feel free to use the ForLp and Next macros from Chapter Six.  
2) Modify the sample program (“Sample Program” on page 432) to use the FORLP and
NEXT macros provided in the textbook. Replace all for loop simulations in the program
with the corresponding macros.  
3) Write a program that asks the user to input three integer values, m, p, and n. This program
should allocate storage for three arrays: A[0..m-1, 0..p-1], B[0..p-1, 0..n-1], and C[0..m-1,
0..n-1]. The program should then read values for arrays A and B from the user. Next, this
program should compute the matrix product of A and B using the algorithm:
```
for i := 0 to m-1 do
	for j := 0 to n-1 do begin
		c[i,j] := 0;
		for k := 0 to p-1 do
			c[i,j] := c[i,j] + a[i,k] * b[k,j];
end;
```
Finally, the program should print arrays A, B, and C. Feel free to use the ForLp and Next
macro given in this chapter. You should also take a look at the sample program (see “Sample Program” on page 432) to see how to dynamically allocate storage for arrays and
access arrays whose dimensions are not known until run time.  
4) The ForLp and Next macros provide in this chapter only increment their loop control variable by one on each iteration of the loop. Write a new macro, ForTo, that lets you specify
an increment constant. Increment the loop control variable by this constant on each iteration of the for loop. Write a program to demonstrate the use of this macro. Hint: you will
need to create a global label to pass the increment information to the NEXT macro, or you
will need to perform the increment operation inside the ForLp macro.  
5) Write a third version for ForLp and Next (see Program #7 above) that lets you specify negative increments (like the for..downto statement in Pascal). Call this macro ForDT
(for..downto).
# 10.13 Programming Projects
1) Write a program to transpose two 4x4 arrays. The algorithm to transpose the arrays is
```
for i := 0 to 3 do
	for j := 0 to 3 do begin
		temp := A [i,j];
		A [i,j] := B [j,i];
		B [j,i] := temp;
	end;
```
Write a main program that calls a transpose procedure. The main program should
read the A array values from the user and print the A and B arrays after computing the
transpose of A and placing the result in B.  
2) Create a program to play music which is supplied as a string to the program. The notes to
play should consist of a string of ASCII characters terminated with a byte containing the
value zero. Each note should take the following form:
(Note)(Octave)(Duration)
where “Note” is A..G (upper or lower case), “Octave” is 0..3, and “Duration” is 1..8. “1”
corresponds to an eighth note, “2” corresponds to a quarter note, “4” corresponds to a half
note, and “8” corresponds to a whole note.
Rests consist of an explanation point followed by a “Duration” value.
Your program should ignore any spaces appearing in the string.
The following sample piece is the song “Amazing Grace” presented earlier.
Music  
```
byte "d12 g14 b11 g11 b14 a12 g14 e12 d13 !1 d12 "
byte "g14 b11 g11 b14 a12 d28"
byte "b12 d23 b11 d21 b11 g14 d12 e13 g12 e11 "
byte "d13 !1 d12 g14 b11 g11 b14 a12 g18"
byte 0
```
Write a program to play any song appearing in string form like the above string. Using
music obtained from another source, submit your program playing that other song.   
3) A C character string is a sequence of characters that end with a byte containing zero. Some
common character string routines include computing the length of a character string (by
counting all the characters in a string up to, but not including, the zero byte), comparing
two strings for equality (by comparing corresponding characters in two strings, character
by character until you encounter a zero byte or two characters that are not the same), and
copying one string to another (by copying the characters from one string to the corresponding positions in the other until you encounter the zero byte). Write a program that
reads two strings from the user, computes the length of the first of these, compares the two
strings, and then copies the first string over the top of the second. Allow for a maximum of
128 characters (including the zero byte) in your strings. Note: do not use the Standard
Library string routines for this project.   
4) Modify the moon lander game appearing in the Sample Programs section of this chapter
(moon.asm on the companion CD-ROM, also see “Sample Program” on page 547) to allow
the user to specify the initial velocity, starting distance from the surface, and initial fuel
values. Verify that the values are reasonable before allowing the game to proceed.
# 11.12 Programming Projects
1) Write a version of the matrix multiply program inputs two 4x4 integer matrices from the
user and compute their matrix product (see Chapter Eight question set). The matrix multiply algorithm (computing C := A * B) is
```
for i := 0 to 3 do
	for j := 0 to 3 do begin
	c[i,j] := 0;
		for k := 0 to 3 do
			c[i,j] := c[i,j] + a[i,k] * b[k,j];
	end;
```
The program should have three procedures: InputMatrix, PrintMatrix, and MatrixMul.
They have the following prototypes:
Procedure InputMatrix(var m:matrix);
procedure PrintMatrix(var m:matrix);
procedure MatrixMul(var result, A, B:matrix);
In particular note that these routines all pass their parameters by reference. Pass these
parameters by reference on the stack.
Maintain all variables (e.g., i, j, k, etc.) on the stack using the techniques outlined in “Local
Variable Storage” on page 604. In particular, do not keep the loop control variables in register.
Write a main program that makes appropriate calls to these routines to test them.  
2) A pass by lazy evaluation parameter is generally a structure with three fields: a pointer to
the thunk to call to the function that computes the value, a field to hold the value of the
parameter, and a boolean field that contains false if the value field is uninitialized (the
value field becomes initialized if the procedure writes to the value field or calls the thunk
to obtain the value). Whenever the procedure writes a value to a pass by lazy evaluation
parameter, it stores the value in the value field and sets the boolean field to true. Whenever a procedure wants to read the value, it first checks this boolean field. If it contains a
true value, it simply reads the value from the value field; if the boolean field contains
false, the procedure calls the thunk to compute the initial value. On return, the procedure
stores the thunk result in the value field and sets the boolean field to true. Note that during any single activation of a procedure, the thunk for a parameter will be called, at most,
one time. Consider the following Panacea procedure:
```
SampleEval: procedure(select:boolean; eval a:integer; eval b:integer);
var
	result:integer;
endvar;
begin SimpleEval;
	if (select) then
		result := a;
	else
		result := b;
	endif;
	writeln(result+2);
end SampleEval;
```
Write an assembly language program that implements SampleEval. From your main pro-gram call SampleEval a couple of times passing it different thunks for the a and b parameters. Your thunks can simply return a single value when called.  
3) Write a shuffle routine to which you pass an array of 52 integers by reference. The routine
should fill the array with the values 1..52 and then randomly shuffle the items in the array.
Use the Standard Library random and randomize routines to select an index in the array to
swap. See Chapter Seven, “Random Number Generation: Random, Randomize” on
page 343 for more details about the random function. Write a main program that passes an
array to this procedure and prints out the result.
#  12.8 Programming Projects
1) Write at iterator to which you pass an array of characters by reference. The iterator should
return an index into the array that points at a whitespace character (any ASCII code less
than or equal to a space) it finds. On each call, the iterator should return the index of the
next whitespace character. The iterator should fail if it encounters a byte containing the
value zero. Use local variables for any values the iterator needs.
2) Write a recursive routine that does the following:
function recursive(i:integer):integer;
var j,k:integer;
begin
j := i;
k := i*i;
if (i >= 0) then writeln(‘AR Address =’, Recursive(i-1));
writeln(i,’ ‘,j,’ ‘,k);
recursive := Value in BP Register;
end;
From your main program, call this procedure and pass it the value 10 on the stack. Verify
that you get correct results back. Explain the results.
3) Write a program that contains a procedure to which you pass four parameters on the
stack. These should be passed by value, reference, value-result, and result, respectively
(for the value-result parameter, pass the address of the object on the stack). Inside that
procedure, you should call three other procedures that also take four parameters (each).
However, the first parameter should use pass by value for all four parameters; the second
procedure should use pass by reference for all four parameters; and the third should use
pass by value-result for all four parameters. Pass the four parameters in the enclosing procedure as parameters to each of these three child procedures. Inside the child procedures,
print the parameter’s values and change their results. Immediately upon return from each
of these child procedures, print the parameters’ values. Write a main program that passes
four local (to the main program) variables you’ve initialized with different values to the
first procedure above. Run the program and verify that it is operating correctly and that it
is passing the parameters to each of these procedures in a reasonable fashion.
4) Write a program that implements the following Pascal program in assembly language.
Assume that all program variables (including globals in the main program) are allocated
in activation records on the stack.
```
program nest3;
var i:integer;
	procedure A(k:integer);
	procedure B(procedure c);
	var m:integer;
	begin
	for m:= 0 to 4 do c(m);
	end; {B}
	procedure D(n:integer);
	begin
	for i:= 0 to n-1 do writeln(i);
	end; {D}
	procedure E;
	begin
	writeln(‘A stuff:’);
	B(A);
	writeln(‘D stuff:’);
	B(D);
	end; {E}
	begin {A}
	B(D);
	writeln;
	if k < 2 then E;
	Procedures: Advanced Topics
	Page 697
	end; {A}
	begin {nest3}
	A(0);
end; {nest3}
```
5) The program in Section 12.7.2 (Ex12_2.asm on the companion CD-ROM) uses the 80286
enter and leave instructions to maintain the display in each activation record. As pointed
out in Section 12.1.6, these instructions are quite slow, especially on 80486 and later processors. Rewrite this code by replacing the enter and leave instructions with the
straight-line code that does the same job. In CodeView, single step through the program as
per the second laboratory exercise (Section 12.7.2) to verify that your stack frames are
identical to those the enter and leave instructions produce.
6) The generic Bubble Sort program in Section 12.7.3 only works with data objects that are
two bytes wide. This is because the Sort procedure passes the values of Data[I] and Data[J]
on the stack to the comparison routines (LTint and LTunsigned) and because the sort routine multiplies the i and j indexes by two when indexing into the data array. This is a
severe shortcoming to this generic sort routine. Rewrite the program to make it truly
generic. Do this by writing a “CompareAndSwap” routine that will replace the LT and
Swap calls. To CompareAndSwap you should pass the array (by reference) and the two
array indexes (i and j) to compare and possibly swap. Write two versions of the
CompareAndSwap routine, one for unsigned integers and one for signed integers. Run
this program and verify that your implementation works properly