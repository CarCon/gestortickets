import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile' | 'estado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showEstado() {
    return this.editor === 'estado';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
