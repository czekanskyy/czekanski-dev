import React, { FormEvent, useRef, useState } from 'react';

import { FaLinkedin, FaEnvelope, FaFileInvoice, FaDownload } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { PageData } from '../typing';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageData: PageData;
};

const Contact = ({ pageData }: Props) => {
  const form = useRef<HTMLFormElement>(null);
  const [btnColor, setBtnColor] = useState('bg-red-500');
  const [btnHoverColor, setBtnHoverColor] = useState('hover:bg-red-500/75');
  const [btnText, setBtnText] = useState('Send');

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    const resetFormStyles = () =>
      setTimeout(() => {
        setBtnHoverColor('hover:bg-red-500/75');
        setBtnColor('bg-red-500');
        setBtnText('Send');
      }, 1500);
    e.preventDefault();
    e.currentTarget.reset();
    e.currentTarget.blur();
    setBtnHoverColor('');
    setBtnColor('bg-yellow-500');
    setBtnText('Sending...');
    // Send email using EmailJS
    emailjs.sendForm('service_46gto9n', 'template_czm98vm', form.current!, process.env.NEXT_PUBLIC_EMAILJS_KEY).then(
      result => {
        console.log(result.text);
        setTimeout(() => {
          setBtnColor('bg-green-500');
          setBtnText('Message sent');
          resetFormStyles();
        }, 1200);
      },
      error => {
        console.error(error.text);
        setTimeout(() => {
          setBtnColor('bg-black');
          setBtnText('Message not sent');
          resetFormStyles();
        }, 1200);
      }
    );
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center relative gap-y-6 sm-gap-y-8 md:gap-y-12'>
      <h2 className='absolute top-16 text-3xl tracking-[0.3em] text-neutral-500'>CONTACT</h2>

      <h3 className='text-2xl md:text-3xl font-medium'>Want to know more?</h3>

      <div className='flex flex-col gap-y-3 sm:gap-y-5 md:gap-y-6 items-center'>
        <p className='flex gap-x-2 items-center'>
          <span className='text-red-500 text-xl md:text-3xl animate-pulse'>
            <FaLinkedin />
          </span>
          <span className='text-base sm:text-xl md:text-2xl'>Dominik Czekański</span>
        </p>

        <p className='flex gap-x-2 items-center'>
          <span className='text-red-500 text-xl md:text-3xl animate-pulse'>
            <FaEnvelope />
          </span>
          <span className='text-base sm:text-xl md:text-2xl'>{pageData?.email}</span>
        </p>

        <span className='flex gap-x-2 items-center'>
          <span className='text-red-500 text-xl md:text-3xl animate-pulse'>
            <FaFileInvoice />
          </span>
          <span className='text-base sm:text-xl md:text-2xl mr-2'>My resume</span>
          <div>
            <a href={pageData?.resumeEN} download className='flex text-sm items-center gap-x-1 text-neutral-400'>
              <FaDownload />
              PL
            </a>
            <a href={pageData?.resumePL} download className='flex text-sm items-center gap-x-1 text-neutral-400'>
              <FaDownload />
              EN
            </a>
          </div>
        </span>
      </div>

      <form ref={form} onSubmit={submitForm} className='flex flex-col gap-y-2 w-full px-4 md:px-0 md:w-fit mx-auto'>
        <div className='flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2'>
          <input className='contactInp' type='text' name='name' id='name' placeholder='Name' required />
          <input className='contactInp' type='email' name='email' id='email' placeholder='Email' required />
        </div>
        <input className='contactInp' type='text' name='subject' id='subject' placeholder='Subject' required />
        <textarea className='contactInp' name='message' id='message' placeholder='Your message' required />
        <button type='submit' className={`transition-all ${btnColor} ${btnHoverColor} rounded-md p-2 sm:p-3 md:p-4 font-medium sm:text-lg md:text-xl`}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default Contact;
