import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component; // define a mutable variable

    beforeEach(() => {
      component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
      expect(component).to.have.class('comment-box');;
    });

    it('has a text area', () => {
      expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
      expect(component.find('button')).to.exist;
    });

    describe('text input behaviour', () => {
      // additional setup for the component that's only run for this describe block
      beforeEach(() => {
        component.find('textarea').simulate('change', 'new comment');
      });

      it('shows text that user enters', () => {
        expect(component.find('textarea')).to.have.value('new comment');
      });

      it('clears content when user submits', () => {
        component.simulate('submit');
        expect(component.find('textarea')).to.have.value('');
      });
    })
});
