import { PodcastsPage } from './../podcasts/podcasts';
import { ProgramacaoPage } from './../programacao/programacao';
import { IblntvPage } from './../iblntv/iblntv';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { ImageCacheDirective } from '../../directives/imagecache/imagecache';


import 'rxjs/add/operator/map';
import { BoletinsPage } from '../boletins/boletins';
import { PastoraisPage } from '../pastorais/pastorais';
import { EventosPage } from '../eventos/eventos';
import { AgendaPage } from '../agenda/agenda';
import { SisIblnPage } from '../sis-ibln/sis-ibln';
import { NossahistoriaPage } from '../nossahistoria/nossahistoria';
import { EstruturaPage } from '../estrutura/estrutura';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  public displayData: any;
  public registros:any;
  public imgHome:any;

  chatRoot = IblntvPage;
  chatParams = {
    user1: 'admin',
    user2: 'ionic'
  };

  
  constructor(
    
    public navCtrl: NavController,
    private apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
             ) {
               this.carregaFeeds();
               this.existeAtualizacao();
             
   
  }



  openIBLNTV(){
    this.navCtrl.push(IblntvPage);
  }
  openBoletins(){
    this.navCtrl.push(BoletinsPage);
  }
  openPastorais(){
    this.navCtrl.push(PastoraisPage);
  }
  openEventos(){
    this.navCtrl.push(EventosPage);
  }
  openAgenda(){
    this.navCtrl.push(AgendaPage);
  }
  openPodCasts(){
    this.navCtrl.push(PodcastsPage);
  }
  openSistemas(){
    this.navCtrl.push(SisIblnPage);
  }
  openNossaHitoria(){
    this.navCtrl.push(EstruturaPage);
  }
  carregaFeeds(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getFeeds().then(
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
  existeAtualizacao(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.existeAtualizacao().then(
      (result: any) => {
        loading.dismiss();
        if(result[0]['novaversao']!=0){
          let alert = this.alertCtrl.create({
            title: 'Nova Versão!',
            subTitle: 'Olá, Lançamos uma nova versão com correções e atualizações. Para ter acesso aos novos recursos,atualize seu aplicativo. ',
            buttons: ['OK']
          });
          alert.present();

        }
       // this.registros = result;
       
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    }
    
    );

  }

}

