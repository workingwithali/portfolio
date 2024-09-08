import Socials from "@/components/Socials"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
const Home = () => {
  return (
    <section className="h-full">
      <div className="contaniner mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span>Software Engineer</span>
            <h1 className="h1">Hello I'm <br /><span className="text-accent">Ali Rashid</span></h1>
            <p className="max-w-[500px] mb-9 text-gray-800">I excel at crafting elegant digital experinces and I am proficinet in various programming languages and technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase items-center gap-2" >
                <span>Download CV</span>
                < FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
                </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home
