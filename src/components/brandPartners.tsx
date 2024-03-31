'use client';
import { BrandName } from '../components/ui/brand-namee';

const words = `APPLE
AMAZON
  MICROSOFT 
  ALPHABET
  FACEBOOK
  ALIBABA 
  TENCENT 
  SAMSUNG
  TOYOTA 
  EXXON 
  BERKSHIRE 
  JOHNSON & JOHNSON
  JPMORGAN 
  PROCTER & GAMBLE 
  VERIZON 
  WALT DISNEY
  INTEL 
  AT&T
  VISA 
COCA-COLA
`;

export function BrandPartners() {
  return <BrandName words={words} />;
}
