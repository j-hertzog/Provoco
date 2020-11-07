#!/usr/bin/env ts-node
//used with chmod u+x your-shell-script.ts, lets us execute ts file (also must be at top) 

/**
 *  <= COUNTDOWN TIMER =>
 *  how precise should I make this?
 *    - yes
 */
export type alarmData = {
    'name': string,
    'details': string,
    'second' : number,
    'minute' : number,
    'hour' : number,
    'day' : number,
    'month' : number, //starts indexing at 0
    'year' : number,
}

export default class Alarm{
    data?: alarmData;

    constructor(t?: alarmData){
        this.data = t;
    }

    countDown(data: alarmData): String{
        if(!data) return '00:00:00';

        const response: String = 'ree';

        //end time in UTC
        const endTime:number = Date.UTC(data.year, data.month, data.day, data.hour, data.minute, data.second, 0);

        const raw = endTime - Date.now();
        if(raw < 0) 
            return "invalid date";

        let seconds: string = Math.floor((raw % (1000 * 60)) / 1000).toString();
        let minutes: string = Math.floor((raw % (1000 * 60 * 60)) / (1000 * 60)).toString();
        let days: string = Math.floor(raw / (1000 * 60 * 60 * 24)).toString();
        let hours: string = Math.floor((raw % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();

        //nice formatting
        if(seconds.length == 1)
            seconds = '0' + seconds;
        if(minutes.length == 1)
            minutes = '0' + minutes;
        if(days.length == 1)
            days = '0' + days;
        if(hours.length == 1)
            hours = '0' + hours;

        //format a time until string with response
        response = `[ ${days}:${hours}:${minutes}:${seconds} ]`;
        return response;
    }
}

/*-------DEBUG-------*/

/*'9:30:00 AM 4 October 2020'; 
var example: any = {
    'second' : 0,
    'minute' : 30,
    'hour' : 9 ,
    'day' : 4,
    'month' : 9, //october, starts indexing at 0
    'year' : 2020,
};
console.log(`counting down until : ${example['hour']}:${example['minute']}:${example['second']} ${example['day']}/${example['month'] + 1}/${example['year']}`);

setInterval(function() {
    console.log(countDown(example));
}, 1000);
*/
