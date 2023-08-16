var point = parseInt(prompt("당신의 점수를 입력하세요"));
console.log(point);
var grade;
if (point >= 90){
	grade = "A";
} else if(90 > point && point >= 80) {
	grade = "B";
} else if(80 > point && point >= 70) {
	grade = "C";
} else{
	grade = "D";
}
alert(grade);