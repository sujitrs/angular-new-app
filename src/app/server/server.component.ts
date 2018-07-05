import {Component} from '@angular/core';
@Component({
selector:'server-app',
templateUrl:'./server.component.html'
})
export class ServerComponent{
    ID;
    Status;
    Name="XX";


    constructor(){
        this.ID=Math.random().toPrecision(2);
        this.ID=this.ID*100;
        this.Status=Math.random()>0.5?'Online':'Offline';
    }

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

    getColor(){
        return this.Status==='Online'?'green':'red';
    }
}