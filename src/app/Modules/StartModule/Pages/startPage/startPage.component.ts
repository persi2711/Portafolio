import { Component, OnInit } from '@angular/core';
import { initialScreenComponent } from './Components/InitialScreenComponent/initialScreen.component';
import { blockContentComponent } from './Components/BlockContentComponent/blockContent.component';
import { aboutmeComponent } from './Components/AboutmeComponent/aboutme.component';

@Component({
  selector: 'startPage',
  templateUrl: 'startPage.component.html',
  styleUrl: 'startPage.component.css',
  standalone: true,
  imports: [initialScreenComponent, blockContentComponent, aboutmeComponent],
})
export class startPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
