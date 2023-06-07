import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform
{
        transform(value: any,start:number=0,end:number=25) {
            
            let temp=(<string>value);

            // return (temp.substring(0,20)+"...");

            return (temp.substring(start,end)+"...");

        }
}