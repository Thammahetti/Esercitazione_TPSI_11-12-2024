import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeomonTypeComponent } from './pokeomon-type.component';

describe('PokeomonTypeComponent', () => {
  let component: PokeomonTypeComponent;
  let fixture: ComponentFixture<PokeomonTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeomonTypeComponent]
    });
    fixture = TestBed.createComponent(PokeomonTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
