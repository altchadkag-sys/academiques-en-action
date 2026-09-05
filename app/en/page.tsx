export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================
          HEADER
      ========================= */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

          <a href="#home" className="flex items-center">
            <img
              src="/logo-academiques.png"
              alt="Académiques en Action"
              className="h-20 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#home" className="transition hover:text-blue-800">
              Home
            </a>
            <a href="#mission" className="transition hover:text-blue-800">
              Mission
            </a>
            <a href="#about" className="transition hover:text-blue-800">
              About
            </a>
            <a href="#founder" className="transition hover:text-blue-800">
              Founder
            </a>
            <a href="#research" className="transition hover:text-blue-800">
              Research
            </a>
            <a href="#training" className="transition hover:text-blue-800">
              Training
            </a>
            <a href="#publications" className="transition hover:text-blue-800">
              Publications
            </a>
            <a href="#council" className="transition hover:text-blue-800">
              Scientific Council
            </a>
            <a href="#partnerships" className="transition hover:text-blue-800">
              Partnerships
            </a>
            <a href="#contact" className="transition hover:text-blue-800">
              Contact
            </a>
          </nav>

          <a
            href="/"
            className="rounded-md border border-blue-900 px-3 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-900 hover:text-white"
          >
            Français
          </a>
        </div>
      </header>


      {/* =========================
          HERO
      ========================= */}
    <section
  id="home"
  className="relative min-h-[620px] overflow-hidden text-white"
>
       <img
  src="/hero-bibliotheque.png"
  alt="Open book in front of a university library"
  className="absolute inset-0 h-full w-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-36">
          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
              Académiques en Action
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Transforming Ideas into Scientific Contribution
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              Laboratory R & RA — Reflection & African Reference
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100">
              A Pan-African research and knowledge platform dedicated to
              intellectual reflection, scientific production, education,
              research and the advancement of African knowledge.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#research"
                className="rounded-md bg-yellow-500 px-6 py-3 font-semibold text-blue-950 transition hover:bg-yellow-400"
              >
                Discover Our Research
              </a>

              <a
                href="#training"
                className="rounded-md border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-950"
              >
                Explore Our Training
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================
          MISSION
      ========================= */}
      <section id="mission" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Knowledge in Action
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Académiques en Action seeks to transform academic reflection
              into concrete scientific, educational and social contributions.
              Our mission is to create a space where researchers, students,
              educators and intellectuals can think, exchange, produce and
              contribute to the development of Africa and its global
              intellectual presence.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-bold text-yellow-500">01</div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Think
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Encourage critical reflection and independent intellectual
                inquiry on major African and global issues.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-bold text-yellow-500">02</div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Research
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Produce and disseminate rigorous academic research grounded
                in African realities and perspectives.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-bold text-yellow-500">03</div>
              <h3 className="mt-4 text-xl font-bold text-blue-950">
                Contribute
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Connect knowledge with education, society and decision-making
                in order to generate meaningful contributions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          ABOUT
      ========================= */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
                About Us
              </p>

              <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
                A Laboratory for Reflection and African Reference
              </h2>

              <p className="mt-6 leading-8 text-gray-700">
                Académiques en Action is a Pan-African intellectual and
                research initiative based in Montreal. It brings together
                reflection, research, education and knowledge dissemination
                around questions that concern Africa and its place in the
                contemporary world.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Through its Laboratory R & RA — Reflection & African
                Reference — the initiative seeks to develop a rigorous,
                accessible and engaged approach to knowledge.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                The project aims to evolve progressively toward a think tank
                dedicated to African studies, education, geopolitics,
                knowledge production and intellectual development.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-950 p-10 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Building an African intellectual space that thinks, produces
                and acts.
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                We believe that African societies need spaces where knowledge
                is not only consumed, but also produced, questioned,
                documented and transformed into action.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FOUNDER
      ========================= */}
      <section id="founder" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Leadership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Founder & Director
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
  <img
    src="/Fondateur 1.png"
    alt="Dr. Samson N'Taadjèl KAGMATCHÉ, Founder and Director"
    className="h-auto w-full object-cover"
  />

  <div className="border-t-4 border-yellow-400 bg-blue-950 p-6 text-white">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
      Founder and Director
    </p>

    <h3 className="mt-3 text-2xl font-bold">
      Dr. Samson N'Taadjèl KAGMATCHÉ
    </h3>

    <p className="mt-3 text-sm leading-7 text-blue-100">
      Académiques en Action — R & RA Laboratory
    </p>
  </div>
