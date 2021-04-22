//async & await
//clear style of using promise :)

//1. async
async function fetchUser() {//async 키워드를 이용하면 바로 비동기식인 promise로 변환이 됨
    // do network request in 10 secs...
    return 'limi';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(res => setTimeout(res, ms));
}

async function getApple(){
    await delay(2000); //wait until delay function finishes
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}
/* 
function pickFruits() {
    return getApple()
    .then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
} */

//taking 2seconds 
/* async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
} */

//taking a second
async function pickFruits() {
    const applePromise = getApple(); //as soon as you call Promise, it's executed. 병렬적으로 데이터를 불러올 때는 서로 데이터를 기다릴 필요 X
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);