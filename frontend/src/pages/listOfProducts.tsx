import React from 'react'
import {
    Box
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import Product from '../components/product'

const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        width: '80%',
        margin: "auto",
        display: 'flex',
        flexWrap: 'wrap',
    }
})

const ListOfProductPage: React.FC = () => {
    const classes = useStyles();
    const photoUrl = `${process.env.PUBLIC_URL + '/assets/tempProductImage.jpg'}`
    const photoUrl1 = `${process.env.PUBLIC_URL + '/assets/tempProductImage01.jpg'}`
    const photoUrl2 = `${process.env.PUBLIC_URL + '/assets/tempProductImage02.jpg'}`
    const photoUrl3 = `${process.env.PUBLIC_URL + '/assets/tempProductImage03.jpg'}`
    const photoUrl4 = `${process.env.PUBLIC_URL + '/assets/tempProductImage04.jpg'}`
    return (
        <Box className={classes.root}>
            <Product name='chocolate' photoUrl={photoUrl} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='strawberry' photoUrl={photoUrl1} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='vanila' photoUrl={photoUrl2} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='carrot' photoUrl={photoUrl} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='pineple' photoUrl={photoUrl3} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='mix cake' photoUrl={photoUrl4} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='pan cake' photoUrl={photoUrl} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='fav cake' photoUrl={photoUrl4} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='famouse cake' photoUrl={photoUrl3} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='lucky' photoUrl={photoUrl2} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='I dont know' photoUrl={photoUrl} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='Still dont know' photoUrl={photoUrl2} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='Caremal' photoUrl={photoUrl1} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='Hazelnut' photoUrl={photoUrl4} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='Pepermint' photoUrl={photoUrl3} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
            <Product name='Lemon' photoUrl={photoUrl} id={90} desc="Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate."></Product>
        </Box>
    )
}

export default ListOfProductPage;