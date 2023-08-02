import React from 'react';
import Alejandro from '../img/Alejandro.jpg'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../Styles/About.css'

const TeamMember = ({ name, role, description, imageUrl, githubLink, email, linkedin }) => {
    return (
        <div className="team-member">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{description}</p>
            <div className="links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href={`mailto:${email}`}>
                    <FaEnvelope />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

const About = () => {
    const teamMembers = [
        {
            name: 'Jose Franco',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
        },
        {
            name: 'Alejandro Prieto',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
        },
        {
            name: 'Bryan Coaquila',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
          {
            name: 'Rodrigo Amaya',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
          {
            name: 'Julian Tejeda',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
          {
            name: 'Brandon Barrera',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
          {
            name: 'Brian Gelvez',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
          {
            name: 'leidy Sánchez',
            role: 'Programador Full Stack',
            description: 'Experiencia en desarrollo web y aplicaciones.',
            imageUrl: Alejandro,
            githubLink: 'https://github.com/DETNAW11',
            email: 'alejito.prieto05@gmail.com',
            linkedin: 'https://www.linkedin.com/in/luis-alejandro-prieto-torres-992600261/',
          },
    ];

    return (
        <div>
          <h1 className='titulo'>About Programmers</h1>
          <h2 className='subtitulo'>This is our great team of programmers, thanks for your passion and dedication, this project has been successfully consolidated, Thanks.</h2>
          <div className="team">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      );
};

export default About;