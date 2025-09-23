
import {Briefcase, Code, User } from "lucide-react"
import MagicBento from './MagicBento'
export const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl '>
            <h2 className='mb-15 text-3xl md:text-4xl text-center font-bold'>
                À propos de <span className='text-primary'>moi</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>
                    Mon parcours
                </h3>
                <p className='text-muted-foreground'>
                    Bonjour ! Développeur web et mobile, je transforme des idées en interfaces fluides et performantes. Diplômé en 2025 en Techniques de l’informatique (développement Web et mobile) au Cégep Rosemont, j’entame ma première année en génie logiciel à l’ÉTS pour renforcer mon approche (architecture, tests, collaboration). J’interviens du front au back avec une attention particulière à l’accessibilité, à la qualité du code et à l’expérience utilisateur. Curieux et rigoureux, je vise des solutions claires, évolutives et bien documentées.
                </p>
                <p className='text-muted-foreground'>
                    Passionné par l’innovation, j’aime explorer de nouvelles technologies et relever des défis techniques. Mon objectif est de créer des produits numériques qui ont un impact positif, en mettant l’accent sur la simplicité, la performance et la satisfaction des utilisateurs. J’accorde aussi une grande importance au travail d’équipe et à la communication pour mener à bien chaque projet.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href="#contacter" className='cosmic-button'>
                    Me contacter
                    </a>

                    <a href="#telecharger" className='px-6 py-2 rounded-full border border-primary text-primary bg-transparent hover:bg-primary/10 transition duration-300 hover:scale-105'>
                    Télécharger mon cv
                    </a>
                </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'> 
                    <Code className='text-primary' size={32} />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-primary/80"> Développement web et mobile </h3>
                        <p className="text-muted-foreground">
                        Création d'applications web et mobiles performantes et intuitives, en utilisant les dernières technologies pour garantir une expérience utilisateur optimale.
                        </p>
                    </div>
                    </div>
                </div>    
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'> 
                    <User className='text-primary' size={32} />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-primary/80"> Collaboration & Communication </h3>
                        <p className="text-muted-foreground">
                        Travail en équipe, écoute active et partage des connaissances pour mener à bien chaque projet et garantir la satisfaction des clients et des utilisateurs.
                        </p>
                    </div>
                    </div>
                </div>   
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                    <div className='p-3 rounded-full bg-primary/10'> 
                    <Briefcase className='text-primary' size={32} />
                    </div>
                    <div className="text-left">
                        <h3 className="font-semibold text-primary/80"> Expérience professionnelle </h3>
                        <p className="text-muted-foreground">
                            Projet d'école : réalisation d'une application complète dans le cadre de ma formation.<br />
                            Stage chez L'Original : participation à des missions concrètes en entreprise, développement de fonctionnalités et collaboration avec l'équipe technique.
                        </p>
                    </div>
                    </div>
                </div>   
                </div>
            </div>

            </div>
        </section>
    )
}