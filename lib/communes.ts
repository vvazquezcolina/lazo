/**
 * Communes desservies.
 *
 * ⚠️ RÈGLE DE RÉDACTION — À RESPECTER EN CAS DE MODIFICATION
 *
 * Il n'existe AUCUNE statistique publique du parc de couvertures par commune
 * en Wallonie (vérifié : la donnée n'existe pas). Toute phrase du type
 * « à X, les toitures sont majoritairement en ardoise de tel âge » serait
 * une invention vraisemblable — le pire genre d'erreur, parce qu'elle est
 * crédible et invérifiable.
 *
 * Le contenu ci-dessous sépare donc strictement deux registres :
 *
 *   `context`   — faits vérifiables : géographie, relief, climat (IRM),
 *                 morphologie urbaine observable, histoire de la construction
 *                 en Belgique. Rédigés à l'indicatif.
 *
 *   `observed`  — ce que l'entreprise rencontre sur ses chantiers. Rédigé à
 *                 la première personne, présenté comme une expérience et non
 *                 comme une statistique.
 *                 ⚠️ À FAIRE VALIDER PAR L'ENTREPRISE AVANT MISE EN LIGNE.
 *                 Si un point ne correspond pas à votre pratique réelle,
 *                 supprimez-le : une observation de terrain fausse se
 *                 retourne contre vous dès la première visite.
 */

export type Commune = {
  slug: string
  name: string
  postalCode: string
  /** Sections et villages — génère la longue traîne locale */
  sections: string[]
  /** Communes limitrophes (slugs) — maillage interne géographique */
  neighbors: string[]
  intro: string
  /** Faits vérifiables : géographie, relief, climat, morphologie urbaine */
  context: string[]
  /** Observations de chantier — à valider par l'entreprise */
  observed: string[]
  focus: string
}

