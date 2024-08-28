import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamConsultarComponent } from './steam-consultar.component';

describe('SteamConsultarComponent', () => {
  let component: SteamConsultarComponent;
  let fixture: ComponentFixture<SteamConsultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SteamConsultarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
