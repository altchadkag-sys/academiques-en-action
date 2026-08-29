export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* En-tête */}
      
<header className="border-b-2 border-yellow-600 bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">S

    {/* Logo et identité du laboratoire */}
    <div className="flex items-center gap-4">
      <img
        src="/logo-academiques.png"
        alt="Logo Académiques en Action"
        className="h-20 w-auto object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-blue-950">
  Académiques en Action
</h1>
        <p className="mt-1 text-sm font-medium tracking-wide text-gray-500">
  Laboratoire R & RA — Réflexion & Référence Africaine
</p>
      </div>
    </div>

    {/* Menu de navigation */}
    
    
<nav className="hidden items-center gap-5 text-sm font-medium text-blue-950 md:flex">
  <a
    href="#accueil"
    className="transition hover:text-yellow-600"
  >
    Accueil
  </a>

  <a
    href="#mission"
    className="transition hover:text-yellow-600"
  >
    Notre mission
  </a>

  <a
    href="#presentation"
    className="transition hover:text-yellow-600"
  >
    Présentation
  </a>

  <a
    href="#recherche"
    className="transition hover:text-yellow-600"
  >
    Recherche
  </a>

  <a
    href="#axes"
    className="transition hover:text-yellow-600"
  >
    Axes de recherche
  </a>

  <a
    href="#formation"
    className="transition hover:text-yellow-600"
  >
    Formation
  </a>

  <a
    href="#contact"
    className="transition hover:text-yellow-600"
  >
    Contact
  </a>
</nav>
  

  </div>
</header>
 

      {/* Section principale */}
      
{/* Section principale */}
<section
  id="accueil"
  className="relative overflow-hidden bg-blue-950 px-6 py-28 text-white"
>
  <div className="mx-auto max-w-6xl">
    <div className="max-w-4xl">

      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
        Laboratoire R & RA
      </p>

      <h2 className="text-4xl font-bold leading-tight md:text-6xl">
        Académiques en Action
      </h2>

      <div className="mt-5 h-1 w-24 bg-yellow-400"></div>

      <p className="mt-6 text-xl font-medium text-blue-100 md:text-2xl">
        Recherche • Formation • Réflexion
      </p>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
        Former des intellectuels, transformer les idées en contributions
        scientifiques.
      </p>

      <p className="mt-5 max-w-3xl text-base leading-7 text-blue-200">
        Académiques en Action accompagne la réflexion, la recherche et la
        formation afin de contribuer à l’émergence de chercheurs, de
        professionnels et de leaders compétents, intègres et engagés.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#mission"
          className="rounded-full bg-yellow-400 px-7 py-3 font-semibold text-blue-950 transition hover:bg-yellow-300"
        >
          Découvrir notre mission
        </a>

        <a
          href="#contact"
          className="rounded-full border border-yellow-400 px-7 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-blue-950"
        >
          Nous contacter
        </a>
      </div>

    </div>
  </div>
</section>
      {/* Mission */}
      <section id="mission" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
              Notre mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Penser, rechercher, former et agir.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Académiques en Action est un espace consacré à la réflexion
              scientifique, à la recherche, à la méthodologie et à la
              formation intellectuelle. Notre ambition est de contribuer à
              transformer les idées en véritables contributions scientifiques
              et sociales.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border-t-4 border-blue-900 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Recherche
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Développer une recherche rigoureuse, pertinente et ouverte sur
                les réalités africaines et internationales.
              </p>
            </article>

            <article className="rounded-2xl border-t-4 border-blue-900 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Formation
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Accompagner les étudiants, chercheurs et professionnels dans
                leur parcours intellectuel et méthodologique.
              </p>
            </article>

            <article className="rounded-2xl border-t-4 border-blue-900 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Action
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Mettre le savoir au service de la société et encourager une
                culture de responsabilité intellectuelle.
              </p>
            </article>
          </div>
        </div> 
              </section>
        {/* Présentation du laboratoire */}
<section id="presentation" className="bg-white px-6 py-20">
     <div className="mx-auto max-w-6xl">
  <h2 className="text-3xl font-bold text-gray-900">
    Présentation du laboratoire
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-700">
    Académiques en Action – Laboratoire R & RA est un espace de réflexion,
    de recherche et de référence consacré aux enjeux scientifiques,
    éducatifs, sociaux et géopolitiques qui concernent particulièrement
    l’Afrique et ses diasporas.
  </p>

  <p className="mt-4 text-lg leading-8 text-gray-700">
    Le laboratoire rassemble des universitaires, chercheurs, enseignants,
    étudiants et acteurs de la société civile afin de favoriser la
    production, le partage et la valorisation des connaissances.
  </p>

  <p className="mt-4 text-lg leading-8 text-gray-700">
    Notre ambition est de transformer les idées en contributions
    scientifiques utiles au développement des sociétés.
  </p>
