let operationCount;
let additionScenario;
let number1;
let number2;
operationCount=(Math.floor(Math.random()*2))+1
operationCount=1
switch(operationCount){
    case 1:
        console.log(operationCount,"tek işlem")
        additionScenario=(Math.floor(Math.random()*3))+1
        additionScenario=2
        switch(additionScenario){
            case 1:
                console.log(additionScenario,"xy+a=abc")
                number2=Math.floor(Math.random()*9)+1
                console.log("number2",number2)
                number1=(Math.floor(Math.random()*(1000-number2)))+(90+(10-number2))
                console.log(number1,"+",number2,"=",number1+number2)
                break
            case 2:
                console.log(additionScenario,"xy+ab=ab")
                number2=Math.floor(Math.random()*78)+10
                number1=Math.floor(Math.random()*((100-number2)-10))+10
                console.log(number1,"+",number2,"=",number1+number2)
                break
            case 3:
                console.log(additionScenario,"x+ab=abc")
                number2=Math.floor(Math.random()*9)+1
                console.log("number2",number2)
                number1=(Math.floor(Math.random()*(1000-number2)))+(90+(10-number2))
                console.log(number2,"+",number1,"=",number1+number2)
                break
        }
        break
    case 2:
        console.log(operationCount,"çift işlem")
        break
}