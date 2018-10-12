import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadersCssComponent } from './ngx-loaders-css.component';

describe('NgxLoadersCssComponent', () => {
  let component: NgxLoadersCssComponent;
  let fixture: ComponentFixture<NgxLoadersCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoadersCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadersCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
