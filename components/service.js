import React from "react";
import Container from "./container";

const Service = (props) => {
    const { title, services } = props.data
  return (
    <Container
      className={`flex w-full flex-col mt-4 items-center justify-center text-center`}>
      

      {title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {title}
        </h2>
      )}

      {services && (
          <ul className="max-w-2xl py-4 text-left text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {
            services.map((s, i) => <li key={i} style={{ marginTop: '1rem', listStyle: 'circle' }}>{s}</li>)
            }
          </ul>
      )}
      <p className="max-w-2xl py-4 text-left text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">At Keystone Health Solutions, we’re more than just a staffing agency. We’re your partners in delivering exceptional anesthesia care. Let us help you ensure that your patients always receive the best possible care, by providing you with the top-tier providers that you need.</p>
    
      <p className="max-w-2xl py-4 text-left text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Contact us today to learn more about how we can support your staffing needs and elevate the standard of care at your facility.</p>
    </Container>
  );
}

export default Service;