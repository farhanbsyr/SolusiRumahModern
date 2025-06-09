import { useState } from "react";
import { Play } from "lucide-react";

const VideoDemo = () => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className="relative w-full max-w-[500px] h-100 aspect-h-9 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      onClick={() => setPlay(true)}
    >
      {!play ? (
        <img
          src="https://img.youtube.com/vi/A6KPittn6Rw/hqdefault.jpg"
          alt="Thumbnail Video"
          className="w-full h-full object-cover"
        />
      ) : (
        <iframe
          src="https://www.youtube.com/embed/A6KPittn6Rw?autoplay=1"
          title="Cara Menggunakan Gembok Alarm"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" object-cover w-full h-full"
        />
      )}
      {!play && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition">
            <Play className="w-5 h-5 text-white fill-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDemo;
