import { useState } from "react";

export default function JpegToPng() {
    const [image, setImage] = useState(null);
    const [convertedImage, setConvertedImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "image/jpeg") {
            setImage(file);
        } else {
            alert("Please upload a JPEG file.");
        }
    };

    const convertToPng = () => {
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
                const pngUrl = canvas.toDataURL("image/png");
                setConvertedImage(pngUrl);
                setProgress(100);
            };
        };
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">JPEG to PNG Converter</h1>
            <div className="mb-4 w-full max-w-md bg-white p-4 rounded shadow">
                <input 
                    type="file" 
                    accept="image/jpeg" 
                    onChange={handleImageUpload} 
                    className="w-full p-2 border rounded" 
                />
                <button 
                    onClick={convertToPng} 
                    disabled={!image} 
                    className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
                >
                    Convert to PNG
                </button>
            </div>
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
                    <img src={convertedImage} alt="Converted" className="max-w-full max-h-[500px] rounded border" />
                    <a 
                        href={convertedImage} 
                        download="converted.png" 
                        className="block mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                        Download PNG
                    </a>
                </div>
            )}
            <div className="mt-6 w-full max-w-md h-32 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Google Ads Space</p>
            </div>
        </div>
    );
}