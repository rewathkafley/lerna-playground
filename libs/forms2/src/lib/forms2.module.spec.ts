import { async, TestBed } from '@angular/core/testing';
import { Forms2Module } from './forms2.module';

describe('Forms2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Forms2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Forms2Module).toBeDefined();
  });
});
