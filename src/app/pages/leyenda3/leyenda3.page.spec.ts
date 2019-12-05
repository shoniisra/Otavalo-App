import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Leyenda3Page } from './leyenda3.page';

describe('Leyenda3Page', () => {
  let component: Leyenda3Page;
  let fixture: ComponentFixture<Leyenda3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leyenda3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Leyenda3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
