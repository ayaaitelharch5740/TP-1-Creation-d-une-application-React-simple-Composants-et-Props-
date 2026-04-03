import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Emma', photo: 'User.png' };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Profil utilisateur={utilisateur} taille={150} />
      <h1>Mes voitures</h1>
      <Voiture marque="Toyota" modele="Corolla" couleur="Blanche" />
      <Voiture marque="Mercedes" modele="Class A" couleur="Noire" />
      <Voiture marque="Renault" modele="Clio" couleur="Rouge" />
        <h2>Listes de courses</h2>
      <ListeCourses elements={['Pain', 'Lait', 'Beurre']} />
      <ListeCourses elements={['Pommes', 'Poulet', 'Riz', 'Yaourt']} />
    </div>
    
  );
}

export default App;