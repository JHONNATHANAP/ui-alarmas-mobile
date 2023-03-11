import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mobile-alarma-por-voz',
  templateUrl: './alarma-por-voz.component.html',
  styleUrls: ['./alarma-por-voz.component.scss'],
})
export class AlarmaPorVozComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}
  navigate(){
    localStorage.setItem('editAlarm','true')
    this.router.navigate(['/alarma'])
  }

}
