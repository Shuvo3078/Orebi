import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from './layer/ProductItem';
import image1 from '../assets/BestSeller03.jpg'
import image2 from '../assets/BestSeller01.jpg'
import image3 from '../assets/BestSeller02.jpg'
import image4 from '../assets/BestSeller04.jpg'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <ProductItem src={image1}/> 
            {/* <ProductItem src={image2}/> 
            <ProductItem src={image3}/> 
            <ProductItem src={image4}/>  */}
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (

    

    <>
      <div className='flex flex-wrap gap-x-10 gap-y-[50px]'>
      <Items currentItems={currentItems} />
      </div>
      <div className='flex justify-between items-center mt-[50px]'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        nextClassName="page-item hidden"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        previousClassName="page-item hidden"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex gap-x-4 "
        pageClassName="page-item  w-9 h-9 border border-[#F0F0F0] text-[#767676]"
        pageLinkClassName="page-link w-full h-full flex justify-center items-center  text-sm"
        activeClassName="active bg-black text-[#FFFFFF]"
      />
      <p className='text-[#767676] font-DM text-sm' >Products from {itemOffset+1} to  {endOffset >items.length ? items.length : endOffset} of {items.length}</p>
      </div>
    </>
  );
}

export default Pagination;
