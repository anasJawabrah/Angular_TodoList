import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../modules/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoTasks = new BehaviorSubject<Array<Task>>([]);

  addTask(newTask: Task){
    const list = this.todoTasks.getValue();
    list.push(newTask);
    this.todoTasks.next(list);
  }

  getTodoTasks(): Observable<Array<Task>>{
    return this.todoTasks.asObservable();
  }
  constructor() { 
    const tasksList = [
      { title: "Sprzątanie kuwety", description: "asd" },
      { title: "Mycie naczyń", description: "asd" },
      { title: "Nauka angulara", description: "asd" },
      { title: "Wyjście z psem", description: "asd" },
    ];
    this.todoTasks.next(tasksList);
  }
}
