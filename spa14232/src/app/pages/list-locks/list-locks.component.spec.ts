import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLocksComponent } from './list-locks.component';

describe('ListLocksComponent', () => {
  let component: ListLocksComponent;
  let fixture: ComponentFixture<ListLocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
