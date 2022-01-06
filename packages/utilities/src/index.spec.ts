/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import * as utils from '.';

describe('utils', () => {
  test('utils exports', () => {
    expect(Object.keys(utils)).toEqual([
      'composeEventHandlers',
      'generateId',
      'setIdCounter',
      'getControlledValue',
      'useCombinedRefs',
      'convertToMatrix',
      'KEY_CODES',
      'KEYS',
      'DocumentPosition',
      'useId',
      'ContainerOrientation'
    ]);
  });
});
