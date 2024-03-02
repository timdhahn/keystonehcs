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
      title: "Expert Matchmaking",
      desc: "Our rigorous vetting process ensures that we only represent the most skilled and dedicated clinicians. This allows us to perfectly match our professionals with healthcare facilities, ensuring both clinical and cultural fit.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Flexibility",
      desc: "We understand the dynamic nature of healthcare. That's why we offer flexible staffing solutions including temporary, temp-to-perm, and permanent placements, designed to meet the evolving needs of healthcare facilities.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Quality Care",
      desc: "Our providers are not only highly qualified but also deeply committed to providing the highest standard of patient care. We ensure continuous education and training for our staff, so they remain at the forefront of anesthesia care practices.",
      icon: <CursorArrowRaysIcon />,
    },
    
  ],
};

const benefitTwo = {
  title: "Excellent Outcomes",
  desc: "Keystone Healthcare Solutions is dedicated to elevating the standard of care for patients while optimizing performance and financial outcomes for healthcare providers.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reliable Support",
      desc: "Our team provides 24/7 support to both our clients and our providers. Whether it’s an unexpected staffing shortage or an urgent query, we’re here to assist promptly and efficiently.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Tailored Solutions",
      desc: "We recognize that each healthcare facility has unique needs. Our experienced consultants work closely with you to understand your specific requirements and deliver customized staffing solutions.",
      icon: <SunIcon />,
    },
    
  ],
};

const service = {
  title: "Our Services Include",
  services: [
    "A wide network of highly skilled and vetted clinicians.",
    "Support for various anesthesia delivery models.",
    "Seamless integration of providers into your team.",
    "Ongoing support and quality assurance."
  ]
}


export {benefitOne, benefitTwo, service};
