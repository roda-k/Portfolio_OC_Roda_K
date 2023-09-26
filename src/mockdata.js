let mockData = {
  "KASA": {
    "description": "L'application Kasa présentée ici possède plusieurs routes, mettant en avant diverses fonctionnalités comme la récupération de données via un JSON, des animations SCSS, des images en carousel, des bannières, etc.",
    "problems": "Une des principale contraintes rencontrée ici était de produire des composants modulaires et réutilisables au maximum en respectant une structure de fichiers cohérente. Une autre contrainte plus personnelle était de réussir des animations en SCSS",
    "learned": "Ce projet m'a permis de mieux comprendre l'utilisation des states dans les différents composants que j'ai dû utiliser, comment passer des paramètres proprement en React, mais surtout l'importance d'un code propre avec des composants génériques pour réduire le code inutile et/ou répétitif avec une structure simple et logique pour les fichiers qui offrent une rapidité de compréhension/relecture du code",
  },
  "MON VIEUX GRIMOIRE": {
    "description": "L'API faite ici nous permet des opérations CRUD afin de pouvoir accueillir des comptes utilisateurs, leur permettre de créer et modifier leurs livres, ajouter des images, les noter ou les supprimer au besoin",
    "problems": "Plusieurs problématiques ici: il nous fallait un endroit où pouvoir stocker toutes les informations nécéssaires/pouvoir les manipuler ensuite, faire très attention au codes d'erreur renvoyés en cas de probème, ainsi que faire particulièrement attention à la taille des images lorsqu'on les récupère. Dernièrement, il fallait aussi sécuriser certaines routes pour qu'elles ne soient accessible que lorqu'un utilisateur est identifié.",
    "learned": "Ce projet m'a permis de voir plusieurs choses: premièrement, celle-ci était mon premier contact avec la mise en place d'un back-end et d'une base de données, ce qui m'a permit de découvrir ces notions. Ensuite, j'ai pû apprendre ce qu'était le greencode et pourquoi cette notion va devenir importante. Enfin, le fonctionnement des routes API et les différents middlewares qu'on peut leur associer (comme l'authentification par exemple) était pour moi l'un des points les plus intéressants.",
  },
  "DEBUG": {
    "description": "L'objectif ici était d'optimiser plusieurs aspects d'un site, ainsi que de corriger quelques bugs mineurs. Pour l'optimisation, je me suis basé sur la notation de Lighthouse en mode mobile",
    "problems": "Les deux problemes majeurs: le poids des images utilisées partout sur le site, devant réduire leur taille/chanegr leur format, je dois tout de même gaarder une cohérence visuelle pour un site de photographe. Puis les différents scripts et librairies exécutés prenant beaucoup de place lors du premier chargement de la page. Les bugs à résoudre étaient au final relativement simples, j'ai ensuite dû régler les problèmes d'accessibilité/améliorer le SEO",
    "learned": "J'ai choisi de présenter ce projet ici pour toutes les facettes de l'optimisation qu'il m'a fait découvrir. Que ce soit la gestion des scripts, la minification des fichiers, l'optimisation des images, à quel point le SEO est optimisable mais aussi dénicher et régler des bugs relativement discrets",
  }
}

export default mockData