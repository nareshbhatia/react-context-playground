import {
  CashIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  LibraryIcon,
  RefreshIcon,
  ScaleIcon,
} from '@heroicons/react/outline';
import { Widget } from '../../components';
import { Sidebar } from './Sidebar';

const widgets = [
  {
    title: 'Account Balance',
    icon: ScaleIcon,
    amount: '$30,211.28',
  },
  {
    title: 'Pending',
    icon: RefreshIcon,
    amount: '-$19,500.00',
  },
  {
    title: 'Processed',
    icon: CheckCircleIcon,
    amount: '$12,000.00',
  },
  {
    title: 'Net Worth',
    icon: CurrencyDollarIcon,
    amount: '$52,568.22',
  },
  {
    title: 'Investments',
    icon: LibraryIcon,
    amount: '$22,568.22',
  },
  {
    title: 'Cash',
    icon: CashIcon,
    amount: '$30,000.00',
  },
];

export function HomePage() {
  console.log('HomePage.render');

  return (
    <div className="h-full flex max-w-7xl mx-auto">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-200">
        <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {widgets.map((widget) => (
            <Widget key={widget.title} title={widget.title}>
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <widget.icon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <div className="text-lg font-medium text-gray-900">
                      {widget.amount}
                    </div>
                  </div>
                </div>
              </div>
            </Widget>
          ))}
        </div>
      </div>
    </div>
  );
}
