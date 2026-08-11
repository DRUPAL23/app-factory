# Sprint 1.2 — Monetization Foundation

## Objective
Establish the minimum production-oriented domain model for publisher websites, advertising, affiliate offers, referral attribution, and click tracking.

## Data flow

Content → placement/offer → click → referral/conversion → revenue.

## Guardrails

- Never fabricate advertiser inventory or affiliate relationships.
- Store external network IDs for reconciliation.
- Keep ad eligibility and affiliate policy decisions separate from content generation.
- Record click/referral events before optimization decisions are made.
- Treat revenue as an event-derived metric, not an AI-generated value.

## Next implementation

1. Prisma client package and migration workflow.
2. API health endpoint and domain services.
3. Tracking redirect endpoint with opaque click IDs.
4. Dashboard metrics sourced from persisted events.
5. Affiliate network adapter interface.
6. AI offer-ranking interface with deterministic scoring fallback.
