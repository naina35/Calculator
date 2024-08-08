const buttonDigit =document.querySelectorAll("button.digit");
let firstNumber=NaN;
let secondNumber=NaN;
let operatorpress=false;
let op;
let result=0;
const resultarea=document.querySelector("div.display>p");
resultarea.textContent="Hi There";
//const debug=document.querySelector("div.debug");
function operate(x,y,op)
{
    //debug.textContent=op+" "+x+" "+y;
    switch(op)
    {
        case "plus":result=x+y;break;
        case "minus":result=x-y;break;
        case "mult":result=x*y;break;
        case "divide":{
            if(y!=0)result=x/y;
            return result="X Freaky maths X";
        }
        break;
            default:result="NaN";
    }

    // Truncate the result if it's too 
    //debug.textContent=op+" "+x+" "+y+" "+result;
    if(result>1000000000)return 100000000;
    return result;
}
buttonDigit.forEach(button=> {
    button.addEventListener("click",()=>{
        //debug.textContent=op+" "+x+" "+y;
        let no= +button.id;
        if(button.id=="z")no=0;
        console.log(no);
        if(operatorpress)
        {
            if(Number.isNaN(secondNumber))secondNumber=no;//Number.isNaN(secondNumber)
            else secondNumber=secondNumber*10+no;
            resultarea.textContent=secondNumber;
            if(Number.isNaN(firstNumber))firstNumber=0;
        }
        else 
        {
            if(Number.isNaN(firstNumber))firstNumber=no;
            else firstNumber=firstNumber*10+no;
            resultarea.textContent=firstNumber;
        }
    })
});
const buttonOp=document.querySelectorAll("button.op");
buttonOp.forEach(button=>{
    button.addEventListener("click",()=>{
    if(operatorpress==true && Number.isNaN(secondNumber)==false)
    {
        
        result=operate(firstNumber,secondNumber,op);
        resultarea.textContent=result;
        firstNumber=+result;
        secondNumber=NaN;
        
    }
    else operatorpress=true;
    op=button.id;
})
});
const equalsto=document.querySelector("button.equals");
equalsto.addEventListener("click",()=>{
    if(!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)){
    result=operate(firstNumber, secondNumber, op);
    resultarea.textContent=result;
    operatorpress=false;
    firstNumber=result;
    secondNumber=NaN;
    }
    
});
const clearButton=document.querySelector("button.clr");
clearButton.addEventListener("click",()=>{
    operatorpress=false;
    firstNumber=NaN;
    secondNumber=NaN;
    result=0;
    resultarea.textContent="";
});
