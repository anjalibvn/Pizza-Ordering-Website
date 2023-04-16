
import aboutImage from '../assets/images/about-image.png'
const About=()=>{
    return(
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium"> About Us</h2>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, laudantium 
                    nisi reprehenderit minus est officiis velit iusto accusa
                    ntium necessitatibus suscipit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                     sapiente error beatae cupiditate veritatis, fugiat at atque iste sit fuga.</p>
                
            </div>
            <div className="flex items-center justify-center">
                <img src={aboutImage} alt=" " className="w-[400px] h-[400px] object-cover"></img>
            </div>
        </div>
        </div>
    )
}
export default About;