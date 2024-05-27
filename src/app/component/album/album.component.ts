import { Component } from '@angular/core';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  albums: any = [];
  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getPhotoAlbum().subscribe(data => {
      console.log(data);
      this.albums = data.products;
    });
  }
}
