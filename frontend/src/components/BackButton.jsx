import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute top-6 left-6 flex items-center gap-2 px-3 py-2
                 rounded-lg bg-white shadow-md border hover:bg-gray-50 transition"
    >
      <ArrowLeft className="w-5 h-5" />
      Back
    </button>
  );
}
