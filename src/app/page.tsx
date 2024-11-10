
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Home() {
  return (
    <main>
      <div className="container pt-8">
        <div className="flex justify-between items-baseline">
          <div text-xl font-medium text-black> Logo</div>
          <ul className="gap-10 lg:gap-16 hidden md:flex text-black">
            <li className="menuLink"><a href="#hero">Home</a></li>
            <li className="menuLink"><a href="#about">About</a></li>
            <li className="menuLink"><a href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>
      <div id="hero" className="min-h-screen bg-[url(/pic1.jpeg)] bg-cover" 
      style={{backgroundSize: "80%", backgroundPosition: "left 100px"}}
      >
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60)]">
          <div className="hidden lg:block"></div>
          <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-end items-baseline"></div>
          <div>
            <h1 className="text-8xl mg:3xl text-end font-serif text-yellow-600"> New World</h1>
            <p className="text-end text-7xl font-semibold text-yellow-700"> Enjoy the Music with friend</p>
          </div>
          

        </div>
      </div>
      
        <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in Touch</h2>
                <p className='text-gray-900 text-[18px] pt-2'>
                    Drop me a line, give me a call, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                 abc@gmail.com
                </div>
                <div className='flex gap-3 items-center'>
              (021)000-0000
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-black'
                    id='name'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <input type='text'
                    className='h-[40px] bg-transparent border border-black'
                    id='email'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                    <label htmlFor='msg'>Message</label>
                    <textarea
                    className='bg-transparent border border-black'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-white p-2 px-6'>Send</button>
            </div>
        </div>
      
    </div>
          
        
      
      <div id="about" className="container pt-32">
        <h2 className="text-4xl mg:5xl"> About Me</h2>
        <p className="text-gray-1000 pt-4"> I am student at GIAIC ,pursing a curse in artifical Intelligence,WEB 3.0, & Metaverse passionate about technology and constantly learning new skills to stay up to-date with the latest innovation</p>
      </div>

      <div className="text-center">
            <button className="bg-slate-200  mt-10 p-2 px-4 text-justify"> Join Now</button>
          </div>

      <div className="mt-16 py-6 text-center bg-accent">
          &copy; Sana| All right reserved
          <FaFacebookF />
          
          <FaFacebook />
      </div>
    </main>
  )
    
}
