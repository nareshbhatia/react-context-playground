import React, { useState } from 'react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { useViewStateContext } from '../../contexts';

type NavItem = {
  name: string;
  icon: any;
  current: boolean;
  show: boolean;
};

export function Sidebar() {
  console.log('Sidebar.render');
  const { viewState } = useViewStateContext();
  const { isEditing } = viewState;

  const [navItems, setNavItems] = useState<Array<NavItem>>([
    { name: 'Dashboard', icon: HomeIcon, current: true, show: true },
    { name: 'Team', icon: UsersIcon, current: false, show: true },
    { name: 'Projects', icon: FolderIcon, current: false, show: true },
    { name: 'Calendar', icon: CalendarIcon, current: false, show: true },
    { name: 'Documents', icon: InboxIcon, current: false, show: false },
    { name: 'Reports', icon: ChartBarIcon, current: false, show: false },
  ]);

  const handleItemClicked = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const itemName = e.currentTarget.id;
    setNavItems(
      navItems.map((item) => {
        return item.name === itemName
          ? { ...item, current: true }
          : { ...item, current: false };
      })
    );
  };

  const handleCheckboxChanged = (e: React.FormEvent<HTMLInputElement>) => {
    const itemName = e.currentTarget.name;
    setNavItems(
      navItems.map((item) => {
        return item.name === itemName ? { ...item, show: !item.show } : item;
      })
    );
  };

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex flex-col w-64">
      <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
              {navItems.map((item) =>
                isEditing || item.show ? (
                  <a
                    key={item.name}
                    id={item.name}
                    href="#"
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                    onClick={handleItemClicked}
                  >
                    {isEditing && (
                      <input
                        id={item.name}
                        name={item.name}
                        aria-describedby={item.name}
                        type="checkbox"
                        checked={item.show}
                        className="mr-2 focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded"
                        onChange={handleCheckboxChanged}
                      />
                    )}
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ) : null
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
