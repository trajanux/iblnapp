import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.loadMap();
  }
  loadMap(){
 
    let latLng = new google.maps.LatLng(-15.758979,-47.831654);
 
    let mapOptions = {
      center: latLng,
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   let marker = new google.maps.Marker({
      position: latLng,
      map: this.map
  });

  marker.addListener('click', function() {
    let destination = -15.758979 + ',' + -47.831654;


      let label = encodeURI('IBLN');
      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    

    
  });

 
  }
}

