import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { ToDoList } from './ToLoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showCompleted = false;
  private taskList = new ToDoList('Ben', [
    new TodoItem('30 Min Walk', true),
    new TodoItem('Study Redux', false),
    new TodoItem('Study Angular', true),
    new TodoItem('Be Nice', false)
  ]);

  get username(): string {
    return this.taskList.user;
  }

  get itemCount(): number {
    return this.taskList.items
      .filter(t => !t.complete)
      .length;
  }

  get items(): readonly TodoItem[] {
    return this.taskList
      .items
      .filter(t => this.showCompleted || !t.complete);
  }

  addItem(item: string): void {
    if (item != null) {
      this.taskList.addItem(item);
    }
  }
}
