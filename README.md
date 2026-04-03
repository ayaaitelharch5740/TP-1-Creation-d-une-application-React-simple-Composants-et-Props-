# TP React – Composants fonctionnels et Props

Un projet pédagogique pas à pas pour apprendre les bases de React : composants, props, PropTypes et structuration d'application.

---

## 🎯 Objectifs

- Initialiser un projet React avec Create React App
- Créer et intégrer des composants fonctionnels avec JSX
- Utiliser les props pour transmettre des données entre composants
- Structurer efficacement une application React

---

## 🛠️ Prérequis

- [Node.js](https://nodejs.org) (version LTS recommandée) et npm installés

Vérifiez votre installation :
```bash
node -v
npm -v
```

---

## 🚀 Lancer le projet
```bash
npx create-react-app tp-react
cd tp-react
npm install prop-types
npm start
```

L'application sera disponible sur : [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet
```
src/
├── App.js
├── HelloWorld.js
├── Greeting.js
├── Profil.js
├── Voiture.js
├── ListeCourses.js
└── index.js
```

> Placez une image `user.png` dans le dossier `public/` pour le composant `Profil`.

---

## 📋 Étapes du TP

### Étape 1 – Environnement de travail
Installation de Node.js/npm et création du projet avec Create React App.

### Étape 2 – Composant simple
Créez le fichier `src/HelloWorld.js` qui affiche un titre **Hello World !**.  
Intégrez-le ensuite dans `App.js`.

### Étape 3 – Composants avec props
Créez le fichier `src/Greeting.js` qui reçoit un `prenom` en prop et affiche un message de salutation personnalisé.  
Utilisez ce composant plusieurs fois dans `App.js` avec des prénoms différents.

### Étape 4 – Props avancées avec PropTypes
Créez le fichier `src/Profil.js` qui affiche la photo et le nom d'un utilisateur.  
Validez les props avec `PropTypes` et définissez une valeur par défaut pour la taille de l'image.

### Étape 5 – Exercices pratiques

**Composant `Voiture`** – Créez `src/Voiture.js` qui affiche la marque, le modèle et la couleur d'un véhicule. Ajoutez trois voitures différentes dans `App.js`.

**Composant `ListeCourses`** – Créez `src/ListeCourses.js` qui affiche dynamiquement une liste d'éléments passés en props. Affichez au moins deux listes différentes dans `App.js`.

### Étape 6 – Vérification finale
Contrôlez que la structure du projet est complète et que l'application fonctionne sans erreur dans le navigateur.

---

## 🧩 Composants développés

| Composant | Description | Props |
|-----------|-------------|-------|
| `HelloWorld` | Affiche un titre de bienvenue | — |
| `Greeting` | Message de salutation personnalisé | `prenom` (string) |
| `Profil` | Photo et nom d'un utilisateur | `utilisateur` (object), `taille` (number) |
| `Voiture` | Description d'un véhicule | `marque`, `modele`, `couleur` (strings) |
| `ListeCourses` | Liste dynamique d'éléments | `elements` (array of strings) |

---

## 📚 Notions abordées

- JSX et composants fonctionnels
- Passage de données via les `props`
- Validation des props avec `PropTypes`
- `defaultProps` pour les valeurs par défaut
- Rendu de listes avec `.map()`

---
## Execution 
<img width="220" height="409" alt="Capture" src="https://github.com/user-attachments/assets/c68306f2-92a1-4433-bf4c-ce5c9f1748c3" />


## ➡️ Pour aller plus loin

Ce TP constitue la base pour aborder les prochaines notions :
- Gestion du **state** avec `useState`
- Effets de bord avec `useEffect`
- Interactions utilisateurs et formulaires contrôlés
