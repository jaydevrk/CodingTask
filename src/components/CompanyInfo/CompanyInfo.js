import React from 'react'
import MenuBar from '../MenuBar/MenuBar'

import { Container, Box } from '@material-ui/core'
function CompanyInfo() {
    return (
        <>
            <MenuBar />

            <Container component="main" maxWidth="xs" sx={{ mt: 60 }}>
                <div style={{ marginTop: 300 }}>
                    <Box

                        border={4}
                        borderLeft={0}
                        borderRight={0}
                        borderColor="primary.main"
                    >

                        <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
                        <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
                        <p><strong>Phone:</strong> XXXXXXXXXX09</p>
                        <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
                    </Box>
                </div>
            </Container>



        </>
    )

}

export default CompanyInfo
