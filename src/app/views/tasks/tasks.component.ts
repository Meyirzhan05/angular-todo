import {Component} from '@angular/core';
import {Task} from 'src/app/model/task';
import {DataHandlerService} from "../../service/data-handler.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks!: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit() {
    this.tasks = this.dataHandler.getTasks();
  }
}
