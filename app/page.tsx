export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
  {/* En-tête */}

<header className="border-b border-gray-300 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

    {/* Logo et identité du laboratoire */}
    <div className="flex items-center gap-4">
      <img
        src="/logo-academiques.png"
        alt="Logo Académiques en Action"
        className="h-20 w-auto object-contain"
      />

      <div>
        <h1 className=" text-[22px] font-bold tracking-tight text-blue-950">
          Académiques en Action
        </h1>

        <p className="mt-1 text-sm font-medium tracking-wide text-gray-500">
          Laboratoire R & RA – Réflexion & Référence Africaine
        </p>
      </div>
    </div>
{/* Menu de navigation */}
<nav className="hidden items-center gap-6 text-sm font-semibold text-blue-950 md:flex">

  <a
    href="#accueil"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Accueil
  </a>

  <a
    href="#mission"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Notre mission
  </a>

  <a
    href="#presentation"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Présentation
  </a>

  <a
    href="#fondateur"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Fondateur
  </a>

  <a
    href="#recherche"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Recherche
  </a>

  <a
    href="#axes"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Axes de recherche
  </a>

  <a
    href="#formation"
    className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
  >
    Formation
  </a>

  <a
    href="#contact"
    className="rounded-full bg-blue-950 px-5 py-2.5 text-white transition hover:bg-blue-800"
  >
    Contact
  </a>

</nav>
   

  </div>
</header>   

      {/* Section principale */}
   
{/* Section Hero */}
<section
  id="accueil"
  className="relative min-h-[620px] overflow-hidden"
>
  {/* Image de fond */}
  <img
    src="/hero-bibliotheque.png"
    alt="Livre ouvert devant une bibliothèque universitaire"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Voile bleu léger pour préserver la visibilité de l'image */}
  <div className="absolute inset-0 bg-blue-950/55"></div>

  {/* Contenu */}
  <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
    <div className="max-w-4xl">

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
        Laboratoire R & RA — Réflexion & Référence Africaine
      </p>

      <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
        Académiques en Action
      </h2>

      <div className="mt-6 h-1 w-24 bg-yellow-400"></div>

      <p className="mt-6 text-xl font-medium text-blue-100 md:text-[22px]">
        Recherche • Formation • Réflexion
      </p>

      <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white md:text-xl">
        Transformer des idées en contribution scientifique.
      </p>

      <p className="mt-5 max-w-3xl text-base leading-7 text-white md:text-lg">
        Académiques en Action accompagne la réflexion, la recherche et la
        formation afin de contribuer à l’émergence de chercheurs,
        de professionnels et de leaders compétents, intègres et engagés.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#mission"
          className="rounded-full bg-yellow-400 px-7 py-3 text-center font-semibold text-blue-950 transition hover:bg-yellow-300"
        >
          Découvrir notre mission
        </a>

        <a
          href="#contact"
          className="rounded-full border border-yellow-400 px-7 py-3 text-center font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-blue-950"
        >
          Nous contacter
        </a>
      </div>

    </div>
  </div>
</section>

{/* Mission */}
<section id="mission" className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* En-tête de section */}
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
        Notre mission
      </p>

      <h2 className="mt-3 text-[22px] font-bold text-blue-950">
  Penser, rechercher, former et agir.
