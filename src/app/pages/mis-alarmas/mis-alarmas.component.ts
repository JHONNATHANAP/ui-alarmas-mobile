import { Component, OnInit } from '@angular/core';
import { AppAlarmaModel } from '@shared/app/models/alarma-model';

@Component({
  selector: 'mobile-mis-alarmas',
  templateUrl: './mis-alarmas.component.html',
  styleUrls: ['./mis-alarmas.component.scss'],
})
export class MisAlarmasComponent  implements OnInit {
  alarmas: Array<AppAlarmaModel> = [
    {
      titulo: "Trabajo",
      hora: "06:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: true, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: true,
      tipoApagado: { tipo: "MOVIMIENTO", value: { id: 1, label: "Agitar" } },
    },
    {
      titulo: "Universidad",
      hora: "06:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: true, id: 2 },
        { label: "M", active: true, id: 3 },
        { label: "J", active: false, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: false,
      tipoApagado: { tipo: "TECLA", value: { id: 1, label: "Agitar" } },
    },
    {
      titulo: "Clase de UX",
      hora: "06:00 am",
      diasDelaSemana: [
        { label: "D", active: false, id: 0 },
        { label: "L", active: true, id: 1 },
        { label: "M", active: false, id: 2 },
        { label: "M", active: false, id: 3 },
        { label: "J", active: false, id: 4 },
        { label: "V", active: true, id: 5 },
        { label: "S", active: false, id: 6 },
      ],
      active: true,
      tipoApagado: { tipo: "EJERCICO_MENTAL", value: { id: 1, label: "Agitar" } },
    },
  ];
  constructor() { }

  ngOnInit() {}

}
