import { render, screen } from "@testing-library/react";
import App from '../App';

describe('App component', () => {
  test('renders the landing page', () => {
    render(App);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
 }); 


  