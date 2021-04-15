
interface ValidationData {
    [className: string]: {
        [propName: string]: string[]; //['required', 'password']
    }
}

const validations: ValidationData = {};

function validator(target: string[]) {
    return function (target: any, propName: string) {
        validations[target.constructor.name] = {
            [propName] : types
        }
    }
}

class Person {
    @validator(['required'])
    email: string;
    @validator(['required', 'password'])
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