import { useState } from 'react';
import profileImage from '@images/profile.jpeg';
import { aboutMeData } from '@/data/aboutMeData';

const AboutMeBio = () => {
  const [aboutMe] = useState(aboutMeData);

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img
          src={profileImage}
          className="rounded-lg w-96"
          alt="profile image"
        />
      </div>

      <div className="font-general w-full sm:w-3/4">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeBio;
