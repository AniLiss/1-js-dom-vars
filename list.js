/**
 * Created by Elizabeth on 26.11.2016.
 */
"use strict";
var people = [];

var names = ['Sara', 'Peter', 'Nickolas', 'Kate', 'Emma'];
var jobs = ['Web Developer', 'Astronaut', 'Firefighter', 'Doctor', 'Snowthrower'];
var womenNames = ['Emma', 'Sara', 'Kate'];

function generateRandom(min, max) {

    return min + Math.floor(Math.random() * (max + 1 - min));

}
//generation an array of objects
function generatePerson(people, names, jobs) {

    for (var i = 0; i < 10; i++) {

        var person = {};
        if (names.length && jobs.length) {
            person.name = names[Math.floor(Math.random() * names.length - 1 + 1)];
            person.profession = jobs[Math.floor(Math.random() * jobs.length - 1 + 1)];
            person.age = generateRandom(20, 35);
            person.salary = generateRandom(20, 120);
            people[i] = person;
        }
    }
    return people;
}

console.log(generatePerson(people, names, jobs));

var nameSpan;
var professionSpan;
var ageSpan;
var salarySpan;
var li;
var ul = document.createElement('ul');

for (var i = 0; i < 10; i++) {

    nameSpan = document.createElement('span');
    professionSpan = document.createElement('span');
    ageSpan = document.createElement('span');
    salarySpan = document.createElement('span');

    li = document.createElement('li');
    li.setAttribute('style', 'line-height:24px; padding: 5px; line; list-style-type: none;');

    nameSpan.innerHTML = people[i].name + ' ';
    professionSpan.innerHTML = checkProfession(people[i].profession) + ' ';
    ageSpan.innerHTML = checkAge(people[i].age) + ' ';
    salarySpan.innerHTML = checkSalary(people[i].salary) + ' ';

    li.appendChild(nameSpan);
    li.appendChild(professionSpan);
    li.appendChild(ageSpan);
    li.appendChild(salarySpan);

    ul.appendChild(li);

}

function checkSalary(salary) {
    (salary < 50) ? li.style.background = '#ff7676' :
        (salary > 50 && salary < 80 ) ? li.style.background = '#ffff5b' :
            li.style.background = '#96ec96';
    return salary;
}

function checkAge(age) {
    if (age > 20 && age < 27) {

        ageSpan.setAttribute('style', 'font-weight: bold;')
    }
    return age;
}

function checkProfession(profession) {
    if (profession === 'Web Developer'){
        li.style.border = '1px solid #9c9c9c';
    }
    return profession;
}
document.body.appendChild(ul);
ul.setAttribute('style', 'width: 500px; margin: 0 auto; padding:20px;');
