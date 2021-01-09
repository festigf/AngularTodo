import { Component, OnInit } from '@angular/core';
import { Todo } from '../domain/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public tasks:Todo[]= [];

  constructor() {
    this.tasks = [];
  }


  ngOnInit(): void {
  }
  addTask(task: string) {
    if (task === "") return;
    this.tasks.push({
      text: task,
      done: false
    });
  }
  removeTask(task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
  removeTaskByIndex(i) {
    this.tasks.splice(i, 1);
  }
  toggle(task) {
    task.done = !task.done;
  }

}
