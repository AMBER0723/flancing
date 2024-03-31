import React from 'react';
import { BrandPartners } from './brandPartners';
import { AnimatedTooltipPreview } from './teamf';
import { Service } from './service';
import { Offering } from './offering';
import ContactPage from './contactUs';

const Cpartners = () => {
  return (
    <div className=" bg-black/[0.96]">
      <div
        style={{
          marginLeft: '200px',
          marginRight: '200px',
        }}
      >
        <h5
          className="text-3xl items-start md:text-5xl font-bold mb-6 text-center dark:text-zinc-100 text-zinc-700 max-w-4xl !leading-none __className_b3f6a0"
          style={{
            marginBottom: '60px',
            marginLeft: '200px',
            marginRight: '200px',
          }}
        >
          Happy Customer And Partners
        </h5>
      </div>
      <BrandPartners />
      <div
        style={{
          marginTop: '100px',
          marginBottom: '60px',
          marginLeft: '200px',
          marginRight: '200px',
        }}
      >
        <AnimatedTooltipPreview />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Offering />
      </div>
      <div>
        <ContactPage />
      </div>
    </div>
  );
};

export default Cpartners;
