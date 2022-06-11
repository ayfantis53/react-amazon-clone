import { render, screen } from "@testing-library/react";
import Header from '../Header';

describe('App component', () => {
  test('renders the Header page', () => {
    render(Header);
  });
 }); 