const Card = ({ children }) => {
    return (
        <div className="flex flex-col items-center border-1 p-8 rounded-xl mx-auto shadow-lg shadow-purple-500 max-w-sm m-6">
        { children }
        </div>
    )
}

export default Card