import { Typography } from "@material-tailwind/react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://res.cloudinary.com/dsdmjhkms/image/upload/v1695835297/litvzfzqvj7qpk6aqtu0.png"
          alt="logo-obssesion"
          className="w-20"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-pinkLogo focus:text-pinkLogo"
            >
              ¡Seguinos!
            </Typography>
            <div className="">
              <ul className="flex gap-2">
                <li className="cursor-pointer">
                  <BsInstagram />
                </li>
                <li className="cursor-pointer">
                  <BiLogoFacebookSquare />
                </li>
                <li className="cursor-pointer">
                  <BsTwitter />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Irina Gorlino
      </Typography>
    </footer>
  );
};

export default Footer;
