import { Component, Input, OnInit } from '@angular/core';
import { Tanime } from '../../consts/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  
   @Input() movie !: Tanime

  constructor() { }

  ngOnInit(): void {
  }

}
