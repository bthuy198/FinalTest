class Staff {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    }
    setFullname(name) {
        return this.fullname = name;
    }
    getFullname() {
        return this.fullname;
    }
    setEmail(email) {
        return this.email = email;
    }
    getEmail() {
        return this.email;
    }
    toString() {
        return `fullname = ${this.fullname}, email = ${this.email}`
    }
}

let david = new Staff('David', 'david@gmail.com');
david.setFullname('David Do');
david.setEmail('david.do@gmail.com');
console.log(david.toString());
let Staffs = [
    david,
    new Staff("Bich Thuy", 'thuy@gmail.com'),
    new Staff('Thi', 'thi@gmail.com')
];
let show = '';
Staffs.forEach(function (value, index) {
    show += `${index + 1}. ${value.toString()}\n`
});
console.log(show);