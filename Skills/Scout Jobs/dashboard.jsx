import { useState, useEffect } from "react";

const STATUS_CONFIG = {
  approved: { label: "✅ Approved", color: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500" },
  applied: { label: "📤 Applied", color: "bg-purple-100 text-purple-800 border-purple-200", dot: "bg-purple-500" },
  waiting: { label: "⏳ Waiting", color: "bg-yellow-100 text-yellow-800 border-yellow-200", dot: "bg-yellow-500" },
  offer: { label: "🎉 Offer", color: "bg-green-100 text-green-800 border-green-200", dot: "bg-green-500" },
  rejected: { label: "❌ Rejected", color: "bg-red-100 text-red-800 border-red-200", dot: "bg-red-500" },
};

const STATUSES = ["approved", "applied", "waiting", "offer", "rejected"];

const TIER_COLORS = {
  1: "bg-amber-100 text-amber-800",
  2: "bg-slate-100 text-slate-600",
};

const SAMPLE_JOBS = [
  {
    id: "1",
    company: "Stripe",
    role: "Staff PM, Link Balance",
    tier: 1,
    score: 9,
    applyUrl: "https://stripe.com/jobs/listing/staff-product-manager-link-balance/7118153",
    dateFound: "2026-02-19",
    status: "approved",
    dateStatusChanged: "2026-02-19",
    contacts: [{ name: "Jorge Lugo", title: "Engineering Manager", linkedinUrl: "https://www.linkedin.com/in/jorge-lugo-96010436/" }],
    outreachSent: false,
    notes: "0→1 scope — global consumer financial platform. Two-sided merchant + consumer ecosystem.",
  },
  {
    id: "2",
    company: "Stripe",
    role: "PM, Commerce Systems",
    tier: 1,
    score: 9,
    applyUrl: "https://stripe.com/jobs/listing/product-manager-commerce-systems/7561551",
    dateFound: "2026-02-19",
    status: "approved",
    dateStatusChanged: "2026-02-19",
    contacts: [{ name: "Clara Liang", title: "PM", linkedinUrl: "#" }],
    outreachSent: false,
    notes: "Merchant fee transparency + reconciliation = direct DoorDash match. 100K+ merchant tools.",
  },
  {
    id: "3",
    company: "Glean",
    role: "Forward Deployed PM",
    tier: 1,
    score: 8,
    applyUrl: "https://job-boards.greenhouse.io/gleanwork/jobs/4659409005",
    dateFound: "2026-02-19",
    status: "applied",
    dateStatusChanged: "2026-02-19",
    contacts: [],
    outreachSent: false,
    notes: "Applied 2/19. Enterprise AI agents — direct match to DoorDash agentic AI + eval framework work.",
  },
  {
    id: "4",
    company: "Stripe",
    role: "PM, Financial Connections — Merchant Experience",
    tier: 1,
    score: 8,
    applyUrl: "https://stripe.com/jobs/listing/product-manager-financial-connections-merchant-experience/7361367",
    dateFound: "2026-02-19",
    status: "approved",
    dateStatusChanged: "2026-02-19",
    contacts: [{ name: "Jorge Lugo", title: "Engineering Manager", linkedinUrl: "https://www.linkedin.com/in/jorge-lugo-96010436/" }],
    outreachSent: false,
    notes: "Voice of the merchant — open finance data + API platform. Strong match to DoorDash merchant tools.",
  },
  {
    id: "5",
    company: "Stripe",
    role: "PM, Local Payment Methods",
    tier: 1,
    score: 7,
    applyUrl: "https://stripe.com/jobs/listing/product-manager-local-payment-methods/7187035",
    dateFound: "2026-02-19",
    status: "approved",
    dateStatusChanged: "2026-02-19",
    contacts: [],
    outreachSent: false,
    notes: "Global merchant growth + Germany expansion angle. Adjacent to core strength.",
  },
  {
    id: "6",
    company: "Anthropic",
    role: "Lead PM, Research",
    tier: 1,
    score: 8,
    applyUrl: "https://job-boards.greenhouse.io/anthropic/jobs/4684257008",
    dateFound: "2026-02-20",
    status: "approved",
    dateStatusChanged: "2026-02-20",
    contacts: [
      { name: "Dianne Na Penn", title: "Product Leader", linkedinUrl: "https://www.linkedin.com/in/dianne-na-penn" },
      { name: "Terry Kim", title: "Recruiter", linkedinUrl: "https://www.linkedin.com/in/terry-kim-28bb1722/" },
      { name: "Albert Huang", title: "PM (ex-DoorDash)", linkedinUrl: "https://www.linkedin.com/in/ahuang267/" },
    ],
    outreachSent: false,
    notes: "0→1 AI research → product. Frontiers team (Claude Code). Cover letter + custom Q answers ready. 3 DoorDash-connected contacts at Anthropic.",
  },
];

function ScoreBadge({ score }) {
  const color = score >= 9 ? "text-emerald-600" : score >= 7 ? "text-blue-600" : "text-slate-500";
  const stars = score >= 9 ? "⭐⭐" : score >= 7 ? "⭐" : "";
  return (
    <span className={`text-sm font-bold ${color}`}>
      {score}/10 {stars}
    </span>
  );
}

function JobCard({ job, onStatusChange, onNotesChange, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [notes, setNotes] = useState(job.notes || "");
  const cfg = STATUS_CONFIG[job.status];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TIER_COLORS[job.tier]}`}>
                Tier {job.tier}
              </span>
              <ScoreBadge score={job.score} />
              {job.outreachSent && (
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">📬 Outreach sent</span>
              )}
            </div>
            <h3 className="font-semibold text-slate-800 text-sm leading-tight">{job.role}</h3>
            <p className="text-slate-500 text-sm">{job.company}</p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <select
              value={job.status}
              onChange={(e) => onStatusChange(job.id, e.target.value)}
              className={`text-xs font-medium px-2 py-1 rounded-lg border cursor-pointer ${cfg.color}`}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>
              ))}
            </select>
            <span className="text-xs text-slate-400">{job.dateFound}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-slate-500 hover:text-slate-700 underline"
          >
            {expanded ? "Hide details" : "Show details"}
          </button>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 underline"
          >
            Apply →
          </a>
          <button
            onClick={() => onDelete(job.id)}
            className="text-xs text-red-400 hover:text-red-600 ml-auto"
          >
            Remove
          </button>
        </div>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
            {job.contacts.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-slate-600 mb-1">👥 Network contacts</p>
                {job.contacts.map((c, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
                    <a href={c.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                      {c.name}
                    </a>
                    <span className="text-slate-400">— {c.title}</span>
                  </div>
                ))}
              </div>
            )}
            <div>
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-slate-600">📝 Notes</p>
                <button onClick={() => setEditing(!editing)} className="text-xs text-blue-500 hover:underline">
                  {editing ? "Save" : "Edit"}
                </button>
              </div>
              {editing ? (
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  onBlur={() => { onNotesChange(job.id, notes); setEditing(false); }}
                  className="w-full text-xs text-slate-700 border border-slate-200 rounded p-2 resize-none"
                  rows={3}
                  autoFocus
                />
              ) : (
                <p className="text-xs text-slate-600">{notes || "No notes yet — click Edit to add"}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AddJobModal({ onAdd, onClose }) {
  const [form, setForm] = useState({
    company: "", role: "", tier: 1, score: 7, applyUrl: "", status: "approved", notes: "",
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleAdd = () => {
    if (!form.company || !form.role) return;
    onAdd({
      ...form,
      id: Date.now().toString(),
      dateFound: new Date().toISOString().slice(0, 10),
      dateStatusChanged: new Date().toISOString().slice(0, 10),
      contacts: [],
      outreachSent: false,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Add Job Manually</h2>
        <div className="space-y-3">
          {[["Company", "company"], ["Role Title", "role"], ["Apply URL", "applyUrl"]].map(([label, key]) => (
            <div key={key}>
              <label className="text-xs font-semibold text-slate-600 block mb-1">{label}</label>
              <input
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2"
                value={form[key]}
                onChange={(e) => set(key, e.target.value)}
                placeholder={label}
              />
            </div>
          ))}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-semibold text-slate-600 block mb-1">Tier</label>
              <select className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2"
                value={form.tier} onChange={(e) => set("tier", parseInt(e.target.value))}>
                <option value={1}>Tier 1</option>
                <option value={2}>Tier 2</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-slate-600 block mb-1">Fit Score</label>
              <input type="number" min={1} max={10} className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2"
                value={form.score} onChange={(e) => set("score", parseInt(e.target.value))} />
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-slate-600 block mb-1">Status</label>
              <select className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2"
                value={form.status} onChange={(e) => set("status", e.target.value)}>
                {STATUSES.map((s) => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 block mb-1">Notes</label>
            <textarea className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 resize-none"
              rows={2} value={form.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button onClick={onClose} className="flex-1 py-2 text-sm border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50">Cancel</button>
          <button onClick={handleAdd} className="flex-1 py-2 text-sm bg-slate-800 text-white rounded-xl hover:bg-slate-700">Add Job</button>
        </div>
      </div>
    </div>
  );
}

export default function JobTracker() {
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const result = await window.storage.get("job-tracker");
        if (result && result.value) {
          const parsed = JSON.parse(result.value);
          setJobs(parsed.jobs || []);
        } else {
          setJobs(SAMPLE_JOBS);
        }
      } catch {
        setJobs(SAMPLE_JOBS);
      }
      setLoaded(true);
    }
    load();
  }, []);

  async function persist(updatedJobs) {
    setSaving(true);
    try {
      await window.storage.set("job-tracker", JSON.stringify({ jobs: updatedJobs }));
    } catch {}
    setSaving(false);
  }

  function updateJobs(updated) {
    setJobs(updated);
    persist(updated);
  }

  function handleStatusChange(id, status) {
    updateJobs(jobs.map((j) => j.id === id ? { ...j, status, dateStatusChanged: new Date().toISOString().slice(0, 10) } : j));
  }

  function handleNotesChange(id, notes) {
    updateJobs(jobs.map((j) => j.id === id ? { ...j, notes } : j));
  }

  function handleDelete(id) {
    updateJobs(jobs.filter((j) => j.id !== id));
  }

  function handleAdd(job) {
    updateJobs([job, ...jobs]);
  }

  async function handleReset() {
    setSaving(true);
    try { await window.storage.delete("job-tracker"); } catch {}
    try { await window.storage.set("job-tracker", JSON.stringify({ jobs: SAMPLE_JOBS })); } catch {}
    setJobs(SAMPLE_JOBS);
    setFilter("all");
    setSaving(false);
  }

  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: jobs.filter((j) => j.status === s).length }), {});
  const filtered = filter === "all" ? jobs : jobs.filter((j) => j.status === filter);

  if (!loaded) return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <p className="text-slate-400 text-sm">Loading your tracker...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {showAdd && <AddJobModal onAdd={handleAdd} onClose={() => setShowAdd(false)} />}

      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800">Job Application Tracker</h1>
            <p className="text-sm text-slate-500 mt-0.5">Vandana Deep · PM Job Search 2026</p>
          </div>
          <div className="flex items-center gap-3">
            {saving && <span className="text-xs text-slate-400">Saving...</span>}
            <button
              onClick={handleReset}
              className="text-sm px-4 py-2 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
            >
              {saving ? "Loading..." : "↺ Load latest scout"}
            </button>
            <button
              onClick={() => setShowAdd(true)}
              className="bg-slate-800 text-white text-sm px-4 py-2 rounded-xl hover:bg-slate-700 transition-colors"
            >
              + Add job
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-3xl mx-auto px-6 py-5">
        <div className="grid grid-cols-5 gap-3 mb-6">
          {STATUSES.map((s) => {
            const cfg = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? "all" : s)}
                className={`rounded-xl border p-3 text-center transition-all ${
                  filter === s ? cfg.color + " ring-2 ring-offset-1 ring-current" : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="text-2xl font-bold text-slate-800">{counts[s]}</div>
                <div className="text-xs mt-0.5 text-slate-500 leading-tight">{cfg.label.split(" ").slice(1).join(" ")}</div>
              </button>
            );
          })}
        </div>

        {/* Filter pill */}
        {filter !== "all" && (
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-3 py-1 rounded-full border font-medium ${STATUS_CONFIG[filter].color}`}>
              {STATUS_CONFIG[filter].label}
            </span>
            <button onClick={() => setFilter("all")} className="text-xs text-slate-400 hover:text-slate-600 underline">
              Clear filter
            </button>
          </div>
        )}

        {/* Job list */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm">No jobs here yet.</p>
            <button onClick={() => setShowAdd(true)} className="mt-3 text-sm text-blue-500 underline">Add one manually</button>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onStatusChange={handleStatusChange}
                onNotesChange={handleNotesChange}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        <p className="text-xs text-slate-400 text-center mt-8">
          Auto-saved across sessions · {jobs.length} total jobs tracked
        </p>
      </div>
    </div>
  );
}
