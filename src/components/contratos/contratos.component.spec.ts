import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosComponent } from './contratos.component';

describe('ContratosComponent', () => {
  let component: ContratosComponent;
  let fixture: ComponentFixture<ContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
