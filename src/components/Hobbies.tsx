import React from 'react';

interface Hobby {
  name: string;
  icon: string;
}

const hobbies: Hobby[] = [
  { name: 'Cooking', icon: '🍳' },
  { name: 'Gym', icon: '🏋️‍♂️' },
  { name: 'Reading', icon: '📚' },
  { name: 'Travel', icon: '✈️' },
  { name: 'Swimming', icon: '🏊‍♂️' },
  { name: 'Snowboard', icon: '🏂' },
 



];

interface HobbyCardProps {
  hobby: Hobby;
  index: number;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby, index }) => (
  <div
    className="border border-solid border-[#e5e7eb] rounded-lg shadow-lg p-10 flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 ease-in-out min-h-[180px] w-[120px]"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <span className="text-5xl mb-4">{hobby.icon}</span>
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white max-w-[150px] text-center">{hobby.name}</h2>
  </div>
);
const Hobbies: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in-down">Hobbies</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {hobbies.map((hobby, index) => (
          <HobbyCard key={hobby.name} hobby={hobby} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Hobbies;