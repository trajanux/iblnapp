import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  registros: any;
  registrosFotos:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
    this.carregar();
  }


  carregar(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getEventos().then(
      (result: any) => {
        loading.dismiss();
        console.log(result); 
        this.registros=result;

        for(let i=0;i<this.registros.length;i++){
          let item = this.registros[i]["data"].split("-");
          this.registros[i]["data"]=item[2]+"/"+item[1];
        }

 
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    } );
  }

  carregarEvento(id_evento){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });

    this.apiProvider.getEventosFotos(id_evento).then(
      (result: any) => {
        
        console.log(result); 
        this.registrosFotos=result;

        
          let profileModal = this.modalCtrl.create(Profile, { fotos: this.registrosFotos });
          profileModal.present();
          loading.dismiss();

 
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    } );


  }

}
@Component({
  selector: 'page-eventos-detalhe',
  templateUrl: 'eventosfotos.html',
})

export class Profile {
  registrosFostos:any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController) {
    this.registrosFostos=params.get('fotos');
    console.log('fotos', params.get('fotos'));
  }
 
  dismiss() {
    this.viewCtrl.dismiss();
}
 }