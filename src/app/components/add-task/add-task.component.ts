import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/modules/task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {


  constructor(private taskService: TaskService) { }

  newTask = "";
  newDescription = "";
  

  add() {
    const task: Task = { title: this.newTask, description: this.newDescription};
    this.taskService.addTask(task);
    this.newTask = "";
    this.newDescription = "";
  }

  ngOnInit(): void {
  }

}
