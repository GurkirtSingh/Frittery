import { makeStyles } from '@mui/styles'
import React from 'react'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
} from '@mui/material'

const useStyles = makeStyles((theme?: any) => ({
    cardStyle: {
        maxHeight: 270,
        width: 250,
        margin: 20,
    },
    cardContentStyle: {
        backgroundColor: 'black',
        color: 'white',
    }
}))

interface ProductInfo {
    id: number,
    name: string,
    photoUrl: string,
    desc: string
}

const Product: React.FC<ProductInfo> = (props) => {
    const { name, photoUrl, id, desc} = props
    const classes = useStyles();
    return (
        <Card className={classes.cardStyle}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={photoUrl}
                        alt="green iguana"
                    />
                    <CardContent className={classes.cardContentStyle}>
                        <Typography gutterBottom variant="h6" component="div">
                        {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default Product;
