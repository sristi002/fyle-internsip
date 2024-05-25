import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';
import { UserReposComponent } from './user-repos.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getUserRepos']);

    TestBed.configureTestingModule({
      declarations: [UserReposComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create the UserReposComponent', () => {
    expect(component).toBeTruthy();
  });


  it('should fetch user repositories when totalRepos is greater than 0', () => {
    component.totalRepos = 40;
    component.username = 'johnpapa';

    const mockResponse = { items: [{ name: 'Repo1' }, { name: 'Repo2' }] };
    apiService.getUserRepos.and.returnValue(of(mockResponse));

    component.ngOnChanges();

    expect(component.currentPage).toBe(1);
    expect(component.fetchingRepos).toBe(true);
    expect(apiService.getUserRepos).toHaveBeenCalledWith('johnpapa', 1, 10);

    // Simulate the API response
    fixture.detectChanges();
    expect(component.userRepos).toEqual(mockResponse);
    expect(component.fetchingRepos).toBe(false);
  });


  it('should handle errors when fetching user repositories', () => {
    component.totalRepos = 5;
    component.username = 'johnpapa';

    apiService.getUserRepos.and.returnValue(throwError(new Error('Error')));


    component.ngOnChanges();

    expect(component.currentPage).toBe(1);
    expect(component.fetchingRepos).toBe(false);
    expect(apiService.getUserRepos).toHaveBeenCalledWith('johnpapa', 1, 10);

    // Simulate an error response
    fixture.detectChanges();
    expect(component.userRepos).toBeNull();
    expect(component.fetchingRepos).toBe(false);
  });


  it('should handle page changes', () => {
    component.totalRepos = 20;
    component.username = 'johnpapa';
    component.currentPage = 1;

    const mockResponse = { items: [{ name: 'Repo3' }, { name: 'Repo4' }] };
    apiService.getUserRepos.and.returnValue(of(mockResponse));

    component.handlePageChange(2);

    expect(component.currentPage).toBe(2);
    expect(component.fetchingRepos).toBe(true);
    expect(apiService.getUserRepos).toHaveBeenCalledWith('johnpapa', 2, 10);

    // Simulate the API response
    fixture.detectChanges();
    expect(component.userRepos).toEqual(mockResponse);
    expect(component.fetchingRepos).toBe(true);
  });

  it('should reset userRepos', () => {
    component.userRepos = { items: [{ name: 'Repo1' }] };
    component.reset();
    expect(component.userRepos).toBeNull();
  });


  it('should limit maxRepoLimiter to 100 if total_count is greater', () => {
    component.userRepos = { total_count: 150 };
    expect(component.maxRepoLimiter()).toBe(100);
  });

  it('should not limit maxRepoLimiter if total_count is not greater', () => {
    component.userRepos = { total_count: 50 };
    expect(component.maxRepoLimiter()).toBe(50);
  });

});
