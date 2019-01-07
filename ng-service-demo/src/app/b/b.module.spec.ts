import { BModule } from './b.module';

describe('BModule', () => {
  let bModule: BModule;

  beforeEach(() => {
    bModule = new BModule();
  });

  it('should create an instance', () => {
    expect(bModule).toBeTruthy();
  });
});
