import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective2',
  templateUrl: './fordirective2.component.html',
  styleUrls: ['./fordirective2.component.css']
})
export class Fordirective2Component implements OnInit {

  arrproduct:any[]=[
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
     {
      name:'Samsung',
      price:25000,
      qty:2
    },
     {
      name:'RealMe',
      price:18000,
      qty:1
    },
     {
      name:'One Plus',
      price:45000,
      qty:1
    }
  ];

  selected:string='';
  isShow:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(myitem:any){
    console.log("Mouse over Event Occur..");
    this.selected=myitem.name;
  }
  onMouseOut(){
    console.log("-----Mouse Out Event-------");
    this.selected='';
  }

  onShow(){
   // this.isShow=true;
   this.isShow=!this.isShow;
  }

}
