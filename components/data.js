import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Optimal Care",
  desc: "Our team comprises leading experts in anesthesia care, healthcare management, and process optimization, ensuring that our clients receive comprehensive support tailored to their unique needs.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Enhanced Care Quality",
      desc: "Leveraging cutting-edge practices and protocols to improve patient outcomes and satisfaction.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Operational Excellence",
      desc: "Streamlining anesthesia services for higher efficiency, reducing wait times, and improving patient throughput.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Financial Optimization",
      desc: "Identifying cost-saving opportunities without compromising care quality, enhancing the financial health of your anesthesia services.",
      icon: <CursorArrowRaysIcon />,
    },
    
  ],
};

const benefitTwo = {
  title: "Excellent Outcomes",
  desc: "Keystone Health Consultants is dedicated to elevating the standard of care for patients while optimizing performance and financial outcomes for healthcare providers.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Customized Solutions",
      desc: "Tailored strategies that fit the unique needs of your facility, ensuring the right fit for your team and patients.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Continuous Support",
      desc: "Ongoing guidance from industry experts to navigate changes in healthcare regulations, technology, and patient care standards.",
      icon: <SunIcon />,
    },
    
  ],
};


export {benefitOne, benefitTwo};
