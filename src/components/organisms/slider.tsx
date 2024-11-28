import { TeamMember } from '../../types/Team';
import TeamCard from '../molecules/teamCard';

interface TeamCarouselProps {
  team: TeamMember[];
}

const TeamCarousel: React.FC<TeamCarouselProps> = ({ team }) => {
  return (
    <section className="py-12 px-6 bg-blue-300 text-center">
      <div className="flex space-x-6 overflow-x-auto px-6">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
