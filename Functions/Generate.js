export function generate() {
  let operationCount;
  let additionScenario;
  let number1;
  let number2;
  let number3;
  operationCount = Math.floor(Math.random() * 2) + 1;
  operationCount = 1;
  switch (operationCount) {
    case 1:
      console.log(operationCount, "tek işlem");
      additionScenario = Math.floor(Math.random() * 11) + 1;
      switch (additionScenario) {
        case 1:
          console.log(additionScenario, "xy+a=abc");
          number1 = Math.floor(Math.random() * 9) + 91;
          number2 =
            Math.floor(Math.random() * (number1 - 90)) + (100 - number1);
          return (
            number1.toString() +
            "+" +
            number2.toString() +
            "=" +
            (number1 + number2).toString()
          );
        case 2:
          console.log(additionScenario, "xy+ab=ab");
          number2 = Math.floor(Math.random() * 78) + 10;
          number1 = Math.floor(Math.random() * (100 - number2 - 10)) + 10;
          console.log(number1, "+", number2, "=", number1 + number2);
          return (
            number1.toString() +
            "+" +
            number2.toString() +
            "=" +
            (number1 + number2).toString()
          );

        case 3:
          console.log(additionScenario, "x+ab=abc");
          number1 = Math.floor(Math.random() * 9) + 1;
          console.log("number2", number2);
          number2 = 90 + (Math.floor(Math.random() * number1) + (10 - number1));
          console.log(number2, "+", number1, "=", number1 + number2);
          return (
            number1.toString() +
            "+" +
            number2.toString() +
            "=" +
            (number1 + number2).toString()
          );
        case 4:
          console.log(additionScenario, "xyz-a=kl");
          number2 = Math.floor(Math.random() * 9) + 1;
          number1 = Math.floor(Math.random() * number2) + 100;
          console.log(number1, "-", number2, "=", number1 - number2);
          return (
            number1.toString() +
            "-" +
            number2.toString() +
            "=" +
            (number1 - number2).toString()
          );
        case 5:
          console.log(additionScenario, "xyz-ab=k");
          number1 = Math.floor(Math.random() * 9) + 100;
          number2 =
            Math.floor(Math.random() * (9 - (number1 - 99))) + (number1 - 99);
          console.log(number1, "-", number2, "=", number1 - number2);
          return (
            number1.toString() +
            "-" +
            number2.toString() +
            "=" +
            (number1 - number2).toString()
          );
        case 6:
          console.log(additionScenario, "xy-ab=kl");
          number2 = Math.floor(Math.random() * 80) + 10;
          number1 =
            Math.floor(Math.random() * (100 - number2 - 10)) + 10 + number2;
          console.log(number1, "-", number2, "=", number1 - number2);
          return (
            number1.toString() +
            "-" +
            number2.toString() +
            "=" +
            (number1 - number2).toString()
          );
        case 7:
          console.log(additionScenario, "x*ab=klm");
          number1 = Math.floor(Math.random() * 8) + 2;
          number2 = parseInt(
            Math.floor(Math.random() * parseInt(99 - (100 / number1 + 1))) +
              100 / number1 +
              1
          );
          console.log(number1, "*", number2, "=", number1 * number2);
          return (
            number1.toString() +
            "*" +
            number2.toString() +
            "=" +
            (number1 * number2).toString()
          );
        case 8:
          console.log(additionScenario, "xy*a=klm");
          number2 = Math.floor(Math.random() * 8) + 2;
          number1 = parseInt(
            Math.floor(Math.random() * parseInt(99 - (100 / number2 + 1))) +
              100 / number2 +
              1
          );
          console.log(number1, "*", number2, "=", number1 * number2);
          return (
            number1.toString() +
            "*" +
            number2.toString() +
            "=" +
            (number1 * number2).toString()
          );
        case 9:
          console.log(additionScenario, "xyzt*0=0");
          number1 = Math.floor(Math.random() * 9000) + 1000;
          number2 = 0;
          console.log(number1, "*", number2, "=", 0);
          return (
            number1.toString() +
            "*" +
            number2.toString() +
            "=" +
            (number1 * number2).toString()
          );
        case 10:
          console.log(additionScenario, "xyz/ab=k");
          number2 = Math.floor(Math.random() * 87) + 12;
          number1 =
            Math.floor(Math.random(number2 * 9 - parseInt(100 / number2 + 1))) +
            parseInt(100 / number2 + 1) * number2;
          console.log(number1, "/", number2, "=", number1 / number2);
          return (
            number1.toString() +
            "/" +
            number2.toString() +
            "=" +
            (number1 / number2).toString()
          );
        case 11:
          console.log(additionScenario, "xyz/a=kl");
          number2 = Math.floor(Math.random() * 9) + 1;
          number1 =
            Math.floor(Math.random(number2 * 9 - parseInt(100 / number2 + 1))) +
            parseInt(100 / number2 + 1) * number2;

          if (
            number1.toString() +
              "/" +
              number2.toString() +
              "=" +
              (number1 / number2).toString() ==
            "101/1=101"
          ) {
            number2 = Math.floor(Math.random() * 9) + 1;
            number1 =
              Math.floor(
                Math.random(number2 * 9 - parseInt(100 / number2 + 1))
              ) +
              parseInt(100 / number2 + 1) * number2;
          }
          if (
            number1.toString() +
              "/" +
              number2.toString() +
              "=" +
              (number1 / number2).toString() !=
            "101/1=101"
          ) {
            console.log(number1, "/", number2, "=", number1 / number2);
            return (
              number1.toString() +
              "/" +
              number2.toString() +
              "=" +
              (number1 / number2).toString()
            );
          }
          break;
      }

    case 2:
      console.log(operationCount, "çift işlem");
      console.log(operationCount, "tek işlem");
      additionScenario = Math.floor(Math.random() * 11) + 1;
      additionScenario = 7;
      switch (additionScenario) {
        case 1:
          console.log("xy*0*b=0");
          number1 = Math.floor(Math.random() * 90) + 10;
          number2 = 0;
          number3 = Math.floor(Math.random() * 9) + 1;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 2:
          console.log("xy*a*0=0");
          number1 = Math.floor(Math.random() * 90) + 10;
          number3 = 0;
          number2 = Math.floor(Math.random() * 9) + 1;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 3:
          console.log("xy*0*0=0");
          number1 = Math.floor(Math.random() * 90) + 10;
          number2 = 0;
          number3 = 0;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 4:
          console.log("0*ab*k=0");
          number1 = 0;
          number2 = Math.floor(Math.random() * 90) + 10;
          number3 = Math.floor(Math.random() * 9) + 1;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 5:
          console.log("x*ab*0=0");
          number1 = Math.floor(Math.random() * 9) + 1;
          number2 = Math.floor(Math.random() * 90) + 10;
          number3 = 0;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 6:
          console.log("0*ab*0=0");
          number1 = 0;
          number2 = Math.floor(Math.random() * 90) + 10;
          number3 = 0;
          console.log(
            number1,
            "*",
            number2,
            "*",
            number3,
            "=",
            number1 * number2 * number3
          );
          break;
        case 7:
          console.log("xy/a*k=q");
          number2 = Math.floor(Math.random() * 9) + 1;
          number3 = Math.floor(Math.random() * 8) + 2;
          number1 = Math.floor() + number2 * number3;
          break;
      }
  }
}
