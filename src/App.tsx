import "./App.css";
import { useState } from "react";

import axios from "axios";

import { Button } from "@yamada-ui/react";
import { Box } from "@yamada-ui/react";
import { Image } from "@yamada-ui/react";

function App() {
  const [catImage, setCatImage] = useState("https://cdn2.thecatapi.com/images/uo.jpg");

  const onclickButton = async () => {
    console.log("Button clicked");
    const response = await axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
      return res.data;
    });
    setCatImage(response[0].url);
  };

  return (
    <>
      <Box>
        <Button onClick={onclickButton}>クリックすると画像が変わるよ</Button>
        <Box mt="10">
          <Image src={catImage} boxSize="xl" />
        </Box>
      </Box>
    </>
  );
}

export default App;
