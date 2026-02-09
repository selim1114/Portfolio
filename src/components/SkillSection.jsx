
import LogoLoop from './LogoLoops';
import { useState } from 'react';
import { SiReact, SiDocker, SiNextdotjs, SiTailwindcss, SiJavascript, SiKotlin, SiGithub, } from 'react-icons/si';
 const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
    ];

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org/" },
    { node: <SiGithub />, title: "GitHub", href: "https://github.com/" },
];
const categories = ["tout", "Frontend", "Backend", "Outils"];

const skills = [
    { name: "JavaScript", category: "Frontend" },
    { name: "Kotlin", category: "Backend" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Java", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Docker", category: "Outils" },
    { name: "MySQLWorkbench", category: "Backend" },
    { name: "GitLab", category: "Outils" },
    { name: "Git", category: "Outils" },
    { name: "Figma", category: "Outils" }
    ]
    export const SkillSection = () => {
        const [activeCategory, setActiveCategory] = useState("tout");
        const filteredSkills = skills.filter((skill) => activeCategory === "tout" || skill.category === activeCategory);

    return(
        <section id="skills" className="py-20 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl font-bold mb-12">Mes <span className="text-primary">Compétences</span></h2>
                
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                    <LogoLoop
                        logos={techLogos}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="black"
                        ariaLabel="Technology partners"
                    />
                </div>
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full border ${activeCategory === category ? 'bg-primary text-white border-primary' : 'bg-transparent text-foreground border-foreground/50 hover:bg-primary/10 transition duration-300 hover:scale-105'}`}
                        >
                            {category}
                        </button>
                    ))}

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredSkills.map((skill,key)=>
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div>
                            <h3 className='mb-5 text-center font-semibold text-large'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div className='bg-primary h-2 rounded-full origin-left animate-[grow_0.5s_ease-in-out]' style={{ width: skill.level }}/>

                        </div>
                        <div className='mt-5'>
                            <span className='font-semibold'>{skill.level}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        
        </section>
    );
}