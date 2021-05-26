/* 
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */
/* initial solution */
function solution(array, commands) {
    var answer = [];
    commands.map(el => {
        let [i, j, k] = el;
        let arr = array.slice(i-1, j);
        arr.sort();
        answer.push(arr[k-1]);
    })
    return answer;
}
/* revised */
function solution(array, commands) {
    return commands.map(el => {
        let [i, j, k] = el;
        let newArray = array
        .filter((el, index)=> index>=i-1&&index<j)
        .sort();
        return newArray[k-1];
    });
}

/* 
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, 
H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.
어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.
*/
/* initial solution */
function solution(citations) {
    for(let i of citations){
        let arr = citations.filter(el => el>=i);
        if(arr.length >= i){
            return i;
        }
    }
}
/* 2nd try */
function solution(citations) {
    let n = 0;
    while(n < citations.length){
        let arr = citations.filter(el => el>=citations[n]);
        if(arr.length >= citations[n]){
            return citations[n];
        }else{
            n++
        }
    }
}
/* revised */
function solution(citations){
    citations.sort(sorting);

    let num = 0;
    while(num + 1<= citations[num]){
        num ++
    }
    return num;

    function sorting(a, b){
        return b-a;
    }
}

/* 
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 
return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
*/

/* initial solution */
function solution(numbers) {
    numbers.sort(sorting);
    let newNum = '';
    numbers.map(el => newNum += String(el));
    return newNum
    
    function sorting(a,b){
        return ''+a+b>''+b+a?-1:1
    }
}
/* 2nd solution */
function solution(numbers) {
    numbers.sort(sorting);
    let newNum = '';
    numbers.map(el => newNum += String(el));
    return newNum>0?newNum:'0';
    
    function sorting(a,b){
        return ''+a+b>''+b+a?-1:1
    }
}
/* revised */
function solution(numbers) {
    numbers.sort(sorting);
    let newNum = numbers.join('');
    return newNum>0?newNum:'0';
    
    function sorting(a,b){
        return ''+a+b>''+b+a?-1:1
    }
}


/* 
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/
/* initial solution */
function solution(answers) {
    const students = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let stu01 = 0;
    let stu02 = 0;
    let stu03 = 0;
    
    for(var i=0;i<answers.length;i++){
        if(answers[i]===students[0][i]) stu01++;
        if(answers[i]===students[1][i]) stu02++;
        if(answers[i]===students[2][i]) stu03++;
    }
    
    //[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
    if(stu01>stu02&&stu01>stu03){
        return [1];
    }else if(stu02>stu01&&stu02>stu03){
        return [2];
    }else if(stu03>stu01&&stu03>stu02){
        return [3];
    }
    else if(stu01 === stu02 && stu02>stu03){
        return [1, 2];
    }else if(stu01 === stu03 && stu03>stu02){
        return [1,3];
    }else if(stu02 === stu03 && stu02>stu01){
        return [2, 3];
    }else{
        return [1, 2, 3];
    }
 
}
/* revised */
function solution(answers) {
    const students = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    let stu01 = 0;
    let stu02 = 0;
    let stu03 = 0;
    
    for(var i=0;i<answers.length;i++){
        if(answers[i]===students[0][i % 5]) stu01++;
        if(answers[i]===students[1][i % 8]) stu02++;
        if(answers[i]===students[2][i % 10]) stu03++;
    }
    
    //[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
    if(stu01>stu02&&stu01>stu03){
        return [1];
    }else if(stu02>stu01&&stu02>stu03){
        return [2];
    }else if(stu03>stu01&&stu03>stu02){
        return [3];
    }
    else if(stu01 === stu02 && stu02>stu03){
        return [1, 2];
    }else if(stu01 === stu03 && stu03>stu02){
        return [1,3];
    }else if(stu02 === stu03 && stu02>stu01){
        return [2, 3];
    }else{
        return [1, 2, 3];
    }
 
}