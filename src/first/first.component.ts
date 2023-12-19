import { Component, OnDestroy} from '@angular/core';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';



@Component({

  selector: 'first-root',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,OnDestroy {
  title!: string;
  buttonText!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  
  imgurls= ['https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/12/angular.png','data:image/png;base64,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' ];
  imgindex= 0;
  im=true;
  imgurl=this.imgurls[this.imgindex]
  intervalSubscription: Subscription | undefined;
  text=''; 
 user = {
 name : 'malek alghraba',
  age : '25'}
  change(){
  this.user.name = this.text;
  this.user.age = '15' ;


  }
  hidden(){
    this.im = !this.im;
  }
 
 cars=[
  'bmw ',
  'toyota',
  'rang rover',


 ]
  ngOnInit() {
       // Set an interval to change the image every 3 seconds (for example)
    this.intervalSubscription = interval(3000).subscribe(() => {this.changeImage();
      });
    this.title = 'first test';
    this.description = 'From zero to hero!';
    this.createdDate = new Date();
    this.snaps = 0 ;
    this.buttonText = 'Oh Snap!';
  }
  changeImage() {
    // Increment the index to show the next image in the array
    this.imgindex = (this.imgindex + 1) % this.imgurls.length;
    this.imgurl = this.imgurls[this.imgindex];
  }
  ngOnDestroy() {
    // Unsubscribe from the interval when the component is destroyed
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
  onAddSnap() {
    
      if (this.buttonText === 'Oh Snap!') {
        this.snaps++;
        this.buttonText = 'Oops, unSnap!';
      } else {
        this.snaps--;
        this.buttonText = 'Oh Snap!';
      }
    
  }
} 