</div>
     </section>    
      {/* Recherche */}
      <section id="recherche" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Recherche & réflexion
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Un espace pour développer des analyses, des recherches et des
            productions scientifiques sur les grands enjeux du savoir,
            de l’éducation et des sociétés contemporaines.
          </p>
        </div>
      </section>
      
      {/* Nos axes de réflexions */}
<section id="axes" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
        Nos axes de recherche
      </p>

      <h2 className="mt-3 text-3xl font-bold text-blue-950 md:text-4xl">
        Penser le savoir, comprendre le monde, transformer les perspectives.
      </h2>

      <div className="mt-5 h-1 w-20 bg-yellow-400"></div>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Trois axes structurent la réflexion d’Académiques en Action et
        permettent d’explorer les grandes questions liées au savoir, à la
        recherche, à l’éducation et aux sociétés contemporaines.
      </p>
    </div>

    <div className="mt-14 grid gap-8 md:grid-cols-3">

      {/* Axe 1 */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          01
        </div>

        <h3 className="text-2xl font-bold text-blue-950">
          La Chronique du Savoir
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Épistémologie, méthodologie et écriture scientifique. Comprendre
          comment se construit le savoir scientifique, maîtriser les méthodes
          de recherche et affirmer une écriture académique rigoureuse et
          autonome.
        </p>
      </article>

      {/* Axe 2 */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          02
        </div>

        <h3 className="text-2xl font-bold text-blue-950">
          La Géopolitique du Savoir
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Pourquoi le savoir est-il un enjeu de pouvoir mondial ? Décrypter
          les rapports de force autour de la production, de la circulation et
          de la légitimation du savoir, entre domination et émancipation.
        </p>
      </article>

      {/* Axe 3 */}
      <article className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-yellow-400">
          03
        </div>

        <h3 className="text-2xl font-bold text-blue-950">
          Sciences de l’Éducation en Afrique
        </h3>

        <div className="mt-4 h-1 w-12 bg-yellow-400"></div>

        <p className="mt-5 leading-8 text-gray-600">
          Interroger la dépendance intellectuelle du continent et la domination
          des cadres épistémologiques importés. Revisiter les sciences, la
          médecine et les systèmes éducatifs africains précoloniaux. Un
          plaidoyer pour la décolonisation des savoirs et la souveraineté
          intellectuelle africaine.
        </p>
      </article>

    </div>
  </div>
          
      </section>
      {/* Formation / Tutorat / Master / Doctorat */}
      <section id="formation" className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
            Formation / Tutorat / Master / Doctorat
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Accompagner les étudiants, développer leur autonomie scientifique.
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Académiques en Action accompagne les étudiants de Master et de
            Doctorat, ainsi que les jeunes chercheurs, dans la conception,
            la structuration, la rédaction et la soutenance de leurs projets
            de recherche.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Programme de tutorat académique
            </h3>

            <p className="mt-3 text-gray-600">
              Durée : <strong>8 semaines</strong> — 2 heures par module.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 1</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Introduction à la recherche scientifique
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 2</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Choix et formulation du sujet de recherche
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 3</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Construction de la problématique et des hypothèses
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 4</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Revue de la littérature et cadre théorique
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 5</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Méthodologie de la recherche
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 6</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Collecte et analyse des données
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 7</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Rédaction scientifique et normes académiques
              </h4>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Module 8</p>
              <h4 className="mt-2 text-lg font-bold text-blue-900">
                Soutenance et valorisation de la recherche
              </h4>
            </article>

          </div>

          <div className="mt-12 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900">
              Apprendre à penser, écrire et surtout réussir autrement.
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              Le tutorat académique vise à aider à construire des intellectuels
              et non seulement des diplômés.
            </p>
          </div>
        </div>
      </section>
    
      {/* Contact */}
      <section id="contact" className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Construisons ensemble une culture du savoir.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Pour une collaboration, une formation, un projet de recherche ou
            un accompagnement académique, contactez Académiques en Action.
          </p>

          <a
            href="mailto:contact@academiques-en-action.com"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-100"
          >
            contact@academiques-en-action.com
          </a>
        </div> 
      </section>

      {/* Pied de page */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center text-sm text-gray-500">
  <p>
    © {new Date().getFullYear()} Académiques en Action — Tous droits réservés.
  </p>

  <p className="mt-2 text-gray-400">
    Laboratoire R & RA — Réflexion & Référence Africaine
  </p>
</footer>
    </main>
  );
}
