import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../utils/styles'; // ajuste o caminho se necessário

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles(); // aplica os estilos

  return (
    <Card className={classes.productCard}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            title={product.name}
            className={classes.productImage} // aplica tamanho fixo e object-fit
          />
          <CardContent>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readOnly />
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCartHandler(product)}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
}
