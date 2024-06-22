import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import Services from './views/Service';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from './views/ContactPage';
import Login from './views/Login';
import Signup from './views/Signup';
import SearchBar from './views/SearchBar';
import Products from './views/Products';
import Profile from './views/Profile';
import Admin from './views/Admin';
import Appointment from './views/Appointment';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
  screen.debug();
});

describe('Home', () => {
  it('renders Home component', () => {
    render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
    );
  });
  screen.debug();
});

describe('Sidebar', () => {
  it('renders Sidebar component', () => {
    render(
    <MemoryRouter>
<     Sidebar />
    </MemoryRouter>
    );
  });
  screen.debug();
});

describe('Services', () => {
  it('renders Services component', () => {
    render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('ContactPage', () => {
  it('renders ContactPage component', () => {
    render(
    <MemoryRouter>
      <ContactPage />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Login', () => {
  it('renders Login component', () => {
    render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Signup', () => {
  it('renders Signup component', () => {
    render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
);
  });
  screen.debug();
});


describe('SearchBar', () => {
  it('renders SearchBar component', () => {
    render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Profile', () => {
  it('renders Profile component', () => {
    render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Products', () => {
  it('renders Products component', () => {
    render(
    <MemoryRouter>
      <Products />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Admin', () => {
  it('renders Admin component', () => {
    render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
);
  });
  screen.debug();
});

describe('Appointment', () => {
  it('renders Appointment component', () => {
    render(
    <MemoryRouter>
      <Appointment />
    </MemoryRouter>
);
  });
  screen.debug();
});