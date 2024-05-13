import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageFormComponent } from './home-page-form.component';

describe('HomePageFormComponent', () => {
  let component: HomePageFormComponent;
  let fixture: ComponentFixture<HomePageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