export const COMMUNES: Commune[] = [
  {
    slug: "liege",
    name: "Liège",
    postalCode: "4000",
    sections: ["Outremeuse", "Sainte-Walburge", "Cointe", "Grivegnée", "Bressoux", "Angleur", "Chênée", "Sclessin", "Jupille-sur-Meuse"],
    neighbors: ["herstal", "ans", "saint-nicolas", "beyne-heusay", "seraing", "fleron"],
    intro:
      "Chef-lieu de province au tissu dense et au relief marqué, Liège combine des contraintes d'accès de chantier et des prescriptions d'urbanisme qu'on ne rencontre pas en périphérie.",
    context: [
      "Liège est bâtie de part et d'autre de la Meuse, entre des coteaux qui montent nettement de chaque côté de la vallée. Ce relief crée des expositions très différentes d'un quartier à l'autre : les hauteurs de Cointe et de Sainte-Walburge sont exposées de plein fouet, tandis que certains fonds de vallée restent abrités. Les vents dominants viennent du quadrant sud-ouest, qui concentre à la fois la plus grande part des occurrences et les rafales les plus fortes relevées à Bierset. Ce sont donc les versants et les rives orientés sud-ouest qui subissent les sollicitations les plus sévères.",
      "Le centre-ville et les quartiers anciens comme Outremeuse se caractérisent par un habitat mitoyen serré, en parcelles étroites et hautes, directement en front de rue. Cette morphologie a des conséquences concrètes et systématiques : l'accès au toit passe presque toujours par un échafaudage monté en façade rue, ce qui suppose une autorisation d'occupation du domaine public auprès de la Ville. Nous intégrons cette démarche au chantier plutôt que de vous la laisser sur les bras.",
      "La mitoyenneté crée des situations juridiques et techniques particulières : noues entre deux maisons accolées, souches de cheminée partagées, corniches continues d'un bâtiment à l'autre. Une infiltration chez vous peut prendre sa source sur la toiture voisine, ce qui suppose un accord entre propriétaires avant toute intervention.",
      "Une partie du territoire communal relève par ailleurs de périmètres où l'urbanisme encadre l'aspect des toitures, et certains quartiers de fond de vallée comme Chênée et Angleur sont concernés par l'aléa d'inondation — un classement en zone d'aléa élevé retire plusieurs des dispenses de permis normalement applicables aux travaux de toiture. Le statut dépend de l'adresse exacte : nous le vérifions auprès du service urbanisme avant de figer un devis.",
    ],
    observed: [
      "Sur le bâti ancien du centre, nous rencontrons fréquemment des couvertures posées sans écran sous-toiture — une disposition qui ne s'est généralisée en Belgique que tardivement. Quand c'est le cas, le moindre élément déplacé laisse l'eau atteindre directement la charpente, et une réparation ponctuelle ne règle pas le problème de fond.",
      "Les raccords de zinguerie contre les souches de cheminée et dans les noues mitoyennes sont, de loin, l'origine la plus fréquente des infiltrations que nous diagnostiquons en ville.",
    ],
    focus: "Bâti mitoyen dense, accès de chantier contraint, urbanisme et aléa d'inondation",
  },
  {
    slug: "herstal",
    name: "Herstal",
    postalCode: "4040",
    sections: ["Vottem", "Milmort", "Liers", "Pontisse", "Rhées"],
    neighbors: ["liege", "oupeye", "juprelle", "vise", "blegny"],
    intro:
      "Commune de la basse Meuse au territoire contrasté : noyaux urbains anciens le long des axes historiques, quartiers résidentiels plus aérés vers Vottem, Milmort et Liers, et zones d'activité étendues.",
    context: [
      "Herstal s'étend de la vallée mosane vers le plateau, ce qui produit des situations d'exposition très différentes selon le secteur. Les parties hautes et dégagées, vers Milmort et Liers, sont nettement plus exposées au vent que les rues encaissées du centre. Comme partout dans le bassin liégeois, les vents dominants viennent du sud-ouest.",
      "Le territoire communal comprend d'importantes zones d'activité économique, dont le parc des Hauts-Sarts. On y trouve des bâtiments à toiture plate de grande portée, dont la problématique n'a rien à voir avec celle d'une maison unifamiliale : l'enjeu s'y déplace vers l'étanchéité de membrane, le dimensionnement des évacuations d'eaux pluviales et l'accessibilité pour l'entretien.",
      "Le climat de la région est marqué par une pluviométrie répartie sur toute l'année — l'IRM relève à Liège 882 mm annuels et plus de 142 jours de pluie — sans véritable saison sèche, et près de 60 jours de gel par an. Cette combinaison humidité permanente et cycles gel-dégel est le principal facteur de vieillissement des couvertures, quel que soit le matériau.",
    ],
    observed: [
      "Dans le bâti ancien mitoyen du centre, nous trouvons régulièrement des couvertures sans écran sous-toiture, avec une charpente directement exposée dès qu'un élément se déplace.",
      "Dans les quartiers pavillonnaires, nous intervenons souvent sur des couvertures qui arrivent en fin de premier cycle. Nous attirons l'attention sur un point : les tuiles en béton deviennent poreuses en vieillissant et se gélivent, ce qui rend un nettoyage agressif particulièrement destructeur sur ce type de matériau.",
      "Ces mêmes quartiers, avec leurs versants réguliers et dégagés, sont ceux où nous dimensionnons le plus facilement une installation photovoltaïque — à condition de vérifier d'abord que la couverture a devant elle les années qui justifient l'investissement.",
    ],
    focus: "Territoire contrasté vallée-plateau, toitures plates en zone d'activité, gel-dégel",
  },
  {
    slug: "oupeye",
    name: "Oupeye",
    postalCode: "4680",
    sections: ["Haccourt", "Hermalle-sous-Argenteau", "Heure-le-Romain", "Houtain-Saint-Siméon", "Vivegnis", "Hermée"],
    neighbors: ["herstal", "vise", "juprelle"],
    intro:
      "Commune de la basse Meuse organisée en plusieurs noyaux villageois distincts plutôt qu'autour d'un centre unique.",
    context: [
      "Oupeye se compose de villages nettement séparés — Haccourt, Hermalle-sous-Argenteau, Heure-le-Romain, Houtain-Saint-Siméon, Vivegnis, Hermée — chacun avec son noyau ancien et ses extensions résidentielles. Cette dispersion signifie qu'un chantier peut se dérouler dans un contexte franchement rural à quelques kilomètres d'un autre en tissu plus dense.",
      "Le territoire est globalement dégagé, entre plaine mosane et plateau. Cette absence d'obstacles expose directement les toitures aux vents dominants de sud-ouest, en particulier les pignons, les rives et les faîtages des maisons isolées, qui ne bénéficient d'aucune protection du bâti voisin.",
      "La commune est limitrophe des Pays-Bas et occupe une position de plaine alluviale sur une partie de son territoire, ce qui appelle une attention particulière au dimensionnement des évacuations d'eaux pluviales lors des épisodes intenses.",
    ],
    observed: [
      "Sur les fermes et maisons anciennes des noyaux villageois, nous rencontrons souvent des charpentes traditionnelles de bonne facture qu'il vaut mieux diagnostiquer pièce par pièce et renforcer que remplacer intégralement par précaution — le surcoût d'une dépose totale non justifiée est considérable.",
      "Sur les constructions plus récentes, aux volumes simples et bien orientés, nous proposons fréquemment de coupler réfection de couverture, isolation et pose de panneaux : un seul échafaudage, une seule immobilisation, et une enveloppe traitée de façon cohérente.",
      "Nous contrôlons systématiquement la fixation des rives et des faîtières dans le secteur : ce sont les premiers éléments à céder lors des coups de vent.",
    ],
    focus: "Villages dispersés, exposition au vent sur terrain dégagé, évacuation des eaux",
  },
  {
    slug: "ans",
    name: "Ans",
    postalCode: "4430",
    sections: ["Alleur", "Loncin", "Xhendremael"],
    neighbors: ["liege", "saint-nicolas", "awans", "juprelle", "grace-hollogne"],
    intro:
      "Commune de plateau immédiatement à l'ouest de Liège, où le tissu dense de la première couronne cède progressivement la place à la Hesbaye agricole.",
    context: [
      "Ans occupe une position de plateau qui domine la vallée mosane. Ce dégagement l'expose davantage au vent que les communes de fond de vallée : les toitures y sont sollicitées plus régulièrement, en particulier celles des maisons de tête de rangée, qui perdent la protection latérale dont bénéficient leurs voisines.",
      "La morphologie change nettement d'est en ouest. Le long des axes historiques vers Alleur et Loncin, le bâti est mitoyen et continu, avec les contraintes qui en découlent : corniches partagées, souches mitoyennes, noues communes. Vers Xhendremael, le caractère devient franchement rural et les parcelles s'élargissent.",
      "L'accessibilité des chantiers y est globalement meilleure qu'en centre-ville de Liège, même sur le bâti mitoyen : le recul en façade et les possibilités de stationnement simplifient l'installation de l'échafaudage, ce qui se répercute directement sur le coût logistique d'une intervention.",
    ],
    observed: [
      "Sur le mitoyen ancien, nous retrouvons les mêmes pathologies qu'en ville — sous-toiture absente ou dégradée, raccords de zinguerie fatigués — mais dans des conditions d'accès nettement plus favorables.",
      "Sur les quartiers résidentiels d'après-guerre, la géométrie simple des toitures se prête bien à une opération couplée réfection plus isolation, y compris par l'extérieur.",
    ],
    focus: "Plateau exposé au vent, transition mitoyen-rural, accès de chantier favorable",
  },
  {
    slug: "seraing",
    name: "Seraing",
    postalCode: "4100",
    sections: ["Jemeppe-sur-Meuse", "Ougrée", "Boncelles", "Le Val-Saint-Lambert"],
    neighbors: ["liege", "grace-hollogne", "saint-nicolas"],
    intro:
      "Ancienne commune sidérurgique de la vallée mosane, au territoire nettement partagé entre fond de vallée dense et hauteurs résidentielles.",
    context: [
      "Seraing s'est développée autour de son industrie sidérurgique le long de la Meuse, ce qui a produit un habitat ouvrier construit en rangées serrées dans la vallée. Ces maisons étroites partagent murs mitoyens, corniches et souvent souches de cheminée : une toiture n'y est pas un objet isolé, et intervenir sans tenir compte des mitoyens revient souvent à déplacer le problème d'une maison à l'autre.",
      "Les hauteurs, notamment vers Boncelles, présentent une morphologie radicalement différente : parcelles larges, maisons quatre façades, toitures dégagées. L'écart d'exposition au vent et de facilité d'accès entre le fond de vallée et le plateau est, dans cette commune, particulièrement marqué.",
      "Le relief de vallée encaissée crée des versants nord adossés au coteau qui reçoivent peu de soleil direct. Avec 1 545 heures d'ensoleillement annuel à Liège seulement, réparties sur une année sans saison sèche, ces versants sèchent lentement — condition idéale pour le développement des mousses et des lichens.",
    ],
    observed: [
      "Sur le bâti ouvrier de la vallée, nous découvrons régulièrement des couvertures composites, où plusieurs générations de réparations menées avec les moyens du moment se superposent. Le relevé y prend plus de temps, et nous préférons le faire correctement plutôt que de chiffrer à l'aveugle.",
      "Sur les hauteurs, les projets d'isolation par l'extérieur et de photovoltaïque se déploient sans les difficultés d'accès rencontrées en bas.",
    ],
    focus: "Rangées ouvrières mitoyennes, réparations superposées, versants nord humides",
  },
  {
    slug: "saint-nicolas",
    name: "Saint-Nicolas",
    postalCode: "4420",
    sections: ["Montegnée", "Tilleur"],
    neighbors: ["liege", "ans", "seraing", "grace-hollogne"],
    intro:
      "Petite commune très densément bâtie de la première couronne liégeoise, au tissu presque intégralement mitoyen.",
    context: [
      "Saint-Nicolas compte parmi les communes les plus denses de la province, sur un territoire restreint. Le bâti est presque intégralement mitoyen, en parcelles étroites alignées en front de rue, héritage direct de l'expansion industrielle du bassin.",
      "Cette densité a une conséquence pratique dominante : l'accès. Peu de recul en façade, jardins étroits à l'arrière, stationnement tendu. L'installation du chantier doit être anticipée et la durée d'occupation de la voirie fait partie des éléments à cadrer dès le devis — c'est ici un poste de coût réel, pas un détail.",
      "La mitoyenneté généralisée limite par ailleurs les solutions techniques disponibles : l'isolation par l'extérieur se heurte à l'alignement des façades et à l'absence de débord possible, ce qui oriente naturellement vers des solutions par l'intérieur.",
    ],
    observed: [
      "Le parc étant très homogène, les pathologies se ressemblent fortement d'une maison à l'autre : une visite dans une rue nous renseigne beaucoup sur ce que nous trouverons dans la suivante.",
      "Quand les combles ne sont pas habités et ne le seront pas, nous orientons vers l'isolation du plancher des combles plutôt que des rampants : à résultat thermique équivalent ou meilleur, c'est nettement moins cher.",
    ],
    focus: "Densité mitoyenne extrême, accès de chantier contraint, isolation par l'intérieur",
  },
  {
    slug: "fleron",
    name: "Fléron",
    postalCode: "4620",
    sections: ["Magnée", "Retinne", "Romsée"],
    neighbors: ["liege", "beyne-heusay", "soumagne", "blegny"],
    intro:
      "Commune de l'entrée du plateau de Herve, à l'est de Liège, où l'habitat s'aère nettement par rapport à la couronne liégeoise.",
    context: [
      "Fléron marque le passage vers le plateau de Herve. L'habitat y est sensiblement plus aéré qu'en première couronne : maisons quatre façades et parcelles larges dominent, ce qui simplifie considérablement l'organisation des chantiers — échafaudage sur terrain privé, zone de stockage disponible, pas d'occupation de voirie à négocier.",
      "L'altitude et le dégagement du plateau se paient en conditions plus rudes qu'en vallée. À l'échelle de la région, l'IRM relève près de 60 jours de gel et plus de 16 jours de neige par an à Liège, et le plateau se situe dans la fourchette haute de ces valeurs. Les cycles gel-dégel constituent le principal mécanisme de vieillissement des couvertures : l'eau retenue dans un matériau poreux gèle, se dilate et fait éclater la matière.",
      "Avec une pluviométrie annuelle élevée et sans saison sèche, combinée à un ensoleillement limité, les versants nord et nord-est du plateau restent humides une grande partie de l'année.",
    ],
    observed: [
      "Le développement de mousse est particulièrement marqué sur les versants nord du plateau. Un point à connaître avant de confier ce nettoyage à quelqu'un : la basse pression prolonge la vie d'une couverture, la haute pression la raccourcit en emportant la couche superficielle de l'ardoise.",
      "Dans les noyaux anciens de Magnée et Retinne, nous diagnostiquons régulièrement des charpentes traditionnelles qui méritent d'être conservées et renforcées plutôt que déposées.",
    ],
    focus: "Entrée du plateau de Herve, gel-dégel marqué, mousse sur versants nord",
  },
  {
    slug: "vise",
    name: "Visé",
    postalCode: "4600",
    sections: ["Argenteau", "Cheratte", "Lanaye", "Lixhe", "Richelle"],
    neighbors: ["oupeye", "herstal", "blegny"],
    intro:
      "Commune mosane du nord de la province, à cheval sur la vallée et ses coteaux, avec un centre ancien et plusieurs villages de caractère.",
    context: [
      "Visé s'organise le long de la Meuse, entre plaine alluviale et coteaux marqués. Cette configuration crée des expositions très contrastées à faible distance : un versant adossé au coteau et un versant ouvert sur la vallée ne vieillissent pas au même rythme, même sur deux maisons voisines.",
      "Le centre ancien et les noyaux villageois d'Argenteau, Cheratte et Richelle comportent du bâti de caractère. Sur ce type de bien, le choix du matériau et de la teinte de couverture engage l'aspect du bâtiment, et certaines situations relèvent de prescriptions patrimoniales. Un classement, une inscription à l'inventaire ou une zone de protection retire les dispenses de permis normalement applicables : c'est à vérifier adresse par adresse avant toute commande de matériau.",
      "La commune est frontalière des Pays-Bas et sa position en vallée mosane appelle une attention au dimensionnement des évacuations lors des épisodes pluvieux intenses.",
    ],
    observed: [
      "Sur le bâti ancien, nous privilégions systématiquement une réponse cohérente avec l'existant plutôt qu'un remplacement par le matériau le plus économique — sur ces bâtiments, un choix inadapté se voit et se paie à la revente.",
      "Nous vérifions le statut urbanistique auprès du service communal avant de figer un devis : découvrir une contrainte patrimoniale après commande des matériaux est une situation que nous nous efforçons de ne jamais créer.",
    ],
    focus: "Bâti de caractère et prescriptions patrimoniales, expositions contrastées",
  },
  {
    slug: "beyne-heusay",
    name: "Beyne-Heusay",
    postalCode: "4610",
    sections: ["Bellaire", "Queue-du-Bois"],
    neighbors: ["liege", "fleron", "soumagne"],
    intro:
      "Petite commune de transition entre la couronne liégeoise dense et le plateau de Herve, au tissu mixte.",
    context: [
      "Beyne-Heusay occupe une position charnière. Le bâti se resserre du côté de Liège et s'aère nettement vers Bellaire et Queue-du-Bois. Les deux logiques de chantier — mitoyenne et quatre façades — coexistent donc sur un territoire réduit, parfois dans la même rue.",
      "La commune se situe dans la zone de transition vers le plateau, avec une exposition et des conditions intermédiaires entre la vallée mosane et les hauteurs du pays de Herve.",
    ],
    observed: [
      "Nous intervenons beaucoup sur des maisons dont l'isolation de toiture est soit inexistante, soit réduite à une épaisseur devenue très insuffisante au regard des exigences actuelles. Ce sont de bons candidats à une opération couplée couverture plus isolation, d'autant que le seuil technique à atteindre pour les aides ne s'apprécie que sur l'isolant nouvellement posé.",
      "Le développement de mousse y est plus marqué que dans la vallée mosane, sans atteindre les niveaux du haut plateau.",
    ],
    focus: "Tissu mixte de transition, isolation insuffisante, chantiers couplés",
  },
  {
    slug: "grace-hollogne",
    name: "Grâce-Hollogne",
    postalCode: "4460",
    sections: ["Grâce-Berleur", "Hollogne-aux-Pierres", "Horion-Hozémont", "Velroux"],
    neighbors: ["ans", "saint-nicolas", "seraing", "awans"],
    intro:
      "Commune étendue à l'ouest de Liège, associant noyaux anciens, quartiers résidentiels, secteurs ruraux hesbignons et zone aéroportuaire.",
    context: [
      "Grâce-Hollogne couvre un territoire nettement plus vaste et plus varié que ses voisines de première couronne : noyaux anciens à bâti mitoyen à Grâce-Berleur et Hollogne-aux-Pierres, quartiers résidentiels plus récents, et secteurs franchement ruraux vers Horion-Hozémont et Velroux.",
      "La partie ouest, sur le plateau hesbignon, est très dégagée. Les toitures y sont directement exposées aux vents dominants de sud-ouest, sans protection du relief ni du bâti voisin. C'est un facteur à prendre au sérieux dans le choix du mode de fixation : sur ces expositions, la façon dont la couverture et les habillages de rive sont fixés compte autant que le matériau lui-même.",
      "La commune accueille l'aéroport de Liège sur son territoire. Une partie du bâti communal est donc concernée par l'exposition au bruit aérien, ce qui donne à l'isolation acoustique de toiture une importance particulière. Les dispositifs applicables aux zones exposées relèvent d'une réglementation propre, distincte des aides énergétiques classiques : si votre habitation est concernée, nous vous orientons vers le service compétent plutôt que de vous en donner une lecture approximative.",
    ],
    observed: [
      "Sur le plateau, nous renforçons systématiquement les fixations en rive et en faîtage. C'est là que nous constatons le plus de désordres après les épisodes venteux.",
      "Les grandes toitures agricoles de la partie ouest présentent un potentiel photovoltaïque sensiblement supérieur à celui d'une toiture pavillonnaire, à condition que la charpente et la couverture le permettent.",
    ],
    focus: "Plateau très exposé, fixations renforcées, isolation acoustique en zone aéroportuaire",
  },
  {
    slug: "awans",
    name: "Awans",
    postalCode: "4340",
    sections: ["Othée", "Villers-l'Évêque", "Fooz", "Hognoul"],
    neighbors: ["ans", "juprelle", "grace-hollogne"],
    intro:
      "Commune hesbignonne au caractère rural affirmé, faite de villages agricoles et de développements résidentiels récents.",
    context: [
      "Awans appartient pleinement à la Hesbaye : plateau agricole largement ouvert, villages regroupés, horizon dégagé sur de longues distances. Cette configuration produit l'une des expositions au vent les plus fortes du secteur, sans aucun obstacle de relief ou de bâti pour la freiner. Les vents dominants du quadrant sud-ouest y balaient les toitures sans rencontrer de protection.",
      "Le bâti villageois d'Othée, Villers-l'Évêque et Fooz comporte des fermes en carré et des bâtiments agricoles, caractérisés par de grandes surfaces de toiture et des charpentes de forte portée. Techniquement et budgétairement, ce sont des chantiers d'une autre nature qu'une maison unifamiliale : l'état de la charpente y conditionne le budget bien davantage que le choix du matériau de couverture.",
      "Ces mêmes grandes surfaces, quand elles sont saines et bien orientées, représentent un potentiel de production photovoltaïque sans commune mesure avec celui d'une toiture pavillonnaire. L'irradiation relevée à Liège est de l'ordre de 1 010 kWh/m² par an, ce qui rend le calcul intéressant dès lors que la surface disponible est importante.",
    ],
    observed: [
      "Sur les corps de ferme, nous commençons toujours par un examen sérieux de la charpente avant de parler couverture : c'est ce poste qui fait basculer un budget, et une dépose intégrale décidée par précaution coûte très cher pour rien.",
      "L'exposition étant maximale, nous portons une attention particulière au mode de fixation et aux habillages de rive.",
    ],
    focus: "Exposition maximale au vent, bâtiments agricoles de grande portée, potentiel solaire",
  },
  {
    slug: "juprelle",
    name: "Juprelle",
    postalCode: "4450",
    sections: ["Paifve", "Slins", "Wihogne", "Fexhe-Slins", "Villers-Saint-Siméon", "Voroux-lez-Liers", "Lantin"],
    neighbors: ["ans", "awans", "herstal", "oupeye"],
    intro:
      "Commune rurale du nord-ouest liégeois, composée de plusieurs villages hesbignons dispersés sur le plateau.",
    context: [
      "Juprelle est une commune de villages : l'habitat se répartit entre plusieurs noyaux distincts plutôt que de se concentrer en un centre unique. Chacun conserve un caractère rural marqué, avec des fermes, des dépendances agricoles et un bâti traditionnel en brique.",
      "Comme dans toute la Hesbaye liégeoise, l'exposition au vent sur le plateau est forte et constante, sans obstacle pour l'atténuer. Les toitures de grande surface des bâtiments agricoles y sont particulièrement sollicitées, en rive et en faîtage.",
      "La dispersion de l'habitat implique des accès parfois étroits, par des voiries de campagne peu adaptées aux véhicules de chantier lourds. C'est un paramètre logistique que nous évaluons lors de la visite, car il influence réellement l'organisation et le coût de l'intervention.",
    ],
    observed: [
      "Sur le patrimoine bâti ancien de ces villages, nous plaidons régulièrement pour la conservation et le renforcement des charpentes traditionnelles plutôt que leur remplacement. Un examen pièce par pièce coûte infiniment moins cher qu'une dépose intégrale.",
      "Les habillages de rive mal fixés sont, dans ce secteur, les premiers éléments à céder lors des épisodes venteux.",
    ],
    focus: "Villages hesbignons dispersés, bâti agricole, charpentes traditionnelles",
  },
  {
    slug: "blegny",
    name: "Blegny",
    postalCode: "4670",
    sections: ["Barchon", "Housse", "Mortier", "Saint-Remy", "Trembleur", "Saive"],
    neighbors: ["herstal", "vise", "fleron", "soumagne"],
    intro:
      "Commune du pays de Herve au paysage bocager et à l'habitat dispersé, marquée par son passé charbonnier.",
    context: [
      "Blegny se situe dans le pays de Herve, région de bocage et d'habitat dispersé. Le bâti traditionnel y associe pierre calcaire et brique, sur des toitures à forte pente — une réponse constructive cohérente avec une pluviométrie soutenue et sans saison sèche.",
      "L'ambiance humide du bocage, combinée à un ensoleillement annuel limité qui ralentit le séchage, favorise nettement le développement des mousses et des lichens sur les versants les moins exposés au soleil. C'est l'un des secteurs où l'entretien préventif de la couverture change le plus la durée de vie réelle du toit.",
      "L'habitat dispersé caractéristique du pays de Herve implique des accès par des chemins de campagne parfois étroits, ce qui influence l'organisation du chantier.",
    ],
    observed: [
      "C'est ici que nous voyons le plus de dégâts causés par des nettoyages haute pression réalisés quelques années plus tôt : sur de l'ardoise ancienne, cette méthode enlève la mousse et la couche superficielle du matériau avec elle. Beaucoup des couvertures que nous rénovons dans le secteur ont été fragilisées de cette façon.",
      "Si vous envisagez de faire nettoyer votre toiture, exigez une méthode basse pression : c'est une prestation que nous ne réalisons pas, mais un mauvais nettoyage peut vous coûter une réfection complète.",
    ],
    focus: "Pays de Herve, forte humidité et mousse, ardoise ancienne fragile",
  },
  {
    slug: "soumagne",
    name: "Soumagne",
    postalCode: "4630",
    sections: ["Ayeneux", "Cerexhe-Heuseux", "Évegnée", "Melen", "Micheroux", "Tignée"],
    neighbors: ["fleron", "beyne-heusay", "blegny"],
    intro:
      "Commune étendue du plateau de Herve, associant plusieurs noyaux villageois anciens et des développements résidentiels plus récents.",
    context: [
      "Soumagne s'étend sur plusieurs villages du plateau de Herve, chacun avec son noyau ancien où le bâti traditionnel associe pierre et brique. Les développements résidentiels plus récents, notamment autour de Micheroux et Ayeneux, présentent un parc de maisons individuelles aux volumes plus réguliers.",
      "L'altitude du plateau et son dégagement génèrent des conditions plus exigeantes qu'en vallée : gel plus fréquent et plus durable, pluviométrie soutenue, vent régulier de sud-ouest. Près de 60 jours de gel par an sont relevés à l'échelle régionale, et le plateau se situe dans la fourchette haute.",
      "Les cycles gel-dégel constituent le premier facteur de vieillissement des couvertures du secteur, particulièrement sur les matériaux devenus poreux avec le temps.",
    ],
    observed: [
      "Nous rencontrons fréquemment des ardoises anciennes fissurées et des couvertures dont la porosité a augmenté avec l'âge — deux situations où le gel accélère brutalement la dégradation.",
      "Sur les maisons individuelles récentes, nous proposons volontiers une rénovation énergétique globale associant réfection, isolation et production solaire en une seule opération.",
    ],
    focus: "Plateau de Herve, cycles gel-dégel, matériaux poreux en fin de vie",
  },
]

export const COMMUNE_SLUGS = COMMUNES.map((c) => c.slug)

export function getCommune(slug: string): Commune | undefined {
  return COMMUNES.find((c) => c.slug === slug)
}

export function getNeighbors(c: Commune): Commune[] {
  return c.neighbors
    .map((slug) => COMMUNES.find((x) => x.slug === slug))
    .filter((x): x is Commune => Boolean(x))
}
