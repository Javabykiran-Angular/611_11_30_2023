import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  
  strDetails:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ipsam quod, dignissimos voluptatum maxime natus nostrum fugiat inventore veniam laborum ipsum. Dignissimos sed rerum eveniet soluta incidunt culpa! Aliquid.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi recusandae ipsam quod, dignissimos voluptatum maxime natus nostrum fugiat inventore veniam laborum ipsum. Dignissimos sed rerum eveniet soluta incidunt culpa! Aliquid.'
  constructor() { }

  ngOnInit(): void {
  }

}
