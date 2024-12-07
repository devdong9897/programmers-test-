// day2: 사칙연산, 조건문, 배열

// 두 수의 나눗셈
function solution(num1, num2) {
  let answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

solution(3, 2);
solution(7, 3);
solution(1, 16);
