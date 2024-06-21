import React from 'react';
import negbuy from "../assets/negbuy.jpg";
import awc from "../assets/awc.png";

const experiences = [
    {
        key: 1,
        company: 'Negbuy Pvt. Ltd.',
        duration: 'March 2024 – Current',
        position: 'Backend Developer',
        location: 'Sector-3, Noida, UP, India',
        responsibilities: [
            'E-commerce Backend Development: Contributed to both seller and buyer side websites',
            'API Development and Management: Created and managed 50+ APIs, including API integrations with Razorpay, Stripe, and PayPal. Developed a fast & functional search bar and a synchronous chat application for product negotiations, optimized 5+ APIs, managed database migrations, and handled cron jobs',
            'Caching Implementation: Implemented Redis and LocMemCache Caching for faster data access',
            'Server Management: Managed backend server hosted on cPanel using PuTTY'
        ],
        logo: negbuy,
        link: 'https://drive.google.com/file/d/173NdArqtwuGLtiwk_SFpr4YkIdfz0QyI/view'
    },
    {
        key: 2,
        company: 'AWC Software Pvt. Ltd',
        duration: 'June 2023 – August 2023',
        position: 'Django Trainee',
        location: 'Sector-60, Noida, UP, India',
        responsibilities: [
            'As a trainee, collaborated with web developers to develop backend APIs for seamless integration with AngularJS and ReactJS frontends for international clients, and created programs to automate data flow'
        ],
        logo: awc,
        link: 'https://drive.google.com/file/d/1me9cslCzs32ccRFL0kgNkqTwD0VjzOrp/view'
    }
];

export default function Experience() {
    return (
        <div name="experience" className='bg-gray-900 text-gray-300 py-10'>
            <div className='max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='mb-8 '>
                    <p className='text-3xl py-3 font-bold inline border-b-4 rounded-sm border-pink-600 sm:text-4xl'>Experience</p>

                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {experiences.map((experience) => (
                        <a key={experience.key} href={experience.link} target="_blank" rel="noopener noreferrer" className='block'>
                            <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300'>
                                <img className='w-full h-56 object-cover' src={experience.logo} alt={`${experience.company} logo`} />
                                <div className='p-6'>
                                    <h3 className='text-xl font-bold mb-2'>{experience.company}</h3>
                                    <p className='text-md italic mb-2'>{experience.position}</p>
                                    <p className='text-sm text-gray-400 mb-4'>{experience.duration}</p>
                                    <p className='text-sm mb-4'>{experience.location}</p>
                                    <ul className='list-disc list-inside text-sm'>
                                        {experience.responsibilities.map((task, index) => (
                                            <li key={index} className='mb-1'>{task}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
