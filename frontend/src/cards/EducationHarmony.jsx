import { BookCopyIcon } from "lucide-react";
import React from "react";

const EducationHarmony = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">

      <div className="flex gap-2 justify-center items-center mb-4">
        <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-3">
          <BookCopyIcon className="w-8 h-8 text-orange-500" strokeWidth={2} />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          Affordable Education
        </h2>
      </div>

      {/* Description */}
      <ul className="text-gray-600 leading-relaxed space-y-2 list-disc ml-4">
        <li>
          Making quality learning accessible to all, regardless of financial background.
          <strong> (Donate for poor children to provide better education resources)</strong>
        </li>

        <li>
          <strong>
            Donate for Education, invest for <br /> Wisdom — True knowledge alone is enough for transformation
          </strong>
        </li>

        <li>
          Providing essential resources like stationery, sports materials, school uniforms, and clean classrooms.
        </li>

        <li>
          Visiting village schools regularly to identify problems faced by students and teachers, and working to resolve them.
        </li>

        <li>
          Our members continuously monitor schools and report shortages, maintenance needs, or quality issues.
        </li>
      </ul>

      {/* Fixed Button */}
      <div className="w-full mt-6">
        <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
          Donate Now
        </button>
      </div>

    </div>
  );
};

export default EducationHarmony;
