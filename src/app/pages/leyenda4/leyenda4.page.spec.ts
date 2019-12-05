import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Leyenda4Page } from './leyenda4.page';

describe('Leyenda4Page', () => {
  let component: Leyenda4Page;
  let fixture: ComponentFixture<Leyenda4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leyenda4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Leyenda4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
