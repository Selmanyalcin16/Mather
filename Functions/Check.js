export const check = async (
  attemptCount,
  typedOperation,
  typedLetter,
  operation
) => {
  let operationValid = false;
  console.log(typedOperation);
  //işlem geçerliliğini kontrol
  if (attemptCount != 9999) {
    let typedName = "";
    if (attemptCount == 0) {
      typedName = "typedWord";
    } else {
      typedName = "typedWord" + attemptCount.toString();
    }
    console.log(typedOperation);
    if (
      typedOperation[0] == "=" ||
      typedOperation[1] == "=" ||
      typedOperation[2] == "=" ||
      typedOperation[3] == "=" ||
      typedOperation[7] == "="
    ) {
      console.log("eşittir olmaması gereken yerde");
      return "Invalid";
    } else {
      if (
        typedOperation[6] != "=" &&
        typedOperation[5] != "=" &&
        typedOperation[4] != "="
      ) {
        console.log("eşittir olması gereken yerde değil");
        return "Invalid";
      } else {
        if (
          typedOperation[0] == "+" ||
          typedOperation[5] == "+" ||
          typedOperation[6] == "+" ||
          typedOperation[7] == "+" ||
          typedOperation[0] == "-" ||
          typedOperation[5] == "-" ||
          typedOperation[6] == "-" ||
          typedOperation[7] == "-" ||
          typedOperation[0] == "*" ||
          typedOperation[5] == "*" ||
          typedOperation[6] == "*" ||
          typedOperation[7] == "*" ||
          typedOperation[0] == "/" ||
          typedOperation[5] == "/" ||
          typedOperation[6] == "/" ||
          typedOperation[7] == "/"
        ) {
          console.log("olmaması gereken yerde işlem var");
          return "Invalid";
        } else {
          if (
            typedOperation[1] != "+" &&
            typedOperation[2] != "+" &&
            typedOperation[3] != "+" &&
            typedOperation[4] != "+" &&
            typedOperation[1] != "-" &&
            typedOperation[2] != "-" &&
            typedOperation[3] != "-" &&
            typedOperation[4] != "-" &&
            typedOperation[1] != "*" &&
            typedOperation[2] != "*" &&
            typedOperation[3] != "*" &&
            typedOperation[4] != "*" &&
            typedOperation[1] != "/" &&
            typedOperation[2] != "/" &&
            typedOperation[3] != "/" &&
            typedOperation[4] != "/"
          ) {
            console.log("olması gereken işlem yok");
            return "Invalid";
          } else {
            let operationCount = 0;
            let operationIndex1 = 99;
            let operationIndex2 = 99;
            let number1 = "";
            let number2 = "";
            let number3 = "";
            let equalIndex = typedOperation.indexOf("=");
            let result = "";
            for (let i = 1; i < 8 - equalIndex; i++) {
              result = result.concat(typedOperation[equalIndex + i]);
            }
            for (let i = 0; i < 9; i++) {
              if (
                typedOperation[i] == "+" ||
                typedOperation[i] == "-" ||
                typedOperation[i] == "*" ||
                typedOperation[i] == "/"
              ) {
                operationCount = operationCount + 1;
                if (operationIndex1 == 99) {
                  operationIndex1 = i;
                }
                if (operationIndex1 != 99) {
                  operationIndex2 = i;
                }
              }
            }
            if (operationCount == 1) {
              console.log("operationcount1");
              for (let i = 0; i < operationIndex1; i++) {
                number1 = number1.concat(typedOperation[i]);
              }
              for (let i = 1; i < equalIndex - operationIndex1; i++) {
                console.log(typedOperation[operationIndex1 + i]);
                number2 = number2.concat(typedOperation[operationIndex1 + i]);
              }
              if (typedOperation[operationIndex1] == "+") {
                console.log("toplama");
                if (parseInt(number1) + parseInt(number2) == parseInt(result)) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (typedOperation[operationIndex1] == "-") {
                if (parseInt(number1) - parseInt(number2) == parseInt(result)) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (typedOperation[operationIndex1] == "*") {
                if (parseInt(number1) * parseInt(number2) == parseInt(result)) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (typedOperation[operationIndex1] == "/") {
                if (parseInt(number1) / parseInt(number2) == parseInt(result)) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
            }
            if (operationCount == 2) {
              for (let i = 0; i < operationIndex1; i++) {
                number1 = number1.concat(typedOperation[i]);
              }
              for (let i = 1; i < operationIndex2 - operationIndex1; i++) {
                console.log(typedOperation[operationIndex1 + i]);
                number2 = number2.concat(typedOperation[operationIndex1 + i]);
              }
              for (let i = 1; i < equalIndex - operationIndex2; i++) {
                console.log(typedOperation[operationIndex2 + i]);
                number3 = number3.concat(typedOperation[operationIndex2 + i]);
                console.log("number333", number3);
              }
              if (
                typedOperation[operationIndex1] == "/" &&
                typedOperation[operationIndex2] == "*"
              ) {
                if (
                  (parseInt(number1) / parseInt(number2)) * parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "*" &&
                typedOperation[operationIndex2] == "*"
              ) {
                if (
                  parseInt(number1) * parseInt(number2) * parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "*" &&
                typedOperation[operationIndex2] == "/"
              ) {
                if (
                  (parseInt(number1) * parseInt(number2)) / parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "*" &&
                typedOperation[operationIndex2] == "+"
              ) {
                if (
                  parseInt(number1) * parseInt(number2) + parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "*" &&
                typedOperation[operationIndex2] == "-"
              ) {
                if (
                  parseInt(number1) * parseInt(number2) - parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "/" &&
                typedOperation[operationIndex2] == "/"
              ) {
                if (
                  parseInt(number1) / parseInt(number2) / parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "/" &&
                typedOperation[operationIndex2] == "+"
              ) {
                if (
                  parseInt(number1) / parseInt(number2) + parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "/" &&
                typedOperation[operationIndex2] == "-"
              ) {
                if (
                  parseInt(number1) / parseInt(number2) - parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "+" &&
                typedOperation[operationIndex2] == "+"
              ) {
                if (
                  parseInt(number1) + parseInt(number2) + parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "+" &&
                typedOperation[operationIndex2] == "-"
              ) {
                if (
                  parseInt(number1) + parseInt(number2) - parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "+" &&
                typedOperation[operationIndex2] == "*"
              ) {
                if (
                  parseInt(number1) + parseInt(number2) * parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "+" &&
                typedOperation[operationIndex2] == "/"
              ) {
                if (
                  parseInt(number1) + parseInt(number2) / parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "-" &&
                typedOperation[operationIndex2] == "*"
              ) {
                if (
                  parseInt(number1) - parseInt(number2) * parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "-" &&
                typedOperation[operationIndex2] == "/"
              ) {
                if (
                  parseInt(number1) - parseInt(number2) / parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "-" &&
                typedOperation[operationIndex2] == "-"
              ) {
                if (
                  parseInt(number1) - parseInt(number2) - parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
              if (
                typedOperation[operationIndex1] == "-" &&
                typedOperation[operationIndex2] == "+"
              ) {
                if (
                  parseInt(number1) - parseInt(number2) + parseInt(number3) ==
                  parseInt(result)
                ) {
                  operationValid = true;
                } else {
                  console.log(
                    "Operation Is Invalid",
                    "Please Check Your Operation"
                  );
                  return "Invalid";
                }
              }
            }
            console.log("result", result, "operation count", operationCount);
            console.log("Operation Indexes", operationIndex1, operationIndex2);
            console.log(number1);
            console.log(number2);
            console.log(number3);
            console.log(operationValid);
            console.log(equalIndex);
          }
        }
      }
    }
  }

  ////İşlemi analiz

  if (operationValid == true) {
    let wordCheck = 0;
    console.log(operation);
    console.log("typedletter", typedLetter);
    let wordArray = operation.split("");
    console.log(wordArray);
    let letter1 = 0;
    let letter2 = 0;
    let letter3 = 0;
    let letter4 = 0;
    let letter5 = 0;
    let letter6 = 0;
    let letter7 = 0;
    let letter8 = 0;
    let box1 = "";
    let box2 = "";
    let box3 = "";
    let box4 = "";
    let box5 = "";
    let box6 = "";
    let box7 = "";
    let box8 = "";
    let correctLetter = 0;
    let trues = [];
    let falses = [];
    let green = [];
    let yellow = [];
    let gray = [];

    if (typedLetter == 8) {
      console.log(wordArray);
      console.log(typedOperation);
      if (typedOperation[0] == wordArray[0]) {
        letter1 = 1;
        correctLetter = correctLetter + 1;
        box1 = "#32de84";
        green = green.concat(typedOperation[0]);
      } else {
        falses = falses.concat(wordArray[0]);
      }
      if (typedOperation[1] == wordArray[1]) {
        letter2 = 1;
        correctLetter = correctLetter + 1;
        box2 = "#32de84";
        green = green.concat(typedOperation[1]);
      } else {
        falses = falses.concat(wordArray[1]);
      }
      if (typedOperation[2] == wordArray[2]) {
        letter3 = 1;
        correctLetter = correctLetter + 1;
        box3 = "#32de84";
        green = green.concat(typedOperation[2]);
      } else {
        falses = falses.concat(wordArray[2]);
      }
      if (typedOperation[3] == wordArray[3]) {
        letter4 = 1;
        correctLetter = correctLetter + 1;
        box4 = "#32de84";
        green = green.concat(typedOperation[3]);
      } else {
        falses = falses.concat(wordArray[3]);
      }
      if (typedOperation[4] == wordArray[4]) {
        letter5 = 1;
        correctLetter = correctLetter + 1;
        box5 = "#32de84";
        green = green.concat(typedOperation[4]);
      } else {
        falses = falses.concat(wordArray[4]);
      }
      if (typedOperation[5] == wordArray[5]) {
        letter6 = 1;
        correctLetter = correctLetter + 1;
        box6 = "#32de84";
        green = green.concat(typedOperation[5]);
      } else {
        falses = falses.concat(wordArray[5]);
      }
      if (typedOperation[6] == wordArray[6]) {
        letter7 = 1;
        correctLetter = correctLetter + 1;
        box7 = "#32de84";
        green = green.concat(typedOperation[6]);
      } else {
        falses = falses.concat(wordArray[6]);
      }
      if (typedOperation[7] == wordArray[7]) {
        letter8 = 1;
        correctLetter = correctLetter + 1;
        box8 = "#32de84";
        green = green.concat(typedOperation[7]);
      } else {
        falses = falses.concat(wordArray[7]);
      }
      console.log(falses);
      console.log(
        letter1,
        letter2,
        letter3,
        letter4,
        letter5,
        letter6,
        letter7,
        letter8
      );
      console.log("doğrular", green);
      if (correctLetter == 8) {
        return "GAME WON";
      }
      if (letter1 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[0] == falses[i]) {
            falses[i] = "S";
            box1 = "#FFD700";
            yellow = yellow.concat(typedOperation[0]);
            break;
          } else {
            box1 = "#C0C0C0";
          }
        }
      }
      if (letter2 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[1] == falses[i]) {
            falses[i] = "S";
            box2 = "#FFD700";
            yellow = yellow.concat(typedOperation[1]);
            break;
          } else {
            box2 = "#C0C0C0";
          }
        }
      }
      if (letter3 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[2] == falses[i]) {
            falses[i] = "S";
            box3 = "#FFD700";
            yellow = yellow.concat(typedOperation[2]);
            break;
          } else {
            box3 = "#C0C0C0";
          }
        }
      }
      if (letter4 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[3] == falses[i]) {
            falses[i] = "S";
            box4 = "#FFD700";
            yellow = yellow.concat(typedOperation[3]);
            break;
          } else {
            box4 = "#C0C0C0";
          }
        }
      }
      if (letter5 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[4] == falses[i]) {
            falses[i] = "S";
            box5 = "#FFD700";
            yellow = yellow.concat(typedOperation[4]);
            break;
          } else {
            box5 = "#C0C0C0";
          }
        }
      }
      if (letter6 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[5] == falses[i]) {
            falses[i] = "S";
            box6 = "#FFD700";
            yellow = yellow.concat(typedOperation[5]);
            break;
          } else {
            box6 = "#C0C0C0";
          }
        }
      }
      if (letter7 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[6] == falses[i]) {
            falses[i] = "S";
            box7 = "#FFD700";
            yellow = yellow.concat(typedOperation[6]);
            break;
          } else {
            box7 = "#C0C0C0";
          }
        }
      }
      if (letter8 == 0) {
        for (let i = 0; i < falses.length; i++) {
          if (typedOperation[7] == falses[i]) {
            falses[i] = "S";
            box8 = "#FFD700";
            yellow = yellow.concat(typedOperation[7]);
            break;
          } else {
            box8 = "#C0C0C0";
          }
        }
      }
      const setGray = (color) => {
        console.log("set gray");
        if (yellow.includes(color) == false && green.includes(color) == false) {
          console.log("setted gray");
          return color;
        }
      };
      let total = [];
      total = typedOperation;
      gray = total.filter(setGray);
      console.log("total", total);
      console.log("sarılar", yellow);
      console.log("griler", gray);
      return [
        box1,
        box2,
        box3,
        box4,
        box5,
        box6,
        box7,
        box8,
        green,
        yellow,
        gray,
      ];
    }
  }
};
