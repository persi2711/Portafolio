import { Component, OnInit } from '@angular/core';
import { sliderComponent } from '../../../../Components/Slider/slider.component';
import {
  ImagenSliderClass,
  sliderClass,
} from '../../../../Components/Slider/sliderClass';

@Component({
  selector: 'aboutme',
  templateUrl: 'aboutme.component.html',
  standalone: true,
  imports: [sliderComponent],
})
export class aboutmeComponent implements OnInit {
  constructor() {}

  Images: ImagenSliderClass[] = [
    new ImagenSliderClass(
      'https://scontent.ftij5-1.fna.fbcdn.net/v/t39.30808-6/307562970_5365406436878909_5508288697805873167_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG077Wwxf9CjCoi2oyP1RXAioczmnSM0SqKhzOadIzRKhMgOebm-mmK8-879KHGxxLT8weUhCTWuaj99HvFj3Gq&_nc_ohc=-UiDQ_Yi7vQQ7kNvwF6b2gu&_nc_oc=AdnTQhM4EDTeuvRxQAZKlst713Bl22W4CF29PzPEKQ523G72-r_vmEt1swjManZ_nVI&_nc_zt=23&_nc_ht=scontent.ftij5-1.fna&_nc_gid=YhpgrMGbX2G8bf5z1Li-EA&oh=00_AfIhjPlgxoQI_KouYsiq_-fsEuTGn6aOK_MBVf6LIpXasQ&oe=683114FB',
      ''
    ),
    new ImagenSliderClass(
      'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
      ''
    ),
    new ImagenSliderClass(
      'https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png',
      ''
    ),
  ];
  SliderContent = new sliderClass(
    this.Images,
    'w-[1000px]',
    'h-[400px]',
    'w-[400px]',
    'h-[200px]',
    3,
    0
  );
  ngOnInit() {}
}
