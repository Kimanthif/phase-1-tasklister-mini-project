document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // ✔️ prevent page reload

    const taskDescription = document.querySelector(
      "#new-task-description"
    ).value;

    const li = document.createElement("li");
    li.textContent = taskDescription;

    // ✔️ Add delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    form.reset(); // ✔️ clear input
  });
});
