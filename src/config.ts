export const config = {
  "number": 43,
  "slug": "client-handoff-standard",
  "title": "Client Handoff Standard",
  "category": "Student Agency Operations",
  "tagline": "A polished handoff ritual so owners can actually maintain what students build.",
  "persona": "Any pod delivering websites, marketing systems, grants, or automations.",
  "gap": "Pro bono projects fail if the client cannot operate the result after handoff.",
  "niche": "Sustainable handoff for student-built work.",
  "metric": "handoffs completed with owner training",
  "modules": [
    "Credential checklist",
    "Training agenda",
    "Maintenance guide",
    "30-day support plan"
  ],
  "theme": {
    "accent": "#f97316",
    "accent2": "#fdba74",
    "emoji": "\ud83c\udf93",
    "metricLabel": "Operating readiness",
    "workflow": [
      "Set roles and artifacts",
      "Run rubric review",
      "Resolve blockers",
      "Export operating packet"
    ],
    "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "credential-checklist",
      "label": "Credential checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify credential checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "training-agenda",
      "label": "Training agenda",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify training agenda with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "maintenance-guide",
      "label": "Maintenance guide",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify maintenance guide with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "30-day-support-plan",
      "label": "30-day support plan",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify 30-day support plan with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Client Handoff Standard and capture baseline evidence.",
      "Complete the credential checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Volta Cyprus Chapter",
    "chapter": "Cyprus",
    "studentLead": "Volta Student Lead",
    "notes": "Internal chapter operations project for student-led delivery excellence. Client Handoff Standard sample.",
    "evidencePrefix": "Client Handoff Standard",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
