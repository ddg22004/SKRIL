import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-lg mb-2">
      <button
        className="flex justify-between items-center w-full p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4 text-secondary-text">{answer}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'What is SKRIL?',
      answer: 'SKRIL is a modern analytics platform...',
    },
    {
      question: 'How does it work?',
      answer: 'It works by collecting and analyzing data...',
    },
    // Add more FAQs
  ];

  return (
    <section className="bg-black py-12 text-primary-text">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
