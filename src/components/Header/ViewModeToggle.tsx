import { ChevronDoubleLeftIcon, PencilAltIcon } from '@heroicons/react/solid';
import { useViewStateContext } from '../../contexts';

export function ViewModeToggle() {
  const { viewState, setViewState } = useViewStateContext();
  const { isEditing } = viewState;

  const toggleViewMode = () => {
    setViewState({ ...viewState, isEditing: !isEditing });
  };

  return (
    <button
      type="button"
      className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
      onClick={toggleViewMode}
    >
      {isEditing ? (
        <ChevronDoubleLeftIcon
          className="-ml-0.5 mr-2 h-4 w-4"
          aria-hidden="true"
        />
      ) : (
        <PencilAltIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      )}
      {isEditing ? 'Back to View Mode' : 'Switch to Edit Mode'}
    </button>
  );
}
