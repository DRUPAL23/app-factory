# Sprint 1.3 — API, Tracking & Offer Ranking

## Scope

Sprint 1.3 establishes the first executable monetization services:

- Fastify API with health/version endpoints.
- Tracking service with click-event ingestion.
- Transparent offer eligibility and scoring primitives.

## Attribution rule

A monetization decision must be traceable to an eligible offer and a persisted tracking event. The production database adapter will replace the current service-level response stub before launch.

## Offer score

`30% relevance + 20% conversion rate + 20% EPC + 10% commission + 10% advertiser quality + 10% historical performance`.

All component signals are normalized to 0–100 and the final score is clamped to 0–100.

## Next step

Connect Prisma repositories to API/tracking, add authenticated publisher routes, persist click/conversion events, and expose dashboard aggregates.
