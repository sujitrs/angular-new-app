import {Component} from '@angular/core';
@Component({
selector:'server-app',
templateUrl:'./server.component.html'
})
export class ServerComponent{
    ID=1;
    Status="Online";
    Name;

    toggle(){
        if(this.Status=="Online"){
            this.Status="Offline";
        }else{
            this.Status="Online";
        }
       // return;
    }

    OnChange(event:Event){
this.Name=(<HTMLInputElement>event.target).value;
    }
}