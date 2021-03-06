import { ViewModeToggle } from './ViewModeToggle';

export function Header() {
  console.log('Header.render');

  return (
    <header className="relative">
      <nav aria-label="Top">
        <div className="bg-gray-900">
          <div className="max-w-7xl mx-auto h-12 px-4 flex items-center justify-between">
            <span className="flex-1 text-base font-medium text-white">
              React Context Playground
            </span>

            <div className="flex items-center space-x-6">
              <ViewModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
