import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBarComponent } from '../Components/NavBarComponent/navBar.component';

@Component({
  selector: 'startLayout',
  templateUrl: 'startLayout.component.html',
  styleUrl: 'startLayout.component.css',
  standalone: true,

  imports: [RouterOutlet, navBarComponent],
})
export class startLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
