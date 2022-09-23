const Input = ({ label, placeholder, isPassword }) => {
    return (
        <div className="container mt-4">
        <label className="text-sm font-normal text-slate-500">{ label }</label> <br />
        <input type={ isPassword ? 'password' : 'text' }  placeholder={ placeholder } className="border-2 border-purple-300 bg-[#DDE1E6] rounded-lg p-2 w-full text-sm"/>
        </div>
    )
}

export default Input