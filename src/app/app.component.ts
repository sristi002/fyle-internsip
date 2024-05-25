import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {

  username: string = "";
  isLoading: boolean = false;


  userSearchHandler(username: string) {
    this.username = username;
  }

  title = 'fyle-frontend-challenge';

  constructor(private titleService:Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

}
