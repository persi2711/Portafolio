export class sliderClass {
  Imagenes: ImagenSliderClass[] = [];
  XSize: string = '';
  YSize: string = '';
  SmXSize: string = '';
  SmYSize: string = '';
  Time: number = 3;
  Actual: number = 0;
  Max: number = 0;
  constructor(
    imagenes: ImagenSliderClass[],
    xSize: string,
    ySize: string,
    SmxSize: string,
    SmySize: string,
    time: number,
    actual: number
  ) {
    this.Imagenes = imagenes;
    this.XSize = xSize;
    this.YSize = ySize;
    this.SmXSize = SmxSize;
    this.SmYSize = SmySize;
    this.Time = time;
    this.Actual = actual;
    this.Max = imagenes.length;
  }

  SigIMG() {
    if (this.Actual < this.Max - 1) {
      this.Actual++;
    }
  }
  AntIMG() {
    if (this.Actual > 0) {
      this.Actual--;
    }
  }
}

export class ImagenSliderClass {
  Url: string = '';
  Descripcion: string = '';
  constructor(url: string, descripcion: string) {
    this.Url = url;
    this.Descripcion = descripcion;
  }
}
