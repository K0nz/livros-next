import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '../../../classes/controle/ControleLivros';
import { Livro } from '../../../classes/modelo/Livro';

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;

  switch (req.method) {
    case 'DELETE':
      controleLivro.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluído com sucesso!' });
      break;
    default:
      res.status(405).end(); // Método não permitido
      break;
  }
}