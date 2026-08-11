export type OfferCandidate = {
  id: string;
  active: boolean;
  approved: boolean;
  category: string;
};

export function eligibleOffers(offers: OfferCandidate[]): OfferCandidate[] {
  return offers.filter((offer) => offer.active && offer.approved);
}
