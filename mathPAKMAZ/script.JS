const finelResult=document.getElementById("result");//מדבר על התןצאה איפה היא תוצג 
const calcul=document.getElementById("calculation");//הכפתור של החישוב
const input=document.getElementById("num");// הביטוי אותו אנחנו רוצים לחשב מקבל את האלמנט לא את מה שיש בפנים
const buttenClear=document.getElementById("clear");


calcul.addEventListener("click",start);//כשלוחצים על כפתור החישוב תתחיל
buttenClear.addEventListener("click",remov)

let i=0;
function start(){
    //debugger;
    let newNumber=[];
    let operator=[];
    let x=[];
    let expression = input.value;// מחזיר לי את כל הביוטי שהמשתמש הכניס

    help(i);

    function help(n){
        if(n>=expression.length)
            return;
        x=[];
        while (n<expression.length&&expression[n]!='+'&&expression[n]!='-'&&expression[n]!='/'&&expression[n]!='*'&&expression[n]!=null ){
            x.push(expression[n]);
            n++;
        }
        newNumber.push(parseInt(x.join("")));

        if(n<expression.length&&(expression[n]=='+'||expression[n]=='-'||expression[n]=='/'||expression[n]=='*')) 
        {
            operator.push(expression[n]);
            n++;
        }
        i=n;
        help(i);
        return;
    }
    let result=newNumber[0];

    for(j=1;j<newNumber.length;j++)
    {
        switch(operator[j-1]){
            case '+':
                result+=newNumber[j];
                break;
            case '-':
                result-=newNumber[j];
                break;
            case '*':
                result*=newNumber[j];
                break;
            case '/':
                result/=newNumber[j];
                break;
        }
    }
    return finelResult.innerHTML=result;
}

function remov()
{
    location.reload();
}