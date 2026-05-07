/*
  Tiny "Agentic" simulator: adds client-friendly, deterministic AI-like behavior
  (No external calls; safe for mockups)
*/
function $(sel){ return document.querySelector(sel); }
function addMsg(who, txt){
  const log = $('#agentLog');
  const div = document.createElement('div');
  div.className = 'msg';
  div.innerHTML = `<div class='who'>${who}</div><div class='txt'>${txt}</div>`;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}
function seedAgent(page){
  addMsg('Copilot Agent', `I'm ready to help on: ${page}. I'll suggest next-best actions, validate required fields, and keep an audit trail.`);
  addMsg('Copilot Agent', `Theme: One Unified Platform • Configure-not-customize controls • Agents built-in for every persona.`);
}
function act(id){
  const actions = {
    'vet_prefill': `Pulled pet+owner+meds from PIMS → prefilled quote. Flagged missing: Activity Level. Ready to calculate calories.`,
    'vet_calories': `Calculated calories from weight/age/breed/location. Target Weight override available. Generated per-meal breakdown.`,
    'vet_dur': `Prepared DUR payload (current meds + new APIs). Will show interaction results with severity bands; pharmacist/vet can adjust.`,
    'vet_send_sms': `Generated a short SMS with a secure link to full quote detail (text length safe). Logged message for audit.`,
    'csr_change': `Captured change request; routed to Vet Pending Actions. Computed change window (configurable days prior to delivery).`,
    'csr_save_mode': `Placed account into Save Mode: shipments may continue for up to one cycle; commissions withheld until payment received.`,
    'fin_commissions': `Calculated flat monthly commissions per active subscription; excluded Save Mode/cancelled; prepared statements + drilldowns.`,
    'ops_schedule': `Sequenced production using: due-today priority + batch-size optimization + "Do Not Produce Before" freshness rule.`,
    'ops_qc_requeue': `QC failure detected: re-queued remake to front of queue; updated MES→ERP inventory + audit events.`,
    'proc_blanketpo': `Created blanket PO from approved suppliers; email/EDI transmission; receiving docs will support 3-way match.`,
    'arch_unified': `Mapped data flow: Vet Portal→ERP Order Mgmt→MES Scheduling/QC→Shipping→ERP financials; CRM for engagement/commissions.`
  };
  addMsg('User', `Run action: ${id}`);
  addMsg('Copilot Agent', actions[id] || 'Action not found.');
}
window.Agent = { seedAgent, act };
