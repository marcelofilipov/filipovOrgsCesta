import logo from '../../assets/logo.png';

import broccoli from '../../assets/vegetable/Broccoli.png';
import cucumber from '../../assets/vegetable/Cucumber.png';
import potato from '../../assets/vegetable/Potato.png';
import pumpkin from '../../assets/vegetable/Pumpkin.png';
import tomato from '../../assets/vegetable/Tomato.png';

const cesta = {
  header: {
    title: 'Detalhe da cesta',
  },
  details: {
    name: 'Cesta de Verduras',
    farmLogo: logo,
    farmName: 'Jenny Jack Farm',
    description:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda direito para sua cozinha',
    price: 'R$ 42,98',
    buyButton: 'Comprar',
  },
  items: {
    title: 'Itens da cesta',
    listBasket: [
      {
        nameVeg: 'Tomate',
        imageVeg: tomato,
      },
      {
        nameVeg: 'Brócolis',
        imageVeg: broccoli,
      },
      {
        nameVeg: 'Batata',
        imageVeg: potato,
      },
      {
        nameVeg: 'Pepino',
        imageVeg: cucumber,
      },
      {
        nameVeg: 'Abóbora',
        imageVeg: pumpkin,
      },
    ],
  },
};

export default cesta;
