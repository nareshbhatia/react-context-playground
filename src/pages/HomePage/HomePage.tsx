import { Sidebar } from './Sidebar';

export function HomePage() {
  console.log('HomePage.render');

  return (
    <div className="h-full flex max-w-7xl mx-auto">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-200">
        <div className="bg-white">Card</div>
      </div>
    </div>
  );
}
