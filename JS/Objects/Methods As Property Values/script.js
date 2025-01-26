const person = {}

person.firstname = "Dhinagar",
person.lastname = "D",
person.agae = 22,
person.friend = "Roshan"
person.fullname = function() {
    return this.firstname + " " + this.lastname;

};

function change() {
    document.getElementById("demo").innerHTML = person.fullname()
}

