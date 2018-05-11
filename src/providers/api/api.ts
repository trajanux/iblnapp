import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private API_URL = 'http://m.ibln.org.br/app/'

  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  getDetalhesMinisterios() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'listar/ibln_grp_ativ?q=data_event>now()' ;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }

  getUltimaMensagemPastoral() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'listar/ibln_msg_pastorais?limit=1&order=data_publicacao%20desc' ;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
  getMensagensPastorais() {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'listar/ibln_msg_pastorais?order=data_publicacao%20desc' ;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }


getAgendas() {
  return new Promise((resolve, reject) => {
   // consulta em eventos desse mês e do proximo mês maior que a data de hoje
   // data_evento: "2018-03-25"
   // id_agenda_evento: "93"
   // titulo_evento: "Culto dos Aniversariantes"

   //   cols=DATE_FORMAT(data_evento, '%d/%m') as data_evento,id_agenda_evento,titulo_evento&   q=((month(data_evento)=(1%2Bmonth(now())))||(month(data_evento)=(month(now()))))^(data_evento%3Enow()||data_evento!now())&\
   
    let url = this.API_URL + "listar/ibln_agenda_eventos?order=data_evento%20asc&q=data_evento>!now()" ;


    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}
getEventos() {
  return new Promise((resolve, reject) => {
   // consulta em eventos desse mês e do proximo mês maior que a data de hoje
   // data_evento: "2018-03-25"
   // id_agenda_evento: "93"
   // titulo_evento: "Culto dos Aniversariantes"

   //   cols=DATE_FORMAT(data_evento, '%d/%m') as data_evento,id_agenda_evento,titulo_evento&   q=((month(data_evento)=(1%2Bmonth(now())))||(month(data_evento)=(month(now()))))^(data_evento%3Enow()||data_evento!now())&\
   
    let url = this.API_URL + "listar/ibln_eventos?order=data%20desc" ;


    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}

getEventosFotos(id) {
  return new Promise((resolve, reject) => {

    let url = this.API_URL + "listar/ibln_eventos_fotos?q=id_evento!"+id ;


    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}
getFeeds() {
  return new Promise((resolve, reject) => {

    let url = this.API_URL + "listarapp/feeds?order=data%20desc";
    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}
existeAtualizacao() {
  return new Promise((resolve, reject) => {

    let url = this.API_URL + "listarapp/atualizacao";
    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}
getImgHome(){
  return new Promise((resolve, reject) => {
    // consulta em eventos desse mês e do proximo mês maior que a data de hoje
    // data_evento: "2018-03-25"
    // id_agenda_evento: "93"
    // titulo_evento: "Culto dos Aniversariantes"
 
     let url = this.API_URL + "listar/ibln_slideshow?\
                               q=ativo!1" ;
 
 
     this.http.get(url)
       .subscribe((result: any) => {
         resolve(result.json());
       },
       (error) => {
         reject(error.json());
       });
   });
}
getInfoSemanais() {
  return new Promise((resolve, reject) => {
   // consulta em eventos desse mês e do proximo mês maior que a data de hoje
   // data_evento: "2018-03-25"
   // id_agenda_evento: "93"
   // titulo_evento: "Culto dos Aniversariantes"

    let url = this.API_URL + "listar/ibln_info_semanais?\
                              order=data_publicacao%20desc&\
                              limit=1" ;


    this.http.get(url)
      .subscribe((result: any) => {
        resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
  });
}
}