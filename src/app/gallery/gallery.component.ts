
import { Component, OnChanges, Input, ViewChild } from '@angular/core';

import { ImageService } from '../image/shared/image.service';
import { Router } from '@angular/router';
import {OwlCarousel} from 'ngx-owl-carousel';


@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

    imageObject: Array<object> = [{
        image: 'assets/img/slider/1_min.jpeg',
        thumbImage: 'assets/img/gol1.jpg'
    }, {
        image: 'assets/img/slider/2.jpg',
        thumbImage: 'assets/img/gol2.jpg'
    }, {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol3.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol4.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol5.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol6.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol7.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol8.jpg'
    },
    {
        image: 'assets/img/slider/3.jpg',
        thumbImage: 'assets/img/gol9.jpg'
    },
];

    @ViewChild('owlElement') owlElement: OwlCarousel;

    classes: string[] = [];
    show: Boolean = false;

    title = 'Click on an image for full size';
    @Input() filterBy?: String = 'all';

    visibleImages: any[] = [];

    constructor(private imageService: ImageService, private router: Router) {
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {
        this.visibleImages = this.imageService.getImages();
    }

    logout() {
        console.log('Logout Successfully....');
        this.router.navigate(['login']);
    }

    clickEvent() {
        console.log('sidebarToggled');
        this.classes.splice(this.classes.length - 1, 1);
        this.show = !this.show;
        if (this.show) {
            this.classes.push('active1');
        } else {
            this.classes.push('not-active1');
        }
    }

    fun() {
        this.owlElement.next([200]);
        // duration 200ms
      }
}
