import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Data send from parent...';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  strChildDataReceived:string='';
  arrObj:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
