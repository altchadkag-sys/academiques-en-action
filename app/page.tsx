export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* En-tête */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Académiques en Action
            </h1>
            <p className="text-sm text-gray-600">
              Laboratoire R & RA — Réflexion & Référence Africaine
            </p>
          </div>

          <nav className="hidden gap-6 md:flex">
            <a href="#accueil" className="hover:text-blue-700">
              Accueil
            </a>
            <a href="#mission" className="hover:text-blue-700">
              Notre mission
            </a> 
            <a href="/recherche" className="hover:text-blue-700">
              Recherche
            </a>
            <a href="#formation" className="hover:text-blue-700">
              Formation
            </a>
            <a href="#contact" className="hover:text-blue-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Section principale */}
      <section
        id="accueil"
        className="bg-blue-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Recherche • Formation • Réflexion
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Former des intellectuels,
            <br />
            transformer les idées en contributions scientifiques.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Académiques en Action accompagne la réflexion, la recherche et la
            formation pour contribuer à l’émergence de leaders compétents,
            intègres et engagés.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#mission"
              className="rounded-full bg-white px-7 py-3 font-semibold text-blue-950 transition hover:bg-blue-100"
            >
              Découvrir notre mission
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
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
            <article className="rounded-2xl border border-gray-200 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Recherche
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Développer une recherche rigoureuse, pertinente et ouverte sur
                les réalités africaines et internationales.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                Formation
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Accompagner les étudiants, chercheurs et professionnels dans
                leur parcours intellectuel et méthodologique.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-200 p-7 shadow-sm">
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

      {/* Formation */}
      <section id="formation" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Formation & accompagnement
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Méthodologie de recherche, accompagnement académique, pédagogie,
            développement de la pensée critique et formation intellectuelle.
          </p>
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
        © {new Date().getFullYear()} Académiques en Action — Tous droits
        réservés.
      </footer>
    </main>
  );
}
