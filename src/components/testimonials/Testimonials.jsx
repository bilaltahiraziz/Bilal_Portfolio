import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Claudia von Pic.png'
import AVTR2 from '../../assets/Charlotte M pic.png'
import AVTR3 from '../../assets/Susan Pic.png'
import AVTR4 from '../../assets/Becky pic.png'
import AVTR5 from '../../assets/Jay pic.png'
import AVTR6 from '../../assets/Mike pic.png'
import AVTR7 from '../../assets/Becky pic.png'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVTR1,
    name: 'Claudia Von Sydow',
    review: "I want to take a moment to thank IFS for replacing my HVAC system.  This company is EXCELLENT!  They gave me a written estimate in person. And once I agreed to the quote, the system was installed in 2 days. I want thank George H. and Steven A..  Both of these technicians were polite,  knowledgeable and very professional. I highly recommend this company for all your HVAC needs and many more services are available. A special thanks to Bilal Aziz, Residential Sales, for his prompt response to my request and the high level of professionalism he demonstrated while working on this job in my home. Thanks to all of you, my home will be warm in the winter and cool in the summertime."
  },
  {
    avatar: AVTR2,
    name: 'Charlotte Mussman',
    review: "I have been doing business with Integrated Facility Services for more than 20 years.  Their technicians do excellent work. On 9/26/19, they installed a new furnace and air conditioner.  Bilal Aziz was the Residential Account Manager that I worked with; he did an awesome job in explaining my options and helped me in making my final decision. I highly recommend IFS!"
  },
  {
    avatar: AVTR3,
    name: 'Suzan Kennedy',
    review: "Bilal responded quickly to my call regarding my furnace flue and a leak I was experiencing. Mark A. came out and thoroughly inspected and determined the issue. I thought I was going to have to replace my furnace flue; however, Mark sealed it, painted it and it’s good as new for a fraction of a new flue. Quick response, professional and polite service! This is why I have been doing business with IFS for over 30 years!"
  },
  {
    avatar: AVTR4,
    name: 'Bruce Wrobleski',
    review: "great bunch of guys...Don Lammert and Russ Fee the installers...answered all of my crazy questions and did a great job on a very cold day...and Bilal Aziz in sales...made the process very easy  and understandable  in getting a new Carrier furnace and a/c is not normally an easy process...he filed  the various rebate paper work so I could get the proper rebates from Spire and Ameren...once again made the process very easy...would gladly deal with all again...but hope not to soon...thanks bw"
  },
  {
    avatar: AVTR5,
    name: 'Jay Wells',
    review: "Outstanding company.  I have used them since they were known as Air Masters.  They replaced my HVAC system.  Bilal A. (residential sales) proposed two options, both of which were good values.  Don L. and Dan S. (installation technicians) did an excellent job.  I highly recommend IFS for heating and cooling issues.  Special thanks to Bilal A. for going the extra mile.  You won't go wrong with IFS."
  },
  {
    avatar: AVTR6,
    name: 'Michael Gross',
    review: "We needed a new coil for A/C. Bilal was our first contact, prompt, considerate, and eager to help and to coordinate and install a new thermostat.  He followed up as promised.  Don did an expert installation--very neat and professional. It was a pleasure, and we have high confidence that the job is well-done."
  },
  {
    avatar: AVTR7,
    name: 'Becky Milligan',
    review: "Had my AC quit on me. Mark came out to take a look at it and quickly determined what the issue was. The part we needed was not in stock (just my luck). Bilal from the office was in contact with me several times during the day to schedule the installation for when the product arrived. I expressed my urgency and within a few minutes Mark called me back and provided an alternate solution that would get me back up and running without having to wait the several days I was going to have to. Today Jeremy came out and put the parts in. He was VERY friendly and knowledgeable, did what he needed to and had us up and running. I would definitely use IFS again! Thanks to Mark, Bilal and Jeremy for all your help! You guys are great!"
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
            // install Swiper modules
            modules={[ Pagination, Navigation ]}
            navigation
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review}, index) => {
        return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
        )
}

export default Testimonials