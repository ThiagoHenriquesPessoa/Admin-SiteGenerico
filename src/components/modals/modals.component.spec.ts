import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsComponent } from './modals.component';

describe('ModalsComponent', () => {
  let component: ModalsComponent;
  let fixture: ComponentFixture<ModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
