import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core java",'Advnaced java','Spring Boot','hibernate','MySql','JSP','Angular 12','HTML,CSS,JS','AWS','Docker','Jenking'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
