/* 
    직사각형을 만드려고 한다. 
    3점의 (x, y)의 좌표가 배열 v로 주어질 때,
    직사각형을 만드는 나머지 1점의 좌표를 배열로 반환하라.
*/

let x = 0;
let y = 0;
for(let i = 0;i<3;i++){
    var alone = v.filter(el => el[1] != v[i][1]);
    if(v)
    y = alone[1];
}
for(let i = 0;i<3;i++){
    var alone = v.filter(el => el[0] != v[i][0]);
    x = alone[0];
}
let answer = [x, y];
return answer;
