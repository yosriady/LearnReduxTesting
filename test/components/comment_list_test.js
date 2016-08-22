import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component; // define a mutable variable

  beforeEach(() => {
    const state = { comments: ['bananas', 'apples'] };
    component = renderComponent(CommentList, null, state);
  });

  it('shows a comment in an li', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('renders all comments provided', () => {
    expect(component).to.contain('bananas');;
    expect(component).to.contain('apples');;
  });

});
