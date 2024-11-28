interface TeamCardProps {
  name: string;
  role: string;
  flag: string;
  skills: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, flag, skills }) => {
  return (
    <div className="min-w-[300px] bg-white rounded-lg shadow-md p-6 hover:shadow-lg">
      <div className="text-xl font-semibold mb-2">
        {name} {flag}
      </div>
      <p className="text-sm text-gray-500 mb-4">{role}</p>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamCard;
