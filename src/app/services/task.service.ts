import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../modules/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoTasks = new BehaviorSubject<Array<Task>>([]);
  doneTasks = new BehaviorSubject<Array<Task>>([]);

  addTask(newTask: Task){
    const list = this.todoTasks.getValue();
    list.push(newTask);
    this.todoTasks.next(list);
  }
  deleteTask(task: Task){
    const list = this.todoTasks.getValue().filter(element => element !== task);
    this.todoTasks.next(list);
  }
  doneTask(task: Task){
    this.deleteTask(task);
    const doneList = this.doneTasks.getValue();
    task.dateDone = new Date().toLocaleDateString();
    doneList.push(task);
    this.doneTasks.next(doneList);
  }

  getDoneTasks(): Observable<Array<Task>>{
    return this.doneTasks.asObservable();
  }
  getTodoTasks(): Observable<Array<Task>>{
    return this.todoTasks.asObservable();
  }
  constructor() { 
    const tasksList = [
      { title: "Sprzątanie kuwety", description: "W moim pokoju"},
      { title: "Mycie naczyń", description: "Cztery talerze i dwa garnki"},
      { title: "Wyjście z psem", description: "Przed wieczorem"},
    ];
    const doneList = [
      { title: "Nauka Angulara", description: "Stwórz projekt", dateDone: "30.03.2022"  },
    ];
    this.doneTasks.next(doneList);
    this.todoTasks.next(tasksList);
  }
}
