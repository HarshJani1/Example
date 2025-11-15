import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 count=0;


 handleClick(value:string){
  if(value == 'minus'){
    if(this.count!=0) this.count--;
  }else if(value == 'reset'){
    this.count = 0;
  }
  else{
    this.count++;
  }
 }

}
