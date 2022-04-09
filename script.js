// Getting DOM elements
const outputPara = document.querySelector(".output .output-para");
const insertables = document.querySelectorAll('.insertable');



// Function
function Insert() {
    const oldValue = outputPara.textContent;
    outputPara.textContent = oldValue + this.value;
}

function clearOutput() {
    outputPara.textContent = "";
}

function deleteOne() {
    outputPara.textContent = outputPara.textContent.slice(0, -1);
}

function Calculate() {
    outputPara.textContent = eval(outputPara.textContent);
}

// Events
insertables.forEach(insertable => insertable.addEventListener('click', Insert));

