import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

    it('adds 2 numbers', async () => {
        const { getByText, getByLabelText } = render(<App />);
        const input1 = getByLabelText('Input 1');
        const input2 = getByLabelText('Input 2');

        fireEvent.change(input1, { target: { value: '10' } });
        fireEvent.change(input2, { target: { value: '2' } });
        fireEvent.click(getByText('Add'));

        await waitFor(() => {
            expect(getByText('12')).toBeInTheDocument();
        });
    });

    it('subtract 2 numbers', async () => {
        const { getByText, getByLabelText } = render(<App />);
        const input1 = getByLabelText('Input 1');
        const input2 = getByLabelText('Input 2');

        fireEvent.change(input1, { target: { value: '10' } });
        fireEvent.change(input2, { target: { value: '2' } });
        fireEvent.click(getByText('Subtract'));

        await waitFor(() => {
            expect(getByText('8')).toBeInTheDocument();
        });
    })


})