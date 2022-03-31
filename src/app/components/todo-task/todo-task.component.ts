import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/modules/task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(tasksArray: TaskService) { 
    tasksArray.getTodoTasks().subscribe((tasks: Array<Task>) =>{
      this.tasksList = tasks
    });
  }

  ngOnInit(): void {
  }

}
