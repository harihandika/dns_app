import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import RecruitmentCard from "../components/RecruitmentCard";
import { useDispatch, useSelector } from "react-redux";
import { getRecruitmentList } from "../store/actions";

const Recruitment = () => {
  const dispatch = useDispatch();
  const [description, setdescription] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);
  const [page, setPage] = useState(1);
  const listRecruitment = useSelector((state) => state.recruitments);

  useEffect(() => {
    dispatch(
      getRecruitmentList({
        description: description,
        location: location,
        fulltime: fulltime,
        page: page,
      })
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getRecruitmentList({
        description: description,
        location: location,
        fulltime: fulltime,
        page: page,
      })
    );
  };

  const handleFulltime = () => {
    setFulltime(!fulltime);
  };

  const handleAddPage = () => {
    dispatch(
      getRecruitmentList(
        {
          description: description,
          location: location,
          fulltime: fulltime,
          page: page + 1,
        },
        true
      )
    );
    setPage(page + 1);
  };

  const renderTopBar = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-span-2 py-2 px-2">
            <p1 className="font-bold">Job Description</p1>
            <input
              id="description"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Filter by title, benefits, companies, expertise"
            />
          </div>
          <div className="col-span-2 py-2 px-2">
            <p1 className="font-bold">Location</p1>
            <input
              id="description"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-200"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Filter by city, state, zip code, or country"
            />
          </div>
          <div className="col-span-2 py-2 px-2 flex flex-col-reverse">
            <div className="flex py-2 ">
              <div className="flex">
                <input
                  type="checkbox"
                  checked={fulltime}
                  onChange={handleFulltime}
                  className="mr-2 mb-1"
                />
                <p className="font-bold">Full Time Only</p>
              </div>
              <button
                type="submit"
                className="px-4 py-1 ml-4 text-white bg-slate-400 rounded-md hover:bg-slate-500 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const renderRecruitmentContent = () => {
    return (
      <div className="bg-white px-2 py-2">
        <p className="font-bold text-3xl">Job List</p>
        {listRecruitment.map((data, index) => {
          return <RecruitmentCard key={index} data={data} />;
        })}
      </div>
    );
  };

  return (
    <Container>
      {renderTopBar()}
      {renderRecruitmentContent()}
      <div className="px-2 mb-8">
        <button
          onClick={() => handleAddPage()}
          className="w-full bg-blue-500 text-white h-12"
        >
          More Jobs
        </button>
      </div>
    </Container>
  );
};

export default Recruitment;
