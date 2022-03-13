
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResultPlay]'
})
export class ResultPlayDirective {

  constructor() { }

  @HostListener('play') onclick() {
    this.audioPause();
  }

audioPause(){
  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

}

}
