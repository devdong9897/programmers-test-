// day2: 사칙연산, 조건문, 배열

// 두 수의 나눗셈
function solution1(num1, num2) {
  let answer = Math.floor((num1 / num2) * 1000);
  return answer;
}

solution(3, 2);
solution(7, 3);
solution(1, 16);

// 숫자 비교하기
function solution2(num1, num2) {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
}

solution(2, 3);
solution(11, 11);
solution(7, 99);
