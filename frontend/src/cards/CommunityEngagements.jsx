import { Users } from 'lucide-react'
import React from 'react'

const CommunityEngagements = () => {
  return (
 
<div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

  <div className="flex gap-3 items-center mb-6">
    <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
      <Users className="w-8 h-8 text-orange-500" strokeWidth={2} />
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
      Community Engagements
    </h2>
  </div>

  <ul className="text-gray-600 leading-relaxed space-y-3 list-disc ml-4">

    <li>
      Building strong networks through collaboration and social initiatives.
    </li>

    <li>
      Educating school children on spirituality, pressure handling, life motivation, hands-on practices, and quality lifestyle.
    </li>

    <li>
      Initiatives like yoga, gym exercise, meditation, and open discussion platforms on various topics.
    </li>

    <li>
      Circulating inspiring articles, life stories, achievement stories, and updates on careers, politics, and social affairs.
    </li>

  </ul>

  <div className="w-full mt-6">
    <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
      Get Involved
    </button>
  </div>
</div>

  )
}

export default CommunityEngagements