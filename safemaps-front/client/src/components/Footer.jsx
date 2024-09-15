// import React from 'react'

// function Footer() {
//   return (
//     <div className="w-full h-auto bg-zinc-900 px-4 md:px-8 lg:px-16">
//       <div className="flex flex-col md:flex-row gap-5">
        
//         {/* Heading and Contact Form Section */}
//         <div className="w-full md:w-1/2 h-auto flex flex-col justify-between mb-8 md:mb-0">
//           <div className="heading">
//             <h1 className="text-[8vw] md:text-[5vw] sm:mt-[5vw] mt-[-5vw] font-semibold uppercase leading-none mb-4 md:-mb-7">True-</h1>
//             <h1 className="text-[12vw] md:text-[9vw]  mt-[-1.5vw] font-bold uppercase leading-none mb-4 md:-mb-7">Route</h1>
//           </div>

//           {/* Contact Form Section */}
//           <div className="contact-form w-full  mt-[4vw] md:w-[35vw]">
//             <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
//             <form className="flex flex-col gap-3">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows="3"
//                 className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//             {/* Your SVG content */}
//           </svg>
//         </div>

//         {/* Security and Media/Location Sections */}
//         <div className="w-full md:w-1/2">
//           <h1 className="text-[8vw] md:text-[7vw] overflow-hidden font-bold uppercase leading-none">
//             SECURITY
//           </h1>

//           {/* Flex container to align MEDIA section and L:/E: section horizontally */}
//           <div className="flex flex-col md:flex-row mt-8 gap-5">
            
//             {/* Media Links Section */}
//             <div className="media-section w-full md:w-1/2">
//               <div className="my-4 md:my-[3vw]">MEDIA</div>
//               <a className="block text-xl md:text-2xl underline" href="https://www.facebook.com/">Facebook</a>
//               <a className="block text-xl md:text-2xl underline" href="https://www.instagram.com/accounts/login/">Instagram</a>
//               <a className="block text-xl md:text-2xl underline" href="https://twitter.com/?lang=en">Twitter</a>
//               <a className="block text-xl md:text-2xl underline" href="https://www.linkedin.com/feed/">LinkedIn</a>
//             </div>

//             {/* L: and E: Section */}
//             <div className="location-section w-full md:w-1/2 pl-0 md:pl-[4vw]">
//               <div className="my-4 md:my-[3vw]">L:</div>
//               <a className="block text-xl md:text-2xl underline" href="#">202-1965 W 4th Ave</a>
//               <a className="block text-xl md:text-2xl underline" href="#">Vancouver, Canada</a>
//               <a className="block text-xl md:text-2xl underline mt-2 md:mt-[2vw]" href="#">30 Chukarina St</a>
//               <div className="mt-2 md:mt-[2vw]">E:</div>
//               <a className="block text-xl md:text-2xl underline" href="#">Lviv, Ukraine</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer
import React from 'react';

function Footer() {
  return (
    <div className="w-full h-auto bg-zinc-900 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-10"> {/* Increased gap for more space */}
        
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 h-auto mb-8 mt-[-2vw] md:mb-0">
          <div className="contact-form w-full">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
            <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Your SVG content */}
            </svg>
          </div>
        </div>

        {/* Media and Contact Us Sections */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-15"> {/* Increased gap for more space */}
          
          {/* Media Links Section */}
          <div className="media-section w-full ml-6 md:w-1/2 flex-1">
            <div className="text-xl md:text-2xl font-semibold mb-4">MEDIA</div>
            <ul className="list-disc list-inside space-y-4 text-xl md:text-2xl">
              <li><a className="underline" href="https://www.facebook.com/">Facebook</a></li>
              <li><a className="underline" href="https://www.instagram.com/accounts/login/">Instagram</a></li>
              <li><a className="underline" href="https://twitter.com/?lang=en">Twitter</a></li>
              <li><a className="underline" href="https://www.linkedin.com/feed/">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="location-section w-full md:w-1/2 flex-1">
            <div className="text-xl md:text-2xl font-semibold mb-4">CONTACT US</div>
            <ul className="list-disc list-inside space-y-4 text-xl md:text-2xl">
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">safemaps@gmail.com</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">safemaps.com</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">CyberHub , New Delhi</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">Lviv, Ukraine</a></li>
</ul>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;