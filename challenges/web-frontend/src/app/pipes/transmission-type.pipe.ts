import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmissionType'
})
export class TransmissionTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 0:
        return "Manual"
      case 1: 
        return "Automatic"
    }
    return "Unkown";
  }

}
