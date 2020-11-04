import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VagaComponent } from './vaga.component';

describe('VagaComponent', () => {
  let component: VagaComponent;
  let fixture: ComponentFixture<VagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
