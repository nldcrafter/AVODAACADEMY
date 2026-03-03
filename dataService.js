// dataService.js

const DataService = {
  getUser() {
    const user = localStorage.getItem("avodaUser");
    return user ? JSON.parse(user) : this.createNewUser();
  },

  saveUser(user) {
    localStorage.setItem("avodaUser", JSON.stringify(user));
  },

  createNewUser() {
    const newUser = {
      id: "local_user",
      xp: 0,
      streak: 0,
      lastActive: null,
      completedTasks: [],
      weeklyProgress: {
        trade: 0,
        fitness: 0,
        business: 0,
        crypto: 0,
        wealth: 0
      }
    };
    this.saveUser(newUser);
    return newUser;
  }
};
