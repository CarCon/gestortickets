import { Component } from '@angular/core';

export type EditorType = 'nuevoTicket' | 'estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // title = 'GestorDeTickets';
    editor: EditorType = 'nuevoTicket';

    get showNuevoTicket() {
      return this.editor === 'nuevoTicket';
    }
    get showEstado() {
      return this.editor === 'estado';
    }

    toggleEditor(type: EditorType) {
      this.editor = type;
    }
  }
