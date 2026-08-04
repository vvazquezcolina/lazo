/**
 * Catalogue de services.
 *
 * Périmètre volontairement resserré sur cinq prestations : c'est ce que
 * l'entreprise réalise réellement. Ne pas y ajouter un métier non pratiqué
 * pour « capter du trafic » — un appel qu'on ne peut pas honorer coûte plus
 * cher qu'une visite qu'on n'a pas eue.
 *
 * Chaque service = une page pilier ciblant son propre groupe de requêtes.
 * Le maillage service × commune est généré à partir de ce fichier et de
 * lib/communes.ts : une modification ici se propage au menu, au plan de
 * site, aux pages communales et au balisage schema.org.
 */

export type Service = {
  slug: string
  navLabel: string
  title: string
  tagline: string
  /** <h1> de la page service */
  h1: string
  metaTitle: string
  metaDescription: string
  image: string
  imageAlt: string
  /** Requête principale visée, au singulier et en minuscules */
  primaryKeyword: string
  /** Utilisé dans les pages communales : « {intro} à {commune} » */
  shortDescription: string
  /** Points de valeur affichés en liste */
  highlights: string[]
  /** Sections de contenu long — c'est ce qui fait la profondeur sémantique */
  sections: { heading: string; body: string[] }[]
  faq: { q: string; a: string }[]
  /** Nom du service pour schema.org Service/OfferCatalog */
  schemaName: string
}

