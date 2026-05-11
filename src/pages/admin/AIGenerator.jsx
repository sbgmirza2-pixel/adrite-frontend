import React, { useState } from 'react';

const AIGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [selectedRatio, setSelectedRatio] = useState("1:1");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [history, setHistory] = useState([]);

  const styles = [
    { id: 1, name: "Realistic", icon: "📸" },
    { id: 2, name: "Cyberpunk", icon: "🤖" },
    { id: 3, name: "Anime", icon: "🎋" },
    { id: 4, name: "Oil Painting", icon: "🎨" },
  ];

  const ratios = [
    { name: "1:1", label: "Square" },
    { name: "16:9", label: "Desktop" },
    { name: "9:16", label: "Story" }
  ];

  const handleGenerate = () => {
    if (!prompt) return alert("Kuch toh likho Saleha!");
    
    setIsGenerating(true);
    // Simulating API call
    setTimeout(() => {
      const newImg = `https://picsum.photos/seed/${Math.random()}/800/800`;
      setGeneratedImage(newImg);
      setHistory(prev => [newImg, ...prev].slice(0, 4)); // Sirf last 4 images save hongi
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="p-4 md:p-8 font-inter max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-poppins font-bold text-[#0F172A]">
          AI Image <span className="text-[#F59E0B]">Generator</span>
        </h1>
        <p className="text-slate-500 text-sm">Create high-quality assets for Adrite Agency</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Controls */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Prompt */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Vision Prompt</label>
            <textarea 
              className="w-full h-32 p-4 bg-white border border-slate-200 rounded-[24px] shadow-sm focus:ring-2 focus:ring-[#F59E0B] outline-none transition-all resize-none text-sm text-slate-700"
              placeholder="Describe what you want to see..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Aspect Ratio */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aspect Ratio</label>
            <div className="flex gap-2">
              {ratios.map((r) => (
                <button
                  key={r.name}
                  onClick={() => setSelectedRatio(r.name)}
                  className={`flex-1 py-2 rounded-xl border text-[11px] font-bold transition-all ${
                    selectedRatio === r.name ? 'bg-[#0F172A] text-white' : 'bg-white text-slate-500'
                  }`}
                >
                  {r.label} ({r.name})
                </button>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Art Style</label>
            <div className="grid grid-cols-2 gap-2">
              {styles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.name)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center gap-2 ${
                    selectedStyle === style.name ? 'border-[#F59E0B] bg-orange-50 text-[#F59E0B]' : 'bg-white border-slate-100 text-slate-600'
                  }`}
                >
                  {style.icon} {style.name}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-4 rounded-[20px] font-bold text-[#0F172A] bg-[#F59E0B] hover:bg-orange-500 shadow-lg disabled:opacity-50 transition-all"
          >
            {isGenerating ? "Gemini is Crafting..." : "Generate Masterpiece ✨"}
          </button>
        </div>

        {/* Right Side: Display & History */}
        <div className="lg:col-span-7 space-y-6">
          <div className="w-full aspect-square bg-white rounded-[32px] border border-slate-100 shadow-xl flex items-center justify-center overflow-hidden relative group">
            {isGenerating ? (
              <div className="text-center">
                <div className="w-10 h-10 border-4 border-[#F59E0B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Processing...</p>
              </div>
            ) : generatedImage ? (
              <>
                <img src={generatedImage} alt="AI Result" className="w-full h-full object-cover" />
                <a href={generatedImage} download className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  📥
                </a>
              </>
            ) : (
              <p className="text-slate-300 text-sm italic font-light">Your creative result will appear here</p>
            )}
          </div>

          {/* History Gallery */}
          {history.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recent Creations</h3>
              <div className="flex gap-3">
                {history.map((img, idx) => (
                  <div key={idx} className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform" onClick={() => setGeneratedImage(img)}>
                    <img src={img} className="w-full h-full object-cover" alt="History" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AIGenerator;