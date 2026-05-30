import {FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
export default function Contact(){
    return(
        <div id='Contact' className='my-10'>
            <h1 className="text-3xl my-2">Contactez-moi : </h1>
            <p className='text-lg'>N'hesitez pas à me contacter pour toutes questions à propos des mon travail, ou si vous avez des projets à me proposer ! </p>
            <div className='flex gap-20 my-5'>
                <a href="https://www.linkedin.com/in/tiago-eche-316a2038a"><FaLinkedinIn size={60}/></a>
                <a href="mailto:echetiago@gmail.com"><MdEmail size={60}/></a>
            </div>
            <p>Vous pouvez également retrouver la majorité de mes projets directement sur mon <a href="https://github.com/Dalethvien">github</a> ou bien directement ici !</p>
        </div>
    )
}