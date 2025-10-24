"use client";

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({ categories, selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  // Ensure categories are unique strings
  const uniqueCategories = Array.from(new Set(
    categories.filter(cat => typeof cat === 'string' && cat.length > 0)
  ));

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 border-b border-gray-200">
        {uniqueCategories.map((category, index) => (
          <button
            key={`${category}-${index}`}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "text-brand border-b-2 border-brand"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}; 