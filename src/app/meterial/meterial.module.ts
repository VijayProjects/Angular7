import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatIconModule,
  MatButtonToggleModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule
} from '@angular/material';

const MeterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatCardModule
];
@NgModule({
  declarations: [],
  imports: [MeterialComponents],
  exports: [MeterialComponents]
})
export class MeterialModule { }
