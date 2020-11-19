import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVagaDialogComponent } from './detalhe-vaga-dialog.component';

describe('DetalheVagaDialogComponent', () => {
  let component: DetalheVagaDialogComponent;
  let fixture: ComponentFixture<DetalheVagaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheVagaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheVagaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
