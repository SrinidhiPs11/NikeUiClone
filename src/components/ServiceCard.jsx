
const ServiceCard = ({label,imgURL,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:scale-105 duration-300">
    <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full  ">
        <img src={imgURL} alt={label} width={24} height={25}/>
    </div>
    <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
    <p className="break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard


