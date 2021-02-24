import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToHour'
})
export class SecondsToHourPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let hours = value / 3600;
    let minutes = (hours % 1) * 60;
    let seconds = (minutes % 1) * 60;

    hours = Math.floor(hours);
    minutes = Math.floor(minutes);
    seconds = Math.round(seconds) === 60 ? 59 : Math.round(seconds);

    let mLeadZero = '';
    let sLeadZero = '';

    if (minutes.toString().length === 1) { mLeadZero = '0'; }
    if (seconds.toString().length === 1) { sLeadZero = '0'; }


    return `${hours}h:${mLeadZero}${minutes}m:${sLeadZero}${seconds}s`;
  }

}
