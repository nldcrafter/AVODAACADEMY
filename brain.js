// brain.js

const levels = [
  { title: "Rookie", threshold: 0 },
  { title: "Operator", threshold: 200 },
  { title: "Strategist", threshold: 500 },
  { title: "Elite", threshold: 1000 },
  { title: "Architect", threshold: 2000 },
  { title: "AVODA Master", threshold: 4000 }
];

function getLevelTitle(xp) {
  let current = levels[0].title;
  levels.forEach(level => {
    if (xp >= level.threshold) {
      current = level.title;
    }
  });
  return current;
}

function addXP(amount, category) {
  const user = DataService.getUser();

  user.xp += amount;
  user.weeklyProgress[category]++;

  DataService.saveUser(user);
  return user;
}

function completeTask(taskId, xp, category, text, minChars) {
  const user = DataService.getUser();

  if (text.length < minChars) {
    alert("You must write more to prove execution.");
    return null;
  }

  if (user.completedTasks.includes(taskId)) {
    alert("Task already completed.");
    return null;
  }

  user.completedTasks.push(taskId);
  user.xp += xp;
  user.weeklyProgress[category]++;

  DataService.saveUser(user);
  return user;
                 }
