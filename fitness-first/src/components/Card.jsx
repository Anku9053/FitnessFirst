// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Card = ({ image, exercise, category, instructions, price, id }) => {
//   return (
//     <div className="relative flex mt-[5%]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
//       <div class="relative mx-4  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border ">
//         <img src={image} alt="img-blur-shadow" layout="fill" />
//       </div>
//       <div class="p-6">
//         {" "}
//         <h1 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{textTransform:"uppercase",color:"black"}}>
//           {exercise}
//         </h1>
//         <h3 className="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{textTransform:"uppercase",color:"black"}}>
//           Categoy: {category}{" "}
//         </h3>
//         <h3 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" style={{textTransform:"uppercase",color:"black"}}>
//           {" "}
//           Price: {price}
//         </h3>
//       </div>
//       <div class="p-6 m-auto pt-0">
//         {" "}
//         <Link to={`/productS/${id}`}>
//           <button
//             class=" flex select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//             type="button"
//             data-ripple-light="true"
//           >
//             Full Details
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="2"
//               stroke="currentColor"
//               aria-hidden="true"
//               class="h-4 w-4"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               ></path>
//             </svg>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 0 1rem;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  background-color: #1a202c;
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  margin-bottom: 0.5rem;
`;

const CardCategory = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  margin-bottom: 0.5rem;
`;

const CardPrice = styled.h3`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
  margin-bottom: 0.5rem;
`;

const FullDetailsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f97316;
  color: white;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: none;

  svg {
    margin-left: 0.25rem;
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    background-color: #ff681b;
  }

  &:focus {
    opacity: 0.85;
    box-shadow: none;
  }

  &:active {
    opacity: 0.85;
    box-shadow: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

const Card = ({ image, exercise, category, price, id }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={image} alt="img-blur-shadow" />
      </ImageContainer>
      <CardContent>
        <CardTitle>{exercise}</CardTitle>
        <CardCategory>Category: {category}</CardCategory>
        <CardPrice>Price: {price}</CardPrice>
      </CardContent>
      <div style={{ margin: "auto", paddingTop: "0.5rem" }}>
        <Link to={`/productS/${id}`}>
          <FullDetailsButton type="button" data-ripple-light="true">
            Full Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </FullDetailsButton>
        </Link>
      </div>
    </CardContainer>
  );
};

export default Card;
