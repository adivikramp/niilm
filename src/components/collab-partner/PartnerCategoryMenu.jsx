import PartnerCategoryButton from "./PartnerCategoryButton";

/* eslint-disable react/prop-types */
const PartnerCategoryMenu = ({
  categories,
  onCategoryChange,
  selectedCategory,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-8 bg-transparent text-black border-2 border-gray-300 w-1/2 mx-auto rounded-bl-3xl rounded-br-3xl">
      {categories.map((category) => (
        <>
          <PartnerCategoryButton
            category={category}
            onCategoryChange={onCategoryChange}
            selectedCategory={selectedCategory}
          />
        </>
      ))}
    </div>
  );
};

export default PartnerCategoryMenu;
