import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const [testimonialInfo, setTestimonialInfo] = useState([]);
    useEffect(() =>{
        fetch('https://intense-bayou-17126.herokuapp.com/reviews')
        .then(response => response.json())
        .then(data => setTestimonialInfo(data))
    }, [])
    return (
        <section className="text-center mt-5">
            <h1 className="my-4">Testimonial</h1>
            <div className="row">
                {
                    testimonialInfo.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id}></TestimonialCard>)
                }
            </div>

        </section>
    );
};

export default Testimonial;