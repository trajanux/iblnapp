import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2pONjKOnMennzQysSff5Fg&maxResults=25&order=date&key=AIzaSyCRDg2hzVg2wqlxoXpD749iTYfRoIKq0rs 
*/
@Injectable()
export class YoutuberProvider {

  constructor(public http: Http) {
    console.log('Hello YoutuberProvider Provider');
  }

  getVideos() {
    return new Promise((resolve, reject) => {

      let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC2pONjKOnMennzQysSff5Fg&maxResults=25&order=date&key=AIzaSyCRDg2hzVg2wqlxoXpD749iTYfRoIKq0rs' ;

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
