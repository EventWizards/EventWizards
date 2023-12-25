import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TeamSection = () => {
    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Mohammed_Younis",
            title: "Front End Dev",
            desc: "Enthusiastic junior frontend developer with a passion for creating interactive and visually appealing web applications",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Laith_Alkhriasha",
            title: "Back End Dev",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
       
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-xl text-center mx-auto">
            <h3 className="mb-4 text-center pt-12 left-1/2 font-serif text-3xl font-bold text-[#FE7A00] md:mb-6 md:text-4xl">Our Team </h3>

</div>

                <div className="mt-12">
                    <ul className="grid gap-8 lg:grid-cols-2">
                        {team.map((item, idx) => (
                            <li key={idx} className="gap-8 sm:flex">
                                <div className="w-full h-60">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                    <p className="text-[#FE7A00]">{item.title}</p>
                                    <p className="text-gray-600 mt-2 text-start">{item.desc}</p>
                                    <div className="mt-3 flex gap-4 text-gray-400">
                                        <a href={item.twitter}>
                                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 duration-150 hover:text-[#FE7A00]" />
                                        </a>
                                        <a href={item.github}>
                                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5 duration-150 hover:text-[#FE7A00]" />
                                        </a>
                                        <a href={item.linkedin}>
                                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 duration-150 hover:text-[#FE7A00]" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
