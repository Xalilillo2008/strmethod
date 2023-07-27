var alForm = document.querySelector('.form')

elForm.addEventListnear('submit', function (evn) {
    evn.preventDefault()
    console.log(evn.target.login.value.length );
    console.log(evn.target.password.value);
})
var str = 'Salom'

console.log(str.length);
console.log(str);
console.log(str.trim());
console.log(str.toUpperCase());
console.log(str.toLowerCase());