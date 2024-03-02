import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How can Keystone Healthcare Solutions improve our anesthesia services?",
    answer: "Keystone Healthcare Solutions employs a comprehensive approach to assess and optimize your anesthesia services, focusing on quality of care, operational efficiency, and financial management. Our customized solutions are designed to meet the specific needs of your facility.",
  },
  {
    question: "What type of healthcare facilities do you serve?",
    answer: "We partner with a wide range of healthcare providers, including hospitals, outpatient surgery centers, and specialty clinics, to enhance their anesthesia services.",
  },
  {
    question: "How do you ensure the quality of care in anesthesia services?",
    answer:
      "Our approach includes implementing best practices, continuous staff education, and adherence to the highest standards of patient safety and care. We also use data analytics to monitor outcomes and identify areas for improvement.",
  },
  {
    question: "Can Keystone help with staffing for our anesthesia department?",
    answer:
      "Yes, we offer staffing solutions that include recruitment of highly qualified anesthesia professionals, ensuring that your department is staffed with skilled and dedicated personnel.",
  },
  {
    question: "How do we get started with Keystone Healthcare Solutions?",
    answer:
      "The first step is to schedule a consultation with our team. We will discuss your current challenges and objectives, followed by an assessment of your anesthesia services to identify opportunities for enhancement.",
  },
];

export default Faq;