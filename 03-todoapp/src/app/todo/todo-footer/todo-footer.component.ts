import { Component, OnInit } from '@angular/core';
import * as fromFiltros from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltros.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {

      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);

    });
  }

  cambiarFiltro( nuevoFiltro: fromFiltros.filtrosValidos ) {
    const accion = new fromFiltros.SetFiltroAction(nuevoFiltro);
    this.store.dispatch( accion );
  }

  contarPendientes( todos: Todo[]){

    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  borrarAllTodo() {

    const accion = new fromTodo.BorrarAllTodoAction();
    this.store.dispatch( accion );

  }

}
