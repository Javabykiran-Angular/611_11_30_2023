import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  num1:number=4;
  imgUrl:string='../../assets/bg4.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
