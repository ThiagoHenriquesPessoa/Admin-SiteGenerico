import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraSuperiorComponent } from './barra-superior.component';

describe('BarraSuperiorComponent', () => {
  let component: BarraSuperiorComponent;
  let fixture: ComponentFixture<BarraSuperiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraSuperiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
