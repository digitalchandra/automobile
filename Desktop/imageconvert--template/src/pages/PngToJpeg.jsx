import { useState } from "react";

function PngToJpeg() {
  const [image, setImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/png") {
      setImage(file);
    } else {
      alert("Please upload a PNG file.");
    }
  };

  const convertToJpeg = () => {
    if (!image) return;
    setProgress(20);
    
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setProgress(50);
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        setProgress(80);
        const jpegUrl = canvas.toDataURL("image/jpeg", 0.9);
        setConvertedImage(jpegUrl);
        setProgress(100);
      };
    };
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">PNG to JPEG Converter</h1>
      <input
        type="file"
        accept="image/png"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={convertToJpeg}
        disabled={!image}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
      >
        Convert to JPEG
      </button>
      {progress > 0 && (
        <div className="w-64 bg-gray-300 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {convertedImage && (
        <div className="mt-4 text-center">
          <img src={convertedImage} alt="Converted" className="max-w-full h-auto rounded border" />
          <a
            href={convertedImage}
            download="converted.jpeg"
            className="block mt-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Download JPEG
          </a>
        </div>
      )}
    </div>
  );
}

export default PngToJpeg;
