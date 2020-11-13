import { Component, OnInit } from '@angular/core';
import libros from './books.json';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

   libros:{id:string, titulo:string, autor:string, editorial:string, descripcion:string, img:string}[] = libros;

  constructor(/*libros*/) {
    this.libros = libros;
   }

  ngOnInit(): void {
  }

}
