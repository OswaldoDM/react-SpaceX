import logo from './images/logo.png'


export function Footer() {

    return (

        <>
    <footer className="px-3 py-8 | md:mt-[50px] | bg-white | text-gray-500" id = "footer">

        <div className="flex flex-col">            

            <div className="mt-4 md:mt-0 | flex flex-col md:flex-row">

                <nav className="flex-1 flex flex-col items-center justify-center md:items-end | md:border-r border-gray-600 md:pr-5">
                <a href = "https://www.spacex.com/" target = "_blank"><img src = {logo} className = "w-[300px] | sm: ml-[50px]"/></a>
                </nav>

                <div className="md:hidden | mt-4 mx-auto | w-11 h-px rounded-full"></div>
       

                <div className="mt-6 md:mt-0 | flex-1 flex items-center justify-center | md:border-r border-gray-600" >

                    

                    <a href="https://api.whatsapp.com/send/?phone=4244181500&text&type=phone_number&app_absent=0" target= "_blank">
                        <i className ="fa-brands fa-whatsapp | text-[30px] mr-[5px] text-gray-500 hover:text-gray-700 trans"></i>
                    </a>

                    <a href="https://github.com/OswaldoDM" target= "_blank">
                        <i className ="fa-brands fa-github | text-[30px] mr-[5px] text-gray-500 hover:text-gray-700 trans"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" target= "_blank">
                        <i className ="fa-brands fa-linkedin | text-[30px] mr-[5px] text-gray-500 hover:text-gray-700 trans"></i>
                    </a>

                    <a href="mailto:oswaldoe1992@gmail.com" target= "_blank">
                        <i className ="fa-solid fa-square-envelope | text-[30px] text-gray-500 hover:text-gray-700 trans"></i>
                    </a>
                
                    
            
                </div>

                <div className="md:hidden mt-4 mx-auto | w-11 h-px rounded-full "></div>
        

                <div className="mt-7 md:mt-0 md:pl-5 | flex-1 flex flex-col items-center justify-center md:items-start ">
                    
                    <span>
                        © 2022
                    </span>
                    
                    <span className="mt-4 md:mt-1"> 
                        Created by <span className='underline'>Oswaldo Diaz Milanes</span>                          
                    </span>
                </div>

            </div>
        </div>
</footer>
        </>
    )
}