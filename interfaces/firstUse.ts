
/*
Use Interface in a function.
Use Case: Let if we want to force that a function should be taken exactly two params of string type.
*/

interface ValuesTypeForFullName {
    firstName   :string,
    lastname    :string
}

function getFullname(objForNameVals:ValuesTypeForFullName){
    console.log(objForNameVals.firstName + objForNameVals.lastname);
}

getFullname({
    firstName:'Mohammed',
    lastname: 'Daud'
});
