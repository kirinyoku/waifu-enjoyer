import img from '..//../img/error.gif';

const Page404 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen p-4">
            <img src={img} alt="error" className='block object-contain my-0 mx-auto rounded-xl'/> 
            <p className="text-4xl tracking-widest my-2">404</p>
            <p className="text-2xl">Page Not Found</p>
        </div>
        
    )
}

export default Page404;