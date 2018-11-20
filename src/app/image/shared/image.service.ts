
import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id === id);
    }

}

const IMAGES = [
    { 'id': 1, 'category': 'animals', 'caption': 'Giraffe', 'url': 'assets/img/gol1.jpg' ,
        'price': '₹ 150', 'name': 'Ratnas Fantasy Dough Clay Set'},
    { 'id': 2, 'category': 'animals', 'caption': 'Lion', 'url': 'assets/img/gol2.jpg' , 'price': '₹ 100', 'name': 'Camel Clay Neon '},
    { 'id': 3, 'category': 'animals', 'caption': 'Animal', 'url': 'assets/img/gol3.jpg' ,
        'price': '₹ 200', 'name': 'Imagician Playthings Craftival Clay '},
    { 'id': 4, 'category': 'animals', 'caption': 'Kittens', 'url': 'assets/img/gol4.jpg', 'price': '₹ 375', 'name': 'Kores Modelling Clay'},
    { 'id': 5, 'category': 'animals', 'caption': 'Zebra', 'url': 'assets/img/gol5.jpg' ,
        'price': '₹ 250', 'name': 'Kores Kool Modelling Clay '},
    { 'id': 6, 'category': 'animals', 'caption': 'Zebra', 'url': 'assets/img/gol6.jpg', 'price': '₹ 963', 'name': 'Krishna CL101 Art Clay'},
    { 'id': 8, 'category': 'animals', 'caption': 'Zebra', 'url': 'assets/img/gol8.jpg', 'price': '₹ 356', 'name': 'Ratnas Magic Play Clay'},
    { 'id': 9, 'category': 'animals', 'caption': 'Zebra', 'url': 'assets/img/gol9.jpg', 'price': '₹ 524', 'name': 'Kores Kool Clay '},

];
