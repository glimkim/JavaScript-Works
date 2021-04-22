//Fix Callback Hell with async & await

function delay(ms){
    return new Promise(res => setTimeout(res, ms));
}
async function loginUser(id, password){
    await delay(1000);
    if((id === 'limi' && password === 'dream')||(id === 'coder' && password === 'best')){
        return id;
    }else{
        return new Error('not found');
    }
}
async function getRoles(user){
    await delay(1000);
    if(user === 'limi'){
        return ({name: 'limi', role:'admin'});
    }else{
        return new Error('no access');
    }
}

const id = prompt('enter your id');
const password = prompt('enter your password');

async function logIn() {
    const user = await loginUser(id, password);
    const roles = await getRoles(user);
    return roles;
}

logIn().then(you => alert(`Hello, ${you.name}! Your role is ${you.role}`));