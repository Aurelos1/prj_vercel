import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCenterComponent } from './image-center.component';

describe('ImageCenterComponent', () => {
  let component: ImageCenterComponent;
  let fixture: ComponentFixture<ImageCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCenterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
