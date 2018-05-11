import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastoraisPage } from './pastorais';

@NgModule({
  declarations: [
    PastoraisPage,
  ],
  imports: [
    IonicPageModule.forChild(PastoraisPage),
  ],
})
export class PastoraisPageModule {}
