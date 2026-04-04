# Performance Feedback Tracker - Quick Start Guide

## Installation

1. **Download** the `perf-feedback-tracker.skill` file
2. **Open Claude** (claude.ai) and go to any Project
3. **Click the Settings** icon in the top right
4. **Go to Skills** tab
5. **Click "Upload Skill"** and select the `.skill` file
6. **Enable the skill** for your project

Done! The skill is now available in that project.

## How to Use

### During the Year: Log as You Go

After any meaningful interaction with a colleague, just tell Claude:

**Example 1: Quick log**
```
Log this for perf review:
- Person: Sarah Chen  
- We just finished sprint planning
- Sarah proposed the new data pipeline architecture that could reduce processing time by 40%
- Links: [paste Slack thread], [paste meeting notes]
```

**Example 2: More conversational**
```
I just had a great code review with Alex. Can you log this? He caught a race condition 
I missed and explained the fix really well. Here's the PR: [link]
```

**Example 3: After a meeting**
```
Track this conversation for perf review with Maria Rodriguez. We collaborated on the 
product launch this week. She was super flexible when we had technical constraints. 
Meeting notes: [Granola link]
```

### During Performance Review: Generate Feedback

When it's time to write peer feedback:

**Step 1: Pull all interactions**
```
Show me all my interactions with Sarah Chen this year
```

Claude will retrieve your log and show you everything you've captured.

**Step 2: Generate feedback draft**
```
Help me write performance feedback for Sarah Chen for the full year
```

Claude will:
- Review your logged interactions
- Search your Google Drive for shared documents
- Ask about any additional Slack conversations
- Generate a structured feedback draft with specific examples
- Include all supporting reference links

**Step 3: Refine as needed**
```
Can you add more detail to the technical leadership section?
Make the growth opportunities more actionable
Add the Q3 project we worked on together
```

### Checking Your Log

**See everyone you've logged:**
```
Who's in my performance log?
```

**View specific entries:**
```
Show me what I logged for Alex in October
```

## Best Practices

### Throughout the Year

✅ **Log immediately** after meaningful interactions (takes 30 seconds)  
✅ **Be specific** - include what happened and why it mattered  
✅ **Capture links** - Slack threads, docs, meeting notes  
✅ **Set a weekly reminder** - Friday afternoon is a good time to catch anything you missed  

### During Review Time

✅ **Start early** - Pull feedback summaries 1-2 weeks before deadlines  
✅ **Review the full year** - Don't just rely on recent memory  
✅ **Use search tools** - The skill integrates with Google Drive to find additional docs  
✅ **Iterate on drafts** - Refine the feedback to match your voice  

### What to Log

**Do log:**
- Project collaborations with clear impact
- Technical contributions or mentorship moments  
- Problem-solving during incidents
- Cross-functional coordination
- Any interaction where someone went above and beyond

**Don't log:**
- Routine status updates
- Negative interactions
- Trivial contributions  
- Second-hand information

## Example Workflow

**January - November:**
```
[After sprint planning]
"Log this - worked with Sarah on Q1 data pipeline architecture planning. 
She proposed solution that reduces processing time by 40%. 
Link: [Slack thread]"

[After code review]  
"Track for perf review - Alex caught a race condition in my PR and 
explained the fix. Great mentorship moment. Link: [PR]"

[After incident]
"Log David Park - diagnosed database connection pool issue during 
incident, implemented fix in 30 mins. Link: [incident report]"
```

**December (Review Time):**
```
"Show me everyone in my log"
→ Sarah Chen, Alex Kumar, David Park, Maria Rodriguez...

"Help me write feedback for Sarah Chen"
→ [Claude generates draft with all logged interactions + found documents]

"Can you make the growth opportunities more specific?"
→ [Claude refines the feedback]

"Perfect, save this"
→ [Claude saves the final feedback document]
```

## Tips for Success

**Make it a habit:** 
Like saving receipts for expense reports, logging takes 30 seconds but saves hours later.

**Use your tools:**
The skill integrates with Google Drive and can reference Slack. Make sure you capture those links when you log.

**Think context for future-you:**
When you log something, imagine you're six months in the future. What details would help you remember this clearly?

**The log is yours:**
Your performance log lives in your Claude project. It's private, persistent, and grows with you throughout the year.

## Questions?

The skill includes comprehensive documentation:
- **log_template.md** - Examples of effective log entries
- **feedback_framework.md** - How to structure constructive feedback  
- **feedback_template.md** - Template for the final document

Claude will automatically reference these when helping you log or write feedback.

---

**The bottom line:** 30 seconds now saves hours during performance review season. Start building your reference library today.
