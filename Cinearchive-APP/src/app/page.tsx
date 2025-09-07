'use client'
import Image from "next/image";
import { mock } from './../services/mock';
import { useEffect, useState } from "react";
import { resquestMovies } from "@/services/api";
import { Show } from "@/types/move";

export default function Home() {
  const [data, setData] = useState<Show[]>([]);
  async function getData() {
    const response = await resquestMovies()
    setData(response);
  }
  useEffect(
    () => {
      getData();
    }, []
  )


  return (
    <div>
      {data.map(
        (item, index) => {
          return (
            <div key={index} className="flex items-center justify-between max-w-72 mb-4">
              <div className="flex flex-col gap-1">
                <strong>{item.title}</strong>
                <p>{item.releaseYear}</p>
                <p>gender: {item.genres[0]?.name}</p>
                <p>IMDb rating: {item.rating} ⭐</p>
              </div>
              <img src={item?.imageSet?.verticalPoster?.w240} alt='' width='120'/>
            </div>
          )
        }
      )}
    </div>
  );
}
