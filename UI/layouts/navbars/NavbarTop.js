// import node module libraries
import Link from 'next/link';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Menu } from 'react-feather';

// import sub components
import QuickMenu from '@/layouts/QuickMenu';

const NavbarTop = (props) => {
  return (
    <Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex align-items-center">
          <Link
            href="#"
            id="nav-toggle"
            className="nav-icon icon-xs me-2"
            onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}
          >
            <Menu size="18px" />
          </Link>
          <div className="ms-lg-3 d-none d-md-none d-lg-block">
            {/* Search Form */}
            <Form className="d-flex align-items-center">
              <Form.Control type="search" placeholder="Search" />
            </Form>
          </div>
        </div>
        {/* Quick Menu */}
        <Nav className="navbar-right-wrap d-flex nav-top-wrap ms-2">
          <QuickMenu />
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarTop;
