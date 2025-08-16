import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'blockContent',
  templateUrl: 'blockContent.component.html',
  standalone: true,
})
export class blockContentComponent implements OnInit {
  Titulo = input<string>('Titulo');
  constructor() {}
  ngOnInit() {}
}
