export class Model {
  user;
  items;

  constructor() {
    this.user = "Arzu";
    this.items = [
      new TodoItem("Breakfast" , true),
      new TodoItem("Movie" , false),
      new TodoItem("Lesson" , false),
      new TodoItem("Speaking" , false)
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
    this.description = description;
    this.action = action;
  }
}
