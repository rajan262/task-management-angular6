import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskCount'
})
export class TaskCountPipe implements PipeTransform {

  transform(value: any): number {
    if (value == null) {
      return 0
    }
    else {
      return value;
    }
  }

}
