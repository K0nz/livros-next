import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title> {/* Altera o título */}
      </Head>
      
      <Menu /> {/* Adiciona o componente Menu */}
      
      <main className={styles.main}> {/* Define a área principal */}
        <h1 className={styles.title}>Página Inicial</h1> {/* Cria um título */}
      </main>
    </div>
  );
}

export default Home;
