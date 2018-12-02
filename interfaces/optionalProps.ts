
//Set Optional in interface
/*
Use Case: Let if we want to force that a function should be taken first param of string type and second param of number type. Second param is optional.
*/

interface ValuesTypeForIntro {
    fullName:string,
    age?:number 
}

function getIntro(objPersonData:ValuesTypeForIntro){
    
    console.log('My Name is ' + objPersonData.fullName + '.');
    if(objPersonData.age){
        console.log('I am ' + objPersonData.age + 'years old.');
    }

}

getIntro({
    fullName:'Mohammed Daud'
});

getIntro({
    fullName:'Mohammed Daud',
    age: 28
});