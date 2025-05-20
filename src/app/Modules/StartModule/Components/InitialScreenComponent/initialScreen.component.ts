import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';

@Component({
  selector: 'initialScreen',
  templateUrl: 'initialScreen.component.html',
  standalone: true,
  styleUrl: 'initialScreen.component.css',
})
export class initialScreenComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => this.starTyping());
    }
  }
  Text: string[] = [
    'Ingeniero de Software',
    'Desarrollador FullStack',
    'Desarrollador Movil',
  ];
  Speed: number = 100;
  Pause: number = 2000;
  Deleting: boolean = false;
  Index: number = 0;
  ActiveText = signal<string>('');

  starTyping() {
    const fullText = this.Text[this.Index];

    if (this.Deleting) {
      this.ActiveText.set(fullText.substring(0, this.ActiveText().length - 1));
    } else {
      this.ActiveText.set(fullText.substring(0, this.ActiveText().length + 1));
    }

    if (!this.Deleting && this.ActiveText() === fullText) {
      setTimeout(() => {
        this.Deleting = true;
        this.starTyping();
      }, this.Pause);
    } else if (this.Deleting && this.ActiveText() === '') {
      this.Deleting = false;
      this.Index = (this.Index + 1) % this.Text.length;
      this.starTyping();
    } else {
      setTimeout(
        () => this.starTyping(),
        this.Deleting ? this.Speed / 2 : this.Speed
      );
    }
  }
}
