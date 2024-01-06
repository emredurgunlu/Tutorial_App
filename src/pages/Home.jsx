import { useEffect, useState } from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const getTutorials = async () => {
    try {
      const res = await axios(process.env.REACT_APP_URL);
      setTutorials(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //? Mount asamasinda istek atilmali
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);
  return (
    <>
      {/* post işleminden sonra tekrar get işleminin tetiklenmesi 
    için home dan addtutorialsa props ile getTutorials fonksyonu gönderdik ve 
    addtutorial içinde post işlemini takiben getTutorials fonksyonunu çağırdık */}
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
