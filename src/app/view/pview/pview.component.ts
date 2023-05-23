/* eslint-disable prettier/prettier */
import { ChangeDetectorRef, Component,  OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-pview',
  templateUrl: './pview.component.html',
  styleUrls: ['./pview.component.css'],
})
export class PviewComponent implements OnDestroy {

  title: string = 'My portfolio';
  isNotLoad!: Boolean;
  isLoad!: Boolean

  loading(){
    let storg:string|null =localStorage.getItem('id')
    console.log(storg)
    if(storg === null){
      return (this.isNotLoad = true, this.isLoad = false)

    }
    else{
      return (this.isNotLoad = false, this.isLoad = true)
    }

  }
  


  handleClickLogin(event: Event) {
    if (event) {
      this.title = 'Login Section';
    
    }
  }

  handleClickSignUp(event: Event) {
    if (event) {
      this.title = 'Sign up Section';
      
    }
  }

  handleClickCards(event: Event) {
    if (event) {
      this.title = 'Cards Section';
      
    }
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  logout(){
    localStorage.removeItem('id')
    localStorage.removeItem('token')
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('click', this._mobileQueryListener);
    this.loading()
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('click', this._mobileQueryListener);
  }





 
}

