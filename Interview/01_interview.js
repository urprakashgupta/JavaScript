//Part 1 - Javascript Interview Questions ( Var, Let and Const ) - Hoisting, Scoping, Shadowing and more

//var is global scope
//let,const block scope



//--variable shadwoing---------------------
/*
function test() {
    let a = 'hello';

    if (true) {
        let a = "hi";
        console.log(a);

    }
    console.log(a);

}

test();

*/

//----Illegal Shadowing------------------------

/*
function test() {
    var a = 'hello';
    let b = 'Bye';

    if(true) {
        let a = "hi";
        var b = "goodbye"
        console.log(a);

    }
    console.log(a);

}

test();
*/



//--------Declaration-----------------

// let a ;
// let a;


// const a;
// const a;

// var a;
// var a;    --this will not give error

// let a;
// {
//     let a;
// }                     --this is completely fine.




//-----------Declaration without initlization----------------

//  var a;
//  let a;
//  const a;  🙅‍♂️   so const a = 5 👍



//Study hoisiting from the notes that i have written in notebook.


//hoisiting questions that asked in interview :

//----Question -1
/*
function abc() {
    console.log(a);
    var a = 10;
}
abc()  //output will be undefined .
*/

//-------Question-2
/*
function abc() {
    console.log(a, b, c)
    const a = 5;
    let b = 6;
    var c = 10
}
abc()
*/
//--in this const and let goes down into temporal dead zone 