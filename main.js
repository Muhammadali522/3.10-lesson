// DRY > Don't repeat yourself

// Declartion vs Expression

//  Declartion


// function salom(params) {
//     console.log("Salom function :)");
// }

// // salom()




// let ism = prompt("Ismingizni kriting")

// if(ism == "Salom"){
//     salom()
// }else{
//     console.log("Function islamadi :(");
// }




// function sanjar() {
//     let random1 = Math.random() * 100;
//     let random2 = Math.random() * 100;
//     let natija1 = Math.round(random1);
//     let natija2 = Math.round(random2);
//     console.log(natija1 + natija2); 
// }

// sanjar()




// let son1 = +prompt("Birinchi son")
// let son2 = +prompt("Ikinchi son")
// function plus(a, b) {
//     console.log(a + b);
// }

// plus(son1, son2)




// Expression

// const ism = function (a, b) {
// return a + b
// }

// console.log(ism(5,7));



// let num = +prompt("raqam kriting")

// const render = function(a){
//     if(a % 2 == 0){
//         console.log(`${a} soni juft son`);
//     }else{
//         console.log(`${a} soni toq son`);
//     }
// }

// render(num)


let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

function sonlar(a, b) {
    if (a > b) {
        alert("Большее число: " + a);
    } else if (b > a) {
        alert("Большее число: " + b);
    } else {
        alert("Оба числа равны");
    }
}
sonlar(num1, num2)