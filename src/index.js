document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskDescription = document.querySelector(
      "#new-task-description"
    ).value;

    const li = document.createElement("li");
    li.textContent = taskDescription;
    taskList.appendChild(li);

    form.reset();
  });
});
