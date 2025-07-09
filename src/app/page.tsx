import TopBar from '@/components/layout/topbar'
import React from 'react'


const Page = () => {
  return(
    <section>
      <TopBar/>
      <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row">
        {/* Left Section: Text */}
        <div className="md:w-1/2 w-full flex items-center justify-center py-30 md:p-8 text-center md:text-left bg-gray-50">
          <div className="space-y-6 max-w-xl xl:pl-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              <span className="text-red-500">Miva</span> Student <span className="text-red-500">Management</span> Portal
            </h1>
            <p className="text-lg text-gray-600">
              Get in touch with an Application specialist to get more information about the Miva University application process.
            </p>
            <button className="bg-red-500 text-white rounded-md py-3 px-6 hover:bg-red-600 transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://miva-university.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/10/23161858/image-12.jpg"
            alt="miva-image"
            className="w-full h-[500px] md:h-full object-cover"
          />
        </div>
      </div>

    </section>
  )
}

export default Page