import ProjectCard from "../component/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Website Portofolio Pribadi",
    desc: "Aplikasi SPA yang menampilkan profil, daftar proyek, dan formulir kontak.",
    image: "/image/project-portofolio.png",
    tech: ["React", "React Router", "CSS"],
    githubUrl: "https://github.com/username/portofolio-react",
    demoUrl: "https://portofolio-saya.vercel.app",
  },
  {
    id: 2,
    title: "Aplikasi Catatan Sederhana",
    desc: "Aplikasi pencatat tugas harian dengan penyimpanan lokal.",
    image: "/image/project-catatan.png",
    tech: ["React", "useState", "localStorage"],
    githubUrl: "https://github.com/username/catatan-app",
    demoUrl: "https://catatan-app-demo.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Proyek Saya</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;