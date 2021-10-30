import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import User from '../../../../../models/User';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  await db.disconnect();
  res.send(user);
});

handler.put(async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    user.name = req.body.name;
    user.isAdmin = Boolean(req.body.isAdmin);
    await user.save();
    await db.disconnect();
    res.send({ message: 'Usuário Atualizado com Sucesso' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Usuário não encontrado' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const user = await User.findById(req.query.id);
  if (user) {
    await user.remove();
    await db.disconnect();
    res.send({ message: 'Usuário excluído' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Usuário não encontrado' });
  }
});

export default handler;
