export interface TimelineStep {
  label: string;
  desc: string;
  day: string;
  actionLabel?: string;
  actionUrl?: string;
}

export interface Country {
  id: string;
  name: string;
  engName: string;
  flag: string; // Emoji
  visaStatus: string; // e.g., "무비자 90일"
  entryRequirement: string; // e.g., "입국신고서 X"
  imageUrl: string;
  
  // Detail Stats
  timeDiff: string;
  voltage: string;
  currency: string;
  flightTime: string;
  
  // Entry Guide
  visaDetailTitle: string; // e.g. "VISA FREE" or "VISA REQUIRED"
  visaDetailDesc: string;
  timeline: TimelineStep[];
  alerts: string[];
}
