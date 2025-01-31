import styled from "styled-components";
import * as S from "../../../../styles/titles";
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
  }, [imagesUsage.images]);

  return (
    <CarrosselContainer>
      {imageUrls.map((url, index) => (
        <ImageWrapper key={index}>
          <S.Images src={url} alt={`Tech ${index + 1}`} width="60px" height="60px" />
        </ImageWrapper>
      ))}
    </CarrosselContainer>
  );
};

export default Carrossel;

const CarrosselContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: center; 
  gap: 16px; 
  padding: 16px; 

  @media (max-width: 768px) {
    gap: 12px; 
    padding: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px; 
    padding: 8px;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto; 
`;