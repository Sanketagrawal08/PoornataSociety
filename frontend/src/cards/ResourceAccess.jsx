import { FolderOpen } from 'lucide-react'
import React from 'react'

const ResourceAccess = () => {
  return (
  
<div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

  <div className="flex gap-3 items-center mb-6">
    <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
      <FolderOpen className="w-8 h-8 text-orange-500" strokeWidth={2} />
    </div>

    <h2 className="text-2xl font-bold text-gray-800">
      Resource Access
    </h2>
  </div>

  <ul className="text-gray-600 leading-relaxed space-y-3 list-disc ml-4">

    <li>
      Offering career kits, digital tools, and knowledge platforms to accelerate success.
    </li>

    <li>
      Access to online platforms, AI-driven tools, training videos, community platforms, marketing resources, and digital learning kits.
    </li>

    <li>
      Guidance provided through<strong> ngoindiafoundation</strong> and<strong> poornata</strong> association experts.
    </li>

  </ul>

  <div className="w-full mt-6">
    <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
      Explore Resources
    </button>
  </div>
</div>

  )
}

export default ResourceAccess