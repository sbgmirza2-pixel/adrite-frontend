import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Prinkle Kella', email: 'prinkle@adrite.ai', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Zia Ullah', email: 'zia@adrite.ai', role: 'Intern', status: 'Active' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null); // Edit mode tracking
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    role: 'Client'
  });

  // Search Logic
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setFormData({ name: user.name, email: user.email, role: user.role });
    } else {
      setEditingUser(null);
      setFormData({ name: '', email: '', role: 'Client' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      // Update logic
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...formData } : u));
    } else {
      // Add logic
      setUsers([...users, { ...formData, id: Date.now(), status: 'Active' }]);
    }
    setIsModalOpen(false);
  };

  const deleteUser = (id) => {
    if(window.confirm("Kiya aap waqayi is user ko remove karna chahti hain?")) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6 font-inter max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-[#0F172A]">
            User <span className="text-[#F59E0B]">Management</span>
          </h1>
          <p className="text-[#64748B] text-sm mt-2">Manage, search and update system users</p>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
          {/* Search Bar */}
          <div className="relative group">
            <input 
              type="text"
              placeholder="Search by name or email..."
              className="w-full sm:w-64 bg-white border border-slate-200 px-10 py-3 rounded-xl outline-none focus:ring-2 focus:ring-[#F59E0B] transition-all text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-3.5 text-slate-400 group-focus-within:text-[#F59E0B]">🔍</span>
          </div>

          <button 
            onClick={() => handleOpenModal()}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-[#0F172A] px-6 py-3 rounded-xl font-bold shadow-lg transition-all active:scale-95 text-sm"
          >
            + Add New User
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-[#1E293B] rounded-[24px] shadow-2xl overflow-hidden border border-slate-700/50">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead className="bg-[#0F172A]/80 border-b border-slate-700">
              <tr>
                <th className="p-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">User Details</th>
                <th className="p-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Access Role</th>
                <th className="p-6 text-[10px] font-bold text-[#64748B] uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-white">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F59E0B] to-orange-300 text-[#0F172A] flex items-center justify-center font-bold">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{user.name}</p>
                        <p className="text-xs text-[#64748B]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="text-[10px] font-bold text-slate-300 bg-slate-700/60 px-4 py-1.5 rounded-lg border border-slate-600">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => handleOpenModal(user)}
                        className="bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="p-20 text-center text-slate-500 italic">No users found matching your search.</div>
          )}
        </div>
      </div>

      {/* Dynamic Modal (Add/Edit) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-[#1E293B] p-8 rounded-[32px] shadow-2xl w-full max-w-md border border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-poppins font-bold text-white">
                {editingUser ? 'Update User' : 'Create New User'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white text-2xl">&times;</button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-xl mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-xl mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest ml-1">Role</label>
                <select 
                  className="w-full bg-[#0F172A] border border-slate-700 text-white p-4 rounded-xl mt-2 focus:ring-2 focus:ring-[#F59E0B] outline-none cursor-pointer"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                >
                  <option value="Client">Client</option>
                  <option value="Intern">Intern</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  type="submit" 
                  className="flex-1 bg-[#F59E0B] text-[#0F172A] py-4 rounded-xl font-bold hover:bg-[#D97706] shadow-lg transition-all"
                >
                  {editingUser ? 'Save Changes' : 'Create User'}
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