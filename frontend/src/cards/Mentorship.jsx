import { Users } from 'lucide-react'
import React from 'react'

const Mentorship = () => {
  return (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

  {/* Icon + Title */}
  <div className="flex gap-3 items-center mb-6">
    <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-1">
      <Users className="w-8 h-8 text-orange-500" strokeWidth={2} />
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
      Mentorship & Guidance
    </h2>
  </div>

  {/* Description */}
  <ul className="text-gray-600 leading-relaxed space-y-3 list-disc ml-4">

    <li>
      Providing personalized support to help youth and individuals achieve their goals.
    </li>

    <li>
      <span className="text-red-600 font-semibold">
        We are looking for counselors or professionals from multiple fields (Finance, Technical, School teachers, Insurance services, News agencies, College students, Medical professionals, Agriculture specialists, Business experts, HR professionals) who want to share knowledge and contribute to uplifting society.
      </span>
    </li>

    <li className="font-semibold text-gray-800">
      Want to offer your knowledge / services / experience to accelerate harmony?
    </li>

    <li>
      Mention the registration link with the offered services — contributors can upload pictures and a brief background.
    </li>

  </ul>

  {/* Button */}
  <div className="w-full mt-6">
    <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
      Join Us
    </button>
  </div>

</div>

  )
}

export default Mentorship