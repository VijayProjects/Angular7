import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-virtualscrolling',
  templateUrl: './virtualscrolling.component.html',
  styleUrls: ['./virtualscrolling.component.css']
})
export class VirtualscrollingComponent implements OnInit {
  constructor(private artistsService: ArtistsService) {}
  artists = [];
  ngOnInit() {
    this.getArtists();
  }
  getArtists() {
    this.artists = this.artistsService.getArtists();
  }
}
