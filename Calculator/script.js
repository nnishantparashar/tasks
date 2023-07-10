function getData() {
    // create html elements
    var operand1 = "";
    var operand2 = "";
    var operator = "";
    var container = document.createElement("div");
    container.setAttribute("class", "container");
  
    var title = document.createElement("H1");
    title.setAttribute("id", "title");
    title.setAttribute("class", "title");
    title.innerHTML = "Simple Calculator";
  
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    description.setAttribute("class", "description");
    description.innerHTML = "This is a simple calculator using keypress event";
  
    var grid = document.createElement("div");
    grid.setAttribute("class", "calculator-grid");
  
    var input = document.createElement("input");
    input.setAttribute("id", "result");
    input.setAttribute("class", "result");
    input.setAttribute("type", "text");
  
    container.appendChild(title);
    container.appendChild(description);
  
    container.appendChild(input);
    document.body.appendChild(container);
  
    //create button and add evenlistener
  
    var add = document.createElement("BUTTON");
    add.setAttribute("id", "add");
    add.innerText = "+";
    add.setAttribute("value", "+");
    add.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        alert("please enter number before operation!!");
      } else {
        res.value += e.target.value;
        operator = e.target.value;
      }
    });
  
    var sub = document.createElement("BUTTON");
    sub.setAttribute("id", "subtract");
    sub.innerText = "-";
    sub.setAttribute("value", "-");
    sub.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        alert("please enter number before operation!!");
      } else {
        res.value += e.target.value;
        operator = e.target.value;
      }
    });
  
    var mul = document.createElement("BUTTON");
    mul.setAttribute("id", "mul");
    mul.innerText = "*";
    mul.setAttribute("value", "*");
    mul.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        alert("please enter number before operation!!");
      } else {
        res.value += e.target.value;
        operator = e.target.value;
      }
    });
  
    var div = document.createElement("BUTTON");
    div.setAttribute("id", "div");
    div.innerText = "/";
    div.setAttribute("value", "/");
    div.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        alert("please enter number before operation!!");
      } else {
        res.value += e.target.value;
        operator = e.target.value;
      }
    });
  
    var nine = document.createElement("BUTTON");
    nine.setAttribute("id", "9");
    nine.innerText = "9";
    nine.setAttribute("value", "9");
    nine.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var eight = document.createElement("BUTTON");
    eight.setAttribute("id", "8");
    eight.innerText = "8";
    eight.setAttribute("value", "8");
    eight.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var seven = document.createElement("BUTTON");
    seven.setAttribute("id", "7");
    seven.innerText = "7";
    seven.setAttribute("value", "7");
    seven.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var six = document.createElement("BUTTON");
    six.setAttribute("id", "6");
    six.innerText = "6";
    six.setAttribute("value", "6");
    six.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var five = document.createElement("BUTTON");
    five.setAttribute("id", "5");
    five.innerText = "5";
    five.setAttribute("value", "5");
    five.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var four = document.createElement("BUTTON");
    four.setAttribute("id", "4");
    four.innerText = "4";
    four.setAttribute("value", "4");
    four.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var three = document.createElement("BUTTON");
    three.setAttribute("id", "3");
    three.innerText = "3";
    three.setAttribute("value", "3");
    three.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var two = document.createElement("BUTTON");
    two.setAttribute("id", "2");
    two.innerText = "2";
    two.setAttribute("value", "2");
    two.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var one = document.createElement("BUTTON");
    one.setAttribute("id", "1");
    one.innerText = "1";
    one.setAttribute("value", "1");
    one.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var zero = document.createElement("BUTTON");
    zero.setAttribute("id", "0");
    zero.innerText = "0";
    zero.setAttribute("value", "0");
    zero.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      if (res.value === "") {
        res.value = e.target.value;
        operand1 = e.target.value;
      } else {
        res.value += e.target.value;
        operand2 = e.target.value;
      }
    });
  
    var equal = document.createElement("BUTTON");
    equal.setAttribute("id", "equal");
    equal.innerText = "=";
    //call calculate function to show the result
  
    equal.addEventListener("click", () => {
      var res = document.getElementById("result");
      if (res.value === "") {
        alert("please provide some input !!");
      } else {
        res.value = calculate(operand1, operand2, operator);
        
      }
    });
  
    var clear = document.createElement("BUTTON");
    clear.setAttribute("id", "clear");
    clear.innerText = "clear";
    // perforn clear the result input area
    clear.addEventListener("click", (e) => {
      var res = document.getElementById("result");
      res.value = "";
    });
  
    grid.appendChild(add);
    grid.appendChild(sub);
    grid.appendChild(mul);
    grid.appendChild(div);
    grid.appendChild(nine);
    grid.appendChild(eight);
    grid.appendChild(seven);
    grid.appendChild(six);
    grid.appendChild(five);
    grid.appendChild(four);
    grid.appendChild(three);
    grid.appendChild(two);
    grid.appendChild(one);
    grid.appendChild(zero);
    grid.appendChild(equal);
    grid.appendChild(clear);
  
    document.body.appendChild(grid);
  }
  
  function calculate(operand1, operand2, operator) {
    var answer = "";
  if(operator === '+'){
      answer = parseInt(operand1) + parseInt(operand2);
  }else if(operator === '-'){
      answer = parseInt(operand1) - parseInt(operand2);
  }else if(operator === '*'){
      answer = parseInt(operand1) * parseInt(operand2);
  }else if(operator === '/'){
      answer = parseFloat(operand1) % parseFloat(operand2);
  }else{
      alert("Something went wrong. please try again!!")
  }
    
  
    return answer;
  }
  