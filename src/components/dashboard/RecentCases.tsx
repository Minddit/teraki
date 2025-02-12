'use client';

import { Card, Title, Text, List, ListItem } from '@tremor/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Case {
  id: string;
  title: string;
  status: string;
  date: string;
  amount: string;
}

const recentCases: Case[] = [
  {
    id: '1',
    title: 'Bitcoin Recovery Case #1234',
    status: 'In Analysis',
    date: '2025-02-12',
    amount: '2.5 BTC'
  },
  {
    id: '2',
    title: 'ETH Scam Recovery #5678',
    status: 'Recovery in Progress',
    date: '2025-02-11',
    amount: '45 ETH'
  },
  {
    id: '3',
    title: 'USDT Recovery Case #9012',
    status: 'New',
    date: '2025-02-10',
    amount: '50,000 USDT'
  }
];

export default function RecentCases() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <Title>Recent Cases</Title>
        <Link 
          href="/dashboard/cases" 
          className="flex items-center text-blue-500 hover:text-blue-600"
        >
          <Text className="mr-1">View all cases</Text>
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
      <List>
        {recentCases.map((caseItem) => (
          <ListItem key={caseItem.id}>
            <Link href={`/dashboard/cases/${caseItem.id}`} className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <Text className="font-medium">{caseItem.title}</Text>
                  <Text className="text-gray-500">
                    {caseItem.status} • {caseItem.date}
                  </Text>
                </div>
                <Text className="font-medium">{caseItem.amount}</Text>
              </div>
            </Link>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
