import styled from "styled-components";
import { useEffect, useState } from "react";

const generalTechs = import.meta.glob(
  "../../../../assets/images/techs/*.(png|jpe?g|svg)",
  { as: "url" }
);
const dailyTech = import.meta.glob(
  "../../../../assets/images/techDay/*.(png|jpe?g|svg)",
  { as: "url" }
);

const Carrossel = ({usage}:{usage: 'daily' | 'study'} ) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const images = {
    daily: {
      images: dailyTech
    },
    study: {
      images: generalTechs
    }
  }
  const imagesUsage = images[usage]
  useEffect(() => {
    const loadImages = async () => {
      
      const imageEntries = Object.entries(imagesUsage.images);

      const urls = await Promise.all(
        imageEntries.map(async ([path, resolver]) => {
          const url = await resolver();
          return { url, path };
        })
      );

      const orderedUrls = urls
        .sort((a, b) => {
          const aPriority = parseInt(a.path.match(/(\d+)/)?.[0] || "0");
          const bPriority = parseInt(b.path.match(/(\d+)/)?.[0] || "0");
          return aPriority - bPriority;
        })
        .map((entry) => entry.url);

      setImageUrls(orderedUrls);
    };

    loadImages();
  }, []);

  return (
    <Container>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Tech ${index + 1}`} width="60px" height="60px" />
        </div>
      ))}
    </Container>
  );
};

export default Carrossel;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
