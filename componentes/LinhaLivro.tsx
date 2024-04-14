import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';


const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>
        <div>{props.livro.titulo}</div>
        {/* Botão de exclusão com estilo Bootstrap */}
        <button onClick={props.excluir} className="btn btn-danger btn-excluir">Excluir</button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        {/* Lista de autores com estilo Bootstrap */}
        <ul className="autores-list">
        {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>  
          ))}
        </ul>
      </td>
    </tr>
  );
}