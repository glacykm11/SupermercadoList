import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListaProdutosComponent } from './card-lista-produtos.component';

describe('CardListaProdutosComponent', () => {
  let component: CardListaProdutosComponent;
  let fixture: ComponentFixture<CardListaProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListaProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
