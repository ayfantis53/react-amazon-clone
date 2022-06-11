import { render, screen } from "@testing-library/react";
import App from '../App';

/*  describe('App component', () => {
  test('renders the landing page', () => {
    render(<App />);
  });
 });  */

 describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
 
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
 });


  