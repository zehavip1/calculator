const finelResult=document.getElementById("result");//מדבר על התןצאה איפה היא תוצג 
const calcul=document.getElementById("calculation");//הכפתור של החישוב
const input=document.getElementById("num");// הביטוי אותו אנחנו רוצים לחשב מקבל את האלמנט לא את מה שיש בפנים
const buttenClear=document.getElementById("clear");


calcul.addEventListener("click",start);//כשלוחצים על כפתור החישוב תתחיל
buttenClear.addEventListener("click",remov)

input.addEventListener('input', function() {
    input.value = input.value
        .replace(/[^0-9+\-*/^\.]/g, '')      // משאיר רק מספרים, נקודה עשרונית, ואופרטורים
        .replace(/(\.\d*)\./g, '$1')         // מונע הכנסת יותר מנקודה אחת במספר
        .replace(/([+\-*/^])(?!-)[+\-*/^]+/g, '$1') // מוחק רצפים של אופרטורים מלבד מקרים המתחילים במינוס
        .replace(/([+\-*/^])\1+/g, '$1') // מוחק רצפים חוזרים של אותו אופרטור
        .replace(/(\*|\^)(?=\-)/g, '$1') // מאפשר כפל או חזקות אחרי מינוס
        .replace(/(\-){2,}/g, '-') // ממיר רצפים של מינוסים למינוס אחד
        .replace(/^[^\d\-]+/, ''); // מאפשר התחלה במינוס בלבד, לא אופרטורים אחרים
});








function start(){
    //debugger;
    let i=0;
    let newNumber=[];
    let operator=[];
    let x=[];
    let expression = input.value;// מחזיר לי את כל הביוטי שהמשתמש הכניס
    if (/[\+\-\*\/\^]$/.test(expression)) {
        finelResult.innerHTML = 0;
        return;
    }

    help(i);

    function help(n){
        x=[];
        if ((n===0&&expression[n]==='-')||((expression[n-1]==='*'||expression[n-1]==='^')&&expression[n]==='-'))
        {
            x.push(expression[n]);
            n++;
        }

        if(n>=expression.length)
            return;
        
        while (n<expression.length&&expression[n]!='+'&&expression[n]!='-'&&expression[n]!='/'&&expression[n]!='*'&&expression[n]!='^'&&expression[n]!=null ){
        
            x.push(expression[n]);
            n++;
        }
        newNumber.push(parseFloat(x.join("")));
  
        

        if(n<expression.length&&(expression[n]=='+'||expression[n]=='-'||expression[n]=='/'||expression[n]=='*'||expression[n]=='^')) 
        {
            //if(expression[n+1]==)
            operator.push(expression[n]);
            n++;
        }
        i=n;
        help(i);
        return;
    }
    let result;//newNumber[0];
    let j=1;

    let z=0;
    for (z; z<operator.length; z++)
    {
        if(operator[z]==='^')
        {
            result=newNumber[z];
            result=pow(result,newNumber[z+1]);
            newNumber.splice(z,2,result);
            operator.splice(z, 1);
            z--;
        }
    }
    z=0;

    for (z;z<operator.length;z++)
    {
        if(operator[z]==='*')
        {
            result = newNumber[z] * newNumber[z + 1];
            newNumber.splice(z, 2, result);
            operator.splice(z, 1);
            z--;
         ;
        }
        if(operator[z]==='/')
        {
            result = newNumber[z] / newNumber[z + 1];
            newNumber.splice(z, 2, result);
            operator.splice(z, 1);
            z--;
        }

    }
    z=0;

    for (z;z<operator.length;z++)
    {
        if(operator[z]==='+')
        {
            result = newNumber[z] + newNumber[z + 1];
            newNumber.splice(z, 2, result);
            operator.splice(z, 1);
            z--;
        }
        if(operator[z]==='-')
        {
            result = newNumber[z] - newNumber[z + 1];
            newNumber.splice(z, 2, result);
            operator.splice(z, 1);
            z--;
        }
    
    }
    return finelResult.innerHTML=newNumber[0];  
}

function remov()
{
    location.reload();
}

function pow(num1,num2)
{
    let j=-1;
    let i=1;
    if(num2<0)
    {
        for(j;j>num2;j--)
        {
            num1*=num1;    
        }
        return 1/num1;
    }
    else
    {
        for(i;i<num2;i++)
            {
                num1*=num1;    
            }
            return num1;
    }
}