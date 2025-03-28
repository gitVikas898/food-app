import { ChevronDown, ChevronUp } from 'lucide-react';
import { Item } from './Item';

export const Accordion = ({ categoryData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(showItems ? null : categoryData.id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <button
        className="flex w-full items-center justify-between p-4 text-left transition-colors duration-200 hover:bg-gray-50"
        onClick={handleClick}
        aria-expanded={showItems}
      >
        <h2 className="text-lg font-semibold text-gray-900">
          {categoryData.title}{' '}
          <span className="ml-2 text-sm text-gray-500">
            ({categoryData.itemCards.length})
          </span>
        </h2>
        <span className="text-gray-500">
          {showItems ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showItems ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 pt-0">
          <Item item={categoryData.itemCards} />
        </div>
      </div>
    </div>
  );
};