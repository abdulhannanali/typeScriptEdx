// default parameter
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Ali"; }
    return firstName + " " + lastName;
}
console.log(buildName("Hannan"));
// optional paramaeter
function buildName2(firstName, lastName) {
    return firstName;
}
console.log(buildName2("Hannan"));
