document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menu && nav) menu.addEventListener('click', function () { nav.classList.toggle('open'); });

  const form = document.querySelector('#threshold-start-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const who = data.get('who') || '';
    const need = data.get('need') || '';
    const volume = data.get('volume') || '';
    const timing = data.get('timing') || '';
    let recommendation = 'Family Court Threshold - £495';
    let explanation = 'A first-pass human review of what the records show, what they do not show and what is missing.';

    if (need === 'property') {
      recommendation = 'Property Threshold - Buyer £19 / Seller £29';
      explanation = 'A focused starting-point report for a property decision.';
    } else if (need === 'travel') {
      recommendation = 'ORVIA Travel Ready - £69';
      explanation = 'Important trip information organised into one clear planning picture.';
    } else if (need === 'hearing') {
      recommendation = 'Witness Room - scoped after a free conversation';
      explanation = 'Preparation for a meeting, hearing or formal conversation without scripting or evidence coaching.';
    } else if (who === 'mckenzie') {
      recommendation = 'Professional adviser rate - £395 up to 500 pages';
      explanation = 'For McKenzie Friends and lay advisers needing chronology, indexing and a gap/risk note.';
    } else if (who === 'solicitor' || who === 'care' || need === 'representing') {
      if (volume === 'large') recommendation = 'Professional Evidence Instruction - £1,600 total for 1,500-3,000 pages';
      else if (volume === 'several') recommendation = 'Professional Evidence Instruction - £1,200 total for 500-1,500 pages';
      else recommendation = 'Professional Evidence Instruction - £750 up to 500 pages';
      explanation = 'Professional evidence organisation with a referenced chronology, document index and written gap/risk note.';
    } else if (need === 'records' || need === 'timeline' || volume === 'large' || volume === 'several') {
      recommendation = 'Comprehensive Evidence Readiness Audit - £529';
      explanation = 'A referenced chronology, evidence index and gaps/contradictions report.';
    }

    const result = document.querySelector('#start-result');
    if (result) {
      result.style.display = 'block';
      result.textContent = 'Based on what you have said: ' + recommendation + '. ' + explanation + (timing === 'urgent' ? ' Because you selected urgent, call 0330 043 3703 before sending material so we can confirm the timescale.' : '');
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});