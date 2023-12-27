import { Heading } from "@chakra-ui/react";

export default function Projects() {
    const projectsitem = [
        {
            title: 'PennOS',
            description: 'A User-Level UNIX-like Operating System',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'InCHI Molecular Translation',
            description: 'Chemical Image Captioning with Deep Learning',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Lens Renderer',
            description: 'Interactive Magnifying Lens Renderer with WebGL',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Learned Spatial Keyword Index',
            description: 'Final Year Thesis project about learned spatial keyword indexes',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Lecture Notes',
            description: 'Typed Lecture Notes at HKUST',
            icon: 'https://placehold.co/40x40'
        },
        {
            title: 'Robocon 2019',
            description: 'Autonomous Quadruped Horse Robot',
            icon: 'https://placehold.co/40x40'
        }
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center border-b-2 border-gray-200 py-4">
                <Heading>Projects</Heading>
                <button className="text-blue-600 hover:text-blue-800">View all</button>
            </div>
            <div className="divide-y divide-gray-200">
                {projectsitem.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

function Project({ title, description, icon }) {
    return (
        <div className="flex items-center space-x-4 py-2">
            <img src={icon} alt={`Icon representing the project ${title}`} className="w-10 h-10" />
            <div>
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-gray-600">{description}</div>
            </div>
        </div>
    );
}