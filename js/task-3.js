const input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

const onChangeInput = () => {
  let text = input.value.trim();
  output.textContent = text.length > 0 ? text : "Anonymous";
}

input.addEventListener("input", onChangeInput);