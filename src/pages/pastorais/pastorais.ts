import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Content } from 'ionic-angular';


/**
 * Generated class for the PastoraisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pastorais',
  templateUrl: 'pastorais.html',
})
export class PastoraisPage {

  public palavraAtualConteudo: any;
  public palavraAtualImagem: any;
  public palavraAtualAutor:any;
  public palavraAtualTitle:any;
  public palavraAtualVerso:any;
  public palavraAtualVersoNr:any;
  public busca=true;
  public registros:any;
  @ViewChild(Content) content: Content;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,

  ) {
    this.palavraAtualImagem="assets/imgs/loading.png";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastoraisPage');
    this.carregarInformacoes();
  }



  carregarInformacoes(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getUltimaMensagemPastoral().then(
      (result: any) => {
        loading.dismiss();

        this.palavraAtualConteudo = result[0]["mensagem"]; 
        this.palavraAtualImagem= "http://www.ibln.org.br/estilo/imagens/pastorais/"+result[0]["imagem"];
        this.palavraAtualAutor= result[0]["autor"];
        this.palavraAtualTitle= result[0]["titulo"];
        this.palavraAtualVerso= "\""+ result[0]["versiculo_texto"] +"\"<Br>"+ result[0]["versiculo_nr"];

 
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    }  
    );

  }

  verMais(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando informações...'
    });
    loading.present();

    this.apiProvider.getMensagensPastorais().then(
      (result: any) => {
        loading.dismiss();
        console.log(result); 
        this.registros=result;

 
      }
    ).catch((error: any) => {
      loading.dismiss();
       console.log(error);
    }  
    );

  }

  setarAtual(id){
    console.log(id);
    for(let i=0;i<this.registros.length;i++){
      if(this.registros[i].id_msg_pastorais==id){
     
        this.palavraAtualConteudo = this.registros[i]["mensagem"]; 
        this.palavraAtualImagem= "http://www.ibln.org.br/estilo/imagens/pastorais/"+this.registros[i]["imagem"];
        this.palavraAtualAutor= this.registros[i]["autor"];
        this.palavraAtualTitle= this.registros[i]["titulo"];
        this.palavraAtualVerso= "\""+ this.registros[i]["versiculo_texto"] +"\"<Br>"+ this.registros[i]["versiculo_nr"];
        this.content.scrollToTop();

        return;

      }
    }
    

  }

}
