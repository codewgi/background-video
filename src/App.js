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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione sapiente iste optio aliquam eum dicta vel sed repellat? Aut nisi libero, suscipit aliquid necessitatibus quos ad, excepturi, qui reprehenderit aperiam voluptas quis dignissimos ut veniam impedit doloremque quibusdam soluta distinctio rem? Aliquid tenetur, ut excepturi nobis nam modi sunt laboriosam veritatis cumque nemo sint laborum enim quibusdam explicabo, maxime exercitationem! Ab alias officia saepe deleniti beatae nam corrupti omnis, odit laboriosam soluta dolore sint accusantium modi obcaecati sed. Accusantium sequi non quis aspernatur, consequatur blanditiis velit, officia dolor aliquam perferendis vitae dignissimos repellendus alias voluptate necessitatibus doloremque eius! Autem.
        </span>
        <button className='w-fit px-12 py-4 bg-black border-2 border-black text-white hover:bg-transparent hover:border-white duration-200'>
          Read More
        </button>
      </div>
    </div>
  );
}

export default App;
