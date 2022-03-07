import * as React from "react";
import RadarChart from "../Components/Molecules/RadarChart";
import RoomChat from "../Components/Organisms/RoomChat";
import UserCard from "../Components/Organisms/UserCard";
import Button from "../element/Button";
import Pagination from "react-js-pagination";
import styled from "styled-components";

export default function ProjectRoom() {
  const [isLeader, setIsLeader] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  React.useEffect(() => {
    if (isLeader === localStorage.getItem("userId")) {
      setIsLeader(true);
    }
  }, [isLeader]);

  return (
    <>
      <div>
        <div>방제목 :</div>

        <Button>프로젝트 상세 내용</Button>

        {isLeader && <Button>프로젝트 시작!</Button>}

        <div style={{ width: "300px" }} display="flex">
          <RadarChart></RadarChart>
        </div>

        <div>
          <UserCard />
        </div>

        <div>
          <UserCard />
        </div>

        <div>
          <RoomChat></RoomChat>
        </div>
        <PaginationHorizontal>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={50}
            pageRangeDisplayed={5}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          ></Pagination>
        </PaginationHorizontal>
      </div>
    </>
  );

}

const PaginationHorizontal = styled.div`& ul li {list-style-type: none; float: left; margin-right:4px;}`
