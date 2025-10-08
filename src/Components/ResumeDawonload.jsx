import React from "react";
import BackgroundAnimation from "../Page/backgroundanimation";
import Footer from "./Footer";

function ResumeDownload() {
 // Function to trigger download
const handleDownload = () => {
  // Use the path relative to public folder (do NOT include 'public/')
  const resumeUrl = "/MonukumarReact-developer.pdf";

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "MonukumarReact-developer.pdf"; // File name for download
  document.body.appendChild(link); // Append to body
  link.click(); // Trigger download
  document.body.removeChild(link); // Clean up
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
