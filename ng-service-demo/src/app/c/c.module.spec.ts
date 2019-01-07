import { CModule } from './c.module';

describe('CModule', () => {
  let cModule: CModule;

  beforeEach(() => {
    cModule = new CModule();
  });

  it('should create an instance', () => {
    expect(cModule).toBeTruthy();
  });
});
