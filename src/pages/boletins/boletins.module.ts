import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoletinsPage } from './boletins';

@NgModule({
  declarations: [
    BoletinsPage,
  ],
  imports: [
    IonicPageModule.forChild(BoletinsPage),
  ],
})
export class BoletinsPageModule {}
