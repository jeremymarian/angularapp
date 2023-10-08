/* eslint-disable prettier/prettier */
import { ChangeDetectorRef, Component,  OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pview',
  templateUrl: './pview.component.html',
  styleUrls: ['./pview.component.css'],
})
export class PviewComponent implements OnDestroy {
  faGithub: IconDefinition = faGithub;
  faInstagram: IconDefinition = faInstagram;
  faFacebook: IconDefinition = faFacebook;
  faTwitter: IconDefinition = faTwitter;
  faLinkedIn:IconDefinition = faLinkedin;
  faGoogle = faGoogle;
  title: string = 'My portfolio';
  isNotLoad!: Boolean;
  isLoad!: Boolean;
  pview:Boolean = true
  loading(){
    const path = window.location.pathname
    let storg:string|null =localStorage.getItem('id');
    console.log(storg)
  if (storg === null){
     this.isNotLoad = true;
     this.isLoad = false;
     }
    else{
    this.isNotLoad = false;
    this.isLoad = true;}

  if(path === "/"){
    this.pview = true
  }
  else{
    this.pview = false
  }

  }
  

  handleClickProyects(event: Event) {
    if(event) {
      this.pview = false;
      this.title = 'Proyects Section'
    }
  }

  handleClickLogin(event: Event) {
    if (event) {
      this.pview = false;
      this.title = 'Login Section';

    
    }
  }

  handleClickSignUp(event: Event) {
    if (event) {
      this.pview = false;
      this.title = 'Sign up Section';
      
    }
  }

  handleClickAbMe(event: Event) {
    if (event) {
      this.pview = true;
      this.title = 'My portfolio';
      
    }
  }


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  logout(){
    if(localStorage.getItem('id')){
    localStorage.removeItem('id');
    localStorage.removeItem('token');
   
      window.location.href = "/";
    }
    
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private cdRef: ChangeDetectorRef, private router :Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('click', this._mobileQueryListener);
    this.loading()
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('click', this._mobileQueryListener);
  }





 
}

