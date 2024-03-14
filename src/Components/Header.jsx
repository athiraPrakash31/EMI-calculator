import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse
} from 'mdb-react-ui-kit';
function Header() {
    const [openNavText, setOpenNavText] = useState(false);
    return (
        <div>
            <MDBNavbar expand='lg' light style={{ backgroundColor: '#116a9e' }}>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'><img height='60' width='100' src="https://static.bankbazaar.com/images/bankbazaar-logo.svg" alt="" /></MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavText(!openNavText)}
                    >
                        <MDBIcon className='text-light' icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavText} >
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-light' active aria-current='page' href='#'>
                                    LOANS
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-light' active aria-current='page' href='#'>CARDS</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-light' active aria-current='page' href='#'>INVESTMENTS</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink className='text-light' active aria-current='page' href='#'>                                <img src="https://static.bankbazaar.com/images/common/ct-navbar-link-img-v2.gif" alt="" />
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <span className='navbar-text text-light'> <i class="fa-solid fa-location-dot"></i> Track </span>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header