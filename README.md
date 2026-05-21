# Jeu VideOps CI/CD

## Objectifs CI

- Exécuter des contrôles qualité automatisés à chaque pull request et push.
- Valider les modules de jeu JavaScript et TypeScript avec linting et tests.
- Maintenir des pipelines reproductibles par dossier.

## Lien

[Jeux Videops](https://jonathandecroix28-max.github.io/jeu/)

## Projets gérés par la CI

### Keep_White_Space

- Installation : `npm install`
- Lint : `npm run lint`
- Tests unitaires : `npm run test:unit`
- Tests end-to-end : `npm run test:e2e`

### Space_Invaders

- Installation : `npm install`
- Lint : `npm run lint`
- Tests unitaires : `npm run tests`
- Tests fonctionnels : `npm run test:functional`
- Build de l’artefact : `npm run build`

### front

- Le dossier frontend statique est validé via la construction du conteneur en CD.

## Jobs CD

- Construire l’image de conteneur pour `front`.
- Construire l’image de conteneur pour `Keep_White_Space`.
- Construire l’image de conteneur pour `Space_Invaders`.
- Publier les images uniquement depuis `main` ou des tags de version.

## Déclencheurs des pipelines

- **Pull requests** : exécuter tous les jobs CI.
- **Push sur `main`** : exécuter tous les jobs CI, puis la construction des images CD.
- **Tags de version (`v*`)** : exécuter CI + CD et publier les artefacts de release.

## Contrôle qualité CI/CD

- Tous les jobs de lint et de tests doivent réussir.
- La CD ne s’exécute qu’après le succès des jobs CI.
- Les échecs des contrôles spécifiques à chaque dossier bloquent le merge et la release.

## technologies utilisées

- **GitHub Actions** pour l’orchestration des pipelines CI/CD.
- **ESLint** pour le linting du code JavaScript et TypeScript.
- Github Pages pour le déploiement du frontend statique.
- Docker pour la construction d’images de conteneurs.
- Docker Hub pour la publication des images de conteneurs.
- GItbub Secrets pour la gestion sécurisée.


## Liens 
- [CI/CD GitHub Actions](https://docs.github.com/en/actions)
- [Linting avec ESLint](https://eslint.org/)


## Auteurs 

- Jonathan
- Cyprien
