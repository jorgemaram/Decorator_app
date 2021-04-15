class Person{
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

const personForm = document.querySelector('form');
personForm?.addEventListener('submit', event => {
    event.preventDefault();
    const emailElem = document.getElementById('email') as HTMLInputElement;
    const passwordElem = document.getElementById('password') as HTMLInputElement;

    const newPerson = new Person(emailElem.value, passwordElem.value);

    console.log(newPerson)
});