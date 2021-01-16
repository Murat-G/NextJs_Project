const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myfile');
console.log(myParam)  