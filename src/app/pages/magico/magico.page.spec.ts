import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MagicoPage } from './magico.page';

describe('MagicoPage', () => {
  let component: MagicoPage;
  let fixture: ComponentFixture<MagicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MagicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
