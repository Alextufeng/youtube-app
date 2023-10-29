import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
  standalone: true,
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') color = '';

  private elementRef = inject(ElementRef);

  private renderer = inject(Renderer2);

  public ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.color}`,
    );
  }
}
