const Text = ({ firstText, secondText }) => {
    return (
        <div className="flex flex-col items-center mt-16 mb-24">
         <p className="text-xl font-bold">{ firstText }</p>
         <p className="text-xl font-bold">&</p>
         <p className="text-xl font-bold">{ secondText }</p>
       </div>
    )
}

export default Text