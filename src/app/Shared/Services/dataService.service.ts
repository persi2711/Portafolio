import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  NavBarState = signal<boolean>(false);
  constructor() {}
}
