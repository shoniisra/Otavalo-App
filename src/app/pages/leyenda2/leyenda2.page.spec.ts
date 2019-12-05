import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Leyenda2Page } from './leyenda2.page';

describe('Leyenda2Page', () => {
  let component: Leyenda2Page;
  let fixture: ComponentFixture<Leyenda2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leyenda2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Leyenda2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
