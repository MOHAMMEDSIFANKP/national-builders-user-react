import React from 'react'

import { Card } from '@material-tailwind/react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";

import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Text from '../common/Text';

// Image
import FooterBgImg from '../../assets/images/footer/footer-bg-image.svg'
import logo from '../../assets/images/logo/national-builders-logo.svg'
import Accoladeslogo from '../../assets/images/footer/accolades-logo.svg'
import facebook from '../../assets/icons/facebook-icon.svg'
import instagram from '../../assets/icons/instagram-icon.svg'
import linkedin from '../../assets/icons/linkedin-icon.svg'
import youtube from '../../assets/icons/youtuve-icon.svg'

function Footer() {
  return (
    <>

      {/* <div className='lg:hidden block'>
      <div className='grid grid-rows-4  text-white'>
        <div>
          <div className='flex justify-center my-10 items-center'>
            <img src={logo} className='w-7/12' alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <div className='mt-5 grid grid-cols-2 text-2xl opacity-85 gap-6'>
              <p>Project</p>
              <p>Testmonials</p>
              <p>Rentals</p>
              <p>New & Events</p>
              <p>About</p>
              <p>Blogs</p>
              <p>Contact</p>
              <p>key handover</p>
            </div>
          </div>
          <hr className='mx-10  mt-8 border border-gray-900' />
        </div>
        <div className='w-full'>
          <div className='p-10 grid grid-cols-[4rem,1fr]'>
            <div className='text-red-500'>
              <IoLocationSharp className=' h-7 w-7 mt-12' />
              <MdEmail className='h-6 w-6 mt-[5.5rem]' />
              <FaPhoneAlt className='h-6 w-6 mt-5' />
            </div>
            <div className='text- text-justify text-white opacity-90 me-5 leading-8'>
              <p className='text-xl'>NAVI MUMBAI</p>
              <p className='text-lg mt-3'>National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705
              </p>
              <p className='text-lg my-3'>marketingmumbai@nationalbuilders.in</p>
              <p>+ 9122 49639871 /72/ 73,  </p>
              <p>2249737814 +91 9223300950 /</p>
              <p>9223300960, +91 9004091082</p>
            </div>
          </div>
          <hr className='mx-10  mt-8 border border-gray-900' />
        </div>
        <div>
          <div className='p-10 grid grid-cols-[4rem,1fr]'>
            <div className='text-red-500'>
              <IoLocationSharp className=' h-7 w-7 mt-12' />
              <MdEmail className='h-6 w-6 mt-[4rem]' />
              <FaPhoneAlt className='h-6 w-6 mt-5' />
            </div>
            <div className='text- text-justify text-white opacity-90 me-5 leading-8'>
              <p className='text-xl'>Kochi</p>
              <p className='text-lg mt-3'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024
              </p>
              <p className='text-lg my-3'>marketingkochi@nationalbuilders.in</p>
              <p>+91 484 2340781, 2333391,</p>
              <p> +91 484 2534558 </p>
            </div>
          </div>
          <hr className='mx-10  mt-8 border border-gray-900' />
        </div>
        <div className='mx-10 border h-[20rem] bg-gray-900 opacity-60 border-gray-600 rounded-[2rem] '>
          <div className='flex justify-center items-center h-36'>
            <FaFacebook className='w-14 h-14 mx-3 text-red-500  lg:m-5 bg-black p-3 rounded-full' />
            <GrInstagram className='w-14 h-14 mx-3 text-red-500  lg:m-5 bg-black p-3 rounded-full' />
            <FaLinkedin className='w-14 h-14 mx-3 text-red-500  lg:m-5 bg-black p-3 rounded-full' />
            <IoLogoYoutube className='w-14 h-14 mx-3 text-red-500  lg:m-5 bg-black p-3 rounded-full' />
          </div>
          <div>

          </div>
          <div className='-mt-6 flex justify-center items-center'>
          <MdCopyright className='w-7 h-7 me-4' />
            <p className='flex justify-center opacity-65 text-lg items-center'> National Builders All Rights Reseved
            </p>
          </div>
          <div className='flex justify-center items-center opacity-65 w-full pt-3'> <img src={Accoladeslogo} alt="" />
          </div>
          <div>
            <p className='flex justify-center opacity-65 text-xl items-center pt-7'>Privacy Policy | Terms of Service</p>
          </div>
        </div>

      </div>
      </div> */}
      <section className='hidden lg:block'>
        <div className=' bg-black grid grid-rows-[10rem,1px,1fr]'>
          <div className='flex justify-center items-center'>
            <img src={logo} className='w-56 ' alt="" />
          </div>
          <hr className='xl:mx-auto mx-20 xl:container border border-gray-900' />
          <div className=' bg-no-repeat bg-cover' style={{ backgroundImage: `url(${FooterBgImg})` }}>
            <div className='xl:mx-auto mx-20 xl:container grid grid-rows-[1fr,6rem,12rem] '>
              <div className='grid grid-cols-[1fr,5rem,1fr] gap-8'>
                <Card className='bg-gray-900 bg-opacity-50 border p-5 text-opacity-95 text-xl gap-3 text-white opacity-90 leading-8  border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2'>NAVI MUMBAI </p>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-3/12 flex text-red-500'>
                      <IoLocationSharp className='h-7 w-7 mt-2' />
                    </div>
                    <p className='w-ful'>National Builders Office, Sea  Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705</p>
                  </div>
                  <div className='w-full flex'>
                    <div className='w-1/12 flex text-red-500'>
                      <MdEmail className='h-6 w-6' />
                    </div>
                    <a href="mailto:marketingmumbai@nationalbuilders.in" className='w-full ps-2'>marketingmumbai@nationalbuilders.in</a>
                  </div>
                  <div className='w-full flex mt-1'>
                    <div className='w-1/6 flex text-red-500'>
                      <FaPhoneAlt className='h-6 w-6 mt-2' />
                    </div>
                    <p className='-ms-2'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
                  </div>
                </Card>

                <div className='bg-gray-900 bg-opacity-50 border flex justify-center items-center border-gray-800 my-10 rounded-[2rem] lg:flex-col h-16 lg:h-auto'>
                  <FaFacebook className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <GrInstagram className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <FaLinkedin className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                  <IoLogoYoutube className='w-11 h-11 text-red-500 m-5 md:m-9 lg:m-5 bg-black p-3 rounded-full' />
                </div>

                <Card className='bg-gray-900 bg-opacity-50 border p-5 text-opacity-95 text-xl gap-3 text-white opacity-90 leading-8  border-gray-800 my-10  rounded-[2rem]'>
                  <div className='w-full  pt-7 flex items-end'>
                    <div className='w-1/12'></div>
                    <p className='ps-2'>Kochi </p>
                  </div>
                  <div className='w-full flex '>
                    <div className='w-2/12 flex text-red-500'>
                      <IoLocationSharp className='h-7 w-7 mt-2' />
                    </div>
                    <p className='w-ful -ms-2'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024</p>
                  </div>
                  <div className='w-full flex mt-7'>
                    <div className='w-1/12 flex text-red-500'>
                      <MdEmail className='h-6 w-6' />
                    </div>
                    <a href="mailto:marketingkochi@nationalbuilders.in" className='w-full ps-2'>marketingkochi@nationalbuilders.in</a>
                  </div>
                  <div className='w-full flex mt-2'>
                    <div className='w-1/12 flex text-red-500'>
                      <FaPhoneAlt className='h-6 w-6 mt-1' />
                    </div>
                    <p className='ps-2'>+91 484 2340781, 2333391, +91 484 2534558</p>
                  </div>
                </Card>
              </div>
              <Card className='rounded-[2rem] flex-row justify-between items-center px-10 py-4 lg:py-0 bg-opacity-50 text-white font-bold lg:text-xl bg-gray-900 border border-gray-800'>
                <Link to={'/'}>Home</Link>
                <Link to={'/project'}>Projects</Link>
                <Link to={'/rentals'}>Rentals</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/testimonials'}>Testimonials</Link>
                <Link to={'/new-events'}>News & Events</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Link to={'/key-handover'}>Key handover</Link>
              </Card>
              <Card className='flex-row justify-between items-center px-20 rounded-[2rem] lg:h-20 mt-10  text-white mb-10 lg:mb-0 lg:text-xl bg-gray-900 bg-opacity-50 border border-gray-800'>
                <p className='flex justify-center items-center '><MdCopyright className='w-6 h-6' /> National Builders All Rights Reseved
                </p>
                <img src={Accoladeslogo} alt="" />
                <p className='flex justify-center items-center'>Privacy Policy | Terms of Service</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Section className='mx-8 sm:mx-14 lg:hidden block'>
        <div className='flex justify-center items-center'>
          <img src={logo} className='w-9/12 sm:w-auto' alt="" />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 text-center gap-3 sm:gap-5 my-8 w-full'>
          <P>Project</P>
          <P>Testmonials</P>
          <P>Rentals</P>
          <P>New & Events</P>
          <P>About</P>
          <P>Blogs</P>
          <P>Contact</P>
          <P>key handover</P>
        </div>
        <hr className='border border-gray-900' />
        <div className='my-8 grid gap-2 sm:gap-4'>
          <div className='ms-12'>
            <p className='text-lg opacity-90'>Navi Mumbai</p>
          </div>
          <div className='grid grid-cols-[3rem,1fr]'>
            <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
            <Text text={"National Builders Office, Sea Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705"} />
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <MdEmail className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='whitespace-normal text-[1rem] opacity-65 break-words'>marketingmumbai@nationalbuilders.in</p>
            </div>
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <FaPhoneAlt className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
            </div>
          </div>
        </div>
        <hr className='border border-gray-900' />
        <div className='my-8 grid gap-2 sm:gap-4'>
          <div className='ms-12'>
            <p className='text-lg opacity-90'>Kochi</p>
          </div>
          <div className='grid grid-cols-[3rem,1fr]'>
            <IoLocationSharp className='text-red-500 h-7 w-7 mt-2' />
            <Text text={"National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024"} />
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <MdEmail className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>marketingkochi@nationalbuilders.in</p>
            </div>
          </div>
          <div className='grid grid-cols-[3rem,1fr] w-full'>
            <FaPhoneAlt className='text-red-500 h-6 w-6' />
            <div className=' w-[70vw]'>
              <p className='text-[1rem] opacity-65 break-words'>+91 484 2340781, 2333391, +91 484 2534558</p>
            </div>
          </div>
        </div>
        <div className='bg-gray-900 border border-gray-800 rounded-[1rem] flex flex-col p-5 mb-10 justify-center items-center'>
          <div className='grid grid-cols-4 gap-4 sm:gap-20'>
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className='opacity-65 my-4 sm:my-5 flex flex-row'>
            <MdCopyright className='w-5 sm:w-6 h-5 sm:h-6 sm:me-4' />
            <p className='text-[0.9rem] sm:text-xl'>National Builders All Rights Reseved</p>
          </div>
          <div className='opacity-65'>
            <img src={Accoladeslogo} className='w-auto ' alt="" />
          </div>
          <div className='opacity-65 my-4 sm:my-5 text-[0.9rem] sm:text-xl'>
            <p>Privacy Policy | Terms of Service</p>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Footer

const Section = styled.section`
`

const P = styled.p`
    font-family: 'popins_semibold';
  font-size: 1rem;

`