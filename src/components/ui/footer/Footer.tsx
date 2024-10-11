import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="mt-20 flex  flex-wrap justify-center items-center">
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-5 py-10">
            <li>
              <FaFacebook className="size-16  text-[#6e6e6d]  border-2 border-[#6e6e6d] rounded-full outline-none p-4  " />
            </li>
            <li>
              <FaInstagram className="size-16  text-[#6e6e6d]  border-2 border-[#6e6e6d] rounded-full outline-none p-4  " />
            </li>
            <li>
              <FaTwitter className="size-16  text-[#6e6e6d]  border-2 border-[#6e6e6d] rounded-full outline-none p-4  " />
            </li>
            <li>
              <FaLinkedin className="size-16  text-[#6e6e6d]  border-2 border-[#6e6e6d] rounded-full outline-none p-4  " />
            </li>
            <li>
              <FaYoutube className="size-16  text-[#6e6e6d]  border-2 border-[#6e6e6d] rounded-full outline-none p-4  " />
            </li>
          </ul>

          <ul className="flex justify-center items-center flex-wrap gap-5">
            <li>Shipping & Returns</li>
            <li>Return/Exchange Portal </li>
            <li> DM Gift Card</li>
            <li>Contact Us </li>
            <li>Private Policy </li>
            <li>Terms Of Service</li>
          </ul>
          <small className="pb-24 text-center block  pt-5">
            © 2024 Desi Minimals{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
