let a = parseFloat(prompt('Enter value a'));
let b = parseFloat(prompt('Enter value b'));
let c = parseFloat(prompt('Enter value c'));

function qEquation(a,b,c) {
    let dD = b*b-4*a*c;

if(dD>0){
    let top1 = ((-1)*(b))+ Math.sqrt(dD);
    let top2 = ((-1)*(b))- Math.sqrt(dD);
    
    let x1 = top1/(2*a);
    let x2 = top2/(2*a);

  let  result = x1 +';'+ x2;
    return result;
}
else if (dD==0) {
    let x = Math.abs(b)/(2*a);
    let result = x;
    return result;
}

else {return 'there are no solutions within REAL numbers'}
}
   

alert(qEquation(a,b,c));