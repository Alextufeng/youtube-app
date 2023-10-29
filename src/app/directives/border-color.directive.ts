import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderColor]',
  standalone: true,
})
export class BorderColorDirective implements OnInit {
  @Input('appBorderColor') color = '';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.color}`,
    );
  }
}
