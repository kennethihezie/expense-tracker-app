import Link from "next/link"

const Button = ({ url, text }) => {
    return (
        <Link href={ url }>
        <a className="bg-purple-500 w-full mt-16 p-2 text-sm text-white rounded-md text-center">
          { text }
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 float-right">
           <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </a>
       </Link>
    )
}



export default Button