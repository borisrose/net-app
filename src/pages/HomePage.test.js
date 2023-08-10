import { render, screen } from '@testing-library/react';
import HomePage from './HomePage.jsx';


describe('HomePage Suit', () => {

  test('The Form Should be on The HomePage', () => {
    render(<HomePage />);
   
    const firstname = screen.getByPlaceholderText('First Name');
    const lastname = screen.getByPlaceholderText(/Last Name/);

    expect(firstname).toBeTruthy();
    expect(lastname).toBeTruthy();
  
  
  });

  test('The Form Button Should be on The HomePage', () => {
    render(<HomePage />);
    const testOne = screen.getByText('Save', { exact : true})
    expect(testOne).toBeTruthy();

  })
  


} )
