import "./App.css";
import { useState } from "react";
import { createContext } from "react";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import { Button, Input } from "@yamada-ui/react";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  type Inputs = {
    example: string;
    exampleRequired: string;
  };

  return (
    <>
      <PageLayout data={data}>
        <Box>
          <Button onClick={onclickButton}>クリックすると画像が変わるよ</Button>
          <Box mt="10">
            <Image src={catImage} boxSize="xl" />
          </Box>
          <Box mt="10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                maxLength={5}
                {...register("exampleRequired", {
                  required: true,
                  maxLength: {
                    value: 5,
                    message: "最大5文字です",
                  },
                })}
              />
              {/* 
              <FormControl
                invalid={!!errors.name}
                label="Name"
                errorMessage={errors.name ? errors.name.message : undefined}
              >
                <Input variant="outline" />
              </FormControl> */}
              {errors.exampleRequired && <span color="red">{errors.exampleRequired.message}</span>}
              <Button type="submit" mt="10">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </PageLayout>
    </>
  );
}

export default App;
