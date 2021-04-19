import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const testimonialInfo = [
        {
            image: '',
            name: 'Aminul Islam',
            address: 'Dhanmondi',
            review: 'Their service is good.'
        },
        {
            image: '',
            name: 'Mirazul Islam',
            address: 'Gulshan',
            review: 'Their service is good.'
        },
        {
            image: '',
            name: 'Istique Zahan',
            address: 'khulna',
            review: 'Their service is good.'
        },

    ]
    return (
        <section className="text-center mt-5">
            <h1 className="my-4">Testimonial</h1>
            <div className="row">
                {
                    testimonialInfo.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>

        </section>
    );
};

export default Testimonial;