const person = new Object();

person.name = "Dhinagar",
person.age = 21,
person.friend = "Roshan"

function change() {
    document.getElementById('demo3').innerHTML = "My Name is " + person.name + " My age is" + person.age + " My Bestie is " + person.friend
}