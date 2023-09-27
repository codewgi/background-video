import logo from './logo.svg';
import "./css/style.css";
import Navbar from './partials/Navbar';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      {/* background */}
      <video src={process.env.PUBLIC_URL + "/assets/video/video1.mp4"} loop autoPlay muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>

      {/* content */}
      <div className='px-72 w-[80%] h-screen flex flex-col justify-center text-white space-y-5'>
        <span className='text-6xl'>
          Background Video
        </span>
        <span className='text-neutral-200'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quas, iusto corrupti quidem, molestiae id quia necessitatibus veritatis dolorum reprehenderit totam eligendi aliquid quo suscipit praesentium commodi optio! Animi eaque omnis, velit et alias inventore maxime mollitia accusamus laborum rem! Est dolor veniam hic ad eos illum similique maxime harum, eveniet eum in neque quidem magnam consectetur facere tempora animi error repellat aliquid sequi praesentium! Quidem nisi, perferendis blanditiis quam placeat voluptate optio provident eveniet voluptatum modi sequi dolorum repellat ipsam doloremque consectetur, autem voluptas fugiat reiciendis ullam ipsum eum! Excepturi nesciunt et facere. Voluptas error quam excepturi expedita quod!
        </span>
        <button className='w-fit px-12 py-4 bg-black border-2 border-black text-white hover:bg-transparent hover:border-white duration-200'>
          Read More
        </button>
      </div>
    </div>
  );
}

export default App;
