import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaTelaComponent } from './cria-tela.component';

describe('CriaTelaComponent', () => {
  let component: CriaTelaComponent;
  let fixture: ComponentFixture<CriaTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaTelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriaTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
