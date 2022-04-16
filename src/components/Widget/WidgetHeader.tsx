import React from 'react';
import { ArrowsExpandIcon, PencilAltIcon } from '@heroicons/react/outline';
import { useViewStateContext } from '../../contexts';

interface WidgetHeaderProps {
  title: string;
}

export function WidgetHeader({ title }: WidgetHeaderProps) {
  console.log('WidgetHeader.render', title);
  const { viewState } = useViewStateContext();
  const { isEditing } = viewState;

  return (
    <div className="bg-gray-50 px-5 py-2 border-b border-gray-200">
      <div className="flex items-center flex-wrap">
        <h3 className="flex-1 text-lg leading-6 font-medium text-gray-900">
          {title}
        </h3>
        {isEditing && (
          <button
            type="button"
            className="rounded-full text-gray-400 hover:text-gray-500"
          >
            <PencilAltIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
        <button
          type="button"
          className="ml-3 rounded-full text-gray-400 hover:text-gray-500"
        >
          <ArrowsExpandIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
