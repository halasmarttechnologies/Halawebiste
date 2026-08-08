'use client';

import { memo } from 'react';

/* ─── Content ─────────────────────────────────────────────── */

const DESCRIPTIONS = [
  {
    bold: 'Achieve instant market visibility',
    rest: ' with a data-driven discovery process and precise audience targeting across every channel.',
  },
  {
    bold: 'Convert attention into revenue',
    rest: ' through high-converting campaigns, landing pages, and strategic execution.',
  },
  {
    bold: 'Maximize ROI continuously',
    rest: ' with smart bid adjustments, A/B testing, and transparent growth reporting.',
  },
];

/* ─── Reusable primitives ─────────────────────────────────── */

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border border-[#2a2a2a] rounded-full px-4 lg:px-5 py-2 lg:py-2.5 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.1em] text-[#111] bg-white whitespace-nowrap shrink-0">
      {label}
    </span>
  );
}

function JunctionDot() {
  return (
    <span className="inline-block w-[7px] h-[7px] rounded-full border border-[#2a2a2a] bg-white shrink-0 mx-0.5" />
  );
}

function HLine({ flex = 1 }: { flex?: number }) {
  return <div className="border-t border-[#2a2a2a]" style={{ flex }} />;
}

/* ─── Desktop snake diagram ───────────────────────────────── */
// Layout constants (px)
const ROW_H = 56;
const GAP   = 30;
const CONN_W = 52; // width of the side connector U-bends

function DesktopPipeline() {
  // Vertical centre of each row from the top of the rows-container div
  const r1c = ROW_H / 2;                         // 28
  const r2c = ROW_H + GAP + ROW_H / 2;           // 114
  const r3c = 2 * ROW_H + 2 * GAP + ROW_H / 2;  // 200

  const connH = r2c - r1c; // = ROW_H + GAP = 86 — same for both connectors

  return (
    <div>
      {/* ── Start indicator ── */}
      <div className="flex flex-col items-start pl-1 mb-0">
        {/* Orange target circle */}
        <div className="w-5 h-5 rounded-full border-2 border-[#007FFF] flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#007FFF]" />
        </div>
        {/* Short vertical drop */}
        <div className="w-px h-5 bg-[#2a2a2a] ml-[9px]" />
        {/* Orange arrows going right */}
        <div className="flex items-center">
          <div className="w-3 border-t border-[#2a2a2a]" />
          <span className="text-[#007FFF] text-[11px] font-bold mx-0.5 leading-none">→</span>
          <span className="text-[#007FFF] text-[11px] font-bold mx-0.5 leading-none">→</span>
          <span className="text-[#007FFF] text-[11px] font-bold mx-0.5 leading-none">→</span>
        </div>
      </div>

      {/* ── Rows container (connectors sit in the padding zones) ── */}
      <div
        className="relative"
        style={{ paddingLeft: CONN_W, paddingRight: CONN_W }}
      >
        {/* RIGHT connector: ⊃ shape — top border at r1c, bottom border at r2c */}
        <div
          className="absolute right-0 pointer-events-none"
          style={{
            top:    r1c,
            height: connH,
            width:  CONN_W,
            borderTop:    '1px solid #2a2a2a',
            borderRight:  '1px solid #2a2a2a',
            borderBottom: '1px solid #2a2a2a',
            borderLeft:   'none',
            borderRadius: '0 36px 36px 0',
          }}
        />

        {/* LEFT connector: ⊂ shape — top border at r2c, bottom border at r3c */}
        <div
          className="absolute left-0 pointer-events-none"
          style={{
            top:    r2c,
            height: connH,
            width:  CONN_W,
            borderTop:    '1px solid #2a2a2a',
            borderLeft:   '1px solid #2a2a2a',
            borderBottom: '1px solid #2a2a2a',
            borderRight:  'none',
            borderRadius: '36px 0 0 36px',
          }}
        />

        {/* ROW 1 — left → right: Pill1 then Pill2 */}
        <div
          className="flex items-center relative z-10"
          style={{ height: ROW_H }}
        >
          <HLine flex={1} />
          <Pill label="Discovery &amp; Audit" />
          <HLine flex={2} />
          <JunctionDot />
          <HLine flex={1} />
          <Pill label="Strategy &amp; Roadmap" />
          <HLine flex={1} />
        </div>

        {/* Gap */}
        <div style={{ height: GAP }} />

        {/* ROW 2 — right → left: Pill3 on right, long line to left */}
        <div
          className="flex items-center relative z-10"
          style={{ height: ROW_H }}
        >
          <HLine flex={5} />
          <JunctionDot />
          <HLine flex={1} />
          <Pill label="Execution &amp; Launch" />
          <HLine flex={1} />
        </div>

        {/* Gap */}
        <div style={{ height: GAP }} />

        {/* ROW 3 — left → right: Pill4 then Pill5 */}
        <div
          className="flex items-center relative z-10"
          style={{ height: ROW_H }}
        >
          <HLine flex={1} />
          <JunctionDot />
          <HLine flex={1} />
          <Pill label="Continuous Optimization" />
          <HLine flex={2} />
          <JunctionDot />
          <HLine flex={1} />
          <Pill label="Reporting &amp; Scaling" />
          <HLine flex={1} />
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile vertical flow ────────────────────────────────── */
const MOBILE_STEPS = [
  'Discovery & Audit',
  'Strategy & Roadmap',
  'Execution & Launch',
  'Continuous Optimization',
  'Reporting & Scaling',
];

function MobilePipeline() {
  return (
    <div className="flex flex-col items-start pl-2">
      {/* Start dot */}
      <div className="w-5 h-5 rounded-full border-2 border-[#007FFF] flex items-center justify-center mb-0">
        <div className="w-2 h-2 rounded-full bg-[#007FFF]" />
      </div>

      {MOBILE_STEPS.map((label, i) => (
        <div key={i} className="flex items-start gap-4">
          {/* Vertical track */}
          <div className="flex flex-col items-center pt-0" style={{ width: 20 }}>
            <div className="w-px bg-[#2a2a2a]" style={{ height: 16 }} />
            <div className="w-[7px] h-[7px] rounded-full border border-[#2a2a2a] bg-white shrink-0" />
            {i < MOBILE_STEPS.length - 1 && (
              <div className="w-px bg-[#2a2a2a] flex-1" style={{ minHeight: 36 }} />
            )}
          </div>

          {/* Pill */}
          <div className="pt-[10px] pb-6">
            <span className="inline-flex items-center border border-[#2a2a2a] rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#111] bg-white whitespace-nowrap">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────── */
function HomeWorkflow() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto">

        {/* ── Header (unchanged) ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16">
          <div className="bg-[#007FFF] text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 shadow-sm">
            Our Workflow
          </div>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-[#111111] tracking-tight mb-4 sm:mb-5 max-w-3xl">
            How We Deliver Exponential Growth.
          </h2>
          <p className="text-[#555555] text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            A transparent, human-driven methodology designed to elevate your brand and turn audience attention into measurable revenue.
          </p>
        </div>

        {/* ── Pipeline diagram ── */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl px-6 md:px-10 py-8 md:py-12 mb-10 overflow-hidden">
          <div className="hidden md:block">
            <DesktopPipeline />
          </div>
          <div className="md:hidden">
            <MobilePipeline />
          </div>
        </div>

        {/* ── 3-column descriptions ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 px-1">
          {DESCRIPTIONS.map((d, i) => (
            <p key={i} className="text-[#333] text-sm leading-relaxed">
              <span className="font-bold">{d.bold}</span>
              {d.rest}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(HomeWorkflow);
