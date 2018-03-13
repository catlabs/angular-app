import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTableHost]'
})
export class TableHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
  
}
