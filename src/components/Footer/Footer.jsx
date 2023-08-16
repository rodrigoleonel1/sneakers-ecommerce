import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white h-[75px] flex justify-center">
            <a className="flex justify-center place-items-center gap-2 hover:text-orange-500" href='https://github.com/rodrigoleonel1/e-commerce-react' target={'_blank'} rel={'noreferrer'}>  
                Developed by Rodrigo Alarcón 
                <BsGithub/> 
            </a>
        </footer>
    )
}