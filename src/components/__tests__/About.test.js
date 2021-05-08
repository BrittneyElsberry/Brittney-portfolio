import {render} from '@testing-library/react';
import About from '../About/About';

it('renders the about me text', ()=>{

    const { container } = render(
        <About/>
    );

    expect(container.textContent).toContain('my background is ....');

});