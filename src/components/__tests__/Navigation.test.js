import Navigation from '../Navigation/Navigation';
import {render} from '@testing-library/react';

it('renders the Navigation component', ()=>{
    const {container} = render(
        <Navigation/>
    );

    expect(container.textContent).toContain('About', 'Projects');
})