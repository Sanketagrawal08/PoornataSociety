import { Wrench } from 'lucide-react'

const SkillDevelopmentWorkshop = () => {
  return (
    <div className="bg-white rounded-2xl  shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      {/* Icon + Title */}
      <div className="flex gap-3 items-center mb-6">
        <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
          <Wrench className="w-8 h-8 text-orange-500" strokeWidth={2} />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Skill Development Workshops
        </h2>
      </div>

      {/* Description */}
      <ul className="text-gray-600 leading-relaxed space-y-3 list-disc ml-4">
        <li>Equipping learners with practical skills for professional and personal growth.</li>

        <li>
          Seeking experts for job training, construction training, certification programs,
          engineering work training, machinery repairing, bike/car servicing, and soft-skill polishing.
        </li>

        <li>Collaborating with training workshops and companies to uplift youth skill standards.</li>

        <li className="text-red-600 font-semibold">
          Want to be part of an initiative to change someone's life? Please join here.
        </li>
      </ul>

      {/* Button */}
      <div className="w-full mt-6">
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
          Join Initiative
        </button>
      </div>
    </div>  
  )
}

export default SkillDevelopmentWorkshop