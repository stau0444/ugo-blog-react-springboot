import Pagination from "react-js-pagination";

const Pagenator = ({totalCount,handlePageChange,page}) => {
  
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={6}
      totalItemsCount={totalCount}
      pageRangeDisplayed={5}
      prevPageText={"prev"}
      nextPageText={"next"}
      onChange={handlePageChange}
    />
  );
};
export default Pagenator;
