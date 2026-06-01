import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode, faCoffee} from '@fortawesome/free-solid-svg-icons'
export default function Footer(){
    return(
        <div className="w-full h-30 flex justify-center items-center">
            <p className='h-fit'> <i className='fa-solid fa-code'></i> par ECHE Tiago avec du <i className='fa-solid fa-coffee'></i> - 2026 - Tout droits réservés</p>
        </div>
    )
}