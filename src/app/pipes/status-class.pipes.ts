import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusClass' 
})
export class StatusClassPipes implements PipeTransform
{
    transform( status: number ): string {
      // return status === 1? 'active': status === 2? 'parcial': 'blocked';
      const obj: {[key: number]: string} = {
        1: 'active',
        2: 'parcial',
        3: 'bloqueio'
      };
      return obj[status];
    }





}