import { render, screen } from "@testing-library/react";
import Header from '../components/Header';

describe('App component', () => {
  test('renders the Header page', () => {
    render(Header);
  });
 }); 