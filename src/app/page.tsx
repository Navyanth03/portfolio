import React from "react";
import { Terminal } from "lucide-react";
import MyProjects from "@/components/projects";
import { FaReact, FaNode } from 'react-icons/fa';
import { FlipWordsDemo } from "@/components/words";
import { DockDemo } from "@/components/dock";
import HoverImageComponent from "@/components/skills";
import ContactMe from "@/components/contact";

const projects = [
    { title: 'Payzapp', description: 'A wallet bulit with React, Node', icon: <FaReact className='text-blue-500' /> },
    { title: 'Classroom Manager', description: 'A project built using React, Node', icon: <FaNode className='text-purple-500' /> },
];

const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
          
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hi I am
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">navyanth</h1>   
                </div>
               
                <FlipWordsDemo />
                
                <div className="flex flex-col md:flex-row items-right mt-5 gap-1 md:gap-3">
                    <DockDemo />
                </div>
                    <HoverImageComponent />
                <div>
                    <MyProjects projects={projects} />
                </div>
                <div>
                    <ContactMe />
                </div>
            </div>        
        </section>
    );
};

export default page;