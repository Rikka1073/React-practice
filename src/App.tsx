import "./App.css";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";

import { Button } from "@yamada-ui/react";
import { Box } from "@yamada-ui/react";
import { Image } from "@yamada-ui/react";

import PageLayout from "./components/PageLayout";

export const CatContext = createContext("猫です");

function App() {
  const [catImage, setCatImage] = useState("https://cdn2.thecatapi.com/images/uo.jpg");

  const onclickButton = async () => {
    // 画像を取得するAPIを叩く
    const response = await axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    setCatImage(response[0].url);
  };

  const data = "React + TypeScript + Yamada UI";
  return (
    <>
      <PageLayout data={data}>
        <Box>
          <Button onClick={onclickButton}>クリックすると画像が変わるよ</Button>
          <Box mt="10">
            <Image src={catImage} boxSize="xl" />
          </Box>
        </Box>
      </PageLayout>
    </>
  );
}

export default App;
