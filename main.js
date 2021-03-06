let input = document.querySelector('.input')

let power = "";


function insert(num) {
    if(input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else
        input.textContent += num;
}
function clean() {
   input.textContent = '';
   power = "";
}
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length-1);
    if(input.textContent == 0) {
        input.textContent = "0";
    }
}
function equal() {
   let exp = input.textContent;
   if(input.textContent.includes('^')) {
       let tmp = input.textContent.split('^')
       let num = eval(power);
       let pow = +tmp[1]
       input.textContent = Math.pow(num, pow);
       power = "";
       return;
   }
   if(exp) {
       input.textContent = eval(exp);
   }
}

function persent() {
    input.textContent = eval(input.textContent)/100;
}

function pi() {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    input.textContent += Math.PI;
}

function e() {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    input.textContent += Math.E;
}

function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent));
}

function operation(name) {
    if(name == "sqrt") 
        input.textContent = Math.sqrt(eval(input.textContent));
    if(name == "sqr") 
        input.textContent = Math.pow(eval(input.textContent), 2);
    if(name == "^-1") 
        input.textContent = Math.pow(eval(input.textContent), -1);
    if(name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(+eval(input.textContent))
}

function log(name) {
     if(name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent));
     }
     if(name == 'ln') {
        input.textContent = Math.log(eval(input.textContent));
     }
}

document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent ="rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent ="deg";
}})

function f(name) {
    if(name == 'sin') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI))
        }else {
            input.textContent = parseFloat(Math.sin(eval(input.textContent)))
        }
        
    }
    if(name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI))
        }else {
            input.textContent = parseFloat(Math.cos(eval(input.textContent)))
        }    
    }
    if(name == 'tan') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI))
        }else {
            input.textContent = parseFloat(Math.tan(eval(input.textContent)))
        }    
    }
    if(name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI))
        }else {
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)))
        }    }
}