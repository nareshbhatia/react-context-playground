import React from 'react';
import { WidgetHeader } from './WidgetHeader';

interface WidgetProps {
  title: string;
  children?: React.ReactNode;
}

export function Widget({ title, children }: WidgetProps) {
  console.log('Widget.render', title);

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <WidgetHeader title={title} />
      {children}
    </div>
  );
}
