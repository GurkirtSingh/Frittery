// landing page
import React from "react"
import { Box, Typography, CssBaseline } from "@mui/material"

export const NotFoundPage: React.FC = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CssBaseline/>
            <Typography variant="h3">404: Page not Found</Typography>
            <Typography variant="h6">We have not designed it yet</Typography>
        </Box>
    )
}

export default NotFoundPage;