</div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
                Dr. Samson N'Taadjèl KAGMATCHÉ
              </p>

              <h3 className="mt-3 text-3xl font-bold text-blue-950">
                Founder and Director
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                Dr. Samson N'Taadjèl KAGMATCHÉ is a researcher, educator and
                author whose academic interests intersect theology, archaeology,
                education, African studies, geopolitics and the production of
                knowledge.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                Through Académiques en Action, he seeks to create an
                intellectual platform where academic knowledge can be placed
                at the service of reflection, research, education and society.
              </p>

              <div className="mt-8 border-l-4 border-yellow-500 pl-6">
                <p className="text-lg font-semibold italic text-blue-950">
                  “Transforming ideas into scientific contribution.”
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          RESEARCH
      ========================= */}
      <section id="research" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Research
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Research & Intellectual Reflection
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              Our research activities explore African realities through
              interdisciplinary perspectives, connecting history, education,
              geopolitics, theology, society and knowledge.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* Research Area 1 */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                Research Area 01
              </span>

              <h3 className="mt-4 text-2xl font-bold text-blue-950">
                The Chronicle of Knowledge
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                A space dedicated to history, ideas, intellectual traditions,
                culture and the evolution of knowledge in Africa and beyond.
              </p>

              <p className="mt-4 font-semibold text-blue-900">
                96 episodes
              </p>
            </article>

            {/* Research Area 2 */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                Research Area 02
              </span>

              <h3 className="mt-4 text-2xl font-bold text-blue-950">
                Geopolitics of Knowledge
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                An analytical space examining power, knowledge, international
                relations, geopolitical transformations and Africa's position
                in the contemporary world.
              </p>

              <p className="mt-4 font-semibold text-blue-900">
                96 episodes
              </p>
            </article>

            {/* Research Area 3 */}
            <article className="rounded-xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-600">
                Research Area 03
              </span>

              <h3 className="mt-4 text-2xl font-bold text-blue-950">
                Education Sciences in Africa
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Research and reflection on education systems, learning,
                teaching, teacher development and the transformation of
                education in African societies.
              </p>

              <p className="mt-4 font-semibold text-blue-900">
                96 episodes
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* =========================
          TRAINING
      ========================= */}
      <section id="training" className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Training
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Academic Tutoring
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              A structured support program designed for Master's and
              doctoral students seeking methodological guidance and academic
              development.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-blue-800 bg-blue-900 p-8 shadow-xl md:p-12">

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <p className="text-sm uppercase tracking-wider text-yellow-400">
                  Duration
                </p>
                <p className="mt-2 text-2xl font-bold">
                  8 Weeks
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-yellow-400">
                  Schedule
                </p>
                <p className="mt-2 text-2xl font-bold">
                  2 Hours / Week
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-yellow-400">
                  Level
                </p>
                <p className="mt-2 text-2xl font-bold">
                  Master's & Ph.D.
                </p>
              </div>

            </div>

            <div className="mt-10 border-t border-blue-700 pt-8">
              <h3 className="text-2xl font-bold">
                Academic Support from Research Question to Final Manuscript
              </h3>

              <p className="mt-4 leading-8 text-blue-100">
                The tutoring program provides guidance in research design,
                problem formulation, literature review, methodology,
                organization of academic writing and preparation of a
                coherent research project.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-md bg-yellow-500 px-6 py-3 font-semibold text-blue-950 transition hover:bg-yellow-400"
              >
                Contact Us About Training
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          PUBLICATIONS
      ========================= */}
      <section id="publications" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Publications
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Scientific & Literary Publications
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              Discover selected publications, research contributions and
              intellectual works associated with the Founder and the
              Académiques en Action initiative.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-white p-8 shadow-lg md:p-10">

            <div className="flex flex-col gap-8 md:flex-row md:items-center">

              <div className="flex h-40 w-32 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-center text-white shadow-md">
                <span className="px-3 text-sm font-semibold">
                  Guérin Scholar's Press
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                  Selected Publication
                </p>

                <h3 className="mt-2 text-2xl font-bold text-blue-950">
                  From the Rose to the Bramble
                </h3>

                <p className="mt-1 italic text-gray-600">
                  De la Rose à la Ronce
                </p>

                <p className="mt-5 leading-7 text-gray-700">
                  A literary work exploring a journey between Africa and
                  Europe, identity, memory, migration and the complex paths
                  of an individual navigating different worlds.
                </p>

                <p className="mt-5 font-semibold text-blue-900">
                  Author: Dr. Samson N'Taadjèl KAGMATCHÉ
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================
          SCIENTIFIC COUNCIL
      ========================= */}
      <section id="council" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Governance
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Scientific Council
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              The Scientific Council is envisioned as a multidisciplinary
              advisory body bringing together scholars and specialists whose
              expertise can contribute to the scientific orientation and
              development of the Laboratory R & RA.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
                SC
              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Academic Expertise
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Supporting the quality and relevance of research orientations.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
                RS
              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Research Strategy
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Contributing to the development of research priorities and
                scientific programs.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-950 text-xl font-bold text-yellow-400">
                AC
              </div>

              <h3 className="mt-5 text-xl font-bold text-blue-950">
                Academic Collaboration
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Building bridges between researchers, institutions and
                knowledge networks.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          PARTNERSHIPS
      ========================= */}
      <section id="partnerships" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-600">
              Partnerships
            </p>

            <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">
              Building Knowledge Partnerships
            </h2>

            <p className="mt-6 leading-8 text-gray-700">
              Académiques en Action is open to academic, institutional,
              scientific and civil-society partnerships that support research,
              education and the dissemination of knowledge.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Universities
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Collaboration with universities, departments, laboratories
                and academic researchers.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Research Institutions
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Joint research, scientific exchanges and knowledge-sharing
                initiatives.
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-blue-950">
                Organizations
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Partnerships supporting education, social development and
                intellectual initiatives.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block rounded-md bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
            >
              Discuss a Partnership
            </a>
          </div>

        </div>
      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section id="contact" className="bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Let's Build Knowledge Together
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-blue-100">
                Whether you are a researcher, student, institution,
                organization or potential partner, we welcome opportunities
                for dialogue and collaboration.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                    Location
                  </p>
                  <p className="mt-1 text-blue-100">
                    Montreal, Quebec, Canada
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                    Organization
                  </p>
                  <p className="mt-1 text-blue-100">
                    Académiques en Action — Laboratory R & RA
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                    Email
                  </p>
                  <p className="mt-1 text-blue-100">
                    Contact us through the Académiques en Action platform.
                  </p>
                </div>

              </div>
            </div>


            <div className="rounded-2xl bg-white p-8 text-gray-900 shadow-xl">

              <h3 className="text-2xl font-bold text-blue-950">
                Send a Message
              </h3>

              <div className="mt-6 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Your message"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-900"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-md bg-blue-950 px-6 py-3 font-semibold text-white transition hover:bg-blue-900"
                >
                  Send Message
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          FOOTER
      ========================= */}
      <footer className="border-t border-blue-900 bg-blue-950 py-8 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

            <div>
              <p className="font-semibold">
                Académiques en Action
              </p>

              <p className="mt-1 text-sm text-blue-200">
                Laboratory R & RA — Reflection & African Reference
              </p>
            </div>

            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} Académiques en Action. All rights reserved.
            </p>

          </div>

        </div>
      </footer>

    </main>
  );
}
