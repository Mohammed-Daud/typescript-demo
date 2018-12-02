
interface TwoNumbers {
    readonly firstNo: number,
    readonly secondNo: number
}

//let a variable and use interface into it

let myTotal: TwoNumbers; 
//similer as if we set type number like myTotal: number
//here we set type: TwoNumbers and also we define structure of TwoNumbers. 

//assign values

myTotal = {
    firstNo:10, secondNo:20
}

//Note: Variables use const whereas properties use readonly.
