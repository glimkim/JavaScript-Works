getData('https://jsonplaceholder.typicode.com/albums', text => {
    let data = JSON.parse(text); 
    if(!Boolean(data)){
        throw Error('Fail to load a JSON file');
    }
});


function getData (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

