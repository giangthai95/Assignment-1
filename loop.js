// JavaScript File
var text="";
var i=0;
/* For Loop

for (var i = 0; i <= 15; i++) { 
    text += "The number is " + i + "\n";
}
For in Loop

var students = new Array("Gabriel", "Yohani", "tyler", "john", "micheal", "Giang");

var x;
for (x in students) {
    text +=students[x] + "\n";
}
*/

/*While Loop
var i=5;
while (i == 5) {
    text += "the number is " + i + "\n"
    i++;
}

console.log(text);
*/

/*Do While
do {
    text += "the number is " + i + "\n";
    i++;
}
while (i < 10);

console.log(text);
*/
/* Break
var number = 1;
var sum = 0;
while (true)
{
    sum += number;
    
    if (number == 5){
        break;
    }
    number++;
}
console.log("Sum = " + sum);
*/
/*Continue*/
for (i = 2; i <= 10; i++)
{
    if ((i % 2) != 0){
        continue;
    }
    console.log(i);
}