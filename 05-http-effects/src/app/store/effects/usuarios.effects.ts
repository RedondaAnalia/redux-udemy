import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
        public usuariosService: UsuarioService) {}

    @Effect()
    cargarUsuarios$ = this.actions$.ofType( usuariosActions.CARGAR_USUARIOS ).pipe(
        switchMap( () => {
            return this.usuariosService.getUsers()
            .pipe(
                map( users => new usuariosActions.CargarUsuariosSuccess(users) ),
                catchError (error => of( new usuariosActions.CargarUsuariosFail( error )))
            )
        }  )
    )
}


