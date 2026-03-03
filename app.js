// app.js

function renderDashboard() {
  const user = DataService.getUser();

  document.getElementById("xp").innerText = user.xp;
  document.getElementById("level").innerText = getLevelTitle(user.xp);
}

function renderModule(moduleKey) {
  const module = modules[moduleKey];
  const container = document.getElementById("moduleContainer");
  container.innerHTML = "";

  module.tasks.forEach(task => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${task.title}</h3>
      <textarea id="${task.id}_input"></textarea>
      <button onclick="handleTask('${moduleKey}', '${task.id}', ${task.xp}, ${task.minChars})">
        Submit
      </button>
      <hr/>
    `;
    container.appendChild(div);
  });
}

function handleTask(category, taskId, xp, minChars) {
  const input = document.getElementById(taskId + "_input").value;

  const result = completeTask(taskId, xp, category, input, minChars);

  if (result) {
    alert("XP Awarded!");
    renderDashboard();
  }
        }
