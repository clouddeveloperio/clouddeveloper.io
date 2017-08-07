import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Playlist } from '../models/playlist';

declare var AzureStorage: any;

@Injectable()
export class PlaylistService {

  private blobContainerUrl: string;

  constructor() {
    this.blobContainerUrl = 'https://' + environment.azureContainers.playlist + '.' + environment.azureContainers.baseUrl;
  }

  getPlayLists(): Promise<Playlist[]> {
    const blobService = AzureStorage.createBlobServiceAnonymous(this.blobContainerUrl);
    return new Promise(resolve => {
      blobService.getBlobToText('playlists', 'youtube-playlist.json', function(err, blobContent, blob){
        resolve(JSON.parse(blobContent));
      });
    });
  }
}
