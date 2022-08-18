import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHTML'
})
export class SafeHTMLPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, ...args: unknown[]): unknown {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

}
