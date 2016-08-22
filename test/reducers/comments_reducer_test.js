import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    const state = commentReducer(undefined, {})
    expect(state).to.be.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = {type: SAVE_COMMENT, payload: 'new comment'}
    const state = commentReducer([], action)
    expect(state).to.eql(['new comment']);
  });
});
