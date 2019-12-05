import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErgologicoPage } from './ergologico.page';

describe('ErgologicoPage', () => {
  let component: ErgologicoPage;
  let fixture: ComponentFixture<ErgologicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErgologicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErgologicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
