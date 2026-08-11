export type OfferSignals = {
  relevance: number;
  conversionRate: number;
  epc: number;
  commission: number;
  advertiserQuality: number;
  historicalPerformance: number;
};

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export function scoreOffer(signals: OfferSignals): number {
  return clamp(
    signals.relevance * 0.30 +
      signals.conversionRate * 0.20 +
      signals.epc * 0.20 +
      signals.commission * 0.10 +
      signals.advertiserQuality * 0.10 +
      signals.historicalPerformance * 0.10,
  );
}
