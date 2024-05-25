import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnChanges {

  // Takes an username as input given by user-search component
  @Input() username!: string;

  userInfo: any = '';
  fetchingInfo: boolean = false;

  // Injecting the Github Service
  constructor(private GithubService: ApiService) { }

  // Fetching the userInfo
  fetchUserInfo() {
    this.reset();
    this.fetchingInfo = true;

    if (this.getData(this.username) === null) {
      this.GithubService.getUser(this.username).subscribe({
        next: (res) => {
          this.userInfo = res;
          this.saveData(this.username, JSON.stringify(res));
          this.fetchingInfo = false;
        },
        error: (err) => {
          this.userInfo = "";
          this.fetchingInfo = false;
        },
      });
    } else {
      this.userInfo = this.getData(this.username);
      this.fetchingInfo = false;
    }

  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return JSON.parse(localStorage.getItem(key)!)
  }

  reset() {
    this.userInfo = null;
  }

  // To refetch
  ngOnChanges(): void {
    this.fetchUserInfo();
  }

}
