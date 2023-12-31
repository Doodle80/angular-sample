import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor() {
    this.todos = [
      { sno: 1, title: 'This is title11', desc: 'Description', active: true },
      { sno: 2, title: 'This is title2', desc: 'Description', active: true },
      { sno: 3, title: 'This is title3', desc: 'Description', active: true },
    ];
  }

  ngOnInit() {}
}
