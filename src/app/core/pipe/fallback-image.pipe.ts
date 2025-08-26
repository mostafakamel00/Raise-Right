import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackImage',
  standalone: true
})
export class FallbackImagePipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value || value.trim() === '') {
      return './assets/images/dummy.svg';
    }
    return value;
  }
}
