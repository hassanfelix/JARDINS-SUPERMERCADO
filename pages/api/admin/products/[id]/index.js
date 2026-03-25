import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import Product from '../../../../../models/Product';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

handler.put(async (req, res) => {
  try {
    await db.connect();

    const product = await Product.findById(req.query.id);
    if (!product) {
      await db.disconnect();
      return res.status(404).send({ message: 'Produto não encontrado' });
    }

    // Atualiza os campos com validação mínima
    product.name = req.body.name || product.name;
    product.slug =
      req.body.slug && req.body.slug.trim() !== ''
        ? req.body.slug.trim().toLowerCase().replace(/\s+/g, '-')
        : product.name.trim().toLowerCase().replace(/\s+/g, '-');
    product.price = Number(req.body.price) || 0;
    product.category = req.body.category || product.category;
    product.image = req.body.image || product.image;
    product.brand = req.body.brand || product.brand;
    product.countInStock = Number(req.body.countInStock) || 0;
    product.description = req.body.description || product.description;

    await product.save();
    await db.disconnect();
    res.send({ message: 'Produto Atualizado com Sucesso' });
  } catch (err) {
    await db.disconnect();
    res.status(500).send({ message: err.message });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Produto excluído' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Porduto não encontrado' });
  }
});

export default handler;
