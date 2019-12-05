import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NarrativoPage } from './narrativo.page';

describe('NarrativoPage', () => {
  let component: NarrativoPage;
  let fixture: ComponentFixture<NarrativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NarrativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
