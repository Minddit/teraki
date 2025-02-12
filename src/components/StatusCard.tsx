'use client';

import { Card, Text, Metric } from '@tremor/react';

interface StatusCardProps {
  title: string;
  count: number;
  status: 'New' | 'In Analysis' | 'Recovery in Progress' | 'Completed' | 'Rejected';
}

const statusColors = {
  'New': 'bg-blue-500',
  'In Analysis': 'bg-yellow-500',
  'Recovery in Progress': 'bg-purple-500',
  'Completed': 'bg-green-500',
  'Rejected': 'bg-red-500',
} as const;

export default function StatusCard({ title, count, status }: StatusCardProps) {
  return (
    <Card className="max-w-xs mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <Text>{title}</Text>
          <Metric>{count}</Metric>
        </div>
        <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
      </div>
    </Card>
  );
}
