import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonFooter,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonApp, IonRouterOutlet, IonFooter, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon],
})
export class AppComponent {
  constructor() {}
}
