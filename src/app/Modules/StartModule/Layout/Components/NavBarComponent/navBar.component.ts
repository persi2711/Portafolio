import { Component, HostListener, OnInit, signal } from '@angular/core';

@Component({
  selector: 'navBar',
  templateUrl: 'navBar.component.html',
  standalone: true,
  styleUrl: 'navBar.component.css',
})
export class navBarComponent implements OnInit {
  constructor() {}
  isScrolledDown: boolean = false;
  lastScrollTop: number = 0;
  sideBarStatus = signal<boolean>(false);
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Si el usuario está desplazándose hacia abajo, ocultamos la barra
    if (currentScroll > this.lastScrollTop) {
      this.isScrolledDown = true;
    } else {
      // Si el usuario está desplazándose hacia arriba, mostramos la barra
      this.isScrolledDown = false;
    }

    // Actualizamos la posición del scroll
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
  ShowSideBar() {
    this.sideBarStatus.set(!this.sideBarStatus());
  }
  ngOnInit() {}
}
