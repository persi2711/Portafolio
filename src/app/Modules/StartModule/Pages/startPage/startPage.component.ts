import { Component, OnInit } from '@angular/core';
import { initialScreenComponent } from '../../Components/InitialScreenComponent/initialScreen.component';
import { blockContentComponent } from '../../Components/BlockContentComponent/blockContent.component';

@Component({
  selector: 'startPage',
  templateUrl: 'startPage.component.html',
  standalone: true,
  imports: [initialScreenComponent, blockContentComponent],
})
export class startPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
