import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  registros: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    public loadingCtrl: LoadingController
  ) {
    this.carregar();

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
    this.carregar();
  }


  carregar(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getAgendas().then(
      (result: any) => {
        loading.dismiss();
        console.log(result); 
        this.registros=result;

        for(let i=0;i<this.registros.length;i++){
          let item = this.registros[i]["data_evento"].split("-");
          this.registros[i]["data_evento"]=item[2]+"/"+item[1];
        }

 
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    } );
  }

}
