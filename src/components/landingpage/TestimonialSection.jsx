import React from 'react';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg">
      <p className="text-secondary-text italic mb-2">{quote}</p>
      <p className="text-sm font-semibold">{author}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'This platform has transformed our data analysis!',
      author: 'John Doe',
    },
    {
      quote: 'Easy to use and incredibly powerful.',
      author: 'Jane Smith',
    },
  ];

  return (
    <section className=" py-12 text-primary-text">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What our users say?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
