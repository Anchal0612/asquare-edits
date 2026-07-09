export default function MacbookMockup() {
  return (
    <div className="macbook-mockup w-full">
      <div className="macbook-frame rounded-2xl overflow-hidden border border-white/6 shadow-2xl">
        <div className="macbook-screen bg-gradient-to-br from-slate-900/80 to-black p-4 relative">
          <div className="screen-content w-full h-full rounded-lg bg-gradient-to-tr from-cyan-600/30 to-indigo-800/20 backdrop-blur-sm border border-white/6 overflow-hidden flex flex-col">
            <div className="px-4 pt-4 flex items-center justify-between text-xs text-white/80">
              <div className="font-semibold">MySite</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-rose-400" />
              </div>
            </div>

            <div className="flex-1 px-6 py-4 flex gap-4 items-stretch">
              <div className="flex-1 rounded-lg bg-gradient-to-br from-white/6 to-white/2 p-3">
                <div className="h-6 rounded-md bg-gradient-to-r from-cyan-400 to-amber-400 w-3/5 mb-3" />
                <div className="h-28 rounded-md bg-gradient-to-r from-white/8 to-white/4" />
              </div>
              <div className="w-36 rounded-lg bg-white/6 p-3 flex flex-col gap-2">
                <div className="h-6 rounded bg-gradient-to-r from-cyan-400 to-cyan-600" />
                <div className="h-6 rounded bg-gradient-to-r from-amber-400 to-amber-600" />
                <div className="h-6 rounded bg-gradient-to-r from-emerald-400 to-emerald-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="macbook-hinge h-6 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
}
