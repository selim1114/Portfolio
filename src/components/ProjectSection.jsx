import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Firebnb",
    description: "Un clone d'Airbnb avec des fonctionnalités de base fait dans le cadre d'un projet académique.",
    image: "/projects/firebnb.png",
    tags: ["Kotlin", "Android studio"],
    demoUrl: "#",
    githubUrl: "https://github.com/selim1114/FireBnb?tab=readme-ov-file",
  },
  {
    id: 2,
    title: "sharingHelp",
    description:
      "Application mobile de partage de ressources pour les personnes dans le besoin.",
    image: "/projects/sharingHelp.png",
    tags: ["java", "Springboot", "HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/selim1114/Sharing-Help",
  },
  {
    id: 3,
    title: "Firebnb API",
    description:
      "une API RESTful pour une application de location de logements avec la gestion d'authorisation en utilisant AUTH0.",
    image: "/projects/image-Photoroom.png",
    tags: ["Kotlin", "Springboot", "MySQLWorkbench, Auth0"],
    demoUrl: "#",
    githubUrl: "https://github.com/aichasna/firebnb-api",
  },
    {
    id: 4,
    title: "Progression",
    description: "Plateforme éducative visant à rendre l’apprentissage plus fluide et reproductible ",
    image: "/projects/progression.png",
    tags: ["Docker", "Python", "Bash"],
    demoUrl: "",
    githubUrl: "https://git.dti.crosemont.quebec/progression",
  },
];

export const ProjectSection = () => {
return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Mes <span className="text-primary"> projets </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Voici quelques-uns de mes projets récents. Chaque projet a été soigneusement conçu avec une attention particulière aux détails, à la performance et à l'expérience utilisateur.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div
                        key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden flex justify-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className=" h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/selim1114"
                >
                    Visiter mon Github <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
);
};