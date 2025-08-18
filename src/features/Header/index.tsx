import React from 'react'

export default function Header() {
    return (
        <div className="fixed top-4 w-full flex justify-center z-50">
            <div className='p-4 px-8 rounded-4xl bg-[#202224] backdrop-blur-[32px] max-w-[882px] w-full border border-gray-400 text-white flex justify-between items-center'>
                <div className='text-2xl font-clashdisplay font-bold'>JAXE TECH</div>
                <nav className='flex gap-4'>
                    <a href="#" className='text-white font-DM_Sans font-normal hover:text-gray-300'>Accueil</a>
                    <a href="#" className='text-white font-DM_Sans font-normal hover:text-gray-300'>À propos</a>
                    <a href="#" className='text-white font-DM_Sans font-normal hover:text-gray-300'>Services</a>
                </nav>
                <div className='flex items-center gap-2'>
                    <button className='bg-actif text-white px-4 py-2 rounded-xl hover:bg-actif'>Contact</button>
                </div>
            </div>
        </div>

    )
}
