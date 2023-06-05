import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() ChildStrEvent =new EventEmitter();

  @Output() ChildArrObjEvent=new EventEmitter();

  strChildData='Hopes so u all are Enjoying Angualr 12 ';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.ChildStrEvent.emit(this.strChildData);
    this.ChildArrObjEvent.emit(this.arrproduct);
  }

}
