import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Network } from '@ionic-native/network';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the SisIblnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sis-ibln',
  templateUrl: 'sis-ibln.html',
})
export class SisIblnPage {


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sanitizer:DomSanitizer,
              public loadingCtrl: LoadingController,
              private network: Network,
              private toast: ToastController) {
              this.sanitizer = sanitizer;
  }
  public paginaAcesso =this.sanitizer.bypassSecurityTrustResourceUrl("https://m.ibln.org.br");
  public loading;
  public viewSelector=true;

  ngOnInit() {
   
    let networkType = this.network.type;
    if(networkType=="none"){
      this.toast.create({
        message: `Sem acesso à internet, Por favor conecte-se à internet para acessar o sistema`,
        duration: 3000,
        position: 'middle'
      }).present();
      this.viewSelector=true;
    }else{
      this.presentLoading();
      this.viewSelector=true;
    }
   

  }
presentLoading() {
  this.loading = this.loadingCtrl.create({
     content: 'Carregando sistema...'
  });
  this.loading.present();
}

dismissLoading(){
 this.loading.dismiss();
 this.viewSelector=false;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SisIblnPage');
  }




}

