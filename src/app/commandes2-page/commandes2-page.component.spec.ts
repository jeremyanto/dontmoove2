import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Commandes2PageComponent } from './commandes2-page.component';

describe('commandes2PageComponent', () => {
  let component: Commandes2PageComponent;
  let fixture: ComponentFixture<Commandes2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Commandes2PageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Commandes2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
