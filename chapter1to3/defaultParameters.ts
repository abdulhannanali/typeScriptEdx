// default parameter
function buildName(firstName: string, lastName = "Ali") {
  return firstName + " " + lastName;
}

console.log(buildName("Hannan"));


// optional paramaeter
function buildName2(firstName: string, lastName :string) {
  return firstName;
}

console.log(buildName2("Hannan"));
