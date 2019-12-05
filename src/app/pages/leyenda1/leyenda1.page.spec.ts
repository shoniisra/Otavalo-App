import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Leyenda1Page } from './leyenda1.page';

describe('Leyenda1Page', () => {
  let component: Leyenda1Page;
  let fixture: ComponentFixture<Leyenda1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leyenda1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Leyenda1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
