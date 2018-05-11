import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the BoletinsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boletins',
  templateUrl: 'boletins.html',
  
})
export class BoletinsPage {

  registros: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    public loadingCtrl: LoadingController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad BoletinsPage');
  this.agenda();
  }

  agenda(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getInfoSemanais().then(
      (result: any) => {
        loading.dismiss();
        console.log(result); 
        this.registros = result;     
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    }  
    );

  }

}
