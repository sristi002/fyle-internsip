import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should retrieve user data from the API', () => {
    const githubUsername = 'testuser';
    const userData = { login: githubUsername, name: 'Test User' };

    apiService.getUser(githubUsername).subscribe((user) => {
      expect(user).toEqual(userData);
    });

    const req = httpTestingController.expectOne(
      `${environment.API_URL}/users/${githubUsername}?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(userData);
  });


});
