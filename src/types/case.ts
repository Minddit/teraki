export type CaseStatus = 'new' | 'analyzing' | 'recovering' | 'completed' | 'rejected';

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  status: CaseStatus;
}

export interface RecoveryCase {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  status: CaseStatus;
  scammerAddress: string;
  recoveryAddress: string;
  amount: number;
  currency: string;
  timeline: TimelineEvent[];
  description: string;
  evidence: string[];
  transactions: {
    hash: string;
    amount: number;
    date: string;
    status: 'pending' | 'completed' | 'failed';
  }[];
}

export interface CaseStats {
  totalCases: number;
  activeCases: number;
  recoveredAmount: number;
  successRate: number;
}
