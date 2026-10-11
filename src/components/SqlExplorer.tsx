import React, { useState } from 'react';
import { Database, Copy, Check, Terminal, Play, BarChart2 } from 'lucide-react';
import { SAMPLE_SQL_QUERIES } from '../data/portfolioData';

export const SqlExplorer: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [hasRun, setHasRun] = useState<boolean>(true);

  const activeQuery = SAMPLE_SQL_QUERIES[activeQueryIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeQuery.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock output table representation
  const sampleRfmRows = [
    { id: 'CUST-1048', orders: 8, spend: '₹1,420.50', recency: '12 days', segment: 'Champions (VIP)' },
    { id: 'CUST-2391', orders: 6, spend: '₹980.00', recency: '18 days', segment: 'Champions (VIP)' },
    { id: 'CUST-0842', orders: 4, spend: '₹540.20', recency: '32 days', segment: 'Loyal Customers' },
    { id: 'CUST-1920', orders: 3, spend: '₹310.00', recency: '94 days', segment: 'At-Risk (Churn Risk)' },
    { id: 'CUST-3044', orders: 1, spend: '₹85.00', recency: '110 days', segment: 'Occasional Buyers' },
  ];

  const sampleCategoryRows = [
    { category: 'Outerwear & Clothing', buyers: '1,420', revenue: '₹1,48,200', repeatRate: '41.2%' },
    { category: 'Footwear & Boots', buyers: '980', revenue: '₹92,450', repeatRate: '35.6%' },
    { category: 'Accessories & Bags', buyers: '840', revenue: '₹64,120', repeatRate: '28.9%' },
    { category: 'Seasonal Gear', buyers: '660', revenue: '₹41,300', repeatRate: '19.4%' },
  ];

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              Analytical SQL Pipeline Viewer
            </h4>
            <p className="text-xs text-slate-400">
              Query logic applied to 3,900 retail transaction records
            </p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start sm:self-auto">
          {SAMPLE_SQL_QUERIES.map((q, idx) => (
            <button
              key={q.title}
              onClick={() => {
                setActiveQueryIndex(idx);
                setHasRun(true);
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeQueryIndex === idx
                  ? 'bg-slate-800 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {idx === 0 ? 'RFM Clustering' : 'Cohort Repeat'}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-4">
        {/* Description & Action Bar */}
        <div className="flex items-center justify-between gap-4 text-xs">
          <p className="text-slate-300 font-medium">
            {activeQuery.description}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 text-[11px] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
              <span>{copied ? 'Copied' : 'Copy SQL'}</span>
            </button>
          </div>
        </div>

        {/* Query Box with syntax presentation */}
        <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#070b12] p-4 font-mono text-[11px] sm:text-xs text-slate-300 leading-relaxed overflow-x-auto max-h-56">
          <pre className="whitespace-pre">{activeQuery.sql}</pre>
        </div>

        {/* Sample Execution Output Table */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sample Result Output (First 5 Rows):</span>
            </span>
            <span className="text-slate-500 text-[11px] font-mono">
              PostgreSQL Engine · Executed on 3,900 rows
            </span>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-800">
            {activeQueryIndex === 0 ? (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-400 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="py-2 px-3">Customer ID</th>
                    <th className="py-2 px-3">Orders</th>
                    <th className="py-2 px-3">Total Spend</th>
                    <th className="py-2 px-3">Recency</th>
                    <th className="py-2 px-3">Segment Assigned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 font-mono text-[11px]">
                  {sampleRfmRows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-900/50">
                      <td className="py-2 px-3 text-slate-300 font-medium">{row.id}</td>
                      <td className="py-2 px-3 text-slate-400 tabular-nums">{row.orders}</td>
                      <td className="py-2 px-3 text-white font-semibold tabular-nums">{row.spend}</td>
                      <td className="py-2 px-3 text-slate-400 tabular-nums">{row.recency}</td>
                      <td className="py-2 px-3">
                        <span className={row.segment.includes('VIP') ? 'text-cyan-400' : row.segment.includes('Risk') ? 'text-amber-400' : 'text-slate-300'}>
                          {row.segment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-400 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="py-2 px-3">Category</th>
                    <th className="py-2 px-3">Unique Buyers</th>
                    <th className="py-2 px-3">Gross Revenue</th>
                    <th className="py-2 px-3">Repeat Rate (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 font-mono text-[11px]">
                  {sampleCategoryRows.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-900/50">
                      <td className="py-2 px-3 text-slate-300 font-medium">{row.category}</td>
                      <td className="py-2 px-3 text-slate-400 tabular-nums">{row.buyers}</td>
                      <td className="py-2 px-3 text-white font-semibold tabular-nums">{row.revenue}</td>
                      <td className="py-2 px-3 text-cyan-400 font-semibold tabular-nums">{row.repeatRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
