import React from 'react';

const Invoices = () => {
  const invoiceData = [
    { id: "INV-001", client: "TechFlow Solutions", date: "10 May 2026", amount: "$1,200", status: "Paid" },
    { id: "INV-002", client: "Green Garden Co.", date: "08 May 2026", amount: "$850", status: "Pending" },
    { id: "INV-003", client: "SkyHigh Agency", date: "05 May 2026", amount: "$2,100", status: "Overdue" },
  ];

  return (
    <div className="p-4 md:p-8 font-inter">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-poppins font-bold text-[#0F172A]">
          Billing & <span className="text-[#F59E0B]">Invoices</span>
        </h1>
        <button className="bg-[#F59E0B] text-[#0F172A] px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-orange-500 transition-all">
          Generate New
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Revenue</p>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-2">$14,500.00</h2>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Pending Clearances</p>
          <h2 className="text-2xl font-bold text-orange-500 mt-2">$2,340.00</h2>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Invoices Sent</p>
          <h2 className="text-2xl font-bold text-[#0F172A] mt-2">24</h2>
        </div>
      </div>

      {/* Invoice Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Invoice ID</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {invoiceData.map((inv) => (
              <tr key={inv.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-bold text-[#0F172A]">{inv.id}</td>
                <td className="px-6 py-4 text-slate-600 font-medium">{inv.client}</td>
                <td className="px-6 py-4 text-slate-400">{inv.date}</td>
                <td className="px-6 py-4 font-bold text-[#0F172A]">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    inv.status === 'Paid' ? 'bg-green-100 text-green-600' : 
                    inv.status === 'Pending' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="text-[#F59E0B] font-bold hover:underline">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;