import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { Route, Router } from '@angular/router';
import List from '../../models/list';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.scss'
})
export class NewListComponent implements OnInit{

  constructor(
    private taskService: TaskService,
    private router: Router
    ) {}
  ngOnInit(): void {
    
  }

  addList(value: string){
    this.taskService.createList(value)
      .subscribe((list: any) => this.router.navigate(['/lists', list._id]));
  }

}
