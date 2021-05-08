import {render} from '@testing-library/react';
import Introduction from '../Introduction/Introduction';


it('renders the introduction H1', ()=>{
const { container } = render (
    <Introduction />
);

expect(container.textContent).toContain('Hi my name is Brittney Elsberry')


});