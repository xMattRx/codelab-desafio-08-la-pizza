import './App.scss';

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  favoriteIconUrl: string;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "La Cuma",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "R$ 29,90",
    imageUrl: "/pizza1.png",
    favoriteIconUrl: "/icon-favorite.png"
  },
  {
    id: 2,
    name: "La Cuma",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "R$ 29,90",
    imageUrl: "/pizza1.png",
    favoriteIconUrl: "/icon-favorite.png"
  },
  {
    id: 3,
    name: "La Cuma",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "R$ 29,90",
    imageUrl: "/pizza1.png",
    favoriteIconUrl: "/icon-favorite.png"
  },
  {
    id: 4,
    name: "La Cuma",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "R$ 29,90",
    imageUrl: "/pizza1.png",
    favoriteIconUrl: "/icon-favorite.png"
  }
];

const App: React.FC = () => {
  return (
    <div className="laPizza">
      <header className="laPizza__header">
        <img className="laPizza__logo" src="/logo.png" alt="Logo da La Pizza" />
      </header>
      <main className="laPizza__main">
        <div className="laPizza__content">
          <h1 className="laPizza__title">Mais vendidas</h1>
          <div className="laPizza__pizzas">
            {pizzas.map((pizza) => (
              <div key={pizza.id} className="laPizza__pizza">
                <img src={pizza.imageUrl} className="laPizza__pizza-image" alt={`Pizza ${pizza.name}`} />
                <img src={pizza.favoriteIconUrl} className="laPizza__pizza-favorite" alt="Ícone de favorito" />
                <h2 className="laPizza__pizza-title">{pizza.name}</h2>
                <p className="laPizza__pizza-description">{pizza.description}</p>
                <span className="laPizza__pizza-price">{pizza.price}</span>
                <button className="laPizza__pizza-button">Comprar agora</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="laPizza__footer">
        <div className="laPizza__footerContent">
          <img src="./image-footer.png" className="laPizza__footerImage" alt="Imagem do rodapé" />
          <div className="laPizza__footerText">
            <h3 className="laPizza__footerTitle">Sobre a La Pizza</h3>
            <p className="laPizza__footerDescription">Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.</p>
            <button className="laPizza__footerButton">Ler mais sobre</button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
