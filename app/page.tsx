
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================
          EN-TÊTE
      ========================== */}
      <header className="border-b border-gray-300 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo et identité */}
          <div className="flex items-center gap-4"> 
            <img
              src="/logo-academiques.png"
              alt="Logo Académiques en Action"
              className="h-20 w-auto object-contain"
            />

            <div>
              <h1 className="text-[22px] font-bold tracking-tight text-blue-950">
                Académiques en Action
              </h1>

              <p className="mt-1 text-sm font-medium tracking-wide text-gray-500">
                Laboratoire R & RA – Réflexion & Référence Africaine
              </p>
            </div>
          </div>

          {/* Menu */}
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
              href="#formation"
              className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
            >
              Formation
            </a>

            <a
              href="#publications"
              className="border-b-2 border-transparent py-2 transition hover:border-yellow-500 hover:text-yellow-600"
            >
              Publications
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


      {/* =========================
          HERO
      ========================== */}
      <section
        id="accueil"
        className="relative min-h-[620px] overflow-hidden"
      >
        <img
          src="/hero-bibliotheque.png"
          alt="Livre ouvert devant une bibliothèque universitaire"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-950/55"></div>

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


      {/* =========================
          MISSION
      ========================== */}
      <section id="mission" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

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

          <div className="mt-14 grid gap-8 md:grid-cols-3">

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


      {/* =========================
          PRÉSENTATION
      ========================== */}
      <section id="presentation" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Présentation du laboratoire
            </p>

            <h2 className="mt-3 text-[22px] font-bold text-blue-950">
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


      {/* =========================
          FONDATEUR
      ========================== */}
      <section id="fondateur" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Le Fondateur
            </p>

            <h2 className="mt-3 text-[22px] font-bold text-blue-950">
              Dr. Samson N'Taadjèl KAGMATCHÉ
            </h2>

            <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

            <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
              Fondateur d’Académiques en Action — Laboratoire R & RA
              (Réflexion & Référence Africaine).
            </p>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">

            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/fondateur.jpg"
                alt="Dr. Samson N'Taadjèl KAGMATCHÉ, fondateur d'Académiques en Action"
                className="h-auto w-full object-cover"
              />

              <div className="border-t-4 border-yellow-400 bg-blue-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                  Fondateur et Directeur
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Dr. Samson N'Taadjèl KAGMATCHÉ
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Académiques en Action — Laboratoire R & RA
                </p>
              </div>
            </div>

            <div className="space-y-5 text-lg leading-8 text-gray-700">

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
          </div>

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


      {/* =========================
          RECHERCHE
      ========================== */}
      <section id="recherche" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">

          {/* Introduction */}
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                Recherche & réflexion
              </p>

              <h2 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
                Produire du savoir, éclairer les enjeux, ouvrir des perspectives.
              </h2>

              <div className="mt-5 h-1 w-20 bg-yellow-400"></div>
            </div>

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


          {/* Bandeau */}
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


          {/* =========================
              AXES DE RECHERCHE
          ========================== */}
          <div id="axes" className="mt-20 scroll-mt-24">

            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                Axes de recherche
              </p>

              <h3 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
                Penser le savoir, comprendre le monde, transformer les perspectives.
              </h3>

              <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

              <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
                Quatre axes structurent la réflexion d’Académiques en Action
                et permettent d’explorer les grandes questions liées au savoir,
                à la recherche, à l’éducation, au langage et aux sociétés contemporaines.
              </p>
            </div>


            {/* Les quatre axes */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">

              {/* Axe 01 */}
              <article className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
                  01
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
                  Axe de recherche
                </p>

                <h4 className="mt-2 text-[22px] font-bold text-blue-950">
                  La Chronique du Savoir
                </h4>

                <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  Épistémologie, méthodologie et écriture scientifique.
                  Comprendre comment se construit le savoir scientifique,
                  maîtriser les méthodes de recherche et développer une écriture
                  académique rigoureuse, autonome et structurée.
                </p>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <p className="text-sm font-semibold text-blue-900">
                    Méthodologie • Épistémologie • Écriture scientifique
                  </p>
                </div>

              </article>


              {/* Axe 02 */}
              <article className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
                  02
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
                  Axe de recherche
                </p>

                <h4 className="mt-2 text-[22px] font-bold text-blue-950">
                  La Géopolitique du Savoir
                </h4>

                <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  Pourquoi le savoir est-il un enjeu de pouvoir mondial ?
                  Décrypter les rapports de force autour de la production,
                  de la circulation et de la légitimation du savoir, entre
                  domination, influence et émancipation.
                </p>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <p className="text-sm font-semibold text-blue-900">
                    Pouvoir • Savoir • Géopolitique
                  </p>
                </div>

              </article>


              {/* Axe 03 */}
              <article className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-950 text-xl font-bold text-yellow-400">
                  03
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
                  Axe de recherche
                </p>

                <h4 className="mt-2 text-[22px] font-bold text-blue-950">
                  Sciences de l’Éducation en Afrique
                </h4>

                <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  Interroger la dépendance intellectuelle du continent et
                  la domination des cadres épistémologiques importés.
                  Revisiter les sciences, la médecine et les systèmes éducatifs
                  africains précoloniaux afin de réfléchir à la décolonisation
                  des savoirs et à la souveraineté intellectuelle africaine.
                </p>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <p className="text-sm font-semibold text-blue-900">
                    Éducation • Afrique • Souveraineté intellectuelle
                  </p>
                </div>

              </article>


              {/* Axe 04 — NÉOLOGISME */}
              <article className="flex flex-col rounded-3xl border-2 border-yellow-400 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-xl font-bold text-blue-950">
                  04
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-widest text-yellow-600">
                  Axe de recherche
                </p>

                <h4 className="mt-2 text-[22px] font-bold text-blue-950">
                  Le Néologisme
                </h4>

                <div className="mt-5 h-1 w-12 bg-yellow-400"></div>

                <p className="mt-6 flex-1 leading-8 text-gray-600">
                  Explorer la création, l’évolution et la circulation des
                  nouveaux concepts, des nouvelles expressions et des
                  nouveaux cadres de pensée. Le Néologisme s’intéresse
                  au langage comme instrument de création intellectuelle,
                  d’innovation conceptuelle et de transformation des
                  représentations.
                </p>

                <div className="mt-8 border-t border-gray-200 pt-5">
                  <p className="text-sm font-semibold text-blue-900">
                    Langage • Concepts • Innovation intellectuelle
                  </p>
                </div>

              </article>

            </div>
{/* =========================
    NÉOLOGISME — TITROMANIE
========================== */}
<div id="titromanie" className="mt-20 scroll-mt-24">

  <div className="max-w-4xl">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
      Le Néologisme
    </p>

    <h3 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
      Titromanie / Titromane
    </h3>

    <p className="mt-2 text-lg font-medium italic text-gray-500">
      Notice lexicographique d’un néologisme contemporain
    </p>

    <div className="mt-5 h-1 w-20 bg-yellow-400"></div>
  </div>


  {/* Entrée principale */}
  <div className="mt-10 rounded-3xl border-2 border-yellow-400 bg-gray-50 p-8 shadow-sm md:p-10">

    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
          Entrée principale
        </p>

        <h4 className="mt-2 text-3xl font-bold text-blue-950">
          Titromanie
        </h4>

        <p className="mt-2 text-lg italic text-gray-500">
          Nom féminin
        </p>
      </div>

      <div className="rounded-2xl bg-blue-950 px-6 py-4 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
          Prononciation
        </p>

        <p className="mt-1 text-lg font-medium">
          /ti.tʁɔ.ma.ni/
        </p>
      </div>

    </div>


    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <div className="rounded-2xl bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
          Formation morphologique
        </p>

        <p className="mt-3 text-lg font-semibold text-blue-950">
          <span className="font-bold">Titre</span> + suffixe{" "}
          <span className="font-bold">-manie</span>
        </p>
      </div>


      <div className="rounded-2xl bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
          Étymologie proposée
        </p>

        <p className="mt-3 leading-7 text-gray-600">
          Le terme <em>Titromanie</em> est un néologisme construit à partir
          du mot <em>titre</em>, qui désigne une appellation, une fonction,
          un grade, une distinction ou une qualification reconnue socialement,
          et du suffixe <strong>-manie</strong>, exprimant une tendance
          excessive, une passion ou une préoccupation marquée.
        </p>
      </div>

    </div>


    {/* Définition */}
    <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-white p-6 md:p-8">

      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
        Définition
      </p>

      <p className="mt-3 text-xl font-medium leading-8 text-blue-950">
        <strong>Titromanie (n.f.) :</strong>{" "}
        Tendance excessive à rechercher, accumuler, afficher ou valoriser
        des titres, grades, fonctions, diplômes ou appellations comme
        principaux marqueurs de reconnaissance sociale, intellectuelle
        ou professionnelle.
      </p>

    </div>

  </div>


  {/* Terme dérivé */}
  <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
      Terme dérivé
    </p>

    <h4 className="mt-2 text-2xl font-bold text-blue-950">
      Titromane
    </h4>

    <p className="mt-2 text-gray-500">
      Nom masculin / féminin et adjectif
    </p>

    <div className="mt-6 rounded-2xl bg-gray-50 p-6">

      <p className="leading-8 text-gray-700">
        Personne qui manifeste une tendance excessive à accorder une importance
        supérieure aux titres, grades, appellations ou distinctions, parfois
        au détriment du savoir, de la compétence ou de la contribution réelle.
      </p>

    </div>


    {/* Exemples */}
    <div className="mt-8">

      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
        Exemples d’emploi
      </p>

      <div className="mt-4 space-y-4">

        <div className="border-l-4 border-blue-950 pl-5">
          <p className="leading-7 text-gray-700 italic">
            « La titromanie peut conduire à confondre la possession d’un titre
            avec la maîtrise réelle d’un savoir. »
          </p>
        </div>

        <div className="border-l-4 border-blue-950 pl-5">
          <p className="leading-7 text-gray-700 italic">
            « Un titromane valorise davantage l’apparence du statut que la
            démonstration de la compétence. »
          </p>
        </div>

      </div>

    </div>

  </div>


  {/* Portée conceptuelle */}
  <div className="mt-10 rounded-3xl bg-blue-950 p-8 text-white md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
      Portée du concept
    </p>

    <h4 className="mt-3 text-2xl font-bold">
      Du titre au savoir : une distinction fondamentale
    </h4>

    <div className="mt-5 h-1 w-16 bg-yellow-400"></div>

    <p className="mt-6 text-lg leading-8 text-blue-100">
      Le concept de <em>Titromanie</em> invite à distinguer le titre et le
      savoir, le statut institutionnel et la compétence réelle, ainsi que
      la reconnaissance sociale et la valeur intellectuelle.
    </p>

    <div className="mt-8 grid gap-4 md:grid-cols-3">

      <div className="rounded-2xl bg-blue-900 p-5">
        <p className="font-bold text-yellow-400">
          Titre
        </p>
        <p className="mt-2 text-sm leading-6 text-blue-100">
          ≠ savoir
        </p>
      </div>

      <div className="rounded-2xl bg-blue-900 p-5">
        <p className="font-bold text-yellow-400">
          Statut
        </p>
        <p className="mt-2 text-sm leading-6 text-blue-100">
          ≠ compétence réelle
        </p>
      </div>

      <div className="rounded-2xl bg-blue-900 p-5">
        <p className="font-bold text-yellow-400">
          Reconnaissance
        </p>
        <p className="mt-2 text-sm leading-6 text-blue-100">
          ≠ valeur intellectuelle
        </p>
      </div>

    </div>

  </div>


  {/* Domaines d’emploi */}
  <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
      Domaines d’emploi
    </p>

    <h4 className="mt-3 text-2xl font-bold text-blue-950">
      Un concept à la croisée de plusieurs disciplines
    </h4>

    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {[
        "Sociologie",
        "Sciences de l’éducation",
        "Philosophie sociale",
        "Anthropologie culturelle",
        "Études sur le prestige et la reconnaissance sociale",
        "Culture académique",
      ].map((domain) => (
        <div
          key={domain}
          className="rounded-2xl bg-white p-5 font-semibold text-blue-950 shadow-sm"
        >
          {domain}
        </div>
      ))}

    </div>

  </div>


  {/* Origine et statut */}
  <div className="mt-10 grid gap-8 lg:grid-cols-2">

    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
        Origine du néologisme
      </p>

      <h4 className="mt-3 text-2xl font-bold text-blue-950">
        Créateur du concept
      </h4>

      <div className="mt-6 space-y-4 text-gray-700">

        <p>
          <strong>Samson N’Taadjèl Kagmatché</strong>
        </p>

        <p>
          <strong>Première occurrence littéraire connue :</strong><br />
          <em>From the Rose to the Bramble</em>
        </p>

        <p>
          <strong>Année :</strong> 2025
        </p>

        <p>
          <strong>ISBN :</strong> 9781989771136
        </p>

        <p>
          <strong>Langue de publication :</strong> anglais
        </p>

      </div>

    </div>


    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
        Statut lexical
      </p>

      <h4 className="mt-3 text-2xl font-bold text-blue-950">
        Un néologisme contemporain
      </h4>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm font-semibold text-yellow-600">
            Type
          </p>
          <p className="mt-1 font-medium text-gray-700">
            Néologisme contemporain
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-yellow-600">
            Statut
          </p>
          <p className="mt-1 font-medium text-gray-700">
            Terme proposé en cours de diffusion
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-yellow-600">
            Usages
          </p>
          <p className="mt-1 font-medium text-gray-700">
            Littéraire • Conceptuel • Analytique • Sociologique
          </p>
        </div>

      </div>

    </div>

  </div>


  {/* Forme anglaise */}
  <div className="mt-10 rounded-3xl border-l-4 border-yellow-400 bg-gray-50 p-8 md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
      Forme anglaise associée
    </p>

    <h4 className="mt-3 text-2xl font-bold text-blue-950">
      Titlomania
    </h4>

    <div className="mt-5 grid gap-6 md:grid-cols-2">

      <div>
        <p className="text-sm font-semibold text-yellow-600">
          Part of speech
        </p>
        <p className="mt-1 text-gray-700">
          Noun
        </p>
      </div>

      <div>
        <p className="text-sm font-semibold text-yellow-600">
          Formation
        </p>
        <p className="mt-1 text-gray-700">
          Title + mania
        </p>
      </div>

    </div>

    <p className="mt-6 leading-8 text-gray-700">
      <strong>Definition :</strong> An excessive tendency to seek, display,
      accumulate, or rely on titles, ranks, degrees, or social labels as
      primary indicators of status and recognition.
    </p>

    <p className="mt-5 text-gray-700">
      <strong>Derived form :</strong>{" "}
      <span className="font-semibold text-blue-950">Titlomaniac</span>
    </p>

  </div>


  {/* Diffusion publique */}
  <div className="mt-10 rounded-3xl bg-gray-50 p-8 md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
      Diffusion publique du concept
    </p>

    <h4 className="mt-3 text-2xl font-bold text-blue-950">
      Chronique du Savoir
    </h4>

    <p className="mt-5 max-w-4xl leading-8 text-gray-700">
      Les néologismes <em>Titromanie</em> et <em>Titromane</em> ont également
      été présentés dans une chronique publique d’Académiques en Action —
      Laboratoire R & RA (Réflexion & Référence Africaine).
    </p>

    <div className="mt-6 grid gap-4 md:grid-cols-3">

      <div className="rounded-2xl bg-white p-5 font-semibold text-blue-950 shadow-sm">
        YouTube — Académiques en Action
      </div>

      <div className="rounded-2xl bg-white p-5 font-semibold text-blue-950 shadow-sm">
        Facebook — Académiques en Action
      </div>

      <div className="rounded-2xl bg-white p-5 font-semibold text-blue-950 shadow-sm">
        Plateformes numériques associées
      </div>

    </div>

    <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-white p-6">

      <p className="font-semibold text-blue-950">
        Objet de la chronique
      </p>

      <p className="mt-2 leading-7 text-gray-600">
        Présentation et analyse du concept de Titromanie comme phénomène lié
        à la culture du titre, du prestige et de la reconnaissance sociale.
      </p>

      <p className="mt-4 text-sm italic text-gray-500">
        Les liens et dates de publication pourront être ajoutés ultérieurement.
      </p>

    </div>

  </div>


  {/* Sources */}
  <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
      Sources attestant l’existence du terme
    </p>

    <ol className="mt-6 list-decimal space-y-4 pl-6 leading-7 text-gray-700">

      <li>
        Kagmatché, Samson N’Taadjèl.{" "}
        <em>From the Rose to the Bramble</em>. 2025.
        ISBN : 9781989771136.
      </li>

      <li>
        <em>Chronique du Savoir</em> – Académiques en Action.
        « Titromanie et Titromane ».
      </li>

      <li>
        Publications numériques de l’auteur.
      </li>

      <li>
        Dépôt légal prévu auprès de Bibliothèque et Archives Canada.
      </li>

    </ol>

  </div>


  {/* Signature conceptuelle */}
  <div className="mt-10 rounded-3xl border-2 border-yellow-400 bg-blue-950 p-8 text-center text-white md:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
      Académiques en Action — Laboratoire R & RA
    </p>

    <p className="mt-4 text-xl font-bold md:text-2xl">
      Titromanie / Titromane
    </p>

    <p className="mt-3 text-blue-100">
      Concept créé par Samson N’Taadjèl Kagmatché
    </p>

  </div>

</div>

            {/* Vision commune */}
            <div className="mt-14 rounded-3xl bg-blue-950 p-8 text-white md:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Une vision commune
              </p>

              <p className="mt-4 max-w-4xl text-lg leading-8 text-blue-100 md:text-xl">
                Ces quatre axes participent à une même ambition : développer
                une culture scientifique fondée sur la rigueur, l’autonomie
                intellectuelle, le dialogue entre les disciplines, l’innovation
                conceptuelle et la valorisation des savoirs africains.
              </p>

            </div>

          </div>


          {/* =========================
              PARTENARIATS
          ========================== */}
          <div id="partenariats" className="mt-20 scroll-mt-24">

            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                Partenariats
              </p>

              <h3 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
                Construire des passerelles entre les savoirs et les institutions.
              </h3>

              <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

              <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
                Académiques en Action souhaite développer des partenariats
                avec des universités, des centres de recherche, des institutions,
                des organisations et des acteurs engagés dans la production,
                la transmission et la valorisation des connaissances.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <article className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <h4 className="text-xl font-bold text-blue-950">
                  Universités
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Développer des collaborations scientifiques, pédagogiques
                  et interdisciplinaires.
                </p>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <h4 className="text-xl font-bold text-blue-950">
                  Centres de recherche
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Favoriser les échanges de chercheurs, les projets communs
                  et la circulation des savoirs.
                </p>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                <h4 className="text-xl font-bold text-blue-950">
                  Institutions & organisations
                </h4>

                <p className="mt-3 leading-7 text-gray-600">
                  Mettre l’expertise scientifique au service de projets
                  à portée éducative, sociale et intellectuelle.
                </p>
              </article>

            </div>

          </div>


          {/* =========================
              CONSEIL SCIENTIFIQUE
          ========================== */}
          <div id="conseil-scientifique" className="mt-20 scroll-mt-24">

            <div className="rounded-3xl bg-gray-50 p-8 md:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
                Conseil scientifique
              </p>

              <h3 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
                Une expertise au service de la rigueur scientifique.
              </h3>

              <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700 md:text-xl">
                Le Conseil scientifique a vocation à réunir des universitaires,
                chercheurs et experts issus de différentes disciplines afin
                d’accompagner les orientations scientifiques du Laboratoire R & RA.
              </p>

              <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-white p-6">
                <p className="font-semibold text-blue-950">
                  Composition en cours de constitution
                </p>

                <p className="mt-2 leading-7 text-gray-600">
                  Cette section sera progressivement enrichie avec la présentation
                  des membres et de leurs domaines d’expertise.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FORMATION
      ========================== */}
      <section id="formation" className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Formation académique
            </p>

            <h2 className="mt-3 text-[22px] font-bold md:text-3xl">
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

              {[
                ["01", "Introduction à la recherche scientifique"],
                ["02", "Choix et formulation du sujet de recherche"],
                ["03", "Construction de la problématique et des hypothèses"],
                ["04", "Revue de la littérature et cadre théorique"],
                ["05", "Méthodologie de la recherche"],
                ["06", "Collecte et analyse des données"],
                ["07", "Rédaction scientifique et normes académiques"],
                ["08", "Soutenance et valorisation de la recherche"],
              ].map(([number, title]) => (
                <article
                  key={number}
                  className="rounded-2xl bg-white p-6 text-blue-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-bold text-yellow-600">
                    MODULE {number}
                  </p>

                  <h4 className="mt-3 text-lg font-bold leading-7">
                    {title}
                  </h4>
                </article>
              ))}

            </div>
          </div>


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


      {/* =========================
          PUBLICATIONS
      ========================== */}
      <section id="publications" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Publications
            </p>

            <h2 className="mt-3 text-[22px] font-bold text-blue-950 md:text-3xl">
              Une production scientifique et littéraire au service du savoir.
            </h2>

            <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

            <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl">
              Les travaux du fondateur d’Académiques en Action s’inscrivent dans
              une démarche interdisciplinaire associant théologie, archéologie,
              histoire, sciences de l’éducation et réflexion sur les sociétés.
            </p>
          </div>


          <div className="mt-14">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Ouvrages scientifiques
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">

              <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <span className="rounded-full bg-blue-950 px-4 py-1.5 text-sm font-bold text-yellow-400">
                  2011
                </span>

                <h3 className="mt-6 text-xl font-bold leading-8 text-blue-950">
                  <em>
                    Étude comparative entre les Lamassu et les chérubins bibliques
                  </em>
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  L’Harmattan, Paris, 176 pages.
                </p>
              </article>

              <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <span className="rounded-full bg-blue-950 px-4 py-1.5 text-sm font-bold text-yellow-400">
                  2018
                </span>

                <h3 className="mt-6 text-xl font-bold leading-8 text-blue-950">
                  <em>
                    The God of Mount Carmel: Contending Views about the Deity
                    Associated with the Biblical Mount Carmel
                  </em>
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Lambert Academic Publishing, Saarbrücken, 300 pages.
                </p>
              </article>

            </div>
          </div>


          <div className="mt-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Contribution scientifique
            </p>

            <article className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

              <span className="rounded-full bg-blue-950 px-4 py-1.5 text-sm font-bold text-yellow-400">
                2019
              </span>

              <h3 className="mt-6 text-xl font-bold leading-8 text-blue-950 md:text-2xl">
                <em>« Lamassu in Ancient Near Eastern Beliefs »</em>
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                In <em>Belief Phenomenon and Administrative Conception in the
                Ancient Age of Mesopotamia</em>, Prof. Dr. L. Gürkan GÖKÇEK (dir.),
                2019.
              </p>

            </article>
          </div>


          <div className="mt-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Œuvre littéraire
            </p>

            <article className="mt-8 rounded-3xl bg-blue-950 p-8 text-white shadow-lg md:p-10">

              <span className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-blue-950">
                2025
              </span>

              <h3 className="mt-6 text-2xl font-bold leading-9">
                <em>De la Rose à la Ronce</em>
              </h3>

              <p className="mt-4 text-lg leading-8 text-blue-100">
                Samson N’Taadjèl KAGMATCHÉ, Guérin Scholar’s Press, Montréal,
                2025, 132 pages.
              </p>

            </article>
          </div>


          <div className="mt-16">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
              Ouvrage en cours
            </p>

            <article className="mt-8 rounded-3xl border-l-4 border-yellow-400 bg-gray-50 p-8 md:p-10">

              <span className="inline-flex rounded-full bg-blue-950 px-4 py-1.5 text-sm font-bold text-yellow-400">
                En cours d’élaboration
              </span>

              <h3 className="mt-6 text-xl font-bold leading-8 text-blue-950 md:text-2xl">
                <em>
                  Émancipation des femmes au XXIe siècle : combat du siècle ou
                  combat des sexes ?
                </em>
              </h3>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Ouvrage en cours d’élaboration.
              </p>

            </article>
          </div>


          <div className="mt-16 rounded-3xl bg-gray-50 p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Une bibliothèque intellectuelle en construction
            </p>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-700 md:text-xl">
              À travers ses publications, ses recherches et ses projets d’écriture,
              Académiques en Action souhaite contribuer à la circulation des savoirs
              et au développement d’une pensée scientifique autonome.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section id="contact" className="bg-blue-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Entrer en contact avec Académiques en Action
          </h2>

          <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Pour toute question, proposition de partenariat, collaboration
            scientifique ou information sur nos formations, vous pouvez nous
            contacter.
          </p>

          <div className="mt-10 rounded-3xl bg-blue-900 p-8 text-center shadow-lg md:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Contact
            </p>

            <h3 className="mt-3 text-[22px] font-bold">
              Construisons ensemble une culture du savoir.
            </h3>

            <div className="mx-auto mt-5 h-1 w-20 bg-yellow-400"></div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Pour une collaboration, une formation, un projet de recherche ou
              un accompagnement académique, contactez Académiques en Action.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5">

              <a
                href="mailto:contact@academiques-en-action.com"
                className="inline-flex items-center rounded-full bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
              >
                contact@academiques-en-action.com
              </a>

              <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">

                <a
                  href="tel:+14389349894"
                  className="text-lg font-semibold transition hover:text-yellow-300"
                >
                  📞 Téléphone : 1-438-934-9894
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61582416335658"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-yellow-300"
                >
                  👍 Facebook — Académiques en Action
                </a>

                <a
                  href="https://www.youtube.com/@Acad%C3%A9miquesenAction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-yellow-300"
                >
                  ▶️ YouTube — Académiques en Action
                </a>

              </div>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Laboratoire R & RA — Réflexion & Référence Africaine
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          PIED DE PAGE
      ========================== */}
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

