const ClientInvoices = () => {
  const invoices = [
    { id: "INV-2026-004", issueDate: "May 12, 2026", amount: "$1,250.00", status: "Unpaid", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { id: "INV-2026-002", issueDate: "Apr 15, 2026", amount: "$2,500.00", status: "Paid", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { id: "INV-2026-001", issueDate: "Mar 01, 2026", amount: "$1,500.00", status: "Paid", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-extrabold text-white mb-2">Invoices & Billing</h1>
        <p className="text-sm text-slate-400">View statement history, dynamic balance summaries, and download receipts.</p>
      </div>

      {/* Invoice Table Container */}
      <div className="bg-[#0F172A]/40 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl">
        <div className="p-6 border-b border-slate-800/60 bg-slate-900/20">
          <h3 className="text-base font-bold text-white">Billing History</h3>
        </div>
        
        {/* Responsive Table wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/80 bg-slate-900/40 text-slate-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Invoice ID</th>
                <th className="py-4 px-6 font-semibold">Issue Date</th>
                <th className="py-4 px-6 font-semibold">Amount Due</th>
                <th className="py-4 px-6 font-semibold">Status</th>
                <th className="py-4 px-6 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
              {invoices.map((inv, i) => (
                <tr key={i} className="hover:bg-slate-800/20 transition-all">
                  <td className="py-4 px-6 font-mono text-xs font-bold text-white">{inv.id}</td>
                  <td className="py-4 px-6 text-slate-400">{inv.issueDate}</td>
                  <td className="py-4 px-6 font-semibold text-slate-200">{inv.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${inv.color}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-xs bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:text-white px-3 py-1.5 rounded-lg font-medium transition-all">
                      📥 PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientInvoices;