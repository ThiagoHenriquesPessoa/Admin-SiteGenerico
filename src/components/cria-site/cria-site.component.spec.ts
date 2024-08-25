import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaSiteComponent } from './cria-site.component';

describe('CriaSiteComponent', () => {
  let component: CriaSiteComponent;
  let fixture: ComponentFixture<CriaSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriaSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
