/* eslint-disable react/prop-types */
const PartnerCategoryButton = ({
  category,
  onCategoryChange,
  selectedCategory,
}) => {
  return (
    <button
      key={category.value}
      className={`flex-1 text-2xl font-semibold py-3 ${
        selectedCategory === category.value
          ? "bg-blue-700 rounded-bl-3xl rounded-br-3xl text-white"
          : ""
      }`}
      onClick={() => onCategoryChange(category.value)}
    >
      {category.label}
    </button>
  );
};

export default PartnerCategoryButton;
