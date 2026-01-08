import { Component } from '@angular/core';
import { Tanime } from './shared/consts/movie';
import { anime } from './shared/models/movie';
import { Imobile } from './shared/models/mobile';
import { mobileProducts } from './shared/consts/mobile';
import { Icard } from './shared/models/card';
import { postsArr } from './shared/consts/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'input';

  trackById(index:number, m : Imobile){
    return m.id
  }

  trackbyid (index:number, s:Tanime){
    return s.id
  }

   trackBYid (index:number, s:Icard){
    return s.id
  }

  mobilesArr : Array<Imobile> = mobileProducts;

  movieArr:Array<Tanime>= anime  

  cardArr : Array<Icard> = postsArr;

}
