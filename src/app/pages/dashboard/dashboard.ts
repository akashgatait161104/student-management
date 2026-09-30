import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-dashboard',
  imports: [
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  name:string = 'Akash Gatait';
  studentId:string = 'NIT/2022/0472';
  depermentName:string = 'Electronics and Communication';
  rollNumber:number = 430222010048;
  ngOnInit(){
    
  } 
}
