import {render, screen} from '@testing-library/react';
import NewHousePost from './NewHousePost';

test('Új ház feltöltése', async ()=>{
    render(<NewHousePost/>);

    fireEvent.click(screen.getByText('Küldés'));
    expect(screen.getByText('töltse ki')).toBeInTheDocument();
});