import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: Router });
};

describe('Main component routing', () => {
  test('renders Home component for default home route', () => {
    renderWithRouter(<Main />, { route: '/' });
    expect(screen.getByText(/welcome to our online courses/i)).toBeInTheDocument();
  });

  test('renders About component for /about route', () => {
    renderWithRouter(<Main />, { route: '/about' });
    expect(screen.getByText(/about us/i)).toBeInTheDocument();t
  });

  test('renders Courses component for /courses route', () => {
    renderWithRouter(<Main />, { route: '/courses' });
    expect(screen.getByText(/our courses/i)).toBeInTheDocument();
  });

  test('renders Course detail component for /course/:courseId route', () => {
    renderWithRouter(<Main />, { route: '/course/1' });
    expect(screen.getByText(/your browser does not support the video tag/i)).toBeInTheDocument();
  });

  test('renders Contact component for /contact route', () => {
    renderWithRouter(<Main />, { route: '/contact' });
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });
});