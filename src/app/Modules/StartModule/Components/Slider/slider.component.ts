import { Component, input, OnInit, signal } from '@angular/core';
import { sliderClass } from './sliderClass';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slider',
  templateUrl: 'slider.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class sliderComponent implements OnInit {
  Slider = input.required<sliderClass>();
  prueba: number = 400;
  constructor() {}

  ngOnInit() {}
}
