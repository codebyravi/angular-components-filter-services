/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailchimpComponent } from './mailchimp.component';

describe('MailchimpComponent', () => {
  let component: MailchimpComponent;
  let fixture: ComponentFixture<MailchimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailchimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailchimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
