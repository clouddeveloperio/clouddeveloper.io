import { Component, Input, OnInit } from '@angular/core';
import { PlaylistService } from '../services/playlist.service';
import { Playlist } from '../models/playlist';

declare var $: any;

@Component({
  selector: 'app-application-content',
  templateUrl: './application-content.component.html',
  styleUrls: ['./application-content.component.css']
})
export class ApplicationContentComponent implements OnInit {
  @Input() title: string;

  private playListService: PlaylistService;
  playLists: Playlist[] = null;

  constructor(plService: PlaylistService) {
    this.playListService = plService;
  }

  ngOnInit(): void {
    this.playListService.getPlayLists().then(results => this.playLists = results);
  }

  showModal(): void {
    $('.ui.modal').modal('show');
  }
}