</h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
        Académiques en Action est un espace consacré à la réflexion
        scientifique, à la recherche, à la méthodologie et à la formation
        intellectuelle. Notre ambition est de contribuer à transformer les
        idées en véritables contributions scientifiques et sociales.
      </p>
    </div>

    {/* Les trois piliers */}
    <div className="mt-14 grid gap-8 md:grid-cols-3">

      {/* Recherche */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
          01
        </div>

        <h3 className="mt-6 text-2xl font-bold text-blue-950">
          Recherche
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Développer une recherche rigoureuse, pertinente et ouverte sur
          les réalités africaines et internationales.
        </p>
      </article>

      {/* Formation */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
          02
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-blue-950">
          Formation
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Accompagner les étudiants, chercheurs et professionnels dans
          leur parcours intellectuel et méthodologique.
        </p>
      </article>

      {/* Action */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
          03
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-blue-950">
          Action
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Mettre le savoir au service de la société et encourager une
          culture de responsabilité intellectuelle.
        </p>
      </article>

    </div>

  </div>
</section>

{/* Présentation du laboratoire */}
<section id="presentation" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* En-tête */}
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
        Présentation du laboratoire
      </p>

      <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-5xl">
        Un espace de réflexion, de recherche et de référence.
      </h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
        Académiques en Action — Laboratoire R & RA est un espace de
        réflexion, de recherche et de référence consacré aux enjeux
        scientifiques, éducatifs, sociaux et géopolitiques qui concernent
        particulièrement l’Afrique et ses diasporas.
      </p>
    </div>

    {/* Contenu principal */}
    <div className="mt-14 grid gap-8 md:grid-cols-3">

      <article className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          01
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-blue-950">
          Réfléchir
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Créer un espace où les universitaires, chercheurs, enseignants
          et étudiants peuvent interroger les savoirs, confronter les
          perspectives et développer une pensée autonome.
        </p>
      </article>

      <article className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          02
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-blue-950">
          Rechercher
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Favoriser une recherche rigoureuse, interdisciplinaire et
          attentive aux réalités africaines, tout en établissant des
          passerelles avec les recherches internationales.
        </p>
      </article>

      <article className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          03
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-blue-950">
          Partager
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Rassembler des compétences et valoriser les connaissances
          afin de contribuer au développement scientifique, éducatif
          et social des sociétés.
        </p>
      </article>

    </div>

    {/* Ambition */}
    <div className="mt-14 rounded-2xl border-l-4 border-yellow-400 bg-blue-950 p-8 text-white md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
        Notre ambition
      </p>

      <p className="mt-4 max-w-4xl text-lg leading-8 text-blue-100 md:text-xl">
        Transformer les idées en contributions scientifiques utiles,
        encourager l’autonomie intellectuelle et participer à la
        construction d’une culture du savoir ouverte, rigoureuse et
        particulièrement attentive aux réalités africaines.
      </p>
    </div>

  </div>
</section>
      
{/* Fondateur */}
<section id="fondateur" className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* En-tête */}
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
        Le Fondateur
      </p>

      <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-5xl">
        Dr. Samson N'Taadjèl KAGMATCHÉ
      </h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
        Fondateur d’Académiques en Action — Laboratoire R & RA
        (Réflexion & Référence Africaine).
      </p>
    </div>

    {/* Présentation */}
    <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">

      <div className="space-y-4 text-lg leading-8 text-gray-700">

        <p>
          Docteur en théologie, spécialisé en <strong>Ancien Testament</strong>,
          avec une formation en <strong>archéologie du Proche-Orient ancien</strong>,
          le fondateur développe une approche interdisciplinaire qui met en
          dialogue les textes anciens, l’archéologie, l’histoire et la
          réflexion scientifique.
        </p>

        <p>
          Sa recherche doctorale a articulé
          <strong> l’étude de l’Ancien Testament et l’archéologie</strong>,
          dans une démarche visant à mieux comprendre les contextes historiques,
          culturels et religieux du monde biblique.
        </p>

        <p>
          Cette formation interdisciplinaire constitue l’un des fondements
          intellectuels d’Académiques en Action : croiser les disciplines,
          questionner les savoirs établis et contribuer à une production
          scientifique rigoureuse, particulièrement attentive aux réalités
          africaines.
        </p>

        <p>
          À travers le Laboratoire R & RA, le fondateur souhaite créer un espace
          où universitaires, chercheurs, enseignants et étudiants peuvent
          réfléchir ensemble, produire du savoir et transformer leurs idées
          en contributions scientifiques utiles à la société.
        </p>

      </div>

      {/* Carte institutionnelle */}
      <aside className="h-fit rounded-3xl bg-blue-950 p-8 text-white shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
          Profil académique
        </p>

        <h3 className="mt-4 text-[22px] font-bold">
          Une approche interdisciplinaire
        </h3>

        <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-7 text-blue-100">
          Une formation et une démarche de recherche fondées sur le dialogue
          entre la théologie, l’archéologie, l’histoire, les sciences de
          l’éducation et l’étude des textes anciens.
        </p>
      </aside>

    </div>

    {/* Domaines de compétence */}
    <div className="mt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
        Domaines de compétence
      </p>

      <h3 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
        Des disciplines au service d’une même vision scientifique.
      </h3>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900">
            Théologie
          </h4>
          <p className="mt-3 leading-7 text-gray-600">
            Spécialisation en théologie et recherche sur l’Ancien Testament.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900">
            Archéologie
          </h4>
          <p className="mt-3 leading-7 text-gray-600">
            Formation en archéologie du Proche-Orient ancien et approche
            interdisciplinaire des mondes anciens.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900">
            Sciences de l’Éducation
          </h4>
          <p className="mt-3 leading-7 text-gray-600">
            Parcours en Sciences de l’Éducation, avec un intérêt particulier
            pour la formation, la transmission des savoirs et le développement
            de l’autonomie intellectuelle.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900">
            Recherche
          </h4>
          <p className="mt-3 leading-7 text-gray-600">
            Une démarche fondée sur le dialogue entre les disciplines,
            la rigueur scientifique et la valorisation des savoirs.
          </p>
        </article>

        <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
          <h4 className="text-xl font-bold text-blue-900">
            Langues anciennes
          </h4>
          <p className="mt-3 leading-7 text-gray-600">
            Connaissances en hébreu biblique, en akkadien et en grec,
            au service de l’étude des textes anciens et de leur contexte
            historique, culturel et religieux.
          </p>
        </article>

      </div>
    </div>

  </div>
</section>

{/* Recherche */}
<section id="recherche" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">

      {/* Titre */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
          Recherche & réflexion
        </p>

        <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-5xl">
          Produire du savoir, éclairer les enjeux, ouvrir des perspectives.
        </h2>

        <div className="mt-5 h-1 w-20 bg-yellow-400"></div>
      </div>

      {/* Texte */}
      <div>
        <p className="text-lg leading-8 text-gray-700 md:text-xl">
          Académiques en Action développe un espace consacré à la recherche,
          à l’analyse et à la réflexion scientifique sur les grands enjeux
          du savoir, de l’éducation et des sociétés contemporaines.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Notre démarche privilégie le dialogue entre les disciplines,
          la rigueur méthodologique et la valorisation de perspectives
          africaines dans les débats scientifiques nationaux et
          internationaux.
        </p>
      </div>

    </div>

    {/* Bandeau institutionnel */}
    <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white md:p-10">
      <div className="grid gap-8 md:grid-cols-3">

        <div>
          <p className="text-3xl font-bold text-yellow-400">
            Recherche
          </p>
          <p className="mt-2 leading-7 text-blue-100">
            Produire et approfondir les connaissances.
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold text-yellow-400">
            Analyse
          </p>
          <p className="mt-2 leading-7 text-blue-100">
            Comprendre les transformations du monde contemporain.
          </p>
        </div>

        <div>
          <p className="text-3xl font-bold text-yellow-400">
            Perspective
          </p>
          <p className="mt-2 leading-7 text-blue-100">
            Ouvrir de nouvelles voies de réflexion scientifique.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
      
{/* Nos axes de réflexions */}
<section id="axes" className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* En-tête */}
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
        Nos axes de recherche
      </p>

      <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-5xl">
        Penser le savoir, comprendre le monde, transformer les perspectives.
      </h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
        Trois axes structurent la réflexion d’Académiques en Action et
        permettent d’explorer les grandes questions liées au savoir,
        à la recherche, à l’éducation et aux sociétés contemporaines.
      </p>
    </div>

    {/* Les trois axes */}
    <div className="mt-14 grid gap-8 lg:grid-cols-3">

      {/* Axe 1 */}
      <article className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
          01
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
          Axe de recherche
        </p>

        <h3 className="mt-2 text-[22px] font-bold text-blue-950">
          La Chronique du Savoir
        </h3>

        <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-6 flex-1 leading-8 text-gray-600">
          Épistémologie, méthodologie et écriture scientifique. Comprendre
          comment se construit le savoir scientifique, maîtriser les méthodes
          de recherche et développer une écriture académique rigoureuse,
          autonome et structurée.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-5">
          <p className="text-sm font-semibold text-blue-900">
            Méthodologie • Épistémologie • Écriture scientifique
          </p>
        </div>

      </article>

      {/* Axe 2 */}
      <article className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
          02
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
          Axe de recherche
        </p>

        <h3 className="mt-2 text-[22px] font-bold text-blue-950">
          La Géopolitique du Savoir
        </h3>

        <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-6 flex-1 leading-8 text-gray-600">
          Pourquoi le savoir est-il un enjeu de pouvoir mondial ? Décrypter
          les rapports de force autour de la production, de la circulation
          et de la légitimation du savoir, entre domination, influence
          et émancipation.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-5">
          <p className="text-sm font-semibold text-blue-900">
            Pouvoir • Savoir • Géopolitique
          </p>
        </div>

      </article>

      {/* Axe 3 */}
      <article className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
          03
        </div>

        <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
          Axe de recherche
        </p>

        <h3 className="mt-2 text-[22px] font-bold text-blue-950">
          Sciences de l’Éducation en Afrique
        </h3>

        <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-6 flex-1 leading-8 text-gray-600">
          Interroger la dépendance intellectuelle du continent et la
          domination des cadres épistémologiques importés. Revisiter
          les sciences, la médecine et les systèmes éducatifs africains
          précoloniaux afin de réfléchir à la décolonisation des savoirs
          et à la souveraineté intellectuelle africaine.
        </p>

        <div className="mt-8 border-t border-gray-200 pt-5">
          <p className="text-sm font-semibold text-blue-900">
            Éducation • Afrique • Souveraineté intellectuelle
          </p>
        </div>

      </article>

    </div>

    {/* Conclusion */}
    <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
        Une vision commune
      </p>

      <p className="mt-4 max-w-4xl text-lg leading-8 text-blue-100 md:text-xl">
        Ces trois axes participent à une même ambition : développer une
        culture scientifique fondée sur la rigueur, l’autonomie intellectuelle,
        le dialogue entre les disciplines et la valorisation des savoirs
        africains.
      </p>
    </div>

  </div>
</section>
  
{/* Formation / Tutorat / Master / Doctorat */}
<section id="formation" className="bg-blue-950 px-6 py-24 text-white">
  <div className="mx-auto max-w-6xl">

    {/* En-tête */}
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
        Formation académique
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Accompagner les étudiants, développer leur autonomie scientifique.
      </h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-blue-100 md:text-xl">
        Académiques en Action accompagne les étudiants de Master et de
        Doctorat, ainsi que les jeunes chercheurs, dans la conception,
        la structuration, la rédaction et la soutenance de leurs projets
        de recherche.
      </p>
    </div>

    {/* Programme principal */}
    <div className="mt-14 rounded-3xl border border-blue-800 bg-blue-900 p-8 shadow-lg md:p-10">

      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Programme de tutorat académique
          </p>

          <h3 className="mt-3 text-[22px] font-bold md:text-3xl">
            De la conception du sujet à la soutenance
          </h3>

          <p className="mt-4 max-w-2xl leading-8 text-blue-100">
            Un parcours structuré en 8 modules pour acquérir une méthode
            de recherche solide, renforcer les compétences rédactionnelles
            et développer une véritable autonomie scientifique.
          </p>
        </div>

        {/* Durée */}
        <div className="rounded-2xl bg-white px-8 py-6 text-center text-blue-950">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Durée
          </p>

          <p className="mt-1 text-4xl font-bold">
            8 semaines
          </p>

          <p className="mt-1 text-sm text-gray-600">
            2 heures par module
          </p>
        </div>

      </div>
    </div>

    {/* Parcours */}
    <div className="mt-16">

      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Parcours de formation
          </p>

          <h3 className="mt-2 text-[22px] font-bold md:text-3xl">
            Les 8 modules du programme
          </h3>
        </div>

        <p className="text-sm text-blue-200">
          Master • Doctorat • Jeunes chercheurs
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {/* Module 01 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 01
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Introduction à la recherche scientifique
          </h4>
        </article>

        {/* Module 02 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 02
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Choix et formulation du sujet de recherche
          </h4>
        </article>

        {/* Module 03 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 03
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Construction de la problématique et des hypothèses
          </h4>
        </article>

        {/* Module 04 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 04
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Revue de la littérature et cadre théorique
          </h4>
        </article>

        {/* Module 05 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 05
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Méthodologie de la recherche
          </h4>
        </article>

        {/* Module 06 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 06
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Collecte et analyse des données
          </h4>
        </article>

        {/* Module 07 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 07
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Rédaction scientifique et normes académiques
          </h4>
        </article>

        {/* Module 08 */}
        <article className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <p className="text-sm font-bold text-yellow-600">
            MODULE 08
          </p>
          <h4 className="mt-3 text-lg font-bold leading-7">
            Soutenance et valorisation de la recherche
          </h4>
        </article>

      </div>
    </div>

    {/* Philosophie */}
    <div className="mt-16 rounded-3xl border border-blue-800 bg-blue-900 p-8 md:p-10">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
        Philosophie du tutorat
      </p>

      <h3 className="mt-3 text-[22px] font-bold md:text-3xl">
        Apprendre à penser, écrire et surtout réussir autrement.
      </h3>

      <p className="mt-5 max-w-4xl text-lg leading-8 text-blue-100">
        Le tutorat académique vise à construire des intellectuels,
        et non seulement des diplômés. Il s’agit de développer
        l’autonomie, la rigueur et la capacité à produire un travail
        scientifique de qualité.
      </p>

    </div>

  </div>
</section>

{/* Contact */}
<section id="contact" className="bg-gray-50 px-6 py-24">
  <div className="mx-auto max-w-5xl">

    <div className="rounded-3xl bg-blue-950 p-8 text-center text-white shadow-lg md:p-12">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-bold md:text-5xl">
        Construisons ensemble une culture du savoir.
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
        Pour une collaboration, une formation, un projet de recherche ou
        un accompagnement académique, contactez Académiques en Action.
      </p>

      <div className="mt-10">
        <a
          href="mailto:contact@academiques-en-action.com"
          className="inline-flex items-center rounded-full bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
        >
          contact@academiques-en-action.com
        </a>
      </div>

      <p className="mt-6 text-sm text-blue-200">
        Laboratoire R & RA — Réflexion & Référence Africaine
      </p>

    </div>

  </div>
</section>

{/* Pied de page */}
<footer className="border-t border-blue-900 bg-blue-950 px-6 py-10 text-white">
  <div className="mx-auto max-w-6xl">

    <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

      <div>
        <p className="text-lg font-bold">
          Académiques en Action
        </p>

        <p className="mt-2 text-sm text-blue-200">
          Laboratoire R & RA — Réflexion & Référence Africaine
        </p>
      </div>

      <div>
        <p className="text-sm text-blue-200">
          Transformer des idées en contribution scientifique.
        </p>
      </div>

    </div>

    <div className="mt-8 border-t border-blue-800 pt-6 text-center">
      <p className="text-sm text-blue-300">
        © {new Date().getFullYear()} Académiques en Action — Tous droits réservés.
      </p>
    </div>

  </div>
</footer>

    </main>
  );
}
