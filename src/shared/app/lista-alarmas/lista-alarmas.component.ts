import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AppAlarmaModel } from "../models/alarma-model";
export type ButtonType = "button" | "submit";
@Component({
  selector: "app-lista-alarmas",
  templateUrl: "./lista-alarmas.component.html",
  styleUrls: ["./lista-alarmas.component.scss"],
})
export class ListaAlarmasComponent {
  @Input() alarmas: Array<AppAlarmaModel>=[];
  constructor(private router:Router) {
    
  }
  navigate(){
    localStorage.setItem('editAlarm','true')
    this.router.navigate(['/alarma'])
  }
}
