import { useState } from "react";
import Icon from "../icon";

interface CategorySectionProps {
    active?: boolean;
    name: string;
  }
  const CategorySection = ({ active = false, name }: CategorySectionProps) => {
    const [activeSection, setActiveSection] = useState(active);
  
    const toggleSection = () => {
      setActiveSection(!activeSection);
    };
    return (
      <div>
        <section
          onClick={toggleSection}
          className=" pointer h-16 bg-beige-light pl-5 pr-4 flex w-full justify-between items-center"
        >
          <h3 className="text-title uppercase">{name}</h3>
          <Icon
            onClick={toggleSection}
            iconName={activeSection ? 'ArrowUp' : 'ArrowDown'}
            size={12}
          />
        </section>
        {activeSection && (
          <div className="h-14 bg-white px-5 pt-5 pb-6">hola</div>
        )}
      </div>
    );
  };

export default CategorySection;