"use client"

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'; 

export default function Problem () {
    return(
        <div className="container relative lg:py-16">
            <div className="relatize z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <h1 className="font-epilogue font-semibold text-[#0C0C0C] text-[25px] mb-4 leading-[2.5rem] md:text-[30px]">
                    Es complejo destacar si no tienes claro en qué perfiles de clientes enfocarte y qué características de tus productos les aportan mayor valor
                </h1>
                <p className="font-figtree font-light text-[#0C0C0C] text-[15px] mt-4 md:text-[22px]">
                Muchas empresas B2B no comunican bien qué venden, a quién le venden 
                y cómo genera valor a su público ideal.
            </p>
            </div>
            <div className="flex justify-center">
                <div className="w-2/4 border border-black">
                    <Tabs>
                        <TabList className="bg-black flex justify-center">
                            <Tab>Before Núcleo</Tab>
                            <Tab>After Núcleo</Tab>
                        </TabList>
                        <div className="bg-black flex justify-center">
                            <TabPanel>
                                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTFiNXpzZHRtYWxidjJicWk3dnpvdGxoM2tsZ3R6MWd1YTc0dXBkOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.webp" alt="Imagen 2" />
                            </TabPanel>
                            <TabPanel>
                                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDVobzYyM3I1NnZxZmt5dmdjM2hramI4enNsb3ppdGs0Y3pzNmtrYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IwTWTsUzmIicM/giphy.webp" alt="Imagen 1" />
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}