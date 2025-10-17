import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-400 text-center py-6 mt-0 border-t border-gray-700'>
            <p>
                © {new Date().getFullYear()} <span className='text-blue-400 font-bold'>Mr.Rupesh Lal</span> | All Right Reserved
            </p>
            <div className='flex justify-center gap-6 mt-3'>
                <a href="https://github.com/itmodem.com">Githube</a>
                <a href="https://youtube.com/itmodem.com">YouTube</a>
                <a href="https://itmodem.com">Company</a>
            </div>
        </footer>
    )
}

export default Footer
