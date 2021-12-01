import React from 'react'
import Container from '@material-ui/core/Container';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './navbar.css'
function MenuBar() {
    return (
        <div>

            <Navbar className='mt-1' fixed='top' bg="light" expand={'md'} >
                <Container >



                    <Button href="/Info" variant="primary">Company Info</Button>{' '}


                </Container>
            </Navbar>
        </div>
    )
}

export default MenuBar
