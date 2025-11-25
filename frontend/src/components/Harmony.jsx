import React from 'react';
import { GraduationCap, Heart, BookCopyIcon, Users, Handshake, HandshakeIcon, HeartHandshake } from 'lucide-react';
import EducationHarmony from '../cards/EducationHarmony';
import Mentorship from '../cards/Mentorship';
import SkillDevelopmentWorkshop from '../cards/SkillDevelopmentWorkshop';
import ResourceAccess from '../cards/ResourceAccess';
import CommunityEngagements from '../cards/CommunityEngagements';

export default function Harmony() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
      
           <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-500 rounded-full mb-6 shadow-lg">
            <HeartHandshake className="w-10 h-10 text-white" />
          </div>
           <h1 className="text-5xl md:text-5xl font-bold mb-8 text-black ">
            Our Ways to Creating Harmony
          </h1>
           <p className="text-lg md:text-md text-gray-600 max-w-4xl mx-auto">
            We believe in a holistic approach to social welfare, addressing multiple aspects of community life to create lasting positive change.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full  mt-2"></div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

       
          {/* Affordable Education Card */}
<EducationHarmony />


          {/* Card 2 */}
         <Mentorship />

          {/* Card 3 */}
          <SkillDevelopmentWorkshop />
          {/* <div className=""></div> */}

          {/* Card 4 */}
          <ResourceAccess />

          {/* card 5 */}
          <CommunityEngagements />

        </div>
      </div>
    </div>
  );
}
