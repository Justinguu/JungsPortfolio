import React from 'react';

const skills = [
  { icon: "devicon-python-plain-wordmark colored", name: "Python" },
  { icon: "devicon-javascript-plain colored", name: "JavaScript" },
  { icon: "devicon-typescript-plain colored", name: "TypeScript" },
  { icon: "devicon-go-plain-wordmark colored", name: "Go" },
  { icon: "devicon-react-plain-wordmark colored", name: "React" },
  { icon: "devicon-nodejs-plain-wordmark colored", name: "Node.js" },
  { icon: "devicon-openapi-plain colored", name: "OpenAI" },
  { icon: "devicon-mongodb-plain-wordmark colored", name: "MongoDB" },
  { icon: "devicon-flask-plain-wordmark colored", name: "Flask" },
  { icon: "devicon-mysql-plain-wordmark colored", name: "MySQL" },
  { icon: "devicon-postgresql-plain-wordmark colored", name: "PostgreSQL" },
  { icon: "devicon-git-plain-wordmark colored", name: "Git" },
  { icon: "devicon-azure-plain colored", name: "Azure" },
  { icon: "devicon-docker-plain-wordmark colored", name: "Docker" },
  { icon: "devicon-tailwindcss-plain-wordmark colored", name: "Tailwind CSS" },
];

const Technologies: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-3 transition-all duration-300 hover:shadow-xl flex-grow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Technologies</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transform">
            <i className={`${skill.icon} text-2xl mb-2 text-gray-600 dark:text-gray-300`}></i>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;