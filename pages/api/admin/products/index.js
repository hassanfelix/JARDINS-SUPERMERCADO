import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'informe o nome do produto',
    slug: 'informe uma slug-' + Math.random(),
    image: 'images/feijao_.jpg',
    price: 0,
    category: 'informe a categoria',
    brand: 'informe a marca',
    countInStock: 0,
    description: 'informe uma descrição',
    rating: 4.5,
    numReview: 7,
  });
  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Produto criado', product });
});

export default handler;
