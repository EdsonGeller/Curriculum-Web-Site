import { css } from "styled-components";


  export const breakpoints = [
    { name: 'sm', media: 576 },
    { name: 'md', media: 768 },
    { name: 'lg', media: 992 },
    { name: 'xl', media: 1200 },
  ];
  
  export const responsiveProp = (
    prop: { [key: string]: number },
    callback: (breakpoint: { name: string; media: number }) => string
  ) => {
    if (prop) {
      return breakpoints
        .map((breakpoint) => {
          if (prop[breakpoint.name]) {
            return css`
              @media (max-width: ${breakpoint.media}px) {
                ${callback(breakpoint)}
              }
            `;
          }
          return null;
        })
        .filter(Boolean)
        .join('');
    }
    return '';
  };