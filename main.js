let inputs = document.getElementsByClassName("input");
let LotoNumnersRundom = [];
Btn.onclick = () => {
  let ArrayUserNumber = [];

  for (let i = 0; i < inputs.length; i++) {
    let UserNumbers = Number(inputs[i].value);
    if (
      UserNumbers > 100 ||
      UserNumbers < 1 ||
      ArrayUserNumber.indexOf(UserNumbers) != -1
    ) {
      alert(`${UserNumbers} is not good`);
      return;
    } else {
      ArrayUserNumber.push(UserNumbers);
    }
  }
  console.log(ArrayUserNumber);
  alert("all good");
  while (LotoNumnersRundom.length < 50) {
    let RundomNumbers = Math.floor(Math.random() * 100) + 1;
    if (LotoNumnersRundom.indexOf("RundomNumbers") == -1) {
      LotoNumnersRundom.push(RundomNumbers);
    }
  }
  let counter = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (LotoNumnersRundom.indexOf(ArrayUserNumber[i]) != -1) {
      counter++;
      
    }
  }
  alert(`you won ${counter} point`);
  console.log(LotoNumnersRundom);
};
// ===================================================