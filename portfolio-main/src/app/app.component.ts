import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AmanSingh-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    ){
    }
  ngOnInit(): void{

    this.titleService.setTitle( "Aman Singh | Network Engineer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, network, engineer'},
      {name: 'description', content: 'Con 4 años de experiencia desarrollando sistemas, interfaces, bots y soluciones tecnológicas  para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.'},
    ]);
    
    
    AOS.init(); 

  }
}
