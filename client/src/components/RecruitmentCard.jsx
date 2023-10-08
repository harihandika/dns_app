import React from "react";
import { useHistory } from "react-router-dom";

const RecruitmentCard = (props) => {
  const { data } = props;
  const history = useHistory();

  const handleClickDetail = () => {
    history.push(`/recruitment/${data.id}`);
  };

  return (
    <div onClick={() => handleClickDetail()} className="container mx-auto mt-2">
      <div className="bg-slate-300 h-1" />
      <div className="flex justify-between p-2">
        <p1 className="font-semibold text-blue-600">{data?.title}</p1>
        <p1 className="">{data?.location}</p1>
      </div>
      <div className="flex justify-between p-2">
        <p1 className="text-slate-500">
          {data?.company} -{" "}
          <span className="text-red-600 font-bold">{data?.type}</span>
        </p1>
        <p1 className="text-slate-500">{data?.created_at}</p1>
      </div>
    </div>
  );
};

export default RecruitmentCard;
