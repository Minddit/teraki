'use client';

import { Card, Title, List, ListItem, Text } from '@tremor/react';

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
      <Title>Recent Cases</Title>
      <List>
        {recentCases.map((caseItem) => (
          <ListItem key={caseItem.id}>
            <div>
              <Text className="font-medium">{caseItem.title}</Text>
              <Text className="text-gray-500">
                {caseItem.status} • {caseItem.amount} • {caseItem.date}
              </Text>
            </div>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
