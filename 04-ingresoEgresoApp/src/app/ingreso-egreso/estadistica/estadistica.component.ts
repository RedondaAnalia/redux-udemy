import { Component, OnInit } from '@angular/core';
// import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Label, MultiDataSet } from 'ng2-charts';
import { AppState } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {

  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();

  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartData;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso')
                                  .subscribe( ingresoEgreso => {
                                    this.contarIngresoEgreso(ingresoEgreso.items);
                                  });
  }

  contarIngresoEgreso(items: IngresoEgreso[]) {

    this.ingresos = 0;
    this.egresos = 0;

    this.cuantosEgresos = 0;
    this.cuantosIngresos = 0;

    items.forEach( item => {
      switch (item.tipo) {
          case 'ingreso': this.cuantosIngresos ++;
                          this.ingresos += item.monto;
                          break;
          case 'egreso': this.cuantosEgresos ++;
                         this.egresos += item.monto;
                         break;
          default: console.error('Tipo invalido');
                   break;
      }
    });

    this.doughnutChartData = [this.ingresos, this.egresos];

  }
}
