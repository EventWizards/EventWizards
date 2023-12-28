import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

const TeamSection = () => {
    const team = [
        {
            avatar: "https://cdn.discordapp.com/attachments/1166333260134096896/1189853799284740226/IMG_0271.jpg?ex=659facb4&is=658d37b4&hm=0e69fa576736aa238220c86af127040df0f394558e8f4e8c156bb304f0846a9e&",
            name: "Mohammed_Younis",
            title: "Front End Dev",
            desc: "Enthusiastic junior frontend developer with a passion for creating interactive and visually appealing web applications",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://cdn.discordapp.com/attachments/1166333260134096896/1189863289673502800/WhatsApp_Image_2023-12-28_at_12.31.29_PM.jpeg?ex=659fb58a&is=658d408a&hm=c61d3c2a6834a3bcff3bf31e3e09e770e4154159148e7e4d5db50117b380315d&",
            name: "Laith_Alkhriasha",
            title: "Back End Dev",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
       
    ];

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <section data-aos="flip-down" className="py-14">
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
