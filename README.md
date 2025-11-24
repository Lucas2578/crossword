# 🧩 Crossword Solver

Un solveur de mots croisés robuste en JavaScript qui détecte automatiquement les emplacements de mots et trouve des solutions uniques grâce à un algorithme de backtracking.

## ✨ Fonctionnalités

- **Détection Automatique des Emplacements**: Identifie intelligemment tous les placements de mots valides (horizontaux et verticaux)
- **Validation Complète**: Valide la structure du puzzle, la liste de mots et la résolvabilité avant de tenter la résolution
- **Algorithme de Backtracking**: Explore efficacement l'espace des solutions avec élagage intelligent
- **Garantie de Solution Unique**: Assure que les puzzles ont exactement une solution valide
- **Gestion des Erreurs**: Fournit des messages d'erreur clairs et descriptifs pour les entrées invalides

## 🚀 Démarrage Rapide

### Installation

```bash
git clone https://github.com/ldunis/crossword-solver.git
cd crossword-solver
```

### Utilisation

```javascript
import crosswordSolver from './crosswordSolver.js';

const puzzle = `2001
0..0
1000
0..0`;

const words = ['casa', 'alan', 'ciao', 'oa'];

try {
    const solution = crosswordSolver(puzzle, words);
    console.log(solution);
    // Résultat :
    // casa
    // i..l
    // oaoa
    // o..n
} catch (error) {
    console.error(error.message);
}
```

## 📋 Format du Puzzle

### Symboles de la Grille

- `0` - Cellule vide (peut être remplie avec une lettre)
- `.` - Cellule bloquée (aucune lettre autorisée)
- `1-9` - Position de départ pour 1-9 mots

### Règles

- Chaque chiffre indique combien de mots commencent à cette position
- Les mots doivent contenir au moins 2 caractères
- Les mots peuvent être placés horizontalement ou verticalement
- Les cellules adjacentes ne doivent pas contenir de lettres sauf si elles font partie du même mot

## 🏗️ Structure du Projet

```
crossword-solver/
├── errors/
│   ├── availablePuzzle.js    # Valide les possibilités de placement
│   ├── checkErrors.js         # Orchestrateur principal des vérifications
│   └── validators.js          # Fonctions de validation des entrées
├── finding/
│   └── findSlots.js           # Détecte tous les emplacements valides
├── parsing/
│   ├── getGridPuzzle.js       # Convertit une chaîne en grille 2D
│   └── parsePuzzle.js         # Parse l'entrée du puzzle
├── solver/
│   ├── placement.js           # Logique de placement des mots
│   ├── solver.js              # Algorithme de backtracking
│   └── validation.js          # Validation des placements
└── utils/
    ├── data.js                # Exemples de puzzles et listes de mots
    └── variables.js           # Constantes et messages d'erreur
```

## 🔍 Algorithme

Le solveur utilise une approche de backtracking récursif :

1. **Prétraitement** : Valide les entrées et détecte tous les emplacements disponibles
2. **Remplissage des Emplacements** : Tente de placer chaque mot dans chaque emplacement disponible
3. **Validation** : Vérifie si le placement est valide (pas de conflits, longueur correcte)
4. **Récursion** : Si valide, passe à l'emplacement suivant ; si invalide, retour arrière
5. **Vérification de Solution** : S'assure qu'une seule solution existe

## ✅ Validation

Le solveur effectue une validation complète :

- **Vérification des Types** : Assure les bons types d'entrée
- **Validation de Structure** : Vérifie la cohérence de la grille et les caractères valides
- **Validation des Mots** : Vérifie les doublons et le nombre de mots correspondant
- **Vérification de Résolvabilité** : Confirme que le puzzle peut être résolu avant de tenter

## 🧪 Gestion des Erreurs

Messages d'erreur clairs pour les problèmes courants :

- Puzzle ou liste de mots vide ou invalide
- Nombre de mots incompatible
- Dimensions de grille incohérentes
- Caractères invalides dans le puzzle
- Positions de départ isolées
- Solutions multiples ou aucune solution

## 🛠️ Technologies

- **JavaScript (ES6+)** : JavaScript moderne avec modules
- **Sans Dépendances** : Implémentation en JavaScript vanilla pur

## 👥 Auteurs

- **Lucas Dunis** ([@ldunis](https://github.com/ldunis))
- **Nathan Allain** ([@nallain](https://github.com/nallain))

## 📝 Exemple

### Entrée

```javascript
const puzzle = `..1.
..0.
1000
..0.`;

const words = ['sun', 'oa', 'tao'];
```

### Sortie

```
..s.
..u.
taon
..o.
```

## 🤝 Contribuer

Les contributions, problèmes et demandes de fonctionnalités sont les bienvenus ! N'hésitez pas à consulter la [page des issues](../../issues).

## 📄 Licence

Ce projet est sous licence [MIT](LICENSE).

---

⭐ Si vous trouvez ce projet utile, n'hésitez pas à lui donner une étoile sur GitHub !
