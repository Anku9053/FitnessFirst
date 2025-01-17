// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import "../CSS/Sidebar.css"
// const Sidebar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const initialCategory = searchParams.getAll("category");

//   const [category, selectCategory] = useState(initialCategory || []);

//   const initialOrder = searchParams.get("order");
//   const [order, setOrder] = useState(initialOrder || "");

//   const initialLimit = searchParams.get("limit");
//   const [limit, setLimit] = useState(initialLimit || 6);

//   const initialPage = searchParams.get("page");
//   const [page, setPage] = useState(initialPage || 1);

//   useEffect(() => {
//     let params = {
//       category,
//     };
//     order && (params.order = order);
//     page && (params.page = page);
//     limit && (params.limit = limit);
//     setSearchParams(params);
//   }, [category, order, page]);

//   const handleCategory = (e) => {
//     const { value } = e.target;
//     let newCategory = [...category];
//     if (newCategory.includes(value)) {
//       newCategory = newCategory.filter((el) => el !== value);
//     } else {
//       newCategory.push(value);
//     }
//     selectCategory(newCategory);
//   };

//   const handleOrder = (e) => {
//     const { value } = e.target;
//     setOrder(value);
//   };

//   const handleNext = () => {
//     setPage((p) => p + 1);
//   };
//   const handlePrev = () => {
//     setPage((p) => p - 1);
//   };

//   return (
//     <div style={{marginTop:"1rem"}} className="flex flex-col justify-start items-start pt-4 pl-2 bg-white h-full rounded-3xl">
//       <h3>Filter By Category</h3>
//       <div>
//         <input
//           value={"strength"}
//           onChange={handleCategory}
//           type="checkbox"
//           checked={category.includes("strength")}
//         ></input>
//         <label>Strength</label>
//       </div>
//       <div>
//         <input
//           value={"Stretch"}
//           onChange={handleCategory}
//           type="checkbox"
//           checked={category.includes("Stretch")}
//         ></input>
//         <label>Stretch</label>
//       </div>
//       <div>
//         <br />
//         <br />
//         <h3>Sort By Price</h3>
//       </div>
//       <div className="flex flex-col">
//         <div onChange={handleOrder}>
//           <input
//             name="sort"
//             type="radio"
//             id="asc"
//             value={"asc"}
//             defaultChecked={order === "asc"}
//           />
//           <label htmlFor="asc">Ascending</label>
//         </div>
//         <div onChange={handleOrder}>
//           <input
//             type="radio"
//             name="sort"
//             id="desc"
//             value={"desc"}
//             defaultChecked={order === "desc"}
//           />
//           <label htmlFor="desc">Descending</label>
//         </div>
//       </div>
//       <div className="flex">
//         <button disabled={page <= 1} onClick={handlePrev}>
//           Prev
//         </button>
//         <h3>{page}</h3>
//         <button disabled={page >= 4} onClick={handleNext}>
//           Next
//         </button>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default Sidebar;


import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../CSS/Sidebar.css";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const initialLimit = searchParams.get("limit");
  const [limit, setLimit] = useState(initialLimit || 6);

  const initialPage = searchParams.get("page");
  const [page, setPage] = useState(initialPage || 1);

  useEffect(() => {
    let params = {
      category,
      order,
      limit,
      page,
    };
    setSearchParams(params);
  }, [category, order, limit, page]);

  const handleCategory = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  const handleNext = () => {
    setPage((p) => p + 1);
  };

  const handlePrev = () => {
    setPage((p) => p - 1);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">
        <h3>Filter By Category</h3>
      </div>
      <div className="sidebar-category">
        {/* Checkbox inputs and labels for categories */}
        <div>
          <input
            value={"strength"}
            onChange={handleCategory}
            type="checkbox"
            checked={category.includes("strength")}
          />
          <label>Strength</label>
        </div>
        <div>
          <input
            value={"Stretch"}
            onChange={handleCategory}
            type="checkbox"
            checked={category.includes("Stretch")}
          />
          <label>Stretch</label>
        </div>
      </div>
      <div className="sidebar-heading">
        <h3>Sort By Price</h3>
      </div>
      <div className="sidebar-order">
        {/* Radio inputs and labels for sorting options */}
        <div onChange={handleOrder}>
          <input
            name="sort"
            type="radio"
            id="asc"
            value={"asc"}
            defaultChecked={order === "asc"}
          />
          <label htmlFor="asc">Ascending</label>
        </div>
        <div onChange={handleOrder}>
          <input
            type="radio"
            name="sort"
            id="desc"
            value={"desc"}
            defaultChecked={order === "desc"}
          />
          <label htmlFor="desc">Descending</label>
        </div>
      </div>
      <div className="sidebar-pagination">
        {/* Prev and Next buttons for pagination */}
        <button disabled={page <= 1} onClick={handlePrev}>
          Prev
        </button>
        <h3>{page}</h3>
        <button disabled={page >= 4} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
