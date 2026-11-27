/* Kentucky Cutups for PFF Ultimate — built 2026-11-27T15:10:31.753Z. Loaded by the bookmark buttons; see README. */
(function(){
if (location.hostname !== 'ultimate.pff.com') { alert('Open PFF Ultimate (ultimate.pff.com) first, then click this button.'); return; }
var mode = window.__kcMode || 'open';
window.KC_PLAN = {"FACTORS":[{"code":"SIZ","name":"Size / Frame"},{"code":"ATH","name":"Athletic Ability"},{"code":"SPD","name":"Play Speed"},{"code":"STR","name":"Play Strength"},{"code":"TGH","name":"Toughness / Competes"},{"code":"INS","name":"Football Instincts"}],"POSITIONS":[{"code":"QB","title":"Quarterback","rows":[{"name":"Clean Pocket","filter":"Role (Player) = Passer · Pocket = Clean · Pressure OFF","plays":7,"best":4,"worst":2,"recent":1,"cf":["INS"]},{"name":"Under Pressure","filter":"Role (Player) = Passer · Pressure ON | Pressure OFF · Blitz ON","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","ATH","STR","TGH"]},{"name":"Short Throws","filter":"Role (Player) = Passer · Targeted Depth = Behind LOS, 1–9","plays":5,"best":2,"worst":2,"recent":1,"cf":[]},{"name":"Intermediate & Deep","filter":"Role (Player) = Passer · Targeted Depth = 10–19, 20+","plays":7,"best":4,"worst":2,"recent":1,"cf":["INS"]},{"name":"On the Move","filter":"Role (Player) = Passer · Dropback Type = all Roll / Scramble | Dropback Type = Straight Drop · Play Action ON","plays":5,"best":2,"worst":2,"recent":1,"cf":["ATH","SPD"]},{"name":"Run Threat","filter":"Role (Player) = Ball carrier (scrambles + designed runs)","plays":5,"best":2,"worst":2,"recent":1,"cf":["ATH","SPD","STR","TGH"]},{"name":"BTT & TWP","filter":"Result (Player) = Big time throw, Turnover worthy play","plays":5,"best":3,"worst":2,"recent":null,"note":"Outcome-defined: top big-time throws + most costly turnover-worthy plays","cf":["TGH","INS"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"RB","title":"Running Back","rows":[{"name":"Top MPH","filter":"PFF IQ Athleticism: 20+ MPH plays, then 15+ MPH (longest gain first)","plays":3,"best":null,"worst":null,"recent":null,"ranked":true,"note":"Ranked: PFF IQ 20+ MPH plays first, then 15+ MPH, longest gain first","cf":["SPD"]},{"name":"Explosive Runs","filter":"Role (Player) = Ball carrier · Explosive Play ON · next 3 longest","plays":3,"best":null,"worst":null,"recent":null,"ranked":true,"note":"Ranked: next 3 longest runs PFF tags Explosive, longest first","cf":["ATH","SPD"]},{"name":"Missed Tackles Forced","filter":"Missed Tackle Forced Type (Player) = Missed, Broken","plays":6,"best":6,"worst":null,"recent":null,"note":"Positive by definition: highest-graded broken / missed tackles first","cf":["ATH"]},{"name":"Zone Runs","filter":"Role (Player) = Ball carrier · Run Concept = Inside Zone, Outside Zone","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","INS"]},{"name":"Gap / Power Runs","filter":"Role (Player) = Ball carrier · Run Concept = Power, Counter, Man, Trap, Pull Lead","plays":6,"best":3,"worst":2,"recent":1,"cf":["STR"]},{"name":"Short Yardage / Goal Line","filter":"Role (Player) = Ball carrier · Distance = 1–2 | Goal to Go ON","plays":5,"best":2,"worst":2,"recent":1,"cf":["SIZ","STR","TGH"]},{"name":"Routes & Targets","filter":"Role (Player) = Target receiver, Running a route","plays":6,"best":3,"worst":2,"recent":1,"cf":["TGH"]},{"name":"Pass Pro","filter":"Role (Player) = Pass blocker","plays":6,"best":3,"worst":2,"recent":1,"cf":["SIZ","TGH","INS"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]}]},{"code":"WR","title":"Wide Receiver","rows":[{"name":"Explosive Receptions","filter":"Result (Player) = Reception · Gain = 15+ yards","plays":5,"best":null,"worst":null,"recent":null,"cf":["SPD","ATH"],"ranked":true,"note":"Ranked: longest catch first"},{"name":"Best RAC","filter":"Result (Player) = Reception · after-catch yards or missed tackles forced","plays":4,"best":null,"worst":null,"recent":null,"cf":["ATH","STR"],"ranked":true,"note":"Ranked: most missed tackles forced first, then most yards after catch"},{"name":"Best Contested Catches","filter":"Result (Player) = Contested target + Reception","plays":3,"best":null,"worst":null,"recent":null,"cf":["SIZ","STR","TGH"],"ranked":true,"note":"Ranked: longest contested catch first"},{"name":"vs. Press","filter":"Role (Player) = vs Press coverage","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","STR"]},{"name":"Targets vs. Man","filter":"Role (Player) = Target receiver · Coverage Scheme = Cover-0, Cover-1, Cover 2-Man","plays":4,"best":2,"worst":1,"recent":1,"cf":["ATH","INS"]},{"name":"Targets vs. Zone","filter":"Role (Player) = Target receiver · Coverage Scheme = Cover-2, Cover-3, Quarters, Cover-6","plays":4,"best":2,"worst":1,"recent":1,"cf":["INS"]},{"name":"Deep Targets","filter":"Role (Player) = Target receiver · Targeted Depth = 20+","plays":4,"best":2,"worst":1,"recent":1,"cf":["ATH","SPD"]},{"name":"Contested & Drops","filter":"Result (Player) = Contested target, Dropped pass targeted","plays":3,"best":1,"worst":2,"recent":null,"note":"Contested wins (best) + drops (worst)","cf":["SIZ","STR","TGH"]},{"name":"RAC","filter":"Result (Player) = Reception","plays":4,"best":2,"worst":1,"recent":1,"cf":["SPD"]},{"name":"Perimeter Blocking","filter":"Role (Player) = Run blocker","plays":4,"best":2,"worst":1,"recent":1,"cf":["SIZ","STR","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"TE","title":"Tight End","rows":[{"name":"Targets vs. Man","filter":"Role (Player) = Target receiver · Coverage Scheme = Cover-0, Cover-1, Cover 2-Man","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH"]},{"name":"Targets vs. Zone","filter":"Role (Player) = Target receiver · Coverage Scheme = Cover-2, Cover-3, Quarters, Cover-6","plays":5,"best":2,"worst":2,"recent":1,"cf":["INS"]},{"name":"Seam & Deep","filter":"Role (Player) = Target receiver · Targeted Depth = 10–19, 20+","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","SPD"]},{"name":"Contested, Drops & RAC","filter":"Result (Player) = Contested target, Dropped pass targeted, Reception","plays":6,"best":4,"worst":2,"recent":null,"note":"Contested wins / RAC (best) + drops (worst)","cf":["SIZ","TGH"]},{"name":"In-Line Run Blocks","filter":"Role (Player) = Run blocker · Lined Up As = TE-L, TE-R","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","STR","TGH"]},{"name":"Space Blocks","filter":"Role (Player) = Run blocker · Block Level (Player) = Second Level, Downfield","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","TGH","INS"]},{"name":"Pass Pro","filter":"Role (Player) = Pass blocker","plays":5,"best":2,"worst":2,"recent":1,"cf":["STR"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]}]},{"code":"OT","title":"Offensive Tackle","rows":[{"name":"True Pass Sets","filter":"Role (Player) = Pass blocker · Play Action, Screen, Quick Game, RPO OFF","plays":8,"best":4,"worst":2,"recent":2,"cf":["ATH","INS"]},{"name":"Pressures Allowed","filter":"Result (Player) = Pressure allowed, Sack allowed, Hit allowed, Hurry allowed","plays":6,"best":null,"worst":6,"recent":null,"note":"Negative by definition: sacks → hits → hurries allowed, most damaging first","cf":["TGH"]},{"name":"vs. Top Edge Rushers","filter":"Role (Player) = Pass blocker · Lined Up Against (Matchup) = top 2–3 edge rushers","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","ATH","STR","INS"]},{"name":"Zone Runs","filter":"Role (Player) = Run blocker · Run Concept = Inside Zone, Outside Zone","plays":7,"best":4,"worst":2,"recent":1,"cf":["ATH","TGH"]},{"name":"Gap / Power Runs","filter":"Role (Player) = Run blocker · Run Concept = Power, Counter, Man, Trap, Pull Lead","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","STR","TGH"]},{"name":"Screens & 2nd Level","filter":"Screen ON | Block Level (Player) = Second Level","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","SPD","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"IOL","title":"Interior Offensive Line","rows":[{"name":"True Pass Sets","filter":"Role (Player) = Pass blocker · Play Action, Screen, Quick Game, RPO OFF","plays":8,"best":4,"worst":2,"recent":2,"cf":["SIZ","ATH","STR"]},{"name":"Pressures Allowed","filter":"Result (Player) = Pressure allowed, Sack allowed, Hit allowed, Hurry allowed","plays":6,"best":null,"worst":6,"recent":null,"note":"Negative by definition: sacks → hits → hurries allowed, most damaging first","cf":["TGH"]},{"name":"vs. Games & Blitz","filter":"Role (Player) = Pass blocker · Stunt ON | Blitz ON","plays":6,"best":3,"worst":2,"recent":1,"cf":["INS"]},{"name":"Zone Runs","filter":"Role (Player) = Run blocker · Run Concept = Inside Zone, Outside Zone","plays":8,"best":4,"worst":2,"recent":2,"cf":["ATH","TGH"]},{"name":"Gap / Power Runs","filter":"Role (Player) = Run blocker · Run Concept = Power, Counter, Man, Trap, Pull Lead","plays":8,"best":4,"worst":2,"recent":2,"cf":["SIZ","SPD","STR","TGH"]},{"name":"Screens & 2nd Level","filter":"Screen ON | Block Level (Player) = Second Level","plays":5,"best":2,"worst":2,"recent":1,"cf":["ATH","SPD","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"DT","title":"Defensive Tackle","rows":[{"name":"True Pass Sets","filter":"Role (Player) = Pass rushing · Play Action, Screen, Quick Game, RPO OFF","plays":9,"best":4,"worst":3,"recent":2,"cf":["ATH","TGH"]},{"name":"Pressures & Sacks","filter":"Result (Player) = Pressure, Sack, Hit, Hurry","plays":6,"best":6,"worst":null,"recent":null,"note":"Positive by definition: sacks → hits → hurries, highest graded first","cf":["STR"]},{"name":"Run D – Nose / 1-Tech","filter":"Role (Player) = Run defense · Technique (Player) = 0, 1, 2i","plays":9,"best":4,"worst":3,"recent":2,"cf":["SIZ","STR","TGH","INS"]},{"name":"Run D – 3-Tech","filter":"Role (Player) = Run defense · Technique (Player) = 3, 4i, 4","plays":9,"best":4,"worst":3,"recent":2,"cf":["ATH","INS"]},{"name":"Stops & Missed Tackles","filter":"Result (Player) = Tackler · Successful Play – Defense ON | Result (Player) = Missed tackle","plays":8,"best":5,"worst":3,"recent":null,"note":"Stops (best) + missed tackles (worst)","cf":["ATH","SPD","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"DE","title":"Defensive End","rows":[{"name":"True Pass Sets","filter":"Role (Player) = Pass rushing · Play Action, Screen, Quick Game, RPO OFF","plays":10,"best":5,"worst":3,"recent":2,"cf":["ATH"]},{"name":"Pressures & Sacks","filter":"Result (Player) = Pressure, Sack, Hit, Hurry, Batted pass-defender","plays":7,"best":7,"worst":null,"recent":null,"note":"Positive by definition: sacks → hits → hurries, highest graded first","cf":["ATH","SPD"]},{"name":"Run D – At Him","filter":"Role (Player) = Run defense · Lined Up As (his side) + Run Direction = same side","plays":9,"best":4,"worst":3,"recent":2,"cf":["SIZ","STR","TGH","INS"]},{"name":"Run D – Away","filter":"Role (Player) = Run defense · Lined Up As (his side) + Run Direction = opposite side","plays":7,"best":4,"worst":2,"recent":1,"cf":["SPD","TGH","INS"]},{"name":"Stops & Missed Tackles","filter":"Result (Player) = Tackler · Successful Play – Defense ON | Result (Player) = Missed tackle","plays":8,"best":5,"worst":3,"recent":null,"note":"Stops (best) + missed tackles (worst)","cf":["STR"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"JACK","title":"Jack","rows":[{"name":"True Pass Sets","filter":"Role (Player) = Pass rushing · Play Action, Screen, Quick Game, RPO OFF","plays":8,"best":4,"worst":2,"recent":2,"cf":["ATH"]},{"name":"Pressures & Sacks","filter":"Result (Player) = Pressure, Sack, Hit, Hurry, Batted pass-defender","plays":6,"best":6,"worst":null,"recent":null,"note":"Positive by definition: sacks → hits → hurries, highest graded first","cf":["ATH","SPD"]},{"name":"Run D – At Him","filter":"Role (Player) = Run defense · Lined Up As (his side) + Run Direction = same side","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","STR","TGH","INS"]},{"name":"Run D – Away","filter":"Role (Player) = Run defense · Lined Up As (his side) + Run Direction = opposite side","plays":6,"best":3,"worst":2,"recent":1,"cf":["SPD","TGH"]},{"name":"Coverage","filter":"Role (Player) = Coverage","plays":7,"best":4,"worst":2,"recent":1,"cf":["ATH","SPD","INS"]},{"name":"Stops & Missed Tackles","filter":"Result (Player) = Tackler · Successful Play – Defense ON | Result (Player) = Missed tackle","plays":7,"best":4,"worst":3,"recent":null,"note":"Stops (best) + missed tackles (worst)","cf":["STR"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"LB","title":"Linebacker","rows":[{"name":"Run D vs. Zone","filter":"Role (Player) = Run defense · Run Concept = Inside Zone, Outside Zone","plays":7,"best":4,"worst":2,"recent":1,"cf":["ATH","SPD","TGH"]},{"name":"Run D vs. Gap / Power","filter":"Role (Player) = Run defense · Run Concept = Power, Counter, Man, Trap, Pull Lead","plays":7,"best":4,"worst":2,"recent":1,"cf":["SIZ","STR","TGH"]},{"name":"Play Action","filter":"Play Action ON","plays":5,"best":2,"worst":2,"recent":1,"cf":["INS"]},{"name":"Zone Coverage","filter":"Coverage Defender Role (Player) = Hook/Curl, Curl/Flat, Flat, Hole, Tampa","plays":6,"best":3,"worst":2,"recent":1,"cf":["ATH","INS"]},{"name":"Man Coverage","filter":"Coverage Defender Role (Player) = Man","plays":5,"best":2,"worst":2,"recent":1,"cf":["SPD"]},{"name":"Blitz","filter":"Role (Player) = Pass rushing","plays":5,"best":2,"worst":2,"recent":1,"cf":["ATH"]},{"name":"Tackles & Missed Tackles","filter":"Result (Player) = Tackler, Missed tackle","plays":6,"best":3,"worst":3,"recent":null,"note":"Tackles / stops (best) + missed tackles (worst)","cf":["ATH","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]},{"code":"CB","title":"Cornerback","rows":[{"name":"Ball Production","filter":"Result (Player) = Pass broken up, Interception caught, Dropped interception","plays":5,"best":5,"worst":null,"recent":null,"note":"Positive by definition: INTs → PBUs first; dropped INTs only if room","cf":["ATH","INS"]},{"name":"Deep Targets","filter":"Role (Player) = Primary coverage · Targeted Depth = 20+","plays":7,"best":4,"worst":2,"recent":1,"cf":["SPD"]},{"name":"Press Man","filter":"Role (Player) = Press coverage · Coverage Defender Role (Player) = Man","plays":8,"best":4,"worst":2,"recent":2,"cf":["SIZ","ATH","STR","TGH"]},{"name":"Off Man","filter":"Coverage Defender Role (Player) = Man · Press Look (Player) OFF","plays":8,"best":4,"worst":2,"recent":2,"cf":["ATH"]},{"name":"Zone","filter":"Coverage Defender Role (Player) = Deep Third, Deep Quarter, Deep Half, Curl/Flat, Flat","plays":7,"best":4,"worst":2,"recent":1,"cf":["INS"]},{"name":"Run D & Tackling","filter":"Role (Player) = Run defense | Result (Player) = Tackler, Missed tackle","plays":6,"best":3,"worst":3,"recent":null,"note":"Run fits / tackles (best) + missed tackles (worst)","cf":["STR","TGH"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]}]},{"code":"STAR","title":"Star","rows":[{"name":"Slot Man","filter":"Coverage Defender Role (Player) = Man · Lined Up As = SCB, SLCB, SRCB","plays":8,"best":4,"worst":2,"recent":2,"cf":["ATH","SPD"]},{"name":"Zone / Match","filter":"Coverage Defender Role (Player) = Curl/Flat, Flat, Hook/Curl, Deep Quarter","plays":7,"best":4,"worst":2,"recent":1,"cf":["INS"]},{"name":"Ball Production","filter":"Result (Player) = Pass broken up, Interception caught, Dropped interception","plays":5,"best":5,"worst":null,"recent":null,"note":"Positive by definition: INTs → PBUs first; dropped INTs only if room","cf":["ATH","INS"]},{"name":"Blitz & Pressure","filter":"Role (Player) = Pass rushing","plays":5,"best":2,"worst":2,"recent":1,"cf":["ATH","SPD"]},{"name":"Run Fits & Perimeter","filter":"Role (Player) = Run defense · Lined Up As = SCB, SLCB, SRCB","plays":8,"best":4,"worst":2,"recent":2,"cf":["SIZ","STR","TGH"]},{"name":"Tackling & Missed Tackles","filter":"Result (Player) = Tackler, Missed tackle","plays":8,"best":4,"worst":4,"recent":null,"note":"Open-field tackles (best) + missed tackles (worst)","cf":["ATH","STR","TGH"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]}]},{"code":"SAF","title":"Safety","rows":[{"name":"Deep Alignment","filter":"Coverage Defender Role (Player) = Deep Free, Deep Half, Deep Third, Deep Quarter","plays":8,"best":4,"worst":2,"recent":2,"cf":["SPD","INS"]},{"name":"Man Coverage","filter":"Coverage Defender Role (Player) = Man","plays":7,"best":4,"worst":2,"recent":1,"cf":["ATH"]},{"name":"Ball Production","filter":"Result (Player) = Pass broken up, Interception caught, Dropped interception","plays":5,"best":5,"worst":null,"recent":null,"note":"Positive by definition: INTs → PBUs first; dropped INTs only if room","cf":["ATH","SPD"]},{"name":"Play Action","filter":"Play Action ON","plays":6,"best":3,"worst":2,"recent":1,"cf":["INS"]},{"name":"Run Support","filter":"Role (Player) = Run defense · Depth (Player) = 0–5, 6–10","plays":8,"best":4,"worst":2,"recent":2,"cf":["SIZ","STR","TGH"]},{"name":"Open-Field Tackling","filter":"Result (Player) = Tackler, Missed tackle","plays":7,"best":4,"worst":3,"recent":null,"note":"Open-field tackles (best) + missed tackles (worst)","cf":["ATH","STR","TGH"]},{"u":true,"name":"Negative Plays","filter":"Grade (Player) = -0.5 to -2","plays":5,"best":null,"worst":5,"recent":null,"note":"Worst grades not already used, most severe first","cf":["All"]},{"u":true,"name":"vs. Top Competition","filter":"Opponent = Power Four","plays":4,"best":2,"worst":1,"recent":1,"note":"Power Four opponents only, plays not already used","cf":["All"]}]}]};
(function(){var module;
/* Kentucky Cutups core: PFF Play Feed reader + Kentucky plan rules + 50-play selection.
   Runs in the browser (and in node for testing). PLAN is injected from plan_data.json. */
(function (root) {
'use strict';

/* ------------------------------------------------------------ CSV */
function parseCSV(text) {
  const rows = []; let row = [], f = '', q = false, i = 0;
  text = text.replace(/^﻿/, '');
  while (i < text.length) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; }
      f += c; i++; continue;
    }
    if (c === '"') { q = true; i++; continue; }
    if (c === ',') { row.push(f); f = ''; i++; continue; }
    if (c === '\r') { i++; continue; }
    if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; i++; continue; }
    f += c; i++;
  }
  if (f !== '' || row.length) { row.push(f); rows.push(row); }
  const head = rows.shift() || [];
  return rows.filter(r => r.length > 1).map(r => { const o = {}; head.forEach((h, k) => o[h.trim()] = (r[k] || '').trim()); return o; });
}

/* ------------------------------------------------------------ feed helpers */
const TOK = /([A-Z]{2,6} D?\d{1,3})/g;
const toks = s => (String(s || '').match(TOK) || []);
const has = (s, t) => toks(s).includes(t);
const num = v => { if (v === undefined || v === null || v === '') return null; const m = String(v).match(/-?\d+(\.\d+)?/); return m ? parseFloat(m[0]) : null; };
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function posOf(field, t) { const m = String(field || '').match(new RegExp(esc(t) + ' \\(([^)]+)\\)')); return m ? m[1] : null; }
function gradeOf(field, t) { const m = String(field || '').match(new RegExp(esc(t) + ' \\(([+-]?\\d+(?:\\.\\d+)?)\\)')); return m ? parseFloat(m[1]) : null; }
function depthOf(field, pos) { if (!pos) return null; const m = String(field || '').match(new RegExp('(?:^|; )' + esc(pos) + ' \\((-?\\d+(?:\\.\\d+)?)\\)')); return m ? parseFloat(m[1]) : null; }
const title = s => String(s || '').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());

/* feed position label -> Kentucky position group */
function ukGroup(pos) {
  const p = String(pos || '').toUpperCase();
  if (!p) return '';
  if (p === 'QB') return 'QB';
  if (/^(HB|FB)/.test(p)) return 'RB';
  if (/^TE/.test(p)) return 'TE';
  if (/WR$/.test(p) || /WR/.test(p)) return 'WR';
  if (p === 'LT' || p === 'RT') return 'OT';
  if (p === 'LG' || p === 'RG' || p === 'C') return 'IOL';
  if (/^(NT|DLT|DRT|NLT|NRT|DT)/.test(p)) return 'DT';
  if (/^(LE|RE|LEO|REO|DE)$/.test(p)) return 'DE';
  if (/OLB$/.test(p)) return 'JACK';
  if (/LB$/.test(p)) return 'LB';
  if (/^SCB/.test(p)) return 'STAR';
  if (/CB$/.test(p)) return 'CB';
  if (/^(FS|SS)/.test(p)) return 'SAF';
  return '';
}

/* candidate players in a feed: tags on most plays, with their usual spot */
function players(rows) {
  const c = {}, pos = {};
  rows.forEach(r => {
    const seen = new Set();
    String((r.pff_OFFPLAYERS || '') + '; ' + (r.pff_DEFPLAYERS || '')).replace(/([A-Z]{2,6} D?\d{1,3}) \(([^)]+)\)/g, (_, t, p) => {
      if (seen.has(t)) return; seen.add(t);
      c[t] = (c[t] || 0) + 1; (pos[t] = pos[t] || {})[p] = (pos[t][p] || 0) + 1;
    });
  });
  return Object.keys(c).map(t => {
    const ps = Object.entries(pos[t]).sort((a, b) => b[1] - a[1]);
    const groups = {}; ps.forEach(([p, n]) => { const g = ukGroup(p); if (g) groups[g] = (groups[g] || 0) + n; });
    return { tag: t, plays: c[t], share: c[t] / rows.length, pos: ps[0][0], positions: ps.slice(0, 3).map(x => x[0]), group: (Object.entries(groups).sort((a, b) => b[1] - a[1])[0] || [''])[0], defense: / D\d/.test(t) };
  }).sort((a, b) => b.plays - a.plays);
}

function covScheme(s) {
  s = String(s || '').toUpperCase();
  if (!s) return '';
  if (s.startsWith('COVER 0')) return 'Cover-0';
  if (s.startsWith('COVER 1')) return 'Cover-1';
  if (s.startsWith('COVER 2') && /MAN/.test(s)) return 'Cover 2-Man';
  if (s.startsWith('COVER 2')) return 'Cover-2';
  if (s.startsWith('COVER 3')) return 'Cover-3';
  if (s.startsWith('COVER 4') || /QUARTER/.test(s)) return 'Quarters';
  if (s.startsWith('COVER 6')) return 'Cover-6';
  return title(s);
}
const MANSCHEMES = ['Cover-0', 'Cover-1', 'Cover 2-Man'];

/* one feed row -> the fields the plan rules read, from tag t's point of view */
function adapt(r, t, p4) {
  const def = / D\d/.test(t);
  const team = t.split(' ')[0];
  const pos = posOf(def ? r.pff_DEFPLAYERS : r.pff_OFFPLAYERS, t);
  const grade = gradeOf(def ? r.pff_DEFPLAYERSRATINGS : r.pff_OFFPLAYERSRATINGS, t);
  const run = r.pff_RUNPASS === 'R', pass = r.pff_RUNPASS === 'P';
  const roles = new Set(), results = new Set();
  const opp = def ? r.pff_OFFTEAM : r.pff_DEFTEAM;
  const scheme = covScheme(r.pff_PASS_COVERAGE_BASIC);
  const gain = num(r.pff_GAINLOSS);
  const p = {
    play_id: r.pff_PLAYID, game_id: r.pff_GAMEID, game_date: r.pff_GAMEDATE, season: num(r.pff_GAMESEASON), week: num(r.pff_WEEK),
    seq: num(r.pff_SORTORDER), opponent: opp, opponent_power4: !!(p4 && p4.has(opp)), opponent_level: p4 && p4.level ? (p4.level.get(opp) || 4) : (p4 && p4.has(opp) ? 1 : 4), quarter: num(r.pff_QUARTER), clock: r.pff_CLOCK,
    down: num(r.pff_DOWN), distance: num(r.pff_DISTANCE), yard_line: r.pff_FIELDPOSITION, grade, pos, team,
    play_action: r.pff_PLAYACTION === '1', screen: r.pff_SCREEN === '1', rpo: r.pff_RUNPASSOPTION === '1',
    quick_game: pass && num(r.pff_TIMETOTHROW) !== null && num(r.pff_TIMETOTHROW) <= 2.0,
    pressure: !!r.pff_QBPRESSURE, blitz: r.pff_BLITZDOG === '1', stunt: r.pff_STUNT === '1',
    pocket: pass ? (r.pff_QBPRESSURE ? 'Pressured' : 'Clean') : '',
    run_concept: title(r.pff_RUNCONCEPTPRIMARY), coverage_scheme: scheme, gain,
    goal_to_go: num(r.pff_YARDS_TO_GOAL_LINE) !== null && num(r.pff_DISTANCE) !== null && num(r.pff_YARDS_TO_GOAL_LINE) <= num(r.pff_DISTANCE),
    def_success: r.pff_DEFSUCCESS === 'T', max_mph: null, matchup: '', mtf_type: '', block_level: '', technique: '', depth: null,
    targeted_depth: null, dropback_type: '', press_look: false, coverage_role: '', lined_up_as: pos || '', explosive: false,
    run_direction: (String(r.pff_RBDIRECTION || '')[0] || String(r.pff_POAACTUAL || '')[0] || '').replace(/[^LR]/, '')
  };
  if (!def) {
    if (String(r.pff_PASSER || '').startsWith(t)) roles.add('Passer');
    if (r.pff_BALLCARRIER === t) roles.add('Ball carrier');
    if (r.pff_PASSRECEIVERTARGET === t) roles.add('Target receiver');
    // route code from the pass pattern ("KYUN 01 h21(0)"): a real route has a route number;
    // letter-only codes (r, fr, kr, frkr ...) are fakes, checks and releases
    const pm = String(r.pff_PASSPATTERNBYPLAYER || '').match(new RegExp(esc(t) + ' ([^;]+)'));
    p.route_code = pm ? pm[1].trim() : '';
    if (p.route_code && /\d/.test(p.route_code.split('(')[0])) roles.add('Running a route');
    if (has(r.pff_PASSBLOCKING, t)) roles.add('Pass blocker');
    // a run snap only counts as blocking if he isn't running a route (RPO / clear-out routes are not blocks)
    if (run && pos && r.pff_BALLCARRIER !== t && r.pff_QB !== t && !roles.has('Running a route')) roles.add('Run blocker');
    if (String(r.pff_PRESS || '').split(';').some(x => x.trim().endsWith('> ' + t))) roles.add('vs Press coverage');
    const target = roles.has('Target receiver');
    p.handoff = run && r.pff_BALLCARRIER === t && r.pff_QB !== t;   // designed run he was handed (no catches, no direct snaps)
    p.pa_fake = has(r.pff_PLAYACTIONFAKE, t);
    p.engaged = (grade !== null && grade !== 0) || String(r.pff_PRESSUREDETAIL || '').includes(t) || String(r.pff_KEYPLAYERS || '').includes(t) || has(r.pff_QBPRESSUREALLOWED, t);
    if (target && r.pff_PASSRESULT === 'COMPLETE') results.add('Reception');
    if (target && r.pff_INCOMPLETIONTYPE === 'DP') results.add('Dropped pass targeted');
    if (target && String(r.pff_CONTESTED || '').startsWith('1')) results.add('Contested target');
    if (has(r.pff_QBPRESSUREALLOWED, t)) {
      results.add('Pressure allowed');
      const k = r.pff_PASSRUSHRESULT;
      if (k === 'SACK') results.add('Sack allowed'); else if (k === 'HIT') results.add('Hit allowed'); else results.add('Hurry allowed');
    }
    if (roles.has('Passer')) {
      p.targeted_depth = num(r.pff_PASSDEPTH);
      const d = String(r.pff_DROPBACKTYPE || '');
      p.dropback_type = d === 'SD' ? 'Straight Drop' : /^R/.test(d) ? 'Rollout' : /^S[LR]$/.test(d) ? 'Scramble / Sprint' : d;
      if (r.pff_QBSCRAMBLE) p.dropback_type = 'Scramble';
      // PFF's Big Time Throw / Turnover Worthy Play tags are not in the play feed: graded stand-ins
      if (grade !== null && grade >= 1.5) results.add('Big time throw');
      if (r.pff_PASSRESULT === 'INTERCEPTION' || (grade !== null && grade <= -1.5)) results.add('Turnover worthy play');
    }
    if (target) p.targeted_depth = num(r.pff_PASSDEPTH);
    if ((roles.has('Ball carrier') || results.has('Reception')) && r.pff_MISSEDTACKLE) { p.mtf_type = 'Missed'; results.add('Missed tackle forced'); }
    // receiver after the catch: missed tackles he forced (defenders listed as missing him) and yards after catch
    p.mtf_count = (roles.has('Ball carrier') || results.has('Reception')) ? toks(r.pff_MISSEDTACKLE).length : 0;
    p.yac = results.has('Reception') ? num(r.pff_YARDSAFTERCATCH) : null;
    p.explosive = (roles.has('Ball carrier') && run && gain !== null && gain >= 10) || (results.has('Reception') && gain !== null && gain >= 15) || (roles.has('Ball carrier') && gain !== null && gain >= 15);
    if (/^TE-/.test(pos || '')) p.lined_up_as = /R$/.test(pos) ? 'TE-R' : 'TE-L';
    if (roles.has('Run blocker')) {
      const g = ukGroup(pos);
      if ((g === 'TE' && !/^TE-/.test(pos)) || g === 'WR' || g === 'RB') p.block_level = 'Second Level';
    }
  } else {
    if (has(r.pff_PASSRUSHPLAYERS, t)) roles.add('Pass rushing');
    if (has(r.pff_PASSCOVERAGEPLAYERS, t)) roles.add('Coverage');
    if (run && pos) roles.add('Run defense');
    if (r.pff_PASSCOVERAGE1 === t || r.pff_PASSCOVERAGE2 === t) { roles.add('Primary coverage'); p.targeted_depth = num(r.pff_PASSDEPTH); }
    if (String(r.pff_PRESS || '').split(';').some(x => x.trim().startsWith(t + ' >'))) { roles.add('Press coverage'); p.press_look = true; }
    if (has(r.pff_TACKLE, t) || has(r.pff_TACKLEASSIST, t)) results.add('Tackler');
    if (has(r.pff_STOP, t)) { results.add('Tackler'); p.def_success = true; }
    if (has(r.pff_MISSEDTACKLE, t)) results.add('Missed tackle');
    if (has(r.pff_SACK, t)) results.add('Sack');
    if (has(r.pff_HIT, t)) results.add('Hit');
    if (has(r.pff_HURRY, t)) results.add('Hurry');
    if (has(r.pff_QBPRESSURE, t)) results.add('Pressure');
    if (has(r.pff_PASSBREAKUP, t)) results.add('Pass broken up');
    if (has(r.pff_INTERCEPTION, t)) results.add('Interception caught');
    const P = String(pos || '').toUpperCase();
    if (/^SCB/.test(P)) p.lined_up_as = 'SCB';
    if (/^NT|^NLT|^NRT/.test(P)) p.technique = '1'; else if (/^D[LR]T/.test(P)) p.technique = '3'; else if (/^(LE|RE)$/.test(P)) p.technique = '5';
    p.depth = depthOf(r.pff_DBDEPTH, pos);
    if (p.depth === null) p.depth = depthOf(r.pff_LBDEPTH, pos);
    if (roles.has('Coverage')) {
      const g = ukGroup(pos), deep = p.depth !== null && p.depth >= 10;
      if (MANSCHEMES.includes(scheme) && !(deep && g === 'SAF')) p.coverage_role = 'Man';
      else if (deep) p.coverage_role = scheme === 'Cover-3' ? 'Deep Third' : scheme === 'Quarters' ? 'Deep Quarter' : (scheme === 'Cover-2' || scheme === 'Cover-6') ? 'Deep Half' : 'Deep Free';
      else p.coverage_role = (g === 'LB' || g === 'JACK') ? 'Hook/Curl' : 'Curl/Flat';
    }
  }
  p.roles = roles; p.results = results;
  // how much he is part of the play, used to rank plays inside every cutup:
  // 4 = he makes a play, is targeted in coverage, or is first contact / at the point of attack
  //     (offense: ball carrier, target, engaged blocker, pressure allowed)
  // 3 = PFF graded him or lists him as a key player on the play
  // 1 = the ball came to his area (deep shot while he's deep, run reaching the second level)
  // 0 = nothing to evaluate
  const first = String(r.pff_FIRSTCONTACT || '').split(/;\s*/).includes(t);
  const keyp = String(r.pff_KEYPLAYERS || '').includes(t + ' (') || has(r.pff_PURSUIT, t) || String(r.pff_PRESSUREDETAIL || '').includes(t);
  let inv = 0;
  if (results.size || first || roles.has('Primary coverage') || roles.has('Ball carrier') || roles.has('Target receiver') || (roles.has('Pass blocker') && p.engaged)) inv = 4;
  else if ((grade !== null && grade !== 0) || keyp) inv = 3;
  else if (def && ((pass && (r.pff_DEEPPASS === '1' || (num(r.pff_PASSDEPTH) || 0) >= 15) && (p.depth || 0) >= 8) || (run && (gain || 0) >= 8))) inv = 1;
  p.involve = inv;
  return p;
}

/* ------------------------------------------------------------ plan rules (mirror of plan.py) */
const role = (p, ...r) => r.some(x => p.roles.has(x));
const res = (p, ...r) => r.some(x => p.results.has(x));
const lo = v => String(v || '').trim().toLowerCase();
const in_ = (v, ...o) => o.map(x => x.toLowerCase()).includes(lo(v));
const depthIn = (p, a, b) => p.targeted_depth !== null && p.targeted_depth >= a && p.targeted_depth <= b;
const truePass = p => !(p.play_action || p.screen || p.quick_game || p.rpo);
const ZONE = ['Inside Zone', 'Outside Zone'], GAP = ['Power', 'Counter', 'Man', 'Trap', 'Pull Lead'];
const MAN_COV = ['Cover-0', 'Cover-1', 'Cover 2-Man'], ZONE_COV = ['Cover-2', 'Cover-3', 'Quarters', 'Cover-6'];
const side = v => { v = lo(v); return v.startsWith('l') ? 'L' : v.startsWith('r') ? 'R' : null; };
const runAt = p => { const a = side(p.lined_up_as), b = side(p.run_direction); return a !== null && a === b; };
const runAway = p => { const a = side(p.lined_up_as), b = side(p.run_direction); return a !== null && b !== null && a !== b; };
const slot = p => in_(p.lined_up_as, 'SCB', 'SLCB', 'SRCB');
const prio = order => p => { for (let i = 0; i < order.length; i++) if (p.results.has(order[i])) return i; return order.length; };
const R = (match, kw = {}) => Object.assign({ match }, kw);

const SACK_A = ['Sack allowed', 'Hit allowed', 'Hurry allowed', 'Pressure allowed'];
const SACK = ['Sack', 'Hit', 'Hurry', 'Pressure', 'Batted pass-defender'];
const BALL = ['Interception caught', 'Pass broken up', 'Dropped interception'];
const NEG = R(p => p.grade !== null && p.grade <= -0.5, { worst_pool: () => true });
// vs. Top Competition, by opponent level (set from Ultimate's conference data):
//   1 Power Four (Big Ten, SEC, ACC, Big 12, Notre Dame)   2 Mountain West, American, Pac-12
//   3 Sun Belt, C-USA, MAC, FBS Independents               4 FCS / everyone else
// Fills with level-1 plays where he is involved first, then level 2, then level 3 (involved), then his strong
// FCS plays (graded +1 or better), and only then level-1 plays where nothing happened. Worst slots: levels 1-3.
const strongPlay = p => p.grade !== null && p.grade >= 1 && p.involve >= 3;
const lvl = p => p.opponent_level || 4;
const TOP = R(p => lvl(p) === 1 || (lvl(p) <= 3 && p.involve > 0) || strongPlay(p), {
  worst_pool: p => lvl(p) <= 3 && p.grade !== null && p.grade <= -0.5,
  tiers_fn: all => [
    all.filter(p => lvl(p) === 1 && p.involve > 0),
    all.filter(p => lvl(p) === 2 && p.involve > 0),
    all.filter(p => lvl(p) === 3 && p.involve > 0),
    all.filter(p => lvl(p) === 4),
    all.filter(p => lvl(p) === 1 && !(p.involve > 0))],
  lesser_note: true
});
const STOPS = R(p => (res(p, 'Tackler') && p.def_success) || res(p, 'Missed tackle'), { best_pool: p => res(p, 'Tackler') && p.def_success, worst_pool: p => res(p, 'Missed tackle') });
const TACKLES = R(p => res(p, 'Tackler', 'Missed tackle'), { best_pool: p => res(p, 'Tackler'), worst_pool: p => res(p, 'Missed tackle') });
const BALLPROD = R(p => res(p, ...BALL), { best_pool: p => res(p, ...BALL), best_key: prio(BALL) });
const PRESS_ALLOWED = R(p => res(p, ...SACK_A), { worst_pool: () => true, worst_key: prio(SACK_A) });
const PRESSURES = R(p => role(p, 'Pass rushing') && res(p, ...SACK), { best_pool: () => true, best_key: prio(SACK) });
const TRUE_RUSH = R(p => role(p, 'Pass rushing') && truePass(p));
const TRUE_PRO = R(p => role(p, 'Pass blocker') && truePass(p));
const OL_ZONE = R(p => role(p, 'Run blocker') && in_(p.run_concept, ...ZONE));
const OL_GAP = R(p => role(p, 'Run blocker') && in_(p.run_concept, ...GAP));
const OL_SCREEN = R(p => (p.screen && role(p, 'Run blocker', 'Pass blocker')) || in_(p.block_level, 'Second Level'), { approx: 'Block level is not in the play feed: screens are used' });
const RUN_AT = R(p => role(p, 'Run defense') && runAt(p));
const RUN_AWAY = R(p => role(p, 'Run defense') && runAway(p));
const TGT_MAN = R(p => role(p, 'Target receiver') && in_(p.coverage_scheme, ...MAN_COV));
const TGT_ZONE = R(p => role(p, 'Target receiver') && in_(p.coverage_scheme, ...ZONE_COV));

const RULES = {
  QB: {
    'Clean Pocket': R(p => role(p, 'Passer') && in_(p.pocket, 'Clean') && !p.pressure),
    'Under Pressure': R(p => role(p, 'Passer') && (p.pressure || p.blitz)),
    'Short Throws': R(p => role(p, 'Passer') && p.targeted_depth !== null && p.targeted_depth <= 9),
    'Intermediate & Deep': R(p => role(p, 'Passer') && depthIn(p, 10, 99)),
    'On the Move': R(p => role(p, 'Passer') && (/roll|scramble|sprint/.test(lo(p.dropback_type)) || (in_(p.dropback_type, 'Straight Drop') && p.play_action))),
    'Run Threat': R(p => role(p, 'Ball carrier')),
    'BTT & TWP': R(p => res(p, 'Big time throw', 'Turnover worthy play'), { best_pool: p => res(p, 'Big time throw'), worst_pool: p => res(p, 'Turnover worthy play'), approx: 'BTT / TWP tags are not in the play feed: passes graded +1.5 or better, and INTs or passes graded −1.5 or worse' })
  },
  RB: {
    'Top MPH': R(p => role(p, 'Ball carrier') && (p.max_mph !== null ? p.max_mph >= 15 : (p.gain || 0) >= 10), { ranked_key: p => [p.max_mph !== null && p.max_mph >= 20 ? 0 : 1, -(p.gain || 0)], approx: 'MPH is not in the play feed: his longest runs (10+ yards) are used' }),
    'Explosive Runs': R(p => role(p, 'Ball carrier') && p.explosive, { ranked_key: p => [-(p.gain || 0)] }),
    'Missed Tackles Forced': R(p => in_(p.mtf_type, 'Missed', 'Broken') || res(p, 'Missed tackle forced'), { best_pool: () => true }),
    'Zone Runs': R(p => p.handoff && in_(p.run_concept, ...ZONE), { how: 'Handoffs only' }),
    'Gap / Power Runs': R(p => p.handoff && in_(p.run_concept, ...GAP), { how: 'Handoffs only' }),
    'Short Yardage / Goal Line': R(p => p.handoff && ((p.distance !== null && p.distance <= 2 && p.distance > 0) || p.goal_to_go), { how: 'Handoffs only' }),
    'Routes & Targets': R(p => role(p, 'Target receiver', 'Running a route'), { prefer: p => role(p, 'Target receiver'), how: 'Targets first, then real routes (no fakes / check-releases)' }),
    'Pass Pro': R(p => role(p, 'Pass blocker') && !(p.pa_fake && !p.engaged), { prefer: p => p.engaged, how: 'Snaps where he engages in protection first; play-fake carry-outs with no block left out' })
  },
  WR: {
    // ranked cutups first: explosive catches (longest first), best RAC (most missed tackles, then most YAC), best contested catches (longest first)
    'Explosive Receptions': R(p => res(p, 'Reception') && (p.gain || 0) >= 15, { ranked_key: p => [-(p.gain || 0)] }),
    'Best RAC': R(p => res(p, 'Reception') && ((p.mtf_count || 0) > 0 || (p.yac || 0) >= 5), { ranked_key: p => [-(p.mtf_count || 0), -(p.yac || 0), -(p.gain || 0)] }),
    'Best Contested Catches': R(p => res(p, 'Reception') && res(p, 'Contested target'), { ranked_key: p => [-(p.gain || 0)] }),
    // pass plays only: he releases into a route or is targeted against press (run-blocking snaps belong to Perimeter Blocking)
    'vs. Press': R(p => role(p, 'vs Press coverage') && role(p, 'Running a route', 'Target receiver'), {
      prefer: p => role(p, 'Target receiver'), prefer_label: 'targeted vs. press',
      how: 'Releases and targets vs. press only (no run blocking): explosive catches first, then catches, targets, then releases' }),
    'Targets vs. Man': TGT_MAN, 'Targets vs. Zone': TGT_ZONE,
    'Deep Targets': R(p => role(p, 'Target receiver') && depthIn(p, 20, 99)),
    'Contested & Drops': R(p => res(p, 'Contested target', 'Dropped pass targeted'), { best_pool: p => res(p, 'Contested target') && res(p, 'Reception'), worst_pool: p => res(p, 'Dropped pass targeted') }),
    'RAC': R(p => res(p, 'Reception')),
    // only snaps where PFF charted an actual block for him (block type), ranked by physicality:
    // block wins first, then physical blocks (crack, down, push, trap/wham, combo, pull, kick), then man / reach / cutoff / stalk, then downfield.
    // Worst: charted block losses first. If the block chart can't be read, falls back to run snaps where he isn't running a route.
    'Perimeter Blocking': R(p => p.block_class !== undefined ? (!!p.block_class && !role(p, 'Ball carrier', 'Target receiver')) : role(p, 'Run blocker'), {
      rank: p => p.block_win ? 0 : p.block_class === 'phys' ? 1 : p.block_class === 'eng' ? 2 : p.block_class === 'down' ? 3 : 4,
      wrank: p => p.block_loss ? 0 : 1,
      worst_pool: p => !!p.block_loss || (p.grade !== null && p.grade <= -0.5),
      how: 'Charted blocks only (PFF block type): wins first, then physical blocks (crack, down, push, trap, combo), then man / reach / cutoff / stalk, then downfield. RPO routes and no-block snaps left out' })
  },
  TE: {
    'Targets vs. Man': TGT_MAN, 'Targets vs. Zone': TGT_ZONE,
    'Seam & Deep': R(p => role(p, 'Target receiver') && depthIn(p, 10, 99)),
    'Contested, Drops & RAC': R(p => res(p, 'Contested target', 'Dropped pass targeted', 'Reception'), { best_pool: p => res(p, 'Reception'), worst_pool: p => res(p, 'Dropped pass targeted') }),
    'In-Line Run Blocks': R(p => role(p, 'Run blocker') && in_(p.lined_up_as, 'TE-L', 'TE-R')),
    'Space Blocks': R(p => role(p, 'Run blocker') && in_(p.block_level, 'Second Level', 'Downfield'), { approx: 'Block level is not in the play feed: run blocks from the slot / wing / backfield are used' }),
    'Pass Pro': R(p => role(p, 'Pass blocker') && !(p.pa_fake && !p.engaged), { prefer: p => p.engaged, how: 'Snaps where he engages in protection first; play-fake carry-outs with no block left out' })
  },
  OT: {
    'True Pass Sets': TRUE_PRO, 'Pressures Allowed': PRESS_ALLOWED,
    'vs. Top Edge Rushers': R(p => role(p, 'Pass blocker') && !!p.opponent_power4, { approx: 'Matchups are not in the play feed: pass sets vs. Power Four opponents are used' }),
    'Zone Runs': OL_ZONE, 'Gap / Power Runs': OL_GAP, 'Screens & 2nd Level': OL_SCREEN
  },
  IOL: {
    'True Pass Sets': TRUE_PRO, 'Pressures Allowed': PRESS_ALLOWED,
    'vs. Games & Blitz': R(p => role(p, 'Pass blocker') && (p.stunt || p.blitz)),
    'Zone Runs': OL_ZONE, 'Gap / Power Runs': OL_GAP, 'Screens & 2nd Level': OL_SCREEN
  },
  DT: {
    'True Pass Sets': TRUE_RUSH, 'Pressures & Sacks': PRESSURES,
    'Run D – Nose / 1-Tech': R(p => role(p, 'Run defense') && in_(p.technique, '0', '1', '2i'), { approx: 'Technique comes from his alignment label (NT = nose / 1, DLT / DRT = 3)' }),
    'Run D – 3-Tech': R(p => role(p, 'Run defense') && in_(p.technique, '3', '4i', '4')),
    'Stops & Missed Tackles': STOPS
  },
  DE: { 'True Pass Sets': TRUE_RUSH, 'Pressures & Sacks': PRESSURES, 'Run D – At Him': RUN_AT, 'Run D – Away': RUN_AWAY, 'Stops & Missed Tackles': STOPS },
  JACK: { 'True Pass Sets': TRUE_RUSH, 'Pressures & Sacks': PRESSURES, 'Run D – At Him': RUN_AT, 'Run D – Away': RUN_AWAY, 'Coverage': R(p => role(p, 'Coverage')), 'Stops & Missed Tackles': STOPS },
  LB: {
    'Run D vs. Zone': R(p => role(p, 'Run defense') && in_(p.run_concept, ...ZONE)),
    'Run D vs. Gap / Power': R(p => role(p, 'Run defense') && in_(p.run_concept, ...GAP)),
    'Play Action': R(p => p.play_action),
    'Zone Coverage': R(p => in_(p.coverage_role, 'Hook/Curl', 'Curl/Flat', 'Flat', 'Hole', 'Tampa', 'Deep Third', 'Deep Half', 'Deep Quarter', 'Deep Free')),
    'Man Coverage': R(p => in_(p.coverage_role, 'Man')),
    'Blitz': R(p => role(p, 'Pass rushing')),
    'Tackles & Missed Tackles': TACKLES
  },
  CB: {
    'Ball Production': BALLPROD,
    'Deep Targets': R(p => role(p, 'Primary coverage') && depthIn(p, 20, 99)),
    'Press Man': R(p => role(p, 'Press coverage') && in_(p.coverage_role, 'Man')),
    'Off Man': R(p => in_(p.coverage_role, 'Man') && !p.press_look),
    'Zone': R(p => in_(p.coverage_role, 'Deep Third', 'Deep Quarter', 'Deep Half', 'Curl/Flat', 'Flat')),
    'Run D & Tackling': R(p => role(p, 'Run defense') || res(p, 'Tackler', 'Missed tackle'), { best_pool: p => !res(p, 'Missed tackle'), worst_pool: p => res(p, 'Missed tackle') })
  },
  STAR: {
    'Slot Man': R(p => in_(p.coverage_role, 'Man') && slot(p)),
    'Zone / Match': R(p => in_(p.coverage_role, 'Curl/Flat', 'Flat', 'Hook/Curl', 'Deep Quarter')),
    'Ball Production': BALLPROD,
    'Blitz & Pressure': R(p => role(p, 'Pass rushing')),
    'Run Fits & Perimeter': R(p => role(p, 'Run defense') && slot(p)),
    'Tackling & Missed Tackles': TACKLES
  },
  SAF: {
    'Deep Alignment': R(p => in_(p.coverage_role, 'Deep Free', 'Deep Half', 'Deep Third', 'Deep Quarter')),
    'Man Coverage': R(p => in_(p.coverage_role, 'Man')),
    'Ball Production': BALLPROD,
    'Play Action': R(p => p.play_action),
    'Run Support': R(p => role(p, 'Run defense') && p.depth !== null && p.depth <= 10),
    'Open-Field Tackling': TACKLES
  }
};

const DB_CODES = ['SAF', 'STAR', 'CB'];
const wrSnap = p => !p.roles.has('Run blocker') && !(p.roles.has('Pass blocker') && !role(p, 'Target receiver', 'Ball carrier')) && role(p, 'Running a route', 'Target receiver', 'Ball carrier');
const wrRank = p => p.explosive ? 0 : res(p, 'Reception') ? 1 : role(p, 'Target receiver', 'Ball carrier') ? 2 : 3;
// worst slots, the other way round: failed targets (drops, incompletions, picks) first, then bad catches, then bad releases
const wrWorstRank = p => (role(p, 'Target receiver', 'Ball carrier') && !res(p, 'Reception')) ? 0 : res(p, 'Reception') ? 1 : 2;
const TE_RECV = ['Targets vs. Man', 'Targets vs. Zone', 'Seam & Deep', 'Contested, Drops & RAC'];
const NO_TARGET_PREF = ['Run D & Tackling', 'Run Fits & Perimeter', 'Tackling & Missed Tackles', 'Blitz & Pressure', 'Run Support', 'Open-Field Tackling'];
function cutups(PLAN, code) {
  const P = PLAN.POSITIONS.find(x => x.code === code);
  let n = 0;
  return P.rows.map(r => {
    const rule = r.u ? (r.name === 'Negative Plays' ? NEG : TOP) : RULES[code][r.name];
    if (!rule) throw new Error('No rule for ' + code + ' ' + r.name);
    const c = Object.assign({}, rule, { name: r.name, label: r.u ? 'U' : String(++n), universal: !!r.u, filter: r.filter, plays: r.plays, best: r.best || 0, worst: r.worst || 0, recent: r.recent || 0, ranked: !!r.ranked, specs: r.specs, note: r.note || '', cf: r.cf });
    // DBs: inside every cutup, plays where he is targeted in coverage come first (the cutup's own rule still decides what qualifies)
    // (run / tackling / blitz cutups keep point-of-attack ranking: tackles, first contact, pressure)
    if (DB_CODES.includes(code) && !c.prefer && !NO_TARGET_PREF.includes(r.name)) { c.prefer = p => p.roles.has('Primary coverage'); c.prefer_label = 'targeted in coverage'; }
    // WR: blocking snaps only ever go in Perimeter Blocking. Every other cutup (Negative Plays / vs. Top Competition too)
    // uses snaps where he releases into a route, is targeted, or has the ball, ranked explosive > catch > target > release.
    if (code === 'WR' && r.name === 'Perimeter Blocking') c.rollover_last = true;
    // TE: the same receiving logic in his route-running / pass-catching cutups; blocking cutups and Negative Plays / vs. Top Competition unchanged
    if ((code === 'WR' && r.name !== 'Perimeter Blocking') || (code === 'TE' && TE_RECV.includes(r.name))) {
      const m = c.match;
      c.match = p => wrSnap(p) && m(p);
      c.rank = wrRank; c.wrank = wrWorstRank;
      if (!c.prefer) { c.prefer = p => role(p, 'Target receiver', 'Ball carrier'); c.prefer_label = 'targets / ball in his hands'; }
    }
    return c;
  });
}

/* ------------------------------------------------------------ selection (mirror of engine.py) */
const PER_GAME = 3, TOTAL = 50;
const cmpKey = (a, b) => { for (let i = 0; i < Math.max(a.length, b.length); i++) { const x = a[i] ?? 0, y = b[i] ?? 0; if (x < y) return -1; if (x > y) return 1; } return 0; };
function byRecent(list) { return list.slice().sort((a, b) => (a.game_date === b.game_date ? (b.seq || 0) - (a.seq || 0) : (a.game_date < b.game_date ? 1 : -1))); }
const g0 = p => (p.grade === null ? 0 : p.grade);

function take(pool, n, used, perGame, cap, band, out) {
  let got = 0;
  for (const p of pool) {
    if (got >= n) break;
    if (used.has(p.play_id)) continue;
    if (cap && (perGame[p.game_id] || 0) >= PER_GAME) continue;
    used.add(p.play_id); perGame[p.game_id] = (perGame[p.game_id] || 0) + 1;
    out.push(Object.assign({}, p, { band })); got++;
  }
  return got;
}

function pickCutup(c, plays, used) {
  const all = plays.filter(p => !used.has(p.play_id) && c.match(p));
  // preferred plays (e.g. targets, engaged pass pro) are used first; the rest only if needed
  // plays he is involved in come first (see adapt: involve); plays with nothing to evaluate only if needed
  const inv = q => q.filter(p => p.involve > 0);
  let tiers = c.tiers_fn ? c.tiers_fn(all) : (c.prefer ? [inv(all.filter(c.prefer)), all.filter(c.prefer), inv(all), all] : [inv(all), all]);
  if (c.tiers_fn && c.prefer) tiers = tiers.flatMap(t => [t.filter(c.prefer), t.filter(p => !c.prefer(p))]);
  tiers = tiers.filter(t => t.length);
  const target = c.plays, perGame = {}, out = [], notes = [], lowBest = [];
  const have = k => out.filter(x => x.band === k).length;
  const runTier = (cands, cap) => {
    const recent = byRecent(cands), graded = recent.filter(p => p.grade !== null);
    if (c.ranked_key) { take(recent.slice().sort((a, b) => cmpKey(c.ranked_key(a), c.ranked_key(b))), target - out.length, used, perGame, cap, 'ranked', out); return; }
    // best band: PFF +1 to +2 first (highest first); when none are left, his next-best grades
    // (+0.5, then 0.0 clean reps) so the best slots still show his ceiling. Never a negative play.
    let bpool = c.best_pool ? recent.filter(c.best_pool) : graded.filter(p => p.grade >= 0);
    let wpool = c.worst_pool ? recent.filter(c.worst_pool) : graded.filter(p => p.grade <= -0.5);
    bpool = bpool.slice().sort((a, b) => cmpKey([c.best_key ? c.best_key(a) : 0, c.rank ? c.rank(a) : 0, -g0(a), -(a.involve || 0)], [c.best_key ? c.best_key(b) : 0, c.rank ? c.rank(b) : 0, -g0(b), -(b.involve || 0)]));
    wpool = wpool.slice().sort((a, b) => cmpKey([c.worst_key ? c.worst_key(a) : 0, c.wrank ? c.wrank(a) : 0, g0(a)], [c.worst_key ? c.worst_key(b) : 0, c.wrank ? c.wrank(b) : 0, g0(b)]));
    const before = out.length;
    take(bpool, c.best - have('best'), used, perGame, cap, 'best', out);
    if (!c.best_pool) out.slice(before).filter(p => p.grade < 1).forEach(p => lowBest.push(p.grade));
    take(wpool, c.worst - have('worst'), used, perGame, cap, 'worst', out);
    let fill = recent.filter(p => p.involve > 0).concat(recent.filter(p => !(p.involve > 0)));
    if (c.rank) fill = fill.map((p, i) => [p, i]).sort((a, b) => (c.rank(a[0]) - c.rank(b[0])) || a[1] - b[1]).map(x => x[0]);
    if ((c.best_pool || c.worst_pool) && c.recent === 0) fill = recent.filter(p => (c.best_pool && c.best_pool(p)) || (c.worst_pool && c.worst_pool(p)));
    // unfilled best slots stay open (filled below with his next-best plays), so recent plays don't take them
    const hold = finalPass || c.best_pool ? 0 : Math.max(0, c.best - have('best'));
    take(fill, target - out.length - hold, used, perGame, cap, 'recent', out);
  };
  let finalPass = false;
  const run = cap => tiers.forEach(t => { if (out.length < target) runTier(t.filter(p => !used.has(p.play_id)), cap); });
  // best slots still empty: next best available play in this cutup, highest grade first (preferred plays first)
  const nextBest = cap => {
    if (c.best_pool || c.ranked_key) return 0;
    let n = 0;
    for (const t of tiers) {
      const need = Math.min(c.best - have('best') - have('next best'), target - out.length);
      if (need <= 0) break;
      const pool = t.filter(p => !used.has(p.play_id)).sort((a, b) => (c.rank ? c.rank(a) - c.rank(b) : 0) || ((b.grade === null ? -9 : b.grade) - (a.grade === null ? -9 : a.grade)) || ((b.involve || 0) - (a.involve || 0)));
      const before = out.length;
      take(pool, need, used, perGame, cap, 'next best', out);
      out.slice(before).forEach(p => { if (p.grade !== null && p.grade >= 0) p.band = 'best'; });
      n += out.length - before;
    }
    return n;
  };
  run(true);
  let nb = nextBest(true);
  if (out.length < target || c.best - have('best') - have('next best') > 0) {
    const b = out.length; nb += nextBest(false); finalPass = true; run(false);
    if (out.length > b) notes.push(`3-per-game limit relaxed for ${out.length - b} play(s)`);
  }
  finalPass = true; run(true); run(false);
  const nbs = out.filter(p => p.band === 'next best');
  if (nbs.length) notes.push(`No more 0.0-or-better plays for ${nbs.length} best slot(s): his next-best plays in this cutup were used (${nbs.map(p => (p.grade === null ? 'ungraded' : (p.grade > 0 ? '+' : '') + p.grade)).join(', ')})`);
  if (lowBest.length) {
    const h = lowBest.filter(g => g === 0.5).length, z = lowBest.filter(g => g === 0).length;
    notes.push(`No more +1 to +2 plays left for this cutup: best slots use his next-highest grades (${[h ? h + ' at +0.5' : '', z ? z + ' at 0.0' : ''].filter(Boolean).join(', ')}), plays where he makes a play / is targeted / is at the point of attack first`);
  }
  if (c.prefer) { const k = out.filter(c.prefer).length; if (c.prefer_label) { if (out.length) notes.push(`${k} of ${out.length} ${c.prefer_label}` + (k < out.length ? '; the rest are his most involved other plays for this cutup' : '')); } else if (k < out.length) notes.push(`${k} of ${out.length} from the preferred plays; the rest filled from the cutup's other plays`); }
  if (c.lesser_note) { const n2 = out.filter(p => lvl(p) === 2).length, n3 = out.filter(p => lvl(p) === 3).length, n4 = out.filter(p => lvl(p) === 4).length;
    if (n2 || n3 || n4) notes.push(`Not enough involved Power Four plays: ${[n2 ? n2 + ' vs. MWC / American / Pac-12' : '', n3 ? n3 + ' vs. Sun Belt / C-USA / MAC / FBS Ind.' : '', n4 ? n4 + ' vs. FCS (graded +1 or better)' : ''].filter(Boolean).join(', ')}`); }
  { const u = out.filter(p => !(p.involve > 0)).length; if (u) notes.push(`${u} play(s) where he isn't directly involved: he didn't have enough involved plays of this type`); }
  return { picked: out, notes };
}

function build(PLAN, plays, code) {
  const cuts = cutups(PLAN, code), used = new Set(), results = [];
  for (const c of cuts) {
    const { picked, notes } = pickCutup(c, plays, used);
    if (c.how) notes.unshift(c.how);
    if (c.approx) notes.push(c.approx);
    results.push({ cut: c, plays: picked, notes });
  }
  let spare = TOTAL - results.reduce((a, r) => a + r.plays.length, 0);
  const rolled = {};
  if (spare > 0) {
    // spare slots: biggest cutups first; WR blocking only after the receiving cutups
    const order = results.filter(r => !r.cut.universal).slice().sort((a, b) => ((a.cut.rollover_last ? 1 : 0) - (b.cut.rollover_last ? 1 : 0)) || (b.cut.plays - a.cut.plays));
    let progress = true;
    while (spare > 0 && progress) {
      progress = false;
      for (const r of order) {
        if (spare <= 0) break;
        const c = r.cut;
        // spare slots go to his best remaining plays for the cutup (highest grade first, newest on ties)
        let cands = byRecent(plays.filter(p => !used.has(p.play_id) && c.match(p)));
        if (c.best_pool || c.worst_pool) cands = cands.filter(p => (c.best_pool && c.best_pool(p)) || (c.worst_pool && c.worst_pool(p)));
        if (c.prefer) cands = cands.filter(c.prefer).concat(cands.filter(p => !c.prefer(p)));
        cands = cands.map((p, i) => [p, i]).sort((a, b) => (c.rank ? c.rank(a[0]) - c.rank(b[0]) : 0) || ((b[0].grade === null ? -9 : b[0].grade) - (a[0].grade === null ? -9 : a[0].grade)) || ((b[0].involve || 0) - (a[0].involve || 0)) || (c.prefer ? (c.prefer(b[0]) - c.prefer(a[0])) : 0) || a[1] - b[1]).map(x => x[0]);
        const g = {}; r.plays.forEach(x => g[x.game_id] = (g[x.game_id] || 0) + 1);
        const pick = cands.find(p => (g[p.game_id] || 0) < PER_GAME) || cands[0];
        if (pick) { used.add(pick.play_id); r.plays.push(Object.assign({}, pick, { band: 'rollover' })); rolled[c.label] = (rolled[c.label] || 0) + 1; spare--; progress = true; }
      }
    }
    results.forEach(r => { if (rolled[r.cut.label] && !r.cut.universal) r.notes.push(`+${rolled[r.cut.label]} rollover play(s)`); });
  }
  const bo = { ranked: 0, best: 1, 'next best': 2, worst: 3, recent: 4, rollover: 5 };
  results.forEach(r => r.plays.sort((a, b) => bo[a.band] - bo[b.band]));
  const cf = PLAN.FACTORS.map(f => {
    const cs = results.filter(r => !r.cut.universal && r.cut.cf.includes(f.code));
    const best = cs.reduce((a, r) => a + r.plays.filter(p => p.band === 'best' || p.band === 'ranked').length, 0);
    return { code: f.code, name: f.name, cutups: cs.map(r => r.cut.label), best, ok: best >= 3 };
  });
  const ids = results.flatMap(r => r.plays.map(p => p.play_id));
  if (new Set(ids).size !== ids.length) throw new Error('repeat play in build');
  const bands = {}; results.forEach(r => r.plays.forEach(p => bands[p.band] = (bands[p.band] || 0) + 1));
  return { position: code, total: ids.length, bands, available: plays.length, results, cf,
           short: results.filter(r => r.plays.length < r.cut.plays).map(r => ({ label: r.cut.label, name: r.cut.name, target: r.cut.plays, got: r.plays.length })) };
}

function playsFor(rows, tag, p4) {
  const seen = new Set(), out = [];
  rows.forEach(r => {
    if (!r.pff_PLAYID || seen.has(r.pff_PLAYID)) return;
    const onField = new RegExp(esc(tag) + ' \\(').test((r.pff_OFFPLAYERS || '') + ' ' + (r.pff_DEFPLAYERS || ''));
    if (!onField) return;
    seen.add(r.pff_PLAYID);
    out.push(adapt(r, tag, p4));
  });
  return out;
}

const api = { parseCSV, players, playsFor, build, cutups, ukGroup, RULES };
if (typeof module !== 'undefined') module.exports = api; else root.KC = api;
})(this);

}).call(window);
/* Kentucky Cutups for PFF Ultimate.
   Runs inside ultimate.pff.com under the signed-in user's own session:
   player search -> his plays -> Play Feed -> Kentucky 50-play build -> playlist -> position folder.
   Needs KC (core.js) and KC_PLAN (plan data) loaded first. */
(function (W) {
'use strict';
const KC = W.KC, PLAN = W.KC_PLAN;
const FOLDERS = { QB: 'Quarterbacks', RB: 'Running Backs', WR: 'Wide Receivers', TE: 'Tight Ends', OT: 'Offensive Tackles',
  IOL: 'Interior Offensive Line', DT: 'Defensive Tackles', DE: 'Defensive Ends', JACK: 'Jack', LB: 'Linebackers',
  CB: 'Cornerbacks', STAR: 'Star', SAF: 'Safeties' };
const FOLDER_IDS = { QB: 9931, RB: 9798, WR: 9932, TE: 9933, OT: 9934, IOL: 9935, DT: 9936, DE: 9937, JACK: 9938, LB: 9939, CB: 9940, STAR: 9941, SAF: 9942 };
const P4_DEFAULT = ['ALUN', 'FLUN', 'KYUN', 'LAST', 'MOUN', 'SCUN', 'TNUN', 'TNVA', 'TXAM'];

/* PFF player-card position -> Kentucky group */
function groupOf(pos) {
  const p = String(pos || '').toUpperCase();
  const m = { T: 'OT', G: 'IOL', C: 'IOL', DI: 'DT', ED: 'DE', S: 'SAF', HB: 'RB', FB: 'RB' };
  return m[p] || KC.ukGroup(p) || '';
}

/* ------------------------------------------------------------ Ultimate requests (same session as the page) */
const ver = () => (document.querySelector('meta[name="application-version"]') || {}).content || '';
const H = extra => Object.assign({ Accept: 'application/json', 'X-Application-Version': ver() }, extra || {});
async function call(path, opt) {
  const r = await fetch(path, Object.assign({ credentials: 'same-origin' }, opt));
  if (r.status === 401 || r.status === 403) throw new Error('Ultimate says you are not signed in (or lack access). Sign in to PFF Ultimate and try again.');
  if (!r.ok) throw new Error(`Ultimate returned ${r.status} for ${path.split('?')[0]}`);
  return r;
}
const getJSON = async p => (await call(p, { headers: H() })).json();
const sendJSON = async (p, method, body) => (await call(p, { method, headers: H({ 'Content-Type': 'application/json' }), body: JSON.stringify(body) })).json().catch(() => ({}));

async function findPlayers(first, last, school) {
  const j = await getJSON('/api/v1/players?league=NCAA&name=' + encodeURIComponent(last || first));
  const norm = s => String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const f = norm(first), l = norm(last), s = norm(school);
  return (j.players || []).filter(p => {
    if (l && norm(p.last_name) !== l && !norm(p.last_name).startsWith(l)) return false;
    if (f && !norm(p.first_name).startsWith(f) && !f.startsWith(norm(p.first_name))) return false;
    if (s) {
      const t = p.team || {};
      const names = [t.city, t.abbreviation, t.mid_abbreviation, t.nickname, t.slug, t.video_abbreviation, (t.city || '') + (t.nickname || '')].map(norm);
      if (!names.some(n => n && (n === s || n.startsWith(s) || s.startsWith(n) && n.length >= 4))) return false;
    }
    return true;
  });
}

function seasonWeeks(years) {
  const out = [];
  years.forEach(y => { for (let w = 0; w <= 20; w++) out.push(y + '.' + w); });
  return out;
}

async function playIds(playerId, years) {
  const j = await sendJSON('/api/v1/ultimate/plays/ids', 'POST', {
    context: 'pff',
    filters: { league: { eq: 'NCAA' }, season_week: { in: seasonWeeks(years) }, participating_player_id: { eq: playerId } }
  });
  return j.ids || [];
}

async function playFeed(ids, progress) {
  let header = null, body = [];
  for (let i = 0; i < ids.length; i += 400) {
    const part = ids.slice(i, i + 400);
    progress && progress(`Downloading play data ${Math.min(i + 400, ids.length)}/${ids.length}…`);
    const form = new URLSearchParams({ vsn: ver(), play_id: part.join(','), league: 'NCAA' });
    const r = await call('/api/v1/ultimate/plays/feed', { method: 'POST', headers: H({ 'Content-Type': 'application/x-www-form-urlencoded' }), body: form });
    const text = await r.text();
    const nl = text.indexOf('\n');
    if (header === null) header = text.slice(0, nl);
    body.push(text.slice(nl + 1).replace(/\s+$/, ''));
  }
  return header + '\n' + body.filter(Boolean).join('\n');
}

/* his tag(s) in the feed: video team code + jersey ("KYUN 01"); one per team/number stint */
function tagsFor(rows, player) {
  const t = player.team || {};
  const guess = t.video_abbreviation && player.jersey_number ? `${t.video_abbreviation} ${String(player.jersey_number).padStart(2, '0')}` : null;
  const cands = KC.players(rows);
  const tags = [];
  let left = rows;
  if (guess && cands.some(c => c.tag === guess || c.tag === guess.replace(' ', ' D'))) {
    const g = cands.find(c => c.tag === guess) ? guess : guess.replace(' ', ' D');
    tags.push(g);
    left = rows.filter(r => !new RegExp(g + ' \\(').test((r.pff_OFFPLAYERS || '') + ' ' + (r.pff_DEFPLAYERS || '')));
  }
  // every play has him on the field, so the tag on most of the remaining plays is his (other team/number)
  let guard = 0;
  while (left.length >= Math.max(5, rows.length * 0.05) && guard++ < 4) {
    const top = KC.players(left)[0];
    if (!top || top.share < 0.9) break;
    tags.push(top.tag);
    left = left.filter(r => !new RegExp(top.tag + ' \\(').test((r.pff_OFFPLAYERS || '') + ' ' + (r.pff_DEFPLAYERS || '')));
  }
  return tags;
}

// Opponent levels from Ultimate's own conference data (read once per page):
//   1 Power Four: Big Ten, SEC, ACC, Big 12 + Notre Dame      2 Mountain West, American, Pac-12
//   3 Sun Belt, C-USA, MAC, FBS Independents                  4 FCS / everyone else
// The returned Set holds the level-1 teams; .level maps every team code to its level. SEC list is only a fallback.
const LEVELS = [
  [1, ['big ten', 'sec', 'acc', 'big 12']],
  [2, ['mwc', 'mountain west', 'the american', 'american', 'aac', 'pac-12', 'pac 12']],
  [3, ['sun belt', 'c-usa', 'conference usa', 'mac', 'ind (fbs)', 'fbs independents']]
];
const LEVEL_NAMES = { 1: 'P4', 2: 'MWC/AAC/Pac-12', 3: 'G5', 4: 'FCS' };
let P4CACHE = null;
async function loadP4() {
  if (P4CACHE) return P4CACHE;
  const yr = new Date().getMonth() >= 7 ? new Date().getFullYear() : new Date().getFullYear() - 1;
  try {
    const j = await getJSON('/api/v1/teams?league=NCAA');
    const arr = Array.isArray(j) ? j : (Object.values(j).find(Array.isArray) || []);
    const conf = t => (t.groups || []).filter(g => g.type === 'CONF' && (g.start_season || 0) <= yr && (g.end_season || 3000) >= yr).map(g => String(g.name || '').trim().toLowerCase());
    const level = new Map();
    arr.forEach(t => {
      if (!t.video_abbreviation) return;
      const cs = conf(t);
      let l = 4;
      for (const [n, names] of LEVELS) if (cs.some(c => names.includes(c))) { l = n; break; }
      if (/notre dame/i.test(String(t.city || '') + ' ' + String(t.nickname || '')) && (l === 3 || l === 4)) l = 1;
      level.set(t.video_abbreviation, l);
    });
    const s = new Set([...level].filter(([, l]) => l === 1).map(([k]) => k));
    s.level = level;
    if (s.size >= 40) { P4CACHE = s; return s; }
  } catch (e) {}
  P4CACHE = new Set(P4_DEFAULT);
  return P4CACHE;
}
function p4set() { return P4CACHE || new Set(P4_DEFAULT); }


// PFF's charted block for each of his snaps (Ultimate's Block Type (Player) and block win / loss filters)
const BLOCK_CLASSES = { phys: ['CK', 'DN', 'PH', 'TW', 'CM', 'PB', 'SB', 'BK', 'CS'], eng: ['MN', 'RH', 'CU', 'ST', 'HG', 'PL', 'SF', 'HP', 'HL', 'DW', 'BF'], down: ['DF'] };
async function blockInfo(playerId, years) {
  try {
    const base = { league: { eq: 'NCAA' }, season_week: { in: seasonWeeks(years) }, participating_player_id: { eq: playerId } };
    const q = async extra => ((await sendJSON('/api/v1/ultimate/plays/ids', 'POST', { context: 'pff', filters: Object.assign({}, base, extra) })).ids || []).map(Number);
    const all = [].concat(...Object.values(BLOCK_CLASSES));
    const cls = new Map();
    for (const [k, codes] of Object.entries(BLOCK_CLASSES)) (await q({ player_block_type: { in: codes } })).forEach(id => { if (!cls.has(id)) cls.set(id, k); });
    const win = new Set(await q({ player_block_type: { in: all }, or_player_result: { player_offense_block_win: true } }));
    const loss = new Set(await q({ player_block_type: { in: all }, or_player_result: { player_offense_block_loss: true } }));
    return { cls, win, loss };
  } catch (e) { return null; }
}
function annotateBlocks(plays, binfo) {
  if (!binfo) return;
  plays.forEach(p => {
    const id = Number(p.play_id);
    p.block_class = binfo.cls.get(id) || null;
    p.block_win = binfo.win.has(id);
    p.block_loss = binfo.loss.has(id);
    if (p.block_class && (p.involve || 0) < 3) p.involve = 3;   // a charted block = he engaged a defender
  });
}

function buildFor(rows, player, code, binfo) {
  const tags = tagsFor(rows, player);
  if (!tags.length) throw new Error('Could not find his jersey tag in the play data.');
  const seen = new Set(), plays = [];
  const p4 = p4set();
  tags.forEach(t => KC.playsFor(rows, t, p4).forEach(p => { if (!seen.has(p.play_id)) { seen.add(p.play_id); plays.push(p); } }));
  annotateBlocks(plays, binfo);
  return { tags, plays, build: KC.build(PLAN, plays, code) };
}

const cap = s => String(s || '').replace(/[^A-Za-z0-9.'-]/g, '');
function titleFor(player, code) {
  const t = player.team || {};
  const num = String(player.jersey_number || '').replace(/[^0-9]/g, '');
  return `${code}_${cap(player.last_name)}_${cap(player.first_name)}_${cap(t.city || t.abbreviation)}` + (num ? `_#${num}` : '');
}
function notesFor(b, player, years) {
  const parts = b.results.map(r => `${r.cut.label === 'U' ? '' : r.cut.label + ' '}${r.cut.name} ${r.plays.length}`);
  const d = new Date();
  let s = `KC pid=${player.id} yrs=${(years || []).join(',')} | Kentucky 50-play cutup (${b.position}), built ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} from ${b.available} plays. Order: ` + parts.join(' | ');
  return s.length > 500 ? s.slice(0, 497) + '...' : s;
}

/* folder object as Ultimate holds it (the move request carries the whole folder) */
function deepFolders(o, out) {
  if (!o || typeof o !== 'object') return out;
  if (Array.isArray(o)) { o.forEach(x => deepFolders(x, out)); return out; }
  if (typeof o.id === 'number' && typeof o.title === 'string' && 'parent_folder_id' in o) out.push(o);
  Object.values(o).forEach(v => { if (v && typeof v === 'object') deepFolders(v, out); });
  return out;
}
async function folderFor(code) {
  const name = FOLDERS[code];
  const found = [];
  for (const p of ['/api/v1/collection', '/api/v1/collection/user_folders']) {
    try { deepFolders(await getJSON(p), found); } catch (e) {}
    const f = found.find(x => x.title === name) || found.find(x => x.id === FOLDER_IDS[code]);
    if (f) return f;
  }
  try { const ps = await getJSON('/api/v1/collection/play_sets'); deepFolders(ps, found); } catch (e) {}
  return found.find(x => x.title === name) || { id: FOLDER_IDS[code], title: name, parent_folder_id: null };
}

async function mySets() {
  try {
    const j = await getJSON('/api/v1/collection/play_sets');
    const sets = j.play_sets || [];
    const own = sets.filter(p => p.actions && p.actions.delete);
    const c = {}; own.forEach(p => { if (p.user_name) c[p.user_name] = (c[p.user_name] || 0) + 1; });
    const userName = (Object.entries(c).sort((a, b) => b[1] - a[1])[0] || [])[0];
    return { titles: new Set(sets.map(p => p.title)), userName };
  } catch (e) { return { titles: new Set(), userName: undefined }; }
}

async function savePlaylist(title, notes, ids, code) {
  const { titles, userName } = await mySets();
  let t = title;
  if (titles.has(t)) { const d = new Date(); t = `${title} (${d.getMonth() + 1}-${d.getDate()})`; let k = 2; while (titles.has(t)) t = `${title} (${d.getMonth() + 1}-${d.getDate()} #${k++})`; }
  const play_set = { league: 'NCAA', title: t, notes, plays: ids.map(Number), shared_with: [] };
  if (userName) play_set.user_name = userName.trim();
  const j = await sendJSON('/api/v1/collection/play_sets', 'POST', { play_set });
  let id = j.id || (j.play_set && j.play_set.id) || (j.data && j.data.id);
  if (!id) {   // response without a body: find it by title
    const ps = await getJSON('/api/v1/collection/play_sets');
    const m = (ps.play_sets || []).filter(p => p.title === t).sort((a, b) => b.id - a.id)[0];
    id = m && m.id;
  }
  if (!id) throw new Error('Playlist save did not return an id.');
  const folder = await folderFor(code);
  await sendJSON('/api/v1/collection/play_sets/' + id, 'PUT', { play_set: { user_folder: folder } });
  // check it landed
  let inFolder = false;
  try {
    const ps = await getJSON('/api/v1/collection/play_sets');
    const me = (ps.play_sets || []).find(p => p.id === id);
    inFolder = !!(me && me.user_folder && me.user_folder.id === folder.id);
  } catch (e) {}
  return { id, title: t, folder, inFolder };
}

/* ------------------------------------------------------------ panel */
const CSS = `
#kc-panel{position:fixed;top:64px;right:16px;width:420px;max-height:calc(100vh - 80px);overflow:auto;z-index:2147483000;background:#fff;color:#14171f;
 border-radius:10px;box-shadow:0 12px 40px rgba(0,0,0,.28);font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
#kc-panel *{box-sizing:border-box}
#kc-panel header{background:#0033a0;color:#fff;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;border-radius:10px 10px 0 0;position:sticky;top:0}
#kc-panel header b{font-size:14px;letter-spacing:.02em}
#kc-panel header button{background:none;border:0;color:#fff;font-size:18px;cursor:pointer;line-height:1}
#kc-panel .kc-body{padding:14px}
#kc-panel label{display:block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:#5b6270;margin:0 0 4px}
#kc-panel input[type=text],#kc-panel select{width:100%;padding:7px 9px;border:1px solid #cfd4dc;border-radius:6px;font:inherit;background:#fff;color:inherit}
#kc-panel .kc-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
#kc-panel .kc-full{margin-bottom:10px}
#kc-panel .kc-pos{display:flex;gap:6px;margin-bottom:6px}
#kc-panel .kc-pos button{flex:none;width:30px;border:1px solid #cfd4dc;background:#f4f6f9;border-radius:6px;cursor:pointer}
#kc-panel .kc-link{background:none;border:0;color:#0033a0;cursor:pointer;padding:0;font:inherit;font-weight:600}
#kc-panel .kc-go{width:100%;margin-top:8px;padding:10px;border:0;border-radius:6px;background:#0033a0;color:#fff;font-weight:700;font-size:14px;cursor:pointer}
#kc-panel .kc-go:disabled{opacity:.55;cursor:default}
#kc-panel .kc-seasons{display:flex;gap:14px;align-items:center;margin-bottom:10px}
#kc-panel .kc-seasons span{font-weight:400;text-transform:none;letter-spacing:0;color:#14171f;font-size:13px}
#kc-panel .kc-status{margin-top:12px;font-size:12.5px}
#kc-panel .kc-step{padding:3px 0;color:#5b6270}
#kc-panel .kc-step.ok{color:#14171f}
#kc-panel .kc-step.ok:before{content:"✓ ";color:#1a7f37;font-weight:700}
#kc-panel .kc-step.err{color:#b42318;font-weight:600}
#kc-panel .kc-card{border:1px solid #e3e6eb;border-radius:8px;padding:10px 12px;margin-top:10px}
#kc-panel .kc-card h4{margin:0 0 6px;font-size:13.5px}
#kc-panel .kc-card table{width:100%;border-collapse:collapse;font-size:12px}
#kc-panel .kc-card td{padding:2px 0;border-bottom:1px solid #f0f2f5;vertical-align:top}
#kc-panel .kc-card td:last-child{text-align:right;white-space:nowrap}
#kc-panel .kc-short{color:#b54708}
#kc-panel .kc-pick{display:block;width:100%;text-align:left;padding:7px 9px;margin-top:6px;border:1px solid #cfd4dc;border-radius:6px;background:#f8f9fb;cursor:pointer;font:inherit}
#kc-panel .kc-pick:hover{border-color:#0033a0}
#kc-panel a{color:#0033a0;font-weight:600}
#kc-panel .kc-muted{color:#5b6270;font-size:12px}
`;

const POS_OPTS = PLAN.POSITIONS.map(p => `<option value="${p.code}">${p.code} — ${p.title}</option>`).join('');
const el = (h) => { const d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; };
const escH = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function open() {
  const old = document.getElementById('kc-panel');
  if (old) { old.remove(); return; }
  if (!document.getElementById('kc-style')) { const s = document.createElement('style'); s.id = 'kc-style'; s.textContent = CSS; document.head.appendChild(s); }
  const y = new Date().getFullYear(), m = new Date().getMonth();
  const cur = m >= 7 ? y : y - 1;   // college season year
  const P = el(`<div id="kc-panel">
    <header><b>KENTUCKY CUTUPS</b><span><button title="Review builds" data-rv style="font-size:12px;font-weight:600;margin-right:10px">Review builds</button><button title="Close" data-x>×</button></span></header>
    <div class="kc-body">
      <div class="kc-row"><div><label>First name</label><input type="text" data-first></div><div><label>Last name</label><input type="text" data-last></div></div>
      <div class="kc-full"><label>School</label><input type="text" data-school placeholder="e.g. Kentucky"></div>
      <div class="kc-full"><label>Position</label><div data-poslist></div><button class="kc-link" data-addpos>+ Add another position</button></div>
      <div class="kc-seasons"><label style="margin:0">Seasons</label>
        <span><input type="checkbox" data-yr="${cur}" checked> ${cur}</span><span><input type="checkbox" data-yr="${cur - 1}"> ${cur - 1}</span></div>
      <button class="kc-go" data-go>Build cutup</button>
      <div class="kc-status" data-status></div>
      <div class="kc-muted" style="margin-top:12px;font-size:11px">Version ${escH(String(W.KCApp && W.KCApp.built || '').slice(0, 16).replace('T', ' '))} UTC · updates load automatically</div>
    </div></div>`);
  document.body.appendChild(P);
  const $ = s => P.querySelector(s);
  const addPos = (v) => {
    const row = el(`<div class="kc-pos"><select data-pos><option value="">Use his PFF position</option>${POS_OPTS}</select><button title="Remove">−</button></div>`);
    if (v) row.querySelector('select').value = v;
    row.querySelector('button').onclick = () => { if (P.querySelectorAll('[data-pos]').length > 1) row.remove(); };
    $('[data-poslist]').appendChild(row);
  };
  addPos();
  $('[data-addpos]').onclick = () => addPos();
  $('[data-x]').onclick = () => P.remove();
  $('[data-rv]').onclick = () => review();
  P.querySelectorAll('input[type=text]').forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') $('[data-go]').click(); }));

  const status = $('[data-status]');
  const step = (txt, cls) => { const d = el(`<div class="kc-step ${cls || ''}"></div>`); d.textContent = txt; status.appendChild(d); return d; };

  async function run(player) {
    const go = $('[data-go]');
    go.disabled = true;
    try {
      const years = [...P.querySelectorAll('[data-yr]')].filter(c => c.checked).map(c => c.dataset.yr);
      if (!years.length) throw new Error('Pick at least one season.');
      let codes = [...P.querySelectorAll('[data-pos]')].map(s => s.value || groupOf(player.position));
      codes = [...new Set(codes.filter(Boolean))];
      if (!codes.length) throw new Error(`His PFF position (${player.position}) does not map to a Kentucky position. Pick one.`);
      const t = player.team || {};
      step(`${player.first_name} ${player.last_name} — ${t.city || t.abbreviation} ${player.position} #${player.jersey_number}`, 'ok');
      await loadP4();
      let s = step('Finding his plays…');
      const ids = await playIds(player.id, years);
      if (!ids.length) throw new Error(`No ${years.join('/')} plays found for him in Ultimate.`);
      s.textContent = `${ids.length} plays found`; s.className = 'kc-step ok';
      s = step('Downloading play data…');
      const csv = await playFeed(ids, m => s.textContent = m);
      const rows = KC.parseCSV(csv);
      s.textContent = `Play data loaded (${rows.length} rows)`; s.className = 'kc-step ok';
      s = step('Reading his charted blocks…');
      const binfo = await blockInfo(player.id, years);
      s.textContent = binfo ? `Charted blocks loaded (${binfo.cls.size})` : 'Charted blocks unavailable: using run snaps without a route'; s.className = binfo ? 'kc-step ok' : 'kc-step';
      for (const code of codes) {
        s = step(`Building ${code} cutup…`);
        const { plays, build: b, tags } = buildFor(rows, player, code, binfo);
        const ids50 = b.results.flatMap(r => r.plays.map(p => p.play_id));
        s.textContent = `${code}: ${ids50.length} plays picked from ${plays.length} (${tags.join(', ')})`; s.className = 'kc-step ok';
        s = step(`Saving to ${FOLDERS[code]}…`);
        const saved = await savePlaylist(titleFor(player, code), notesFor(b, player, years), ids50, code);
        s.textContent = saved.inFolder ? `Saved “${saved.title}” in ${FOLDERS[code]}` : `Saved “${saved.title}” (could not confirm the folder move — check ${FOLDERS[code]})`;
        s.className = saved.inFolder ? 'kc-step ok' : 'kc-step err';
        const rowsH = b.results.map(r => {
          const short = r.plays.length < r.cut.plays;
          return `<tr><td>${r.cut.label === 'U' ? '•' : r.cut.label}. ${escH(r.cut.name)}</td><td class="${short ? 'kc-short' : ''}">${r.plays.length}/${r.cut.plays}</td></tr>`;
        }).join('');
        const bands = Object.entries(b.bands).map(([k, v]) => `${v} ${k}`).join(' · ');
        status.appendChild(el(`<div class="kc-card"><h4>${escH(saved.title)}</h4>
          <div class="kc-muted">${b.total} plays · ${bands}</div>
          <table>${rowsH}</table>
          ${b.short.length ? `<div class="kc-muted kc-short" style="margin-top:6px">Short: ${b.short.map(x => escH(x.name) + ' ' + x.got + '/' + x.target).join(', ')} — he doesn't have enough plays of that type.</div>` : ''}
          <div style="margin-top:8px;display:flex;gap:14px"><a href="/saved-reports/folders/${saved.folder.id}">Open ${FOLDERS[code]} folder →</a><a href="#" data-review="${saved.id}">Review this build →</a></div></div>`));
        status.querySelectorAll('[data-review]').forEach(a => a.onclick = e => { e.preventDefault(); review(+a.dataset.review); });
      }
    } catch (e) {
      step(e.message || String(e), 'err');
    } finally { go.disabled = false; }
  }

  $('[data-go]').onclick = async () => {
    status.innerHTML = '';
    const first = $('[data-first]').value.trim(), last = $('[data-last]').value.trim(), school = $('[data-school]').value.trim();
    if (!last && !first) { step('Type at least a last name.', 'err'); return; }
    const s = step('Searching PFF players…');
    try {
      const found = await findPlayers(first, last, school);
      if (!found.length) { s.textContent = 'No player matched. Check the spelling or leave School blank.'; s.className = 'kc-step err'; return; }
      if (found.length === 1) { s.remove(); return run(found[0]); }
      s.textContent = `${found.length} players match — pick one:`; s.className = 'kc-step';
      found.slice(0, 12).forEach(p => {
        const t = p.team || {};
        const b = el(`<button class="kc-pick"><b>${escH(p.first_name)} ${escH(p.last_name)}</b> — ${escH(t.city || t.abbreviation || '')} · ${escH(p.position)} #${escH(p.jersey_number || '')} · ${escH(p.current_class || '')}</button>`);
        b.onclick = () => { status.innerHTML = ''; run(p); };
        status.appendChild(b);
      });
    } catch (e) { s.textContent = e.message; s.className = 'kc-step err'; }
  };
  $('[data-last]').focus();
}


/* ------------------------------------------------------------ review (quality control) */
const CODES = Object.keys(FOLDERS);
function parseTitle(t) {
  const m = String(t || '').match(/^([A-Z]+)_([^_]+)_([^_]+)_([^_]+?)(?:_#?(\d+))?(?: \(.*\))?$/);
  if (!m || !FOLDERS[m[1]]) return null;
  return { code: m[1], last: m[2], first: m[3], school: m[4], jersey: m[5] || '' };
}
function parseNotes(n) {
  n = String(n || '');
  const pid = (n.match(/pid=(\d+)/) || [])[1];
  const yrs = ((n.match(/yrs=([\d,]+)/) || [])[1] || '').split(',').filter(Boolean);
  const order = (n.split('Order: ')[1] || '').split(' | ').map(x => { const m = x.trim().match(/^(?:(\d+) )?(.+) (\d+)$/); return m ? { label: m[1] || 'U', name: m[2], n: +m[3] } : null; }).filter(Boolean);
  const built = (n.match(/built ([\d/]+)/) || [])[1] || '';
  return { pid: pid ? +pid : null, yrs, order, built };
}
function describe(p) {
  const bits = [];
  if (p.roles.has('Passer')) bits.push('Pass' + (p.targeted_depth !== null ? ` ${p.targeted_depth}y` : ''));
  if (p.roles.has('Ball carrier')) bits.push(p.handoff ? 'Handoff' : 'Carry');
  if (p.roles.has('Target receiver')) bits.push('Targeted' + (p.targeted_depth !== null ? ` ${p.targeted_depth}y` : ''));
  else if (p.roles.has('Running a route')) bits.push('Route ' + (p.route_code || '').split('(')[0]);
  if (p.roles.has('Pass blocker')) bits.push(p.engaged ? 'Pass pro (engaged)' : 'Pass pro');
  if (p.block_class) bits.push((p.block_class === 'phys' ? 'Physical block' : p.block_class === 'down' ? 'Downfield block' : 'Block') + (p.block_win ? ' (win)' : p.block_loss ? ' (loss)' : ''));
  else if (p.roles.has('Run blocker')) bits.push(p.block_class === null ? 'Run snap, no charted block' : 'Run block');
  if (p.roles.has('Pass rushing')) bits.push('Rush');
  if (p.roles.has('Primary coverage')) bits.push('Targeted in coverage' + (p.targeted_depth !== null ? ` ${p.targeted_depth}y` : ''));
  if (p.roles.has('Coverage')) bits.push('Cov ' + (p.coverage_role || ''));
  if (p.roles.has('Run defense') && !bits.length) bits.push('Run D');
  if (p.pa_fake && !p.roles.has('Ball carrier')) bits.push('PA fake');
  const ctx = [];
  if (p.run_concept && !/undefined|^none$/i.test(p.run_concept)) ctx.push(p.run_concept);
  if (p.play_action) ctx.push('PA');
  if (p.screen) ctx.push('Screen');
  if (p.coverage_scheme) ctx.push(p.coverage_scheme);
  if (p.pressure) ctx.push('Pressure');
  const res = [...p.results];
  if (p.involve === 0) res.push('not involved');
  else if (p.involve === 1) res.push('ball to his area');
  else if (p.involve === 3 && !p.results.size) res.push('graded / PFF key player');
  else if (p.involve === 4 && !p.results.size && !p.roles.has('Primary coverage') && !p.roles.has('Ball carrier') && !p.roles.has('Target receiver') && !p.roles.has('Pass blocker')) res.push('first contact');
  if (p.gain !== null && (p.roles.has('Ball carrier') || p.results.has('Reception'))) res.unshift((p.gain > 0 ? '+' : '') + p.gain + ' yds');
  return { role: bits.join(', ') || '—', ctx: ctx.join(' · '), res: res.join(', ') };
}
const fmtG = g => g === null || g === undefined ? '—' : (g > 0 ? '+' : '') + g.toFixed(1);
const RCSS = `
#kc-review{position:fixed;inset:24px;z-index:2147483001;background:#fff;color:#14171f;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.35);display:flex;flex-direction:column;font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;overflow:hidden}
#kc-review *{box-sizing:border-box}
#kc-review>header{background:#0033a0;color:#fff;padding:12px 16px;display:flex;align-items:center;gap:16px}
#kc-review>header b{font-size:15px;letter-spacing:.02em}
#kc-review>header .sp{flex:1}
#kc-review>header button{background:rgba(255,255,255,.15);border:0;color:#fff;border-radius:6px;padding:6px 10px;cursor:pointer;font:inherit;font-weight:600}
#kc-review .kr-wrap{flex:1;display:flex;min-height:0}
#kc-review .kr-list{width:290px;border-right:1px solid #e3e6eb;overflow:auto;padding:8px 0;background:#f8f9fb}
#kc-review .kr-ctl{position:sticky;top:-8px;background:#f8f9fb;padding:6px 12px 8px;display:flex;flex-direction:column;gap:6px;border-bottom:1px solid #e3e6eb;margin-top:-8px}
#kc-review .kr-ctl select,#kc-review .kr-ctl input{width:100%;padding:6px 8px;border:1px solid #cfd4dc;border-radius:6px;font:inherit;background:#fff;color:inherit}
#kc-review .kr-list h5{margin:12px 14px 4px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#5b6270}
#kc-review .kr-item{display:block;width:100%;text-align:left;border:0;background:none;padding:7px 14px;cursor:pointer;font:inherit;color:inherit}
#kc-review .kr-item:hover{background:#eef2fb}
#kc-review .kr-item.on{background:#dfe7fa;font-weight:600}
#kc-review .kr-item small{display:block;color:#5b6270;font-weight:400}
#kc-review .kr-main{flex:1;overflow:auto;padding:16px 20px}
#kc-review h3{margin:0 0 4px;font-size:18px}
#kc-review .kr-sum{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0 6px}
#kc-review .kr-pill{border:1px solid #e3e6eb;border-radius:999px;padding:3px 10px;font-size:12px;background:#fff}
#kc-review .kr-pill.good{border-color:#a6d8b4;background:#eefaf1}
#kc-review .kr-pill.warn{border-color:#f5c27a;background:#fff7ea}
#kc-review .kr-pill.bad{border-color:#f1a7a1;background:#fff0ef}
#kc-review .kr-cut{margin-top:16px;border:1px solid #e3e6eb;border-radius:10px;overflow:hidden}
#kc-review .kr-cut>div{background:#f4f6f9;padding:8px 12px;display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
#kc-review .kr-cut>div b{font-size:14px}
#kc-review .kr-cut>div span{color:#5b6270;font-size:12px}
#kc-review table{width:100%;border-collapse:collapse;font-size:12px}
#kc-review th{text-align:left;font-weight:600;color:#5b6270;padding:5px 8px;border-bottom:1px solid #e3e6eb;white-space:nowrap}
#kc-review td{padding:5px 8px;border-bottom:1px solid #f0f2f5;vertical-align:top}
#kc-review td.n{white-space:nowrap}
#kc-review .b{display:inline-block;border-radius:4px;padding:1px 6px;font-size:11px;font-weight:700;text-transform:uppercase}
#kc-review .b-best{background:#e3f5e8;color:#1a7f37}#kc-review .b-ranked{background:#e6edfb;color:#0033a0}
#kc-review .b-worst{background:#fde8e6;color:#b42318}#kc-review .b-recent{background:#eef0f3;color:#414854}
#kc-review .b-next-best{background:#eaf6ee;color:#2f6b40;border:1px dashed #7fbf93}
#kc-review .b-rollover{background:#fff3dc;color:#93590b}#kc-review .b-unknown{background:#f4f4f4;color:#888}
#kc-review .ok{color:#1a7f37;font-weight:700}#kc-review .no{color:#b42318;font-weight:700}
#kc-review .gp{color:#1a7f37;font-weight:600}#kc-review .gn{color:#b42318;font-weight:600}
#kc-review .mut{color:#5b6270}
#kc-review .note{font-size:12px;color:#93590b;margin:6px 12px}
`;
async function review(openId) {
  const old = document.getElementById('kc-review');
  if (old) old.remove();
  if (!document.getElementById('kc-rstyle')) { const st = document.createElement('style'); st.id = 'kc-rstyle'; st.textContent = RCSS; document.head.appendChild(st); }
  const R = el(`<div id="kc-review"><header><b>KENTUCKY CUTUPS — REVIEW</b><span style="opacity:.7;font-size:11px">v ${escH(String(W.KCApp && W.KCApp.built || '').slice(0, 10))}</span><span class="sp"></span><button data-copy>Copy table for Sheets</button><button data-refresh>Refresh list</button><button data-x>Close ×</button></header>
    <div class="kr-wrap"><div class="kr-list" data-list><div class="kr-ctl"><select data-pos><option value="">All positions</option></select><input data-q placeholder="Search name or school"></div></div><div class="kr-main" data-main><div class="mut">Pick a cutup on the left.</div></div></div></div>`);
  document.body.appendChild(R);
  const $ = q => R.querySelector(q);
  $('[data-x]').onclick = () => R.remove();
  let current = null;
  $('[data-copy]').onclick = () => {
    if (!current) return;
    const lines = [['Cutup', 'Play ID', 'Band', 'Grade', 'Date', 'Opponent', 'Qtr', 'Down & Dist', 'His role', 'Play', 'Result', 'Fits rule'].join('\t')];
    current.forEach(r => lines.push(r.join('\t')));
    navigator.clipboard.writeText(lines.join('\n')).then(() => { $('[data-copy]').textContent = 'Copied ✓'; setTimeout(() => $('[data-copy]').textContent = 'Copy table for Sheets', 2000); });
  };
  const when = v => { if (!v) return null; let t = String(v); if (!/[zZ]|[+-]\d\d:?\d\d$/.test(t)) t += 'Z'; const d = new Date(t); return isNaN(d) ? null : d; };
  const stamp = d => d ? d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) + ' · ' + d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) : '';
  let sets = [];
  function drawList() {
    const list = $('[data-list]'), pos = $('[data-pos]').value, q = $('[data-q]').value.trim().toLowerCase();
    const keep = R.querySelector('.kr-item.on'); const onId = keep && keep.dataset.id;
    list.querySelectorAll('h5,.kr-item,.kr-empty').forEach(n => n.remove());
    let shown = 0;
    CODES.filter(c => !pos || c === pos).forEach(code => {
      const mine = sets.filter(x => x.t.code === code && (!q || (x.t.first + ' ' + x.t.last + ' ' + x.t.school).toLowerCase().includes(q)))
        .sort((a, b) => (b.created || 0) - (a.created || 0));
      if (!mine.length) return;
      list.appendChild(el(`<h5>${FOLDERS[code]} <span style="font-weight:400">(${mine.length})</span></h5>`));
      mine.forEach(x => {
        shown++;
        const b = el(`<button class="kr-item" data-id="${x.p.id}">${escH(x.t.first)} ${escH(x.t.last)}${x.t.jersey ? ' #' + escH(x.t.jersey) : ''}<small>${escH(x.t.school)} · ${(x.p.plays || []).length} plays</small><small>Created ${escH(stamp(x.created))}${x.p.user_name ? ' · ' + escH(x.p.user_name) : ''}</small></button>`);
        b.onclick = () => { list.querySelectorAll('.kr-item').forEach(i => i.classList.remove('on')); b.classList.add('on'); show(x.p, x.t, x.created); };
        if (String(x.p.id) === String(onId)) b.classList.add('on');
        list.appendChild(b);
      });
    });
    if (!shown) list.appendChild(el('<div class="kr-empty mut" style="padding:14px">No Kentucky cutups match.</div>'));
  }
  async function loadList() {
    const list = $('[data-list]');
    list.querySelectorAll('h5,.kr-item,.kr-empty').forEach(n => n.remove());
    list.appendChild(el('<div class="kr-empty mut" style="padding:14px">Loading builds…</div>'));
    const j = await getJSON('/api/v1/collection/play_sets');
    sets = (j.play_sets || []).map(p => ({ p, t: parseTitle(p.title), created: when(p.inserted_at || p.updated_at) })).filter(x => x.t);
    const sel = $('[data-pos]'), cur = sel.value;
    sel.innerHTML = '<option value="">All positions</option>' + CODES.filter(c => sets.some(x => x.t.code === c)).map(c => `<option value="${c}">${FOLDERS[c]} (${sets.filter(x => x.t.code === c).length})</option>`).join('');
    sel.value = cur;
    drawList();
    const pick = openId && list.querySelector(`[data-id="${openId}"]`);
    if (pick) { pick.click(); openId = null; }
  }
  $('[data-pos]').onchange = drawList;
  $('[data-q]').oninput = drawList;
  $('[data-refresh]').onclick = () => loadList().catch(e => $('[data-list]').textContent = e.message);

  async function show(ps, t, created) {
    const main = $('[data-main]');
    current = null;
    main.innerHTML = `<h3>${escH(ps.title)}</h3><div class="mut" data-st>Loading his plays…</div>`;
    const st = main.querySelector('[data-st]');
    try {
      const meta = parseNotes(ps.notes);
      const ids = (ps.plays || []).map(x => typeof x === 'object' ? (x.play_id || x.id) : x).map(String);
      const found = await findPlayers(t.first, t.last, t.school);
      let player = (meta.pid && found.find(p => p.id === meta.pid)) || found.find(p => !t.jersey || String(p.jersey_number) === t.jersey) || found[0];
      if (!player) throw new Error('Could not find this player in PFF to read his plays.');
      const csv = await playFeed(ids.map(Number));
      const rows = KC.parseCSV(csv);
      const tags = tagsFor(rows, player);
      await loadP4();
      const p4 = p4set();
      const byId = {};
      tags.forEach(tg => KC.playsFor(rows, tg, p4).forEach(p => { if (!byId[p.play_id]) byId[p.play_id] = p; }));
      const ryrs = meta.yrs.length ? meta.yrs : [String(new Date().getMonth() >= 7 ? new Date().getFullYear() : new Date().getFullYear() - 1)];
      const binfo = await blockInfo(player.id, ryrs);
      annotateBlocks(Object.values(byId), binfo);
      const cuts = KC.cutups(PLAN, t.code);
      // which cutup each saved play is in: the playlist is saved in cutup order, notes hold the counts
      let seg = [];
      const counts = meta.order.length === cuts.length ? meta.order.map(o => o.n) : null;
      if (counts && counts.reduce((a, b) => a + b, 0) === ids.length) { let k = 0; cuts.forEach((c, i) => { for (let j = 0; j < counts[i]; j++) seg.push(i); }); }
      else ids.forEach(id => { const p = byId[id]; const i = p ? cuts.findIndex(c => c.match(p)) : -1; seg.push(i < 0 ? cuts.length - 1 : i); });
      st.textContent = 'Checking against a fresh rebuild…';
      // bands come from rebuilding with today's data (same seasons)
      let band = {}, drift = null;
      try {
        const yrs = meta.yrs.length ? meta.yrs : [String(new Date().getMonth() >= 7 ? new Date().getFullYear() : new Date().getFullYear() - 1)];
        const all = await playIds(player.id, yrs);
        const fullRows = KC.parseCSV(await playFeed(all));
        const rb = buildFor(fullRows, player, t.code, binfo).build;
        rb.results.forEach(r => r.plays.forEach(p => band[p.play_id] = p.band));
        const fresh = new Set(rb.results.flatMap(r => r.plays.map(p => p.play_id)));
        const changed = ids.filter(id => !fresh.has(id)).length;
        drift = { changed, available: rb.available, results: rb.results };
      } catch (e) { drift = { error: e.message }; }
      const g = ids.map(id => byId[id] && byId[id].grade).filter(x => x !== null && x !== undefined);
      const nnb = ids.filter(id => band[id] === 'next best').length, nb = ids.filter(id => band[id] === 'best' || band[id] === 'ranked').length, nw = ids.filter(id => band[id] === 'worst').length;
      const fails = ids.filter((id, i) => !byId[id] || !cuts[seg[i]].match(byId[id])).length;
      const games = {}; ids.forEach(id => { const p = byId[id]; if (p) games[p.game_id] = 1; });
      const avg = g.length ? g.reduce((a, b) => a + b, 0) / g.length : null;
      main.innerHTML = `<h3>${escH(ps.title)}</h3>
        <div class="mut">${escH(player.first_name)} ${escH(player.last_name)} · ${escH((player.team || {}).city || '')} · PFF ${escH(player.position)} #${escH(player.jersey_number || '')} · created ${escH(stamp(created) || meta.built)}${ps.user_name ? ' by ' + escH(ps.user_name) : ''}</div>
        <div class="kr-sum">
          <span class="kr-pill">${ids.length} plays</span>
          <span class="kr-pill ${nb + nnb >= nw ? 'good' : 'bad'}">${nb} best / ranked${nnb ? ' · ' + nnb + ' next best' : ''} · ${nw} worst</span>
          <span class="kr-pill">${Object.keys(games).length} games</span>
          <span class="kr-pill">avg grade ${fmtG(avg)}</span>
          <span class="kr-pill ${fails ? 'bad' : 'good'}">${fails ? fails + ' play(s) do not fit their cutup rule' : 'every play fits its cutup rule'}</span>
          ${drift && drift.error ? `<span class="kr-pill warn">rebuild check failed: ${escH(drift.error)}</span>` : drift ? `<span class="kr-pill ${drift.changed ? 'warn' : 'good'}">${drift.changed ? drift.changed + ' play(s) differ from a rebuild with today\'s data' : 'matches a rebuild with today\'s data'}</span>` : ''}
        </div><div data-cuts></div>`;
      const box = main.querySelector('[data-cuts]');
      const out = [];
      cuts.forEach((c, i) => {
        const mine = ids.filter((id, k) => seg[k] === i);
        const rr = drift && drift.results ? drift.results.find(r => r.cut.name === c.name) : null;
        const bands = {}; mine.forEach(id => { const b = band[id] || 'unknown'; bands[b] = (bands[b] || 0) + 1; });
        const plan = [c.best ? c.best + ' best' : '', c.worst ? c.worst + ' worst' : '', c.recent ? c.recent + ' recent' : '', c.ranked ? 'ranked' : ''].filter(Boolean).join(' / ');
        const head = `<div><b>${c.label === 'U' ? '' : c.label + '. '}${escH(c.name)}</b><span>${mine.length}/${c.plays} · got ${Object.entries(bands).map(([k, v]) => v + ' ' + k).join(', ') || '—'} · plan ${plan || '—'}</span><span>${escH(c.filter || '')}</span></div>`;
        const body = mine.map(id => {
          const p = byId[id];
          if (!p) return `<tr><td class="n">${id}</td><td colspan="9" class="mut">Not in his play data</td></tr>`;
          const d = describe(p), fit = c.match(p), b = band[id] || 'unknown';
          out.push([c.name, id, b, fmtG(p.grade), p.game_date, p.opponent || '', p.quarter || '', p.down ? p.down + ' & ' + p.distance : '', d.role, d.ctx, d.res, fit ? 'yes' : 'NO']);
          return `<tr><td class="n">${id}</td><td><span class="b b-${b.replace(' ', '-')}">${b}</span></td><td class="n ${p.grade > 0 ? 'gp' : p.grade < 0 ? 'gn' : ''}">${fmtG(p.grade)}</td><td class="n">${escH(String(p.game_date || '').slice(0, 10))}</td><td>${escH(p.opponent || '')}${p.opponent_level ? ' <span class="mut">' + LEVEL_NAMES[p.opponent_level] + '</span>' : ''}</td><td class="n">Q${p.quarter || '?'} ${p.down ? p.down + '&' + p.distance : ''}</td><td>${escH(d.role)}</td><td>${escH(d.ctx)}</td><td>${escH(d.res)}</td><td class="${fit ? 'ok' : 'no'}">${fit ? '✓' : '✗'}</td></tr>`;
        }).join('');
        const notes = rr && rr.notes && rr.notes.length ? rr.notes.map(n => `<div class="note">• ${escH(n)}</div>`).join('') : '';
        box.appendChild(el(`<div class="kr-cut">${head}${notes}<table><thead><tr><th>Play ID</th><th>Band</th><th>Grade</th><th>Date</th><th>Opp</th><th>Situation</th><th>His role</th><th>Play</th><th>Result</th><th>Fits</th></tr></thead><tbody>${body}</tbody></table></div>`));
      });
      current = out;
    } catch (e) { st.textContent = e.message; st.style.color = '#b42318'; }
  }
  loadList().catch(e => $('[data-list]').textContent = e.message);
}

W.KCApp = { v: 2, open, review, parseTitle, parseNotes, describe, findPlayers, playIds, playFeed, buildFor, tagsFor, titleFor, notesFor, savePlaylist, folderFor, groupOf };
})(typeof window !== 'undefined' ? window : globalThis);

window.KCApp.built = "2026-11-27T15:10:31.753Z";
window.KCApp[mode]();
})();
