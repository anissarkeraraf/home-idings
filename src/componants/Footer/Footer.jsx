import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";

const Footer = () => {
    return (
        <div className=" bg-base-200">

            <p className="text-3xl text-black flex ml-48 md:ml-80 lg:ml-[620px] pt-10">h<RiHome2Line className="block text-4xl"></RiHome2Line><span className="text-[#D6DE23]">idings</span></p>
            <hr className="mb-3 mt-4 ml-10 mr-10" />
            <div>
                <div className="flex justify-center items-center">
                    <FaFacebookF className="text-3xl mr-4"></FaFacebookF>
                    <FaInstagram className="text-3xl mr-4"></FaInstagram>
                    <FaYoutube className="text-3xl mr-4"></FaYoutube>
                    <FaTwitter className="text-3xl"></FaTwitter>
                </div>
            </div>
            <hr className="mt-3 ml-10 mr-10" />

            <footer className="footer p-10 text-base-content">


                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="ml-10 md:ml-0 md:mr-10 lg:mr-32 lg:ml-20">
                        <div className="mb-4"><h6 className="footer-title mb-2">Services</h6></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Branding</a></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Design</a></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Marketing</a></div>
                        <div><a className="link link-hover">Advertisement</a></div>
                    </div>
                    <div className="mr-32 md:mr-10 lg:mr-32">
                        <div className="mb-4"><h6 className="footer-title mb-2">Company</h6></div>
                        <div className="mb-2"><a className="link link-hover mb-2">About us</a></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Contact</a></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Jobs</a></div>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className="ml-32 md:ml-16 lg:ml-0 mt-10 md:mt-10 lg:mt-0 ">
                        <div className="mb-4"><h6 className="footer-title mb-2">Legal</h6></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Terms of use</a></div>
                        <div className="mb-2"><a className="link link-hover mb-2">Privacy policy</a></div>
                        <a className="link link-hover">Cookie policy</a>
                    </div>

                </div>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="Your Username" className="input input-bordered join-item w-full" />
                        </div>
                        <label className="label">
                            <span className="label-text">Eamil</span>
                        </label>
                        <div>
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item w-full" />
                        </div>
                        <div className="mt-6">
                            <button className="btn bg-[#ff6500] hover:bg-[#1C6861] text-white join-item w-full">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <hr className="mb-4 mx-20" />
            <aside className="pb-4">
                <p className="text-center">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
            </aside>
        </div>
    );
};

export default Footer;