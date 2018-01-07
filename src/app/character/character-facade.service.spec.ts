import { TestBed, inject } from '@angular/core/testing';

import { CharacterFacadeService } from './character-facade.service';

describe('CharacterFacadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterFacadeService]
    });
  });

  it('should be created', inject([CharacterFacadeService], (service: CharacterFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
