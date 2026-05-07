import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const BlogSection = () => {
  const [content, setContent] = useState('');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#0F172A] mb-6 font-poppins">
        Create <span className="text-[#F59E0B]">New Blog</span>
      </h1>
      
      <div className="bg-white p-6 rounded-[20px] shadow-sm border border-slate-200">
        <div className="mb-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Blog Title</label>
          <input 
            type="text" 
            placeholder="Enter blog title..." 
            className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-[10px] outline-none focus:border-[#F59E0B]"
          />
        </div>

        <div className="mb-8 h-[300px]">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Content</label>
          <ReactQuill 
            theme="snow" 
            value={content} 
            onChange={setContent} 
            className="h-[200px]"
          />
        </div>

        <button className="mt-12 bg-[#0F172A] text-white px-8 py-3 rounded-[12px] font-bold hover:bg-[#1e293b] transition-all">
          Publish Blog
        </button>
      </div>
    </div>
  );
};

export default BlogSection;