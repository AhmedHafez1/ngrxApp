import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {

  switch (action.type) {
    case 'ARABIC':
      return 'مرحبا بالعالم';
    case 'SPANISH':
      return 'Hola Mundo';
    default:
      return 'Hello World';
  }
}
