import {Category} from "./category";
import {Priority} from "./priority";

export class Task {
  id: number;
  title: string;
  completed: boolean;
  category?: Category;
  priority?: Priority;
  date?: Date; // ? - типо как необезятельно

  constructor(id: number, title: string, color: string, completed: boolean, category?: Category, priority?: Priority, date?: Date) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.category = category;
    this.priority = priority;
    this.date = date;
  }
}
