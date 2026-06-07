import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faCoffee} from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
    return(
        <div className="w-full h-30 flex md:flex-row flex-col justify-center items-center md:px-16 px-8">
            <p className='h-fit pr-1'> <i className='fa-solid fa-code'></i> par ECHE Tiago avec du <i className='fa-solid fa-coffee'></i> - 2026 -</p>
            <p><a href="/tos"><u>Tout droits réservés</u></a></p>
        </div>
    )
}