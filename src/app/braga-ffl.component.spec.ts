import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BragaFFLAppComponent } from '../app/braga-ffl.component';

beforeEachProviders(() => [BragaFFLAppComponent]);

describe('App: BragaFFL', () => {
  it('should create the app',
      inject([BragaFFLAppComponent], (app: BragaFFLAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'braga-ffl works!\'',
      inject([BragaFFLAppComponent], (app: BragaFFLAppComponent) => {
    expect(app.title).toEqual('braga-ffl works!');
  }));
});
