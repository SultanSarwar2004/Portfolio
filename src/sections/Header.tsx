export const Header = () => {
  return (
    <div>
      <section id="home">
        <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-10">
          <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
            <a href="#home" className="nav-item" aria-label="Home">
              Home
            </a>
            <a href="#projects" className="nav-item" aria-label="Projects">
              Projects
            </a>
            <a href="#about" className="nav-item" aria-label="About">
              About
            </a>
            <a
              href="#contact"
              className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              aria-label="Contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};
