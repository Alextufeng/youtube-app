import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appBoxShadow]',
  standalone: true,
})
export class BoxShadowDirective {
  @Input('appBoxShadow') set color(color: string) {
    this.borderColor = color;
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      `5px 5px 20px ${this.borderColor}`,
    );
  }

  private borderColor = '';

  private elementRef = inject(ElementRef);

  private renderer = inject(Renderer2);
}
