import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinmodelComponent } from './linkedinmodel.component';

describe('LinkedinmodelComponent', () => {
  let component: LinkedinmodelComponent;
  let fixture: ComponentFixture<LinkedinmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkedinmodelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkedinmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
