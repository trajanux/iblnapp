import { SisIblnPage } from './../pages/sis-ibln/sis-ibln';
import { ProgramacaoPage } from './../pages/programacao/programacao';
import { PodcastsPage } from './../pages/podcasts/podcasts';
import { PastoraisPage } from './../pages/pastorais/pastorais';
import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { IblntvPage } from './../pages/iblntv/iblntv';
import { EstruturaPage } from './../pages/estrutura/estrutura';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { ContatoPage } from '../pages/contato/contato';
import { VideosPage } from '../pages/videos/videos';
import { ApiProvider } from '../providers/api/api';
import { HttpModule } from '@angular/http';
import { Network } from '@ionic-native/network';
import { PhotosProvider } from '../providers/photos/photos';
import { ImageCacheDirective } from '../directives/imagecache/imagecache';
import { SplashPage} from '../pages/splash/splash'
import { SplashScreen } from '@ionic-native/splash-screen';
import { BoletinsPage } from '../pages/boletins/boletins';
import { EventosPage, Profile } from '../pages/eventos/eventos';
import { AgendaPage } from '../pages/agenda/agenda';
import { YoutuberProvider } from '../providers/youtuber/youtuber';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { NossahistoriaPage } from '../pages/nossahistoria/nossahistoria';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContatoPage,
    EstruturaPage,
    IblntvPage,
    LocalizacaoPage,
    PastoraisPage,
    PodcastsPage,
    ProgramacaoPage,
    VideosPage,
    SisIblnPage,
    ImageCacheDirective ,
    SplashPage,
    BoletinsPage,
    EventosPage,
    AgendaPage,
    Profile,
    NossahistoriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContatoPage,
    EstruturaPage,
    IblntvPage,
    LocalizacaoPage,
    PastoraisPage,
    PodcastsPage,
    ProgramacaoPage,
    VideosPage,
    SisIblnPage,
    SplashPage,
    BoletinsPage,
    EventosPage,
    AgendaPage,
    Profile,
    NossahistoriaPage
    
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    Network,
    PhotosProvider,
    SplashScreen,
    YoutuberProvider,
    DocumentViewer
    
    
  ]
})
export class AppModule {}
