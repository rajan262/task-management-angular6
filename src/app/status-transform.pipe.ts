import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTransform'
})
export class StatusTransformPipe implements PipeTransform {

  transform(value: number): string {
    return status = value == 0?'To Do':value == 1?'In Progress':value == 2?'Done':'Completed';
  }

}
