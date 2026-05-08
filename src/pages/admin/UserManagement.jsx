import React, { useState } from 'react';

const UserManagement = () => {
  // Initial Users State
  const [users, setUsers] = useState([
    { id: 1, name: 'Prinkle Kella', email: 'prinkle@adrite.ai', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Zia Ullah', email: 'zia@adrite.ai', role: 'Intern', status: 'Active' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State - Email yahan add kar diya hai
  const [newUser, setNewUser] = useState({ 
    name: '', 
    email: '', 
    role: 'Client', 
    status: 'Active' 
  });

  // Add User Logic
  const handleAddUser = (e) => {
    e.preventDefault();
    const userWithId = { ...newUser, id: Date.now() };
    setUsers([...users, userWithId]);
    setIsModalOpen(false);
    setNewUser({ name: '', email: '', role: 'Client', status: 'Active' }); // Reset form
  };

  const deleteUser = (id) => {
    if(window.confirm("User delete karein?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-poppins font-bold text-[#0F172A]">
            User <span className="text-[#F59E0B]">Management</span>
          </h1>
          <p className="text-[#64748B] text-sm mt-2">Manage all system users here</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] px-6 py-3 rounded-[12px] font-bold shadow-lg transition-all active:scale-95"
        >
          + Add New User
        </button>
      </div>

      {/* Table Container - Updated with Rounded Corners & Shadow */}
      <div className="bg-[#1E293B] rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden border border-slate-700/50">
        <table className="w-full text-left">
          <thead className="bg-[#0F172A]/80 border-b border-slate-700">
            <tr>
              <th className="p-6 text-xs font-bold text-[#64748B] uppercase tracking-widest">User Details</th>
              <th className="p-6 text-xs font-bold text-[#64748B] uppercase tracking-widest">Role</th>
              <th className="p-6 text-xs font-bold text-[#64748B] uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-white">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#F59E0B] text-[#0F172A] flex items-center justify-center font-bold text-xl shadow-inner">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-base">{user.name}</p>
                      <p className="text-xs text-[#64748B]">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-xs font-bold text-slate-300 bg-slate-700/60 px-4 py-1.5 rounded-full border border-slate-600">
                    {user.role}
                  </span>
                </td>
                <td className="p-6 text-center">
                  <button 
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-[8px] text-xs font-bold transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD USER MODAL - Email Option Added */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#1E293B] p-8 rounded-[24px] shadow-2xl w-full max-w-md border border-slate-700">
            <h2 className="text-2xl font-poppins font-bold text-white mb-6">Create New User</h2>
            
            <form onSubmit={handleAddUser} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-[12px] mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none"
                  placeholder="e.g. Saleha Baig"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  required 
                />
              </div>

              {/* EMAIL INPUT - Ye raha jo missing tha */}
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-[12px] mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none"
                  placeholder="example@adrite.ai"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  required 
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="text-xs font-bold text-[#64748B] uppercase tracking-widest ml-1">User Role</label>
                <select 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-[12px] mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none cursor-pointer"
                  value={newUser.role}
                  onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                >
                  <option value="Client">Client (International)</option>
                  <option value="Intern">Intern (TechNexus)</option>
                  <option value="Admin">Admin (Adrite Team)</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-slate-800 text-slate-400 p-4 rounded-[12px] font-bold hover:bg-slate-700 transition-all"
                >
                  Cancel 
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-[#F59E0B] text-[#0F172A] p-4 rounded-[12px] font-bold hover:bg-[#D97706] shadow-lg transition-all"
                >
                  Save User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;