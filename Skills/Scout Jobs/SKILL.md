---
name: linkedin-job-scout
description: >
  Monitors PM job postings from the last 24 hours that match Vandana Deep's resume,
  scores them for fit, and presents a curated, approved-first list before any action.
  Invoke when the user says "scout jobs", "find jobs", "job search", "check new jobs",
  or any variation of job hunting / outreach.
---

# LinkedIn Job Scout – Vandana Deep

## Purpose
Surface the **best-fit Senior/Group PM roles** posted in the **last 24 hours**, score them against Vandana's profile, and let her **approve** before any application is submitted. Never auto-apply without explicit per-job approval.

---

## Candidate Profile (Vandana Deep)

**Role target:** Senior Product Manager / Group Product Manager / Principal PM  
**Location:** San Francisco Bay Area (hybrid/remote preferred)  
**TC target:** $400K–$650K+  
**LinkedIn:** https://www.linkedin.com/in/vandanabdeep/  
**Email:** vandana.b.deep@gmail.com  
**Phone:** 650-440-2064  
**Resume PDF:** Vandana_Bassi_Deep_-_Resume.pdf

### Core strengths (use to score jobs)
- **10+ years PM:** DoorDash (2021–Present), SAP (2007–2020), Oracle (1997–2007)
- **Marketplace & B2B/B2C platforms at scale:** 75% of order volume, 80% of order volume on OpenAPI
- **AI/ML product:** ML tax categorization 55%→90% accuracy; agentic AI reconciliation & recommendation agents for SMBs/Enterprise
- **Agent evaluation & quality frameworks:** end-to-end task completion, correctness, failure recovery — go/no-go decisions for scaled rollout
- **0→1 product launches:** POS + self-serve kiosks → $1.9B potential revenue, 176% merchant base growth, 1.7M GOV in 2 quarters
- **Merchant tools:** unified financial reporting, tax reconciliation, 100K+ merchants, 85% reduction in manual workflow time
- **Developer & API platforms:** self-serve developer platform, reduced discovery-to-launch by 90%; 60-integration onboarding platform
- **Onboarding:** 14 days → 1 hour merchant onboarding; 45% speed improvement, 60% operator efficiency improvement
- **Global market expansion:** Germany launch (DoorDash's first European market), GDPR compliance, 1-quarter accelerated launch
- **Cross-functional leadership:** 25 engineers & designers across 4 global locations (SAP Screen Personas)
- **Low-code/no-code tooling:** SAP Fiori — development time from months → <1 hour
- **Technical skills:** Workflow orchestration (n8n), Rapid prototyping (Lovable, v0, Cursor), API Design, Data Analytics, SaaS UX
- **Loyalty & omni-channel:** 9% increase in repeat customer rates via cross-channel rewards

### Tier 1 priority companies
Meta, Google, Amazon, Uber, Airbnb, Stripe, Block/Square, Toast, Plaid, Adyen, OpenAI, Anthropic, ByteDance/TikTok, Shopify, Figma, Glean, Perplexity, Ramp, Brex, Affirm, Klarna

### Tier 2 companies
Microsoft, LinkedIn, Salesforce, Databricks, Snowflake, Coinbase, Discord, Canva, Miro, Airtable, Scale AI, Hugging Face, Palantir, DataDog, Atlassian, Twilio, Lovable AI, Parabola

---

## Full Workflow Overview

```
STEP 1 → Search for fresh jobs (last 24h)
STEP 2 → Score & filter each job (6+ only)
STEP 3 → For each qualifying job: find Vandana's network connections there
STEP 4 → Draft outreach messages to those connections → wait for approval
STEP 5 → Present full results (jobs + network contacts + outreach drafts)
STEP 6 → On approval: help Vandana apply via LinkedIn (she must be logged in)
STEP 7 → On approval: send outreach messages (she must confirm each one)
```

---

## Step-by-Step Workflow

### STEP 1 — Search for jobs posted in last 24 hours

Run **5–8 targeted web searches** using time-restricted queries. Use Google's `after:` or LinkedIn's time filter syntax.

**Search templates (use all of these):**

```
site:linkedin.com/jobs "Senior Product Manager" OR "Group Product Manager" "marketplace" OR "B2B" (San Francisco OR remote) posted:24h

site:linkedin.com/jobs "Principal Product Manager" "AI" OR "ML" "merchant" OR "platform" posted:24h

site:linkedin.com/jobs "Group Product Manager" OR "GPM" "fintech" OR "payments" OR "POS" (San Francisco OR Bay Area) posted:24h

"Senior Product Manager" "marketplace" OR "integrations" OR "developer platform" site:linkedin.com/jobs last 24 hours

"Product Manager" "DoorDash" OR "Uber" OR "Airbnb" OR "Stripe" OR "Toast" OR "Shopify" site:linkedin.com/jobs posted today

site:lever.co OR site:greenhouse.io "Senior Product Manager" "AI" OR "merchant" OR "B2B platform" 24 hours

"Group Product Manager" "marketplace" OR "merchant tools" San Francisco 2025 -senior -junior

site:linkedin.com/jobs "Principal Product Manager" "payments" OR "fintech" OR "financial" Bay Area posted today
```

Also search **directly for Tier 1 companies' career pages:**
```
Meta careers "Senior Product Manager" "marketplace" 2025
Google careers "Group Product Manager" "AI" 2025
Amazon jobs "Principal Product Manager" "merchant" 2025
Stripe jobs "Product Manager" "platform" 2025
Toast "Product Manager" 2025 job
```

---

### STEP 2 — Score & filter each job

For each job found, compute a **fit score (0–10)** based on:

| Factor | Points |
|--------|--------|
| Company is in Tier 1 list | +2 |
| Role title matches target (Sr PM, GPM, Principal PM) | +2 |
| Job requires marketplace / B2B / merchant experience | +2 |
| Job mentions AI/ML, agentic AI, or platform experience | +1 |
| Location: SF Bay Area or Remote | +1 |
| Posted within last 24 hours (confirmed) | +1 |
| Role appears to be 0→1 or strategic scope | +1 |

**Only include jobs scoring 6+.** Discard anything scoring 5 or below.

---

### STEP 3 — Find Vandana's network connections at each qualifying company

For every job that scores 6+, search for Vandana's LinkedIn connections who work there. Run this in parallel with job scoring.

**How to search for connections:**

1. **Use web search** to find people in Vandana's likely network at the company:
   ```
   site:linkedin.com/in "DoorDash" "[Company Name]" Product Manager
   site:linkedin.com/in "SAP" "[Company Name]"
   "[Company Name]" "Senior Product Manager" San Francisco linkedin.com/in
   ```

2. **Prioritize by connection strength:**
   - 🔴 **Direct colleague overlap** — people who worked at DoorDash, SAP, or Oracle at the same time as Vandana (cross-reference dates)
   - 🟡 **Indirect network** — Bay Area PMs, product leaders who overlap in communities
   - 🔵 **Company insiders** — current employees at the company in PM, eng, or leadership roles who are publicly visible

3. **For each connection found, capture:**
   - Name and current role
   - Connection to Vandana (shared company, shared time period, shared community)
   - Their LinkedIn URL
   - Whether they're likely a decision-maker, peer, or informational contact

4. **If no connections found:** Note "No visible network connections found — consider cold outreach or asking mutual contacts."

---

### STEP 4 — Draft outreach messages for each connection

For each connection found, draft a personalized message in one of two modes:

**Mode A: Referral Ask** (when connection is a peer/decision-maker at the company)
```
Subject: Quick ask — [Role Title] at [Company]

Hi [Name],

I hope you're doing well! I noticed [Company] is hiring for a [Role Title] and I'm really excited about it — especially [one specific thing about the role or team that's genuine].

I'd love to get your perspective on the team and what they're looking for. And if you feel it's a strong fit after chatting, I'd be so grateful for a referral.

My background: 10+ years in marketplace and B2B platforms (most recently at DoorDash where I led merchant finance, POS, and our agentic AI work). Happy to share my resume.

Would you have 15 minutes this week?

Thanks so much,
Vandana
vandana.b.deep@gmail.com
```

**Mode B: Guidance Ask** (when connection is more senior or a former colleague being reconnected with)
```
Hi [Name],

Great to [reconnect / meet] — I've been following [Company]'s work on [specific product area] and it's impressive.

I'm currently exploring my next PM role and [Company] is high on my list. I'd love to get your honest perspective on the culture and what makes someone successful there.

Would you be open to a quick 15-minute call? No pressure at all — I just value your perspective.

Best,
Vandana
```

**Mode C: Warm intro ask** (when you want Vandana to ask a mutual contact to introduce her)
```
Hi [Mutual Contact],

Hope you're well! Quick ask — I'm exploring a [Role Title] opportunity at [Company] and noticed you're connected with [Target Person]. Would you be comfortable making a quick intro?

[Target] seems to have a great perspective on the team and I'd love to chat with them. Happy to share context on what I'm looking for if helpful.

Thanks so much — really appreciate it!
Vandana
```

> ⚠️ **All outreach requires Vandana's explicit approval before sending.** Show drafts, wait for "send it" or edits.

---

### STEP 5 — Present results to Vandana

Format the output as a **clean approval list**. Always show this exact structure:

```
## 🎯 Job Scout Results — [DATE]
Found X high-fit roles. Network contacts found at Y companies.

---

### Job #1 — [FIT SCORE]/10 ⭐
**Company:** [Name] (Tier [1/2])
**Role:** [Exact job title]
**Location:** [Location / Remote]
**Posted:** [How long ago — flag if unconfirmed]
**Why it fits:**
  - [Specific match to Vandana's resume with metrics]
  - [Second match point]
  - [Third if relevant]
**Apply link:** [Direct URL]

**👥 Your Network There:**
  - [Name] — [Title] — [Connection context: "Both at DoorDash 2021-2023"] — [LinkedIn URL]
  - [Name] — [Title] — [Connection context] — [LinkedIn URL]
  - (or: "No direct connections found — cold outreach or mutual intro recommended")

**📬 Outreach Draft (Mode [A/B/C]):**
> [Full draft message — ready to send or edit]

**Status:** ⏳ Awaiting approval to: [ ] Apply  [ ] Send outreach  [ ] Both

---

### Job #2 — [FIT SCORE]/10
[same structure]

---

## How to proceed
- **"Apply to #1"** → I'll open LinkedIn and walk through the application with you
- **"Send outreach for #1"** → I'll send the drafted message (you confirm one more time)
- **"Edit outreach for #2"** → Tell me what to change
- **"Apply and outreach for #1"** → I'll do both in sequence
- **"Skip all"** → I'll scan again tomorrow
- **"Tell me more about #3"** → Full JD breakdown
```

---

### STEP 6 — Application package (on approval)

When Vandana approves a job, prepare everything she needs to apply herself:

1. **Fetch the full job description** from the apply URL
2. **Write a tailored cover letter** and show it for review before she applies:

```
Dear [Hiring Team / name if found],

I'm excited to apply for the [Role Title] at [Company]. [One sentence on their specific mission/product — make it genuine.]

At DoorDash, I [most relevant 1-2 bullets from resume matched to this JD with specific metrics].

[Second paragraph: tie second key JD requirement to a specific Vandana achievement.]

[Company]'s work on [specific product area] resonates with my experience [tie to resume]. I'd love to bring my [specific skill] to the team.

Warm regards,
Vandana Deep | vandana.b.deep@gmail.com | 650-440-2064
linkedin.com/in/vandanabdeep
```

3. **Flag any custom questions** likely on the application (e.g. "Why this company?", "Years of PM experience?") and suggest answers
4. **Provide the direct apply link** so Vandana can click straight through
5. **Log it** in the session summary: company, role, date, cover letter version

---

### STEP 7 — Send approved outreach messages

When Vandana approves an outreach:
1. Navigate to the contact's LinkedIn profile
2. Click Message → paste the approved draft → **pause:** "About to send to [Name] — confirm?"
3. Send only after confirmation
4. Log: who was contacted, for which role, date sent

> ⚠️ Never modify the approved message before sending. Show exactly what will be sent.

---

### STEP 8 — Handle edge cases

| Situation | Action |
|-----------|--------|
| No jobs found in last 24h | Say so, broaden to 48h, or suggest specific company career pages |
| Job requires skills Vandana doesn't have | Flag clearly, score 5 or below, exclude from list |
| No network connections found | Note it, offer to draft a cold outreach or warm intro ask |
| LinkedIn requires login to apply | Ask Vandana to log in first, then take over |
| Role at company with known layoffs/issues | Flag with ⚠️ warning |
| Duplicate role across boards | Show once, note it appeared multiple places |
| Connection is a recruiter at the company | Flag as especially valuable — draft a direct recruiter outreach |

---

## Important Rules

1. **Never apply without per-job explicit approval** — only then prep the application package
2. **Never send outreach without per-message explicit approval** — show the draft first every time
3. **Never fabricate job listings or contacts** — only present real URLs and real people found via search
4. **Show the cover letter before Vandana applies** — she applies herself; give her everything ready to paste
5. **Flag timestamp uncertainty** — if unsure a job is <24h, say so clearly
6. **Keep results tight** — max 8 jobs per scan to avoid overwhelm
7. **Be honest about network connections** — if someone is publicly visible but not a confirmed connection, say "likely in network" not "your connection"
8. **Never inflate scores** — a 6/10 is a 6/10

---

## Job Tracker

### Tracker data schema

Every job that enters the pipeline gets a tracker entry. Store as JSON in the dashboard artifact's persistent storage under key `job-tracker`.

```json
{
  "jobs": [
    {
      "id": "unique-id",
      "company": "OpenAI",
      "role": "Product Manager, Data Platform",
      "tier": 1,
      "score": 9,
      "applyUrl": "https://...",
      "dateFound": "2026-02-19",
      "status": "approved | applied | waiting | rejected | offer",
      "dateStatusChanged": "2026-02-20",
      "contacts": [
        { "name": "Jane Smith", "title": "Senior PM", "linkedinUrl": "..." }
      ],
      "outreachSent": true,
      "outreachDate": "2026-02-20",
      "notes": "Applied via LinkedIn Easy Apply"
    }
  ]
}
```

### Status lifecycle

```
[Found] → approved (Vandana says approve) → applied (Vandana confirms applied) → waiting → rejected | offer
```

### When to update tracker

| Trigger | Action |
|---------|--------|
| Vandana approves a job | Set status → `approved`, log dateStatusChanged |
| Vandana says "I applied to #X" | Set status → `applied` |
| Vandana says "update #X to waiting" | Set status → `waiting` |
| Vandana says "I heard back from X" | Set status → `rejected` or `offer` |
| New job found in scout | Add entry with status `approved` after she approves |

### Showing the dashboard

When Vandana says "show dashboard", "job tracker", "my applications", or similar:
1. Read the tracker from persistent storage
2. Render the dashboard artifact grouped by status
3. Show counts: X approved, X applied, X waiting, X rejected, X offers

---

## Example invocations

- **"Scout jobs"** → Full workflow: search + score + network lookup + outreach drafts
- **"Show dashboard" / "Job tracker"** → Display live application tracker grouped by status
- **"I applied to #1"** → Update tracker: approved → applied
- **"Mark #2 as waiting"** → Update tracker status
- **"I got a rejection from Salesforce"** → Update tracker
- **"Send outreach for #2"** → Draft message to contact, confirm, send
- **"Edit outreach for #3"** → Revise the draft
- **"Find me jobs only at Stripe and Shopify"** → Targeted search
- **"Expand to 48 hours"** → Re-run with wider time window
- **"Who do I know at OpenAI?"** → Network lookup for that company only
