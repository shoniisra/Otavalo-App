import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoeticoPage } from './poetico.page';

describe('PoeticoPage', () => {
  let component: PoeticoPage;
  let fixture: ComponentFixture<PoeticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoeticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoeticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
