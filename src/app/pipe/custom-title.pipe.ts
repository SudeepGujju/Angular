import { Pipe, PipeTransform } from '@angular/core';
import { CustomService } from '../service/custom.service';

@Pipe({
  name: 'customTitle'
})
export class CustomTitlePipe implements PipeTransform {

  PrepostionsArr:string[] = null;

  constructor(customService : CustomService)
  {
    this.PrepostionsArr = customService.getPrepostionsList();
  }

  transform(sentence: string): string {

    if(!sentence) return null;

    let words:string[] = sentence.split(" ");

    //for(var word of words)
    for(var i =0; i < words.length; i++)
    {
      var word = words[i];

       if( i!=0 && this.isPreposition(word) ){
         
        words[i] = word.toLowerCase();

       }else{
        words[i] = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
       }
    }

    return words.join(" ");
    
  }

  private isPreposition(word:string):boolean{

    return this.PrepostionsArr.includes(word);
  }

}
