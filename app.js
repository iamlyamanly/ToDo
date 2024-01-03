const form = document.querySelector("form");
const checkbox = document.querySelector(".checkbox_input");
const AllList = document.querySelector(".all-todos");
form.addEventListener("checked", function (e) {
  e.preventDefault();

  CreateTodo();
});
checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    CreateTodo();
  } else {
    alert("not checked");
  }
});

function CreateTodo() {
  console.log(form.newtodo.value);
  const li = document.createElement("li");
  li.classList.add("newtodo");
  li.innerHTML = `
    <div class="round">
    <input type="checkbox" class="checkbox_input"  onClick="checkbox_input(this)"/>
    <label for="checkbox"></label>
  </div>
  <p>${form.newtodo.value}</p>
    `;
  AllList.appendChild(li);
  form.newtodo.value = "";
}
function checkbox_input(event) {
  console.log("dasfasdas");
  const p = event.parentNode.nextElementSibling;
  console.log(p)
  if (event.checked) {
    p.style.textDecoration = "line-through";
    p.style.color="var(--text-completed)";
  } else {
    p.style.textDecoration = "none";
  }
}
