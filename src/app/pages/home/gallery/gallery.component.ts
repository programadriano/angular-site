import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternalService } from '../internal/services/internal.service';
import { Gallery } from '../models/gallery';
import { GalleryService } from './services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _galleryService: GalleryService) { }
  public gallery: Gallery = new Gallery();

  ngOnInit(): void {
    let slug = this.activatedRoute.snapshot.params.slug;
    this.getGalleryBySlug(slug);
  }

  getGalleryBySlug(slug: string) {
    this._galleryService.getGalleryBySlug(slug).subscribe(data => {
      this.gallery = data;
    });
  }

}
