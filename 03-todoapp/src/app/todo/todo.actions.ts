import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[Todo] Agregar Todo';
export const TOOGLE_TODO = '[Todo] Toogle Todo';
export const TOOGLE_ALL_TODO = '[Todo] Toogle All Todo';
export const EDITAR_TODO = '[Todo] Editar Todo';
export const BORRAR_TODO = '[Todo] Borrar Todo';
export const BORRAR_ALL_TODO = '[Todo] Borrar Todo Completados';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor( public texto: string) { }

}

export class ToogleTodoAction implements Action {
    readonly type = TOOGLE_TODO;

    constructor( public id: number) { }

}

export class ToogleAllTodoAction implements Action {
    readonly type = TOOGLE_ALL_TODO;

    constructor( public completado: boolean) { }

}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor( public id: number, public nuevoTexto) { }

}
export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor( public id: number) { }

}

export class BorrarAllTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction| ToogleTodoAction| ToogleAllTodoAction| EditarTodoAction| BorrarTodoAction| BorrarAllTodoAction ;
