import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/modules/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  doneTasks = new Array<Task>();
  constructor(doneArray: TaskService) { 
    doneArray.getDoneTasks().subscribe(tasks=>{
      this.doneTasks = tasks;
    })
  }

  ngOnInit(): void {
  }

}
