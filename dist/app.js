"use strict";
var Person = /** @class */ (function () {
    function Person(email, password) {
        this.email = email;
        this.password = password;
    }
    return Person;
}());
var personForm = document.querySelector('form');
personForm === null || personForm === void 0 ? void 0 : personForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var emailElem = document.getElementById('email');
    var passwordElem = document.getElementById('password');
    var newPerson = new Person(emailElem.value, passwordElem.value);
    console.log(newPerson);
});
