import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmHour',
  standalone: true,
})
export class KmHourPipe implements PipeTransform {
  transform(value: number): number {
    return value * 0.06;
  }
}
