import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
  standalone: true,
})
export class BorderColorDirective {
  @Input('appBorderColor') set color(color: string) {
    this.borderColor = color;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.borderColor}`,
    );
  }

  private borderColor = '';

  private elementRef = inject(ElementRef);

  private renderer = inject(Renderer2);
}
