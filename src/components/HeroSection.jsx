"use client";
import SplitText from "./SplitText";
import ShinyText from './ShinyText';
import { ArrowBigDown } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

export const HeroSection = () => {
    return (
        <section 
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                        <SplitText
                            text="Bienvenue,"
                            tag="span"
                            className="block"
                            splitType="chars"
                            delay={20}
                            duration={0.6}
                            ease="power3.out"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.12}
                            rootMargin="-120px"
                        />
                        {" "}
                        <SplitText
                            text="dans mon"
                            tag="span"
                            className="block delay-1"
                            splitType="chars"
                            delay={30}
                            duration={0.6}
                            ease="power3.out"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.12}
                            rootMargin="-120px"
                        />
                        {" "}
                        <SplitText
                            text="Portfolio"
                            tag="span"
                            className="block text-primary delay-2"
                            splitType="chars"
                            delay={50}
                            duration={0.6}
                            ease="power3.out"
                            from={{ opacity: 0, y: 30 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.12}
                            rootMargin="-120px"
                        />
                    </h1>

                    <p>
                        <ShinyText 
                        text="Selim Ben Othman, étudiant en génie logiciel et développeur passionné par la création d'expériences numériques innovantes et performantes." 
                        disabled={false} 
                        speed={5} 
                        className='custom-class text-lg md:text-xl' 
                        />
                    </p>

                    <div>
                        <button className="border-white rounded-full px-6 py-3 bg-#27272a hover:bg-primary/50 duration-500">
                            <a href="#projects">
                                <ShinyText 
                                text="Voir mes projets" 
                                disabled={false} 
                                speed={5} 
                                className='' 
                                />
                            </a>
                        </button>
                    </div>
                </div>
                <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                duration={2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
                >
                    <div className="absolute-10 bottom-10 left-1/2">
                    </div>
                </AnimatedContent>

            </div>

        </section>
    );
};