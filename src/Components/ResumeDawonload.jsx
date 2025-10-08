import React from "react";
import BackgroundAnimation from "../Page/backgroundanimation";
import Footer from "./Footer";

function ResumeDownload() {
  // Function to trigger download
  const handleDownload = () => {
    // Replace the URL below with the path to your actual resume file
    const resumeUrl = "public/MonukumarReact-developer.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Monu_Kumar_Resume.pdf"; // File name for download
    link.click();
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <BackgroundAnimation />
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Download My Resume
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ResumeDownload;
