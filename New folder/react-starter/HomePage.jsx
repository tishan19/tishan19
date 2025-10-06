import React from 'react'

export default function HomePage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <header className="p-6 container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Tishan Malinga</h1>
        <nav className="space-x-4">
          <a href="#about" className="opacity-80 hover:opacity-100">About</a>
          <a href="#work" className="opacity-80 hover:opacity-100">Work</a>
        </nav>
      </header>

      <section className="container mx-auto grid md:grid-cols-2 gap-8 items-center p-6">
        <div>
          <h2 className="text-4xl font-extrabold">Hi — I'm Tishan</h2>
          <p className="mt-3 text-slate-300">Photographer • Designer • AI tinkerer</p>
          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold" href="#work">See my work</a>
            <a className="px-4 py-2 rounded-lg border border-slate-600" href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <img src="/images/hero.jpg" alt="hero" className="rounded-2xl shadow-2xl w-full object-cover" />
        </div>
      </section>

      <section id="work" className="container mx-auto p-6">
        <h3 className="text-2xl font-semibold">Selected work</h3>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <article key={i} className="bg-slate-900 rounded-xl p-4">
              <div className="h-44 bg-slate-800 rounded-lg mb-3" />
              <h4 className="font-semibold">Project {i}</h4>
              <p className="text-sm text-slate-400">Short description</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="container mx-auto p-6 text-center text-slate-500">© {new Date().getFullYear()} Tishan</footer>
    </div>
  )
}