export const SERVICES: Service[] = [
  {
    slug: "renovation-toiture",
    navLabel: "Rénovation de toiture",
    title: "Rénovation de toiture",
    tagline: "Ardoise, tuile, zinc — refaite pour durer",
    h1: "Rénovation de toiture à Liège et en province",
    metaTitle: "Rénovation de Toiture à Liège | Devis Gratuit 24h",
    metaDescription:
      "Rénovation de toiture à Liège et Herstal : ardoise, tuile, zinc. Couvreur agréé, garantie décennale, devis gratuit sous 24 h.",
    image: "/img/toiture-tuiles-renovee.jpg",
    imageAlt: "Toiture rénovée en tuiles anthracite, rive en ardoise et corniche en zinc neuve",
    primaryKeyword: "rénovation de toiture",
    shortDescription:
      "Rénovation complète ou partielle de votre toiture, en ardoise naturelle, tuile terre cuite ou zinc à joint debout",
    highlights: [
      "Visite et devis gratuits, sans engagement",
      "Ardoise naturelle, tuile terre cuite, zinc à joint debout",
      "Sous-toiture, isolation et étanchéité traitées ensemble",
      "Garantie décennale sur les travaux de couverture",
    ],
    sections: [
      {
        heading: "Quand faut-il rénover sa toiture ?",
        body: [
          "Une toiture liégeoise bien posée tient plusieurs décennies, mais elle donne des signes avant de céder. Des ardoises qui glissent ou se fendent, des tuiles qui se déplacent après un coup de vent, des traces d'humidité sur les plafonds de l'étage, de la mousse épaisse qui retient l'eau contre la couverture : ce sont autant d'indices qu'il faut faire monter quelqu'un pour regarder de près.",
          "Le point le plus coûteux à ignorer reste la sous-toiture. Sur beaucoup de maisons anciennes de la région, il n'y a tout simplement pas d'écran sous-toiture, ou celui-ci s'est désagrégé avec le temps. L'eau qui passe sous une ardoise déplacée arrive alors directement sur la charpente. Un colmatage ponctuel ne règle rien dans ce cas : c'est la couverture qu'il faut reprendre.",
          "Nous commençons systématiquement par une visite sur place, documentée par des photos des zones que vous ne pouvez pas voir depuis le sol. Vous repartez avec un état des lieux honnête, y compris quand la conclusion est qu'il n'y a rien d'urgent à entreprendre.",
        ],
      },
      {
        heading: "Ardoise, tuile ou zinc : que choisir en région liégeoise ?",
        body: [
          "L'ardoise naturelle reste la couverture de référence dans la région, et pas seulement pour des raisons esthétiques. Elle résiste très bien aux cycles gel-dégel — l'IRM relève près de 60 jours de gel par an à Liège — et à une humidité présente toute l'année, sans véritable saison sèche. Son aspect s'accorde par ailleurs aux prescriptions urbanistiques de nombreux quartiers anciens.",
          "La tuile en terre cuite convient aux pentes plus douces et aux constructions plus récentes. Elle coûte moins cher à la pose et se remplace facilement pièce par pièce, ce qui simplifie l'entretien sur le long terme.",
          "Le zinc à joint debout s'impose sur les faibles pentes, les lucarnes, les extensions contemporaines et partout où la géométrie du toit se complique. Bien mis en œuvre, il offre une étanchéité remarquable et une longévité comparable à celle de l'ardoise. C'est aussi un matériau dont la région peut se réclamer : le laminage du zinc de couverture est une invention liégeoise, mise au point par Jean-Jacques Dony, qui couvre en 1811 la collégiale Saint-Barthélemy — la première toiture en zinc de Belgique.",
          "Le bon choix dépend de la pente, de la charpente existante, du règlement d'urbanisme de votre commune et de votre budget. Nous passons ces quatre points en revue avec vous avant de chiffrer quoi que ce soit.",
        ],
      },
      {
        heading: "Comment se déroule un chantier",
        body: [
          "Après acceptation du devis, nous fixons une date en tenant compte de la météo — on ne découvre pas un toit la veille d'une semaine de pluie. Le chantier commence par la protection des abords et le montage de l'échafaudage ou de la sécurisation adaptée.",
          "Vient ensuite la dépose de l'ancienne couverture, l'inspection de la charpente une fois mise à nu, puis la pose de l'écran sous-toiture, des liteaux et de la nouvelle couverture. Les raccords — noues, solins, rives, souches de cheminée — sont traités au fur et à mesure, car c'est presque toujours là que naissent les infiltrations.",
          "Nous évacuons les déchets de chantier et procédons à une réception avec vous, photos à l'appui, y compris des parties que vous ne pouvez pas voir depuis le sol.",
        ],
      },
      {
        heading: "Le bon moment pour tout traiter d'un coup",
        body: [
          "Une rénovation de couverture est le moment où l'accès au toit est déjà payé : échafaudage monté, protection en place, équipe sur site. C'est donc le moment le plus économique pour traiter l'isolation par l'extérieur, et pour poser des panneaux photovoltaïques si le projet est dans vos plans.",
          "L'argument n'est pas seulement financier. Le dispositif wallon conditionne la prime au remplacement de la couverture à une toiture isolée à R ≥ 5,00 m²K/W : les deux chantiers sont de toute façon liés administrativement. Et poser des panneaux sur une couverture en fin de vie oblige à tout démonter quelques années plus tard.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un permis d'urbanisme pour rénover sa toiture en Wallonie ?",
        a: "Le remplacement d'une couverture par un matériau de même aspect relève des travaux dispensés de permis et ne requiert pas d'architecte. Si vous changez de matériau ou d'aspect, une autorisation reste nécessaire, mais elle relève d'une procédure allégée dite d'acte d'impact limité, également sans architecte. Ces dispenses tombent en revanche dans certaines situations : zone de protection du patrimoine, bien inscrit à l'inventaire, ou zone d'aléa élevé d'inondation — ce dernier cas concerne notamment des quartiers de fond de vallée comme Chênée et Angleur. Le statut dépendant de l'adresse exacte, nous le vérifions auprès du service urbanisme avant le démarrage.",
      },
      {
        q: "Combien de temps dure une rénovation de toiture ?",
        a: "Pour une maison unifamiliale classique de la région, comptez généralement une à deux semaines de chantier effectif selon la surface, la complexité des raccords et l'état de la charpente découverte. La météo reste le principal facteur d'aléa : nous ne laissons jamais une toiture ouverte face à un risque d'averse.",
      },
      {
        q: "Puis-je habiter la maison pendant les travaux ?",
        a: "Oui, dans l'immense majorité des cas. Nous travaillons par zones et remettons le bâtiment hors d'eau chaque soir. Les nuisances sont surtout sonores en journée et concernent l'accès à la façade où se trouve l'échafaudage.",
      },
      {
        q: "Faut-il remplacer la charpente en même temps ?",
        a: "Rarement en totalité. Une fois la couverture déposée, nous inspectons les bois pièce par pièce : le plus souvent, quelques éléments seulement demandent un renforcement ou un remplacement individuel. À savoir si le cas se présente : en Wallonie, le remplacement d'une charpente sans modification du volume du bâtiment est dispensé de permis et ne requiert pas d'architecte.",
      },
    ],
    schemaName: "Rénovation de toiture",
  },

  {
    slug: "isolation-toiture",
    navLabel: "Isolation de toiture",
    title: "Isolation de toiture",
    tagline: "Le poste qui fait baisser la facture",
    h1: "Isolation de toiture et de combles",
    metaTitle: "Isolation Toiture à Liège | Prime jusqu'à 120 €/m²",
    metaDescription:
      "Isolation de toiture et de combles à Liège. Seul chantier exempté d'audit, prime jusqu'à 120 €/m². Régime clôturé au 30/09/2026.",
    image: "/img/isolation-toiture.jpg",
    imageAlt: "Pose d'isolant en laine minérale dans les combles d'une maison",
    primaryKeyword: "isolation de toiture",
    shortDescription: "Isolation des combles et de la toiture par l'intérieur ou par l'extérieur, éligible aux primes",
    highlights: [
      "Le poste de déperdition le plus important d'une maison non isolée",
      "Seule famille de travaux dispensée d'audit logement",
      "Dimensionnement pour atteindre R ≥ 5,00 m²K/W, seuil des primes",
      "Accompagnement complet pour le dossier de primes",
    ],
    sections: [
      {
        heading: "Pourquoi commencer par le toit",
        body: [
          "Dans une maison ancienne non isolée, la toiture est le premier poste de déperdition thermique, devant les murs et les châssis. La chaleur monte : c'est par le haut qu'elle s'échappe en priorité. C'est aussi le poste où le rapport entre le coût des travaux et l'économie obtenue est le plus favorable, ce qui explique que le dispositif wallon le dote plus généreusement que les autres.",
          "L'effet ne se limite pas à l'hiver. Une toiture correctement isolée retarde nettement la surchauffe des combles en été, ce qui change concrètement le confort des chambres situées sous le toit — souvent les pièces les plus pénibles des maisons de la région en période de canicule.",
        ],
      },
      {
        heading: "Le seuil à atteindre : R ≥ 5,00 m²K/W",
        body: [
          "Le dispositif wallon conditionne la prime à une résistance thermique minimale de 5,00 m²K/W. Cette valeur s'exprime en résistance et non en épaisseur, puisque l'épaisseur nécessaire dépend entièrement du matériau retenu.",
          "Un point décisif que beaucoup de propriétaires découvrent trop tard : l'isolant déjà en place ne compte pas dans le calcul. Vous devez atteindre 5,00 avec le seul isolant nouvellement posé. Une maison partiellement isolée dans les années 1990 ne part donc pas avec un acompte — c'est le nouvel apport qui est jugé.",
          "Attention également aux informations en circulation : plusieurs sites du secteur, y compris bien positionnés dans les résultats de recherche, annoncent encore un seuil de 4,5 m²K/W. Cette valeur est périmée et suivre cette indication fait refuser le dossier. Nous dimensionnons systématiquement sur le seuil réel.",
        ],
      },
      {
        heading: "Par l'intérieur ou par l'extérieur ?",
        body: [
          "L'isolation par l'intérieur, entre et sous les chevrons, est la solution la plus courante et la moins coûteuse. Elle se réalise sans toucher à la couverture, ce qui la rend pertinente quand votre toit est encore en bon état. Elle réduit en revanche légèrement le volume habitable des combles.",
          "L'isolation par l'extérieur, dite sarking, consiste à poser l'isolant au-dessus de la charpente, sous la nouvelle couverture. Elle supprime les ponts thermiques au droit des chevrons, préserve tout le volume intérieur et laisse la charpente apparente si vous le souhaitez. Elle suppose de déposer la couverture : c'est donc la solution à privilégier lorsque vous rénovez la toiture de toute façon.",
          "Si vos combles ne sont pas habités et ne le seront pas, la question ne se pose même pas : isoler le plancher des combles revient nettement moins cher, pour un résultat thermique équivalent voire meilleur puisque vous cessez de chauffer un volume perdu. C'est souvent la meilleure affaire du bâtiment.",
        ],
      },
      {
        heading: "L'étanchéité à l'air, le détail qui décide de tout",
        body: [
          "Un isolant très performant posé sans pare-vapeur continu ni traitement des jonctions perd une part importante de son efficacité réelle. L'air chaud et humide de l'habitation traverse alors l'isolant, se refroidit au contact des parties froides et y dépose sa condensation. À terme, cela dégrade l'isolant et peut atteindre la charpente.",
          "Nous accordons autant d'attention à la pose du pare-vapeur, au traitement des jonctions avec les murs, aux passages de conduits et aux raccords de fenêtres de toit qu'à l'épaisseur de l'isolant lui-même. C'est ce travail invisible qui distingue une isolation efficace d'une isolation seulement épaisse.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un audit logement avant les travaux ?",
        a: "Non, pas pour la toiture — et c'est une exception notable. La brochure officielle du dispositif wallon l'indique explicitement : si vous réalisez uniquement des travaux de toiture ou d'isolation du toit et des combles, l'audit logement n'est pas obligatoire. Aucune autre famille de travaux ne bénéficie de cette dispense, ce qui fait de l'isolation de toiture le chantier subventionné le plus simple à faire aboutir. Réserve importante : la réforme annoncée pour le 1er octobre 2026 prévoit un audit préalable obligatoire, ce qui supprimerait cet avantage.",
      },
      {
        q: "Quelle épaisseur d'isolant faut-il pour bénéficier des primes ?",
        a: "Le seuil est une résistance thermique de R ≥ 5,00 m²K/W, et non une épaisseur brute : l'épaisseur nécessaire dépend du matériau choisi. Un point décisif que beaucoup découvrent trop tard — l'isolant déjà en place ne compte pas dans le calcul. Vous devez atteindre 5,00 avec le seul isolant nouvellement posé. Attention : plusieurs sites du secteur annoncent encore 4,5 m²K/W, valeur périmée qui fait refuser les dossiers.",
      },
      {
        q: "Un isolant biosourcé donne-t-il droit à plus ?",
        a: "Oui. Le dispositif wallon majore le montant de base de 20 à 26 €/m² lorsque l'isolant est biosourcé, soit environ 30 % de prime supplémentaire, multiplicateur de revenus appliqué ensuite. Selon votre catégorie, l'écart devient significatif. Nous chiffrons les deux options pour que vous compariez le surcoût réel du matériau au supplément de prime.",
      },
      {
        q: "Jusqu'à quand puis-je bénéficier des primes ?",
        a: "Le régime actuel se clôture le 30 septembre 2026 : toute demande, facture de solde comprise, doit être introduite avant cette date. À partir du 1er octobre 2026, un dispositif de prêts aidés doit prendre le relais, ciblé sur les logements les moins performants et assorti d'un audit obligatoire. Si votre projet est mûr, il vaut mieux l'introduire maintenant.",
      },
    ],
    schemaName: "Isolation de toiture",
  },

  {
    slug: "toiture-plate",
    navLabel: "Toiture plate & étanchéité",
    title: "Toiture plate",
    tagline: "EPDM, roofing, étanchéité durable",
    h1: "Toiture plate et étanchéité",
    metaTitle: "Toiture Plate & Étanchéité EPDM à Liège",
    metaDescription:
      "Pose et rénovation de toiture plate à Liège : membrane EPDM, roofing bitumineux, isolation et évacuation des eaux. Garantie décennale.",
    image: "/img/toiture-plate-roofing.jpg",
    imageAlt: "Toiture plate étanchée en roofing bitumineux, avec relevés en périphérie et souche de cheminée traitée",
    primaryKeyword: "toiture plate",
    shortDescription: "Étanchéité de toiture plate en membrane EPDM ou roofing bitumineux, isolation comprise",
    highlights: [
      "Membrane EPDM monocouche, sans joint sur la plupart des surfaces",
      "Roofing bitumineux multicouche pour les configurations complexes",
      "Traitement complet des relevés, avaloirs et trop-pleins",
      "Isolation thermique intégrée à la complexe d'étanchéité",
    ],
    sections: [
      {
        heading: "Pourquoi les toitures plates fuient",
        body: [
          "Une toiture plate n'est jamais parfaitement plate : elle comporte une légère pente qui conduit l'eau vers les évacuations. Quand elle fuit, la cause est rarement la membrane en pleine surface. Ce sont les points singuliers qui lâchent : relevés contre un mur, passage d'avaloir, sortie de ventilation, jonction avec une façade, angle mal renforcé.",
          "La deuxième cause classique est l'évacuation. Un avaloir obstrué par des feuilles ou de la mousse transforme la toiture en bassin. L'eau stagnante sollicite la membrane en permanence, ajoute une charge considérable sur la structure et finit par trouver le moindre défaut. Avec plus de 140 jours de pluie par an à Liège, un trop-plein correctement positionné est une sécurité peu coûteuse qui évite beaucoup de dégâts.",
        ],
      },
      {
        heading: "EPDM ou roofing bitumineux",
        body: [
          "La membrane EPDM est un caoutchouc synthétique posé le plus souvent en une seule pièce sur les surfaces courantes, ce qui supprime les soudures en pleine surface — donc les points de faiblesse. Elle est très stable face aux ultraviolets et aux écarts de température, et sa durée de vie est longue lorsque les relevés sont soignés.",
          "Le roofing bitumineux, posé en plusieurs couches soudées, reste pertinent sur les toitures aux formes découpées, comportant de nombreux obstacles ou des raccords complexes, où travailler en lés soudés est plus sûr qu'essayer de faire épouser une grande membrane.",
          "Dans les deux cas, la qualité du support et le soin apporté aux relevés comptent davantage que le choix du matériau lui-même.",
        ],
      },
      {
        heading: "Toiture plate accessible ou végétalisée",
        body: [
          "Une toiture plate peut devenir une terrasse ou accueillir une végétalisation, à condition que la structure porteuse le permette. C'est le point à vérifier en premier : la charge d'une toiture végétalisée gorgée d'eau est significative, et celle d'une terrasse dépend de son usage.",
          "Sur le plan administratif, la mise en œuvre d'une toiture végétale sur une construction existante bénéficie en Wallonie d'une dispense de permis d'urbanisme. C'est la faisabilité structurelle, pas la démarche, qui constitue le vrai sujet — et nous vous le dirons franchement si la structure existante ne s'y prête pas.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une toiture plate en EPDM ?",
        a: "Une membrane EPDM correctement posée et entretenue a une durée de vie longue, largement supérieure à celle des anciennes étanchéités bitumineuses monocouches. Sa longévité réelle dépend surtout de l'exécution des relevés et de l'entretien des évacuations — deux points sur lesquels nous ne transigeons pas.",
      },
      {
        q: "Peut-on poser des panneaux solaires sur une toiture plate ?",
        a: "Oui, avec des supports lestés qui ne percent pas la membrane, ce qui préserve l'étanchéité. C'est même une configuration favorable : l'inclinaison et l'orientation des panneaux peuvent être optimisées librement, sans dépendre de la pente du toit. En Wallonie, la pose sur une toiture existante est dispensée de permis pour autant que le débordement et l'écart de pente restent dans les tolérances prévues.",
      },
      {
        q: "À quelle fréquence entretenir une toiture plate ?",
        a: "Un contrôle par an, et un nettoyage des avaloirs et des trop-pleins à l'automne après la chute des feuilles. C'est peu de chose comparé au coût d'une infiltration causée par une évacuation bouchée.",
      },
    ],
    schemaName: "Étanchéité de toiture plate",
  },

  {
    slug: "photovoltaique",
    navLabel: "Panneaux photovoltaïques",
    title: "Photovoltaïque",
    tagline: "Posé par des couvreurs, pas des poseurs",
    h1: "Panneaux photovoltaïques en province de Liège",
    metaTitle: "Panneaux Photovoltaïques à Liège | Pose par Couvreur",
    metaDescription:
      "Panneaux photovoltaïques à Liège et Herstal, posés par des couvreurs. Étanchéité maîtrisée, dispense de permis d'urbanisme.",
    image: "/img/photovoltaique-toiture.jpg",
    imageAlt: "Installation photovoltaïque Lazo achevée sur une toiture en tuiles, camionnette de l'entreprise devant la maison",
    primaryKeyword: "panneaux photovoltaïques",
    shortDescription: "Étude, pose et raccordement de panneaux photovoltaïques, avec étanchéité garantie",
    highlights: [
      "Posé par des couvreurs : les points de fixation restent étanches",
      "Contrôle de l'état de la toiture avant toute installation",
      "Dimensionnement basé sur votre consommation réelle",
      "Pose dispensée de permis d'urbanisme sur toiture existante",
    ],
    sections: [
      {
        heading: "L'avantage de faire poser par un couvreur",
        body: [
          "Une installation photovoltaïque, c'est plusieurs dizaines de points de fixation qui traversent la couverture. Chacun est une entrée d'eau potentielle. Les infiltrations qui apparaissent un ou deux ans après une pose viennent presque toujours de là, et elles sont pénibles à traiter parce qu'il faut démonter une partie du champ de panneaux pour y accéder.",
          "Nous abordons l'installation comme un travail de couverture avant d'être un travail d'électricité : crochets adaptés au type de couverture, reprise correcte des ardoises ou des tuiles autour des fixations, respect des recouvrements. C'est la différence entre une pose qui tient trente ans et une pose qui fuit.",
          "Deuxième réflexe : nous regardons l'état du toit avant de proposer quoi que ce soit. Si votre couverture arrive en fin de vie, poser des panneaux dessus revient à devoir tout démonter dans cinq ans. Dans ce cas, nous vous proposerons de coupler rénovation et installation — ou de commencer par la toiture seule.",
        ],
      },
      {
        heading: "Dimensionner sur votre consommation réelle",
        body: [
          "Le cadre de rémunération de l'autoproduction en Wallonie a beaucoup évolué, et l'équilibre économique d'une installation dépend désormais fortement de la part d'électricité que vous consommez directement, au moment où elle est produite, plutôt que de ce que vous injectez sur le réseau. Le tarif prosumer reste par ailleurs en vigueur en 2026.",
          "Cela change la manière de dimensionner. Surdimensionner une installation pour injecter un maximum n'est plus la stratégie qu'elle a pu être. Nous partons de vos relevés de consommation réels et de vos habitudes — présence en journée, chauffe-eau, pompe à chaleur, véhicule électrique — pour proposer une puissance cohérente.",
          "Sur le potentiel brut, la région est correctement placée : l'IRM relève à Liège une irradiation de l'ordre de 1 010 kWh/m² par an. Une orientation sud est optimale, mais est-ouest reste très pertinent, notamment parce que la production s'étale mieux sur la journée — ce qui favorise justement l'autoconsommation.",
        ],
      },
      {
        heading: "Démarches : plus simple qu'on ne le croit",
        body: [
          "La pose de panneaux sur une toiture existante bénéficie en Wallonie d'une dispense de permis d'urbanisme, sans limite de puissance ni de surface, pour autant que le débordement et l'écart de pente restent dans les tolérances prévues. La batterie de stockage associée est également dispensée.",
          "Ces dispenses tombent toutefois dans certaines situations : zone de protection du patrimoine, bien inscrit à l'inventaire, ou zone d'aléa élevé d'inondation. Nous vérifions le statut de votre adresse avant de vous annoncer quoi que ce soit.",
          "Un point à vérifier de votre côté, y compris auprès des entreprises qui vous démarchent : l'accès à certains mécanismes de soutien est conditionné au recours à un installateur disposant de la certification RESCERT. Demandez-en la preuve avant de signer.",
        ],
      },
    ],
    faq: [
      {
        q: "Ma toiture est-elle adaptée au photovoltaïque ?",
        a: "Les critères sont l'orientation, l'inclinaison, les ombres portées (souche de cheminée, arbres, bâtiment voisin), la surface disponible et surtout l'état de la couverture et la capacité de la charpente. Une orientation sud est optimale, mais est-ouest reste très pertinent, notamment parce que la production s'étale mieux sur la journée — ce qui favorise l'autoconsommation.",
      },
      {
        q: "Faut-il un permis pour poser des panneaux solaires en Wallonie ?",
        a: "Sur une toiture existante, non : la pose est dispensée de permis d'urbanisme, sans limite de puissance ni de surface, pour autant que le débordement et l'écart de pente restent dans les tolérances prévues. La batterie associée l'est également. Cette dispense tombe en revanche en zone de protection du patrimoine, pour un bien inscrit à l'inventaire, ou en zone d'aléa élevé d'inondation.",
      },
      {
        q: "Existe-t-il une prime régionale pour le photovoltaïque ?",
        a: "À ce jour, il n'existe pas de prime régionale wallonne pour l'installation de panneaux photovoltaïques ni pour une batterie de stockage — le photovoltaïque relève d'un cadre distinct de celui des primes à la rénovation. Méfiez-vous des installateurs qui laissent entendre le contraire.",
      },
      {
        q: "Une batterie est-elle rentable ?",
        a: "Cela dépend entièrement de votre profil de consommation et du prix auquel vous achetez et revendez l'électricité. Une batterie augmente l'autoconsommation mais représente un investissement conséquent avec sa propre durée de vie. Nous faisons le calcul avec vos chiffres et nous vous dirons si le compte n'y est pas.",
      },
    ],
    schemaName: "Installation de panneaux photovoltaïques",
  },

  {
    slug: "bardage",
    navLabel: "Bardage",
    title: "Bardage",
    tagline: "Bois, composite, fibre-ciment, ardoise, zinc",
    h1: "Bardage de façade en province de Liège",
    metaTitle: "Bardage de Façade à Liège | Bois, Composite, Zinc",
    metaDescription:
      "Bardage à Liège et Herstal : bois, composite, fibre-ciment ou zinc sur ossature ventilée. Combinable avec l'isolation par l'extérieur.",
    image: "/img/bardage-facade.jpg",
    imageAlt: "Pignon de maison entièrement habillé d'un bardage en ardoises posé par Lazo, en province de Liège",
    primaryKeyword: "bardage",
    shortDescription:
      "Pose de bardage bois, composite, fibre-ciment ou zinc sur ossature ventilée, avec ou sans isolation",
    highlights: [
      "Bois, composite, fibre-ciment ou zinc selon l'exposition et le budget",
      "Ossature avec lame d'air ventilée — le détail qui fait la durabilité",
      "Combinable avec une isolation par l'extérieur en une seule opération",
      "Traitement soigné de la jonction avec la toiture et des encadrements",
    ],
    sections: [
      {
        heading: "Pourquoi un bardage plutôt qu'un enduit",
        body: [
          "Le bardage se pose sur une ossature qui ménage une lame d'air ventilée entre le parement et le mur. Cette lame d'air est l'essentiel du principe : elle évacue l'humidité qui traverse la paroi et empêche l'eau de pluie battante d'atteindre la maçonnerie. Un enduit, lui, est collé au support et ne pardonne pas les remontées d'humidité.",
          "Dans une région qui compte plus de 140 jours de pluie par an et pas de véritable saison sèche, cette différence n'est pas théorique. Le bardage ventilé tolère nettement mieux les façades exposées, en particulier celles orientées au sud-ouest, d'où viennent les vents dominants et donc la pluie battante.",
          "Deuxième avantage concret : il se répare par éléments. Une lame abîmée se remplace sans reprendre toute la façade, là où un enduit fissuré impose une intervention sur une surface bien plus large.",
        ],
      },
      {
        heading: "Quel matériau choisir",
        body: [
          "Le bois donne le rendu le plus chaleureux et reste le choix le plus courant. Il demande un entretien périodique si vous tenez à conserver sa teinte d'origine ; laissé naturel, il grise progressivement, ce qui est un vieillissement normal et non un défaut. Le mélèze et le red cedar supportent bien notre climat.",
          "Le composite et le fibre-ciment ne demandent pratiquement pas d'entretien et conservent leur teinte. Le fibre-ciment offre une gamme de coloris très large et un aspect mat qui s'accorde bien aux architectures contemporaines. C'est souvent le meilleur compromis quand l'entretien est un critère de décision.",
          "Le zinc, enfin, permet de prolonger la couverture sur la façade et de traiter l'ensemble dans un même matériau. C'est le choix le plus durable, et celui qui a le plus de sens quand la toiture est elle-même en zinc.",
        ],
      },
      {
        heading: "Bardage et isolation : à faire ensemble",
        body: [
          "L'ossature du bardage peut recevoir un isolant, ce qui transforme l'opération en isolation par l'extérieur. Vous traitez alors les ponts thermiques des planchers et des linteaux, sans réduire la surface habitable, et vous placez la maçonnerie du côté chaud — ce qui améliore sensiblement le confort d'été.",
          "Mener les deux chantiers séparément n'a guère de sens : l'échafaudage serait monté deux fois, et la jonction entre l'isolant de façade et celui de toiture doit être traitée en continu sous peine de laisser un pont thermique au niveau du débord de toit. C'est précisément le genre de raccord que nous maîtrisons.",
          "Attention en revanche à l'urbanisme : poser un bardage modifie l'aspect extérieur du bâtiment et requiert donc généralement une autorisation. Les contraintes sont renforcées en zone de protection du patrimoine. Nous prenons contact avec le service urbanisme de votre commune avant le chiffrage définitif.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un permis d'urbanisme pour poser un bardage ?",
        a: "Dans la plupart des cas oui, puisque l'aspect extérieur et le gabarit du bâtiment sont modifiés. Les contraintes sont renforcées en zone de protection du patrimoine, pour un bien inscrit à l'inventaire, ou en zone d'aléa élevé d'inondation. Nous cadrons ce point avec le service urbanisme de votre commune avant de figer le devis, plutôt que de découvrir la contrainte une fois les matériaux commandés.",
      },
      {
        q: "Un bardage bois demande-t-il beaucoup d'entretien ?",
        a: "Cela dépend entièrement du rendu que vous souhaitez. Si vous acceptez que le bois grise naturellement, l'entretien est quasi nul : c'est un vieillissement esthétique, pas une dégradation. Si vous tenez à conserver la teinte d'origine, comptez une application de saturateur tous les quelques années, la fréquence dépendant de l'exposition de la façade. Le composite et le fibre-ciment évitent cette question.",
      },
      {
        q: "Peut-on poser un bardage sur une façade en brique existante ?",
        a: "Oui, c'est même le cas le plus fréquent. L'ossature se fixe mécaniquement dans la maçonnerie, avec une lame d'air ventilée entre le mur et le parement. Nous vérifions au préalable l'état du support et sa capacité à recevoir les fixations, ainsi que la reprise des débords de toiture, des seuils et des descentes d'eau, qui doivent être adaptés à la nouvelle épaisseur.",
      },
    ],
    schemaName: "Pose de bardage de façade",
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
