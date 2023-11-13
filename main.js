const todoInput = document.querySelector("#todoInput");
const todoBtn = document.querySelector("#todoBtn");
const resultContent = document.querySelector("#result-container");
const result = document.querySelector("#result");

todoBtn.addEventListener("click", () => {
  const value = todoInput.value;
  // console.log(value);
  if (value) {
    todoInput.value = "";
    // console.log(makeNegativNumber(value));
    result.innerHTML = makeNegativNumber(value);
  } else {
    alert("Plese enter your Number!");
  }
});

function makeNegativNumber(num) {
  if (num == 0) {
    return 0;
  } else if (num > 0) {
    return num * -1;
  } else if (num < 0) {
    return num;
  }
}

// console.log(makeNegativNumber(-54));

// const addList=()=>{

// }
