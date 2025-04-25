'use client';

import { useState } from "react";

export default function SummaryPage() {
  const [summary] = useState({
    verdict: "Proceed with conditions",
    avg: 8.2,
    confidence: 4,
    segment: "Vendor Evaluation",
    pastedOffer: "Proposal includes $4,500/mo retainer with 3-month review clause.",
    notes: "Watch for scope creep. Recommend tying KPIs to performance."
  });

  return (
    <div style={{ fontFamily: 'Arial', padding: 40 }}>
      <h1>Decision Summary</h1>
      <p><strong>Verdict:</strong> {summary.verdict}</p>
      <p><strong>Score:</strong> {summary.avg} / 10</p>
      <p><strong>Confidence:</strong> {summary.confidence} / 5</p>
      <p><strong>Segment:</strong> {summary.segment}</p>
      <p><strong>Offer Details:</strong> {summary.pastedOffer}</p>
      <p><strong>Notes:</strong> {summary.notes}</p>
    </div>
  );
}