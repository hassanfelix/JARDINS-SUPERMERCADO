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
  try {
    await db.connect();

    const {
      name,
      price,
      category,
      image,
      brand,
      countInStock,
      description,
      slug,
    } = req.body;

    const newProduct = new Product({
      name: name || 'Produto sem nome',
      slug:
        slug && slug.trim() !== ''
          ? slug.trim().toLowerCase().replace(/\s+/g, '-')
          : (name || 'Produto sem nome')
              .trim()
              .toLowerCase()
              .replace(/\s+/g, '-'),
      image: image || 'images/default.jpg',
      // Converte preço para número, aceita vírgula ou ponto
      price: price ? Number(price.toString().replace(',', '.')) : 0,
      category: category || 'Sem categoria',
      brand: brand || 'Sem marca',
      countInStock: countInStock || 0,
      description: description || 'Sem descrição',
      rating: 4.5,
      numReview: 0,
    });

    const product = await newProduct.save();
    await db.disconnect();
    res.send({ message: 'Produto criado', product });
  } catch (err) {
    await db.disconnect();
    res.status(500).send({ message: err.message || 'Erro ao criar produto' });
  }
});

export default handler;
