
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'first-root',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title!: string;
  buttonText!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  name = 'malek alghraba';
  age = '25'
  imgurl= 'https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/12/angular.png' ;
 
  change(){
  this.name = "louka";
  this.age = '15' ;


  }
  text=''; 

  ngOnInit() {
    this.title = 'first test';
    this.description = 'From zero to hero!';
    this.createdDate = new Date();
    this.snaps = 6 ;
    this.buttonText = 'Oh Snap!';
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

