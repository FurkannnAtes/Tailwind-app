/* eslint-disable jsx-a11y/anchor-has-content */


function App() {
  function handleMobilNav() {
    const nav = document.getElementById("mainNav")

    nav.classList.toggle("hidden")
  }
  return (
    <div className="h-screen flex bg-white">
      <div id="mainNav" className="h-screen w-64 px-8 py-4 border-r-2 absolute lg:relative border-r-black bg-white hidden lg:block overflow-y-auto">
        <div className="flex justify-between">
          <i className="bi bi-envelope-check text-4xl text-blue-500 px-3"></i>
          <button onClick={() => handleMobilNav()}><i className="bi bi-x block lg:hidden text-4xl"></i></button>
        </div>
        <div className="mt-3  ">
          <h2 className="font-extrabold text-lg px-3">SCRUMBOARD</h2>
          <nav className=" flex flex-col  gap-y-1 mt-3 ">
            <a href="#" className="font-semibold text-md flex justify-between px-3 py-2">
              <span>Backlog</span><span>23</span>
            </a>
            <a href="#" className="font-semibold text-white text-md flex justify-between bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md px-3 py-2">
              <span>Active Sprints</span><span>1</span>
            </a>
            <a href="#" className="font-semibold text-md flex justify-between px-3 py-2">
              <span>Reports</span><span>13</span>
            </a>
          </nav>
          <nav className=" flex flex-col  gap-y-1 mt-3 ">
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Tags</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Bug</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>New Feature</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Marketing</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Design</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Research</span>
            </a>
            <a href="#" className="font-semibold text-md  px-3 py-2">
              <span>Overdue</span>
            </a>

          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col  overflow-hidden   bg-white" >
        <div className="border-b-2 border-r-black">
          <div className="flex justify-between py-4 px-4  ">
            <span className="flex items-center">
              <div className="lg:hidden block mr-5 text-2xl">
                <button onClick={() => handleMobilNav()}><i className="bi bi-list"></i></button>
              </div>
              <i className="bi bi-search border-2  px-2 border-r-0 rounded-l-md  text-gray-400"></i><input className="outline-0 border-2 border-l-0 rounded-r-md" type="text" placeholder="Search" />
            </span>
            <span className="flex items-center gap-x-1"><i className="bi bi-bell text-gray-400"></i> <img className=" w-10 h-10 rounded-full" src="/images/avatar-4.jpg" alt="" /></span>
          </div>
          <div className="flex justify-between py-4 px-4 ">
            <div className="flex items-center gap-x-3">
              <span className="font-extrabold text-lg">Assigness</span>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="flex gap-x-5">
              <button className="text-white font-semibold bg-black p-2 rounded-md">Complete Sent</button>
              <button className="text-white font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 p-2 rounded-md">+ New Item</button>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex    gap-x-4 px-5 pt-2 bg-gray-100  overflow-auto ">
          <div className="overflow-y-auto  flex flex-col gap-y-2 px-3">
            <h1 className="mb-2 font-semibold text-gray-500 ">Todo</h1>

            <div className="bg-white p-2 rounded-md shadow-lg min-w-fit" >
              <div className="flex justify-between items-center">
                <span className="bg-blue-300 rounded-lg p-2 text-blue-500 font-semibold ">DESIGN</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-red-300 rounded-lg p-2 text-red-500 font-semibold ">RESEARCH</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>



          </div>
          <div className="overflow-y-auto  flex flex-col gap-y-2 px-3">
            <h1 className="mb-2 font-semibold text-gray-500 ">In Progress</h1>

            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-pink-300 rounded-lg p-2 text-pink-500 font-semibold ">BUG</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-red-300 rounded-lg p-2 text-red-500 font-semibold ">RESEARCH</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-green-300 rounded-lg p-2 text-green-500 font-semibold ">NEW FEATURE</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>



          </div>
          <div className="overflow-y-auto  flex flex-col gap-y-2 px-3">
            <h1 className="mb-2 font-semibold text-gray-500 ">Testing</h1>

            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-blue-300 rounded-lg p-2 text-blue-500 font-semibold ">DESIGN</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>



            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-purple-300 rounded-lg p-2 text-purple-500 font-semibold ">MARKETING</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-red-300 rounded-lg p-2 text-red-500 font-semibold ">RESEARCH</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-green-300 rounded-lg p-2 text-green-500 font-semibold ">NEW FEATURE</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>

            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-yellow-300 rounded-lg p-2 text-yellow-500 font-semibold ">OVERDUE</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-blue-300 rounded-lg p-2 text-blue-500 font-semibold ">DESIGN</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>

          </div>
          <div className="overflow-y-auto  flex flex-col gap-y-2 px-3">
            <h1 className="mb-2 font-semibold text-gray-500 ">Todo</h1>

            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-blue-300 rounded-lg p-2 text-blue-500 font-semibold ">DESIGN</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>
            <div className="bg-white p-2 rounded-md shadow-lg">
              <div className="flex justify-between items-center">
                <span className="bg-red-300 rounded-lg p-2 text-red-500 font-semibold ">RESEARCH</span> <span className="text-gray-400"><i className="bi bi-paperclip text-lg"></i>2</span>
              </div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, quas!</div>
              <span className="flex ">
                <span className="border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-3.jpg" alt="" /></span>
                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-5.jpg" alt="" /></span>

                <span className="-ml-2 border-2 border-white rounded-full"><img className=" w-6 h-6 rounded-full" src="/images/avatar-6.jpg" alt="" /></span>


              </span>
            </div>



          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
