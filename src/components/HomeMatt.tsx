import "../App.css";
import { useUser } from "../utils/hooks";
import { useState } from "react";
// import Login from "./Login";
// import SearchBar from "./Searchbar";

function HomeMatt() {
  const { user } = useUser();
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center space-y-8 ">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
              SAVR
            </h1>
            <p className="text-xl text-gray-600">Never miss a deal. 💰</p>
          </div>

          {/* <div className="max-w-2xl mx-auto">
            <SearchBar />
          </div> */}

          <div>
            <a
              href={user ? "/track" : "/login"}
              className="inline-block px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 font-medium text-lg rounded-lg shadow-md"
            >
              Start Tracking Now
            </a>
          </div>
          
          <div className="mt-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">See SAVR in Action (2 minutes)</h3>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                {!showVideo ? (
                  <div 
                    className="relative w-full h-full cursor-pointer group"
                    onClick={() => setShowVideo(true)}
                  >
                    <img 
                      src="https://img.youtube.com/vi/c_SR5VyoQfY/sddefault.jpg"
                      alt="SAVR Demo Preview - Never Miss a Deal Again"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to high quality if sd doesn't exist
                        e.currentTarget.src = "https://img.youtube.com/vi/c_SR5VyoQfY/hqdefault.jpg";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-200">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      2:00
                    </div>
                  </div>
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/c_SR5VyoQfY?si=5F00fCm4tmxOtZlW&autoplay=1&hd=1&rel=0&modestbranding=1&quality=hd720"
                    title="SAVR Demo: Never Miss a Deal Again"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <p className=" italic text-gray-700 text-gr">This website is a work in progress — we're continually improving it to support tracking across more websites 👍</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMatt;
