import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutuberProvider } from '../../providers/youtuber/youtuber';
import { DomSanitizer } from '@angular/platform-browser';
import { Content } from 'ionic-angular';
/**
 * Generated class for the IblntvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iblntv',
  templateUrl: 'iblntv.html',
})
export class IblntvPage {
  @ViewChild(Content) content: Content;
  registros: Array<string> = [];
  registroDestaque="";
  registroDescricao="";
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public youtube:YoutuberProvider,
    public sanitizer: DomSanitizer
 
) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IblntvPage');

 
    this.youtube.getVideos().then(
     (result: any) => {
       result.items.forEach(function(){

       });
       for(let i=0;i<result.items.length;i++){
        this.adicionar({
          url:"https://www.youtube.com/embed/"+result.items[i]['id']['videoId'],
          thumb:result.items[i]['snippet']['thumbnails']['high']['url'],
          descricao:result.items[i]['snippet']["title"]+" \b "+result.items[i]['snippet']["description"]+"\b "
        });
        console.log(result.items[i]['snippet']);
       
       }
       this.registroDestaque="https://www.youtube.com/embed/"+result.items[0]['id']['videoId'];

     }
   ).catch((error: any) => {
      //console.log(error);
   }
   );
 }
 
 adicionar(item){   
   this.registros.push(item);
 }
 setarDestaque(destaque,descri){
   this.registroDestaque=destaque;
   this.registroDescricao=descri;
   this.content.scrollToTop();
 }



  }

