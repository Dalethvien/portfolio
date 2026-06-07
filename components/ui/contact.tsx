import {FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
export default function Contact(){
    return(
        <div id='Contact' className='my-10'>
            <h1 className="md:text-3xl text-xl my-2">Contactez-moi : </h1>
            <p className='md:text-lg text-sm'>N'hesitez pas à me contacter pour toutes questions à propos de mon travail, ou si vous avez des projets à me proposer ! </p>
            <div className='flex md:gap-20 gap-10 my-5'>
                <a href="https://www.linkedin.com/in/tiago-eche-316a2038a" className='text-secondary'><FaLinkedinIn className='text-[30px] md:text-[50px]'/></a>
                <a href="mailto:echetiago@gmail.com" className='text-secondary'><MdEmail className='text-[30px] md:text-[50px]'/></a>
                                       <a href="https://github.com/Dalethvien" className="text-secondary"><FaGithub className='text-[30px] md:text-[50px]' /> </a>

            </div>
        </div>
    )
}