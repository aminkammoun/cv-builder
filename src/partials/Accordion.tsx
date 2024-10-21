import { useState } from "react";

 

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: FAQItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleItem(index)}
            className="w-full text-left py-4 px-2 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-indigo-500"
          >
            <span className="font-medium text-lg">{item.question}</span>
            <span className="float-right">
              {openIndex === index ? '-' : '+'}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-max-height duration-300 ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <p className="p-4 text-gray-700">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;