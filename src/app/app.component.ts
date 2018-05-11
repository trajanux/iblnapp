import { SisIblnPage } from './../pages/sis-ibln/sis-ibln';
import { IblntvPage } from './../pages/iblntv/iblntv';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { PodcastsPage } from './../pages/podcasts/podcasts';
import { ProgramacaoPage } from './../pages/programacao/programacao';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EstruturaPage } from '../pages/estrutura/estrutura';
import { PastoraisPage } from '../pages/pastorais/pastorais';
import { VideosPage } from '../pages/videos/videos';
import { ContatoPage } from '../pages/contato/contato';
import { SplashPage} from '../pages/splash/splash'
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor
   (
    public platform: Platform, 
    public statusBar: StatusBar, 
    public modalCtrl: ModalController,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Institucional', component: EstruturaPage },
      { title: 'Programação', component: ProgramacaoPage },
      { title: 'IBLN TV', component: IblntvPage },
      { title: 'Pastorais', component: PastoraisPage },
      { title: 'Sistemas', component: SisIblnPage },
      { title: 'Localização', component: LocalizacaoPage },
      { title: 'Contato', component: ContatoPage },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
