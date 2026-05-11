import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BlogSection = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  return (
    <div className="p-4 md:p-6 font-inter">
      {/* Title Section */}
      <h1 className="text-2xl md:text-3xl font-poppins font-bold text-[#0F172A] mb-6 md:mb-8 text-center md:text-left">
        Create <span className="text-[#F59E0B]">New Blog</span>
      </h1>

      <div className="bg-white p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-xl border border-slate-200 max-w-4xl mx-auto md:mx-0">
        <div className="space-y-6">
          
          {/* Title Input */}
          <div>
            <label className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest ml-1">
              Article Title
            </label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] p-3 md:p-4 rounded-[12px] md:rounded-[15px] mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none transition-all font-bold text-sm md:text-base"
              placeholder="Enter title here..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* CKEditor Section */}
          <div className="pb-8 md:pb-12">
            <label className="text-[10px] md:text-xs font-bold text-[#64748B] uppercase tracking-widest ml-1 mb-2 block">
              Content
            </label>
            <div className="rounded-[12px] md:rounded-[15px] overflow-hidden border border-slate-200 shadow-inner">
              <CKEditor
                editor={ ClassicEditor }
                data={content}
                onReady={ editor => {
                  editor.editing.view.change( writer => {
                    // Mobile par height thori kam rakhi hai taake button nazar aaye
                    writer.setStyle( 'min-height', '200px', editor.editing.view.document.getRoot() );
                  } );
                } }
                onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  setContent(data);
                } }
                config={{
                  placeholder: "Start writing your magic..."
                }}
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 md:pt-4">
            <button 
              onClick={() => console.log({title, content})}
              className="w-full md:w-auto bg-[#0F172A] text-white px-10 py-4 rounded-[12px] md:rounded-[15px] font-bold hover:bg-[#1E293B] shadow-lg transition-all text-sm md:text-base"
            >
              Publish Article
            </button>
          </div>
        </div>
      </div>

      {/* Editor Styles Adjustment */}
      <style>{`
        .ck-editor__editable {
          background-color: #f8fafc !important;
          border: none !important;
          font-size: 14px; /* Mobile readability */
        }
        @media (min-width: 768px) {
          .ck-editor__editable {
            font-size: 16px;
          }
        }
        .ck-toolbar {
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          background-color: #f1f5f9 !important;
          flex-wrap: wrap !important; /* Toolbar icons wrap on small screens */
        }
      `}</style>
    </div>
  );
};

export default BlogSection;