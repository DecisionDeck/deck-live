import { useState } from 'react';

export default function DemoPage() {
  const [score, setScore] = useState({
    risk: 3,
    clarity: 3,
    flexibility: 3,
    value: 3,
  });

  const average = (score.risk + score.clarity + score.flexibility + score.value) / 4;

  let verdict = 'Needs More Info';
  if (average >= 4) verdict = 'Proceed with Confidence';
  else if (average >= 3) verdict = 'Worth Exploring';
  else verdict = 'High Risk / Reassess';

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold mb-4">🎯 Try DecisionDeck in 60 Seconds</h1>
        <p className="mb-6 text-gray-600">Test a real-world scenario to see how our scoring engine supports executive decisions with clarity and speed.</p>

        <div className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Vendor Transparency</span>
            <input type="range" min="1" max="5" value={score.risk} onChange={e => setScore({...score, risk: parseInt(e.target.value)})} className="w-full" />
          </label>

          <label className="block">
            <span className="text-gray-700">Offer Clarity</span>
            <input type="range" min="1" max="5" value={score.clarity} onChange={e => setScore({...score, clarity: parseInt(e.target.value)})} className="w-full" />
          </label>

          <label className="block">
            <span className="text-gray-700">Negotiation Flexibility</span>
            <input type="range" min="1" max="5" value={score.flexibility} onChange={e => setScore({...score, flexibility: parseInt(e.target.value)})} className="w-full" />
          </label>

          <label className="block">
            <span className="text-gray-700">Perceived Value</span>
            <input type="range" min="1" max="5" value={score.value} onChange={e => setScore({...score, value: parseInt(e.target.value)})} className="w-full" />
          </label>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <h2 className="text-lg font-semibold text-blue-800">Verdict: {verdict}</h2>
          <p className="text-sm text-gray-600 mt-1">Average Score: {average.toFixed(1)} / 5</p>
        </div>
      </div>
    </div>
  );
}
