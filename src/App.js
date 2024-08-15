import { useState, useEffect } from "react";
import axios from "axios";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const readtoken = "c59aa36e9b42d99600275eafeddaba5e3d135faf";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.buttercms.com/v2/pages/portfolio/a-portfolio-site?auth_token=${readtoken}`
        );
        const portfolioData =
          res?.data?.data?.fields?.my_personal_portfolio || [];
        setData(portfolioData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div className="h-screen w-full bg-[#262626] text-white flex items-center justify-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="h-screen w-full bg-[#262626] text-red-500 flex items-center justify-center text-xl">Error: {error.message}</div>;
  }

  return (
    <div>
      <Navbar />
      <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      {data.length > 0 && <Home content={data[0] || {}} />}
      {data.length > 1 && <About content={data[1] || {}} />}
      {data.length > 2 && <Skills content={data[2] || {}} />}
      {data.length > 3 && <Works content={data[3] || {}} />}
      <Contact />
    </div>
  );
}

export default App;
