'use client';

import { Card, Text, Metric, BadgeDelta } from '@tremor/react';

interface StatusCardProps {
  title: string;
  count: number;
  status: 'New' | 'In Analysis' | 'Recovery in Progress' | 'Completed' | 'Rejected';
  trend?: {
    value: number;
    text: string;
  };
}

const statusColors = {
  'New': 'blue',
  'In Analysis': 'yellow',
  'Recovery in Progress': 'purple',
  'Completed': 'emerald',
  'Rejected': 'rose',
} as const;

export default function StatusCard({ title, count, status, trend }: StatusCardProps) {
  return (
    <Card className="max-w-xs">
      <div className="flex items-start justify-between">
        <div>
          <Text>{title}</Text>
          <Metric>{count}</Metric>
          {trend && (
            <BadgeDelta 
              deltaType={trend.value >= 0 ? 'increase' : 'decrease'}
              className="mt-2"
            >
              {trend.text}
            </BadgeDelta>
          )}
        </div>
        <div className={`w-3 h-3 rounded-full bg-${statusColors[status]}-500`} />
      </div>
    </Card>
  );
}
