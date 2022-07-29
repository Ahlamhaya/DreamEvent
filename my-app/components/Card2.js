
import styled from "styled-components";
import { useState } from "react";

const Container = styled("div")(() => ({
  
  flexDirection: "row",
  justifyContent: "center"
}));

const Card = styled.div`
  position: relative;
  flex-basis: 100%;
  max-width: 220px;
`;

const CardTemplate = styled("div")(() => ({
  width: "100%",
  backfaceVisibility: "hidden",
  height: "400px",
  borderRadius: "6px",
  transformStyle: "preserve-3d",
  transition: "transform 1s cubic-bezier(0.8, 0.3, 0.3, 1)"
}));

const CardFront = styled(CardTemplate)(({ flip }) => ({
  backgroundImage: "url('https://zeo.org/static/ab4f89d69cb7c7ec8eb661585d43b95c/1581241674-what-can-cm-image.svg')",
  height: "400px",
  width: "380px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: flip ? "rotateY(-180deg)" : "rotateY(0deg)"
}));

const CardBack = styled(CardTemplate)(({ flip }) => ({
  position: "absolute",
  top: 0,
 
  height: "400px",
  width: "380px",
  background: "#F2E1F3",
  transform: flip ? "rotateY(0deg)" : "rotateY(180deg)"
}));

const CardContent = styled("div")(() => ({
  
  position: "absolute",
  
  width: "100%",
  backfaceVisibility: "hidden",
  transform: "translateZ(70px) scale(0.90)"
}));

const BGFade = styled("div")(() => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  
  height: "200px",
  background: "linear-gradient(to bottom, rgba(0,0,0,0) 20%,rgba(0,0,0,.8) 90%)"
}));
export default function App() {
  const [flip, setFlip] = useState(false);

  return (
    <div className="App">
      
      <Container>
        <Card
          onMouseEnter={() => setFlip(true)}
          onMouseLeave={() => setFlip(false)}
        >
          <CardFront flip={flip}>
            <CardContent>
              
            </CardContent>
            <BGFade />
          </CardFront>
          <CardBack flip={flip}>
            <CardContent>
              <div className=' '>
            <div class=" text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 mt-20">
            
            <h1 class="text-3xl font-semibold">Get better results</h1>
              <p class="my-2">and a variety of ones as well ! </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                class="bg-teal-500 px-6 py-2 font-semibold text-grey rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
              </div>
              </div>
            </CardContent>
          </CardBack>
        </Card>
      </Container>
      {/*
      <Container>
      <Card>
       <Front><content>
       <Back><content>
      </Card>
      */}
    </div>
  );
}