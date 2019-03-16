import { VidlyModule } from './vidly.module';

describe('VidlyModule', () => {
  let vidlyModule: VidlyModule;

  beforeEach(() => {
    vidlyModule = new VidlyModule();
  });

  it('should create an instance', () => {
    expect(vidlyModule).toBeTruthy();
  });
});
