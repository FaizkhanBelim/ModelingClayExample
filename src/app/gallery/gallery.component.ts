
import { Component, OnChanges, Input, ViewChild } from '@angular/core';

import { ImageService } from '../image/shared/image.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
    height: String = '400px';
    minHeight: String;
    arrowSize: String = '30px';
    showArrows: Boolean = true;
    disableSwiping: Boolean = false;
    autoPlay: Boolean = true;
    autoPlayInterval: Number = 3333;
    stopAutoPlayOnSlide: Boolean = true;
    debug: Boolean = false;
    backgroundSize: String = 'cover';
    backgroundPosition: String = 'center center';
    backgroundRepeat: String = 'no-repeat';
    showDots: Boolean = true;
    dotColor: String = '#FFF';
    showCaptions: Boolean = true;
    captionColor: String = '#FFF';
    captionBackground: String = 'rgba(0, 0, 0, .35)';
    lazyLoad: Boolean = false;
    hideOnNoSlides: Boolean = false;
    width: String = '100%';
    @ViewChild('slideshow') slideshow: any;

    imageUrls: (string | IImage)[] = [
        { url: 'assets/img/gol1.jpg', caption: 'The first slide', href: '#config' },
        { url: 'assets/img/gol2.jpg', href: '#config' },
        { url: 'assets/img/gol3.jpg', href: '#config' },
        { url: 'assets/img/gol4.jpg', href: '#config' },
        { url: 'assets/img/gol5.jpg', href: '#config' },
        { url: 'assets/img/gol6.jpg', href: '#config' },
        { url: 'assets/img/gol7.jpg', href: '#config' },
        { url: 'assets/img/gol8.jpg', href: '#config' },
        { url: 'assets/img/gol9.jpg', href: '#config' },
        { url: 'assets/kitties.jpg', backgroundSize: 'contain', backgroundPosition: 'center' }
    ];

    classes: string[] = [];
    show: Boolean = false;

    title = 'Click on an image for full size';
    @Input() filterBy?: String = 'all';

    visibleImages: any[] = [];

    constructor(private imageService: ImageService, private router: Router) {
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {
        setTimeout(() => {
            console.log('adding an image url dynamically.');
            this.imageUrls.push('https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg');
        }, 2000);
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
}
