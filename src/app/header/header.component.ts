import { Component } from '@angular/core';

@Component({
    selector : 'app-header',
    templateUrl : './header.component.html',
    //template:'<h2>Inline template example</h2><p>Inline para tag</p>',
    //above code also can be written as shown in below as with back tick
    //template:`
   // <h2>Inline template example</h2>
    //<p>Inline para tag</p>
   // <app-products></app-products>
    //`,
    styleUrls : ['./header.component.css']
   // styles:[
     //   `
     //   p{
      //      color : red
      //  }
       // `
   // ]
})
export class HeaderComponent {}