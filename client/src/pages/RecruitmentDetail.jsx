import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import { useEffect } from "react";
import { getRecruitmentDetail } from "../store/actions";
import logo from "../download.png";

const RecruitmentDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailData = useSelector((state) => state.recruitmentDetail);

  useEffect(() => {
    dispatch(getRecruitmentDetail(id));
  }, []);

  const HTMLRenderer = ({ html }) => {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };
  return (
    <Container>
      <div className="py-2 px-2">
        <div onClick={() => history.goBack()}>
          <p className="text-blue-800 font-bold cursor">
            <img src={logo} alt="Download Icon" style={{ width: "40px" }} />
            Back
          </p>
        </div>
      </div>
      <div className="bg-white px-2 py-2 mb-4">
        <p className="text-slate-400">
          {detailData?.type} / {detailData?.location}
        </p>
        <p className="text-2xl font-bold">{detailData?.title}</p>
      </div>
      <div className="grid md:grid-cols-6">
        <div className="col-span-4 px-4 py-4">
          <HTMLRenderer html={detailData?.description} />
        </div>
        <div className="col-span-2 py-4 px-4">
          <div className="border-8 py-4 px-4">
            <div className="flex flex-row px-4 py-4">
              <p className="font-bold text-lg">{detailData?.company}</p>
            </div>
            <img src={detailData?.company_logo} />
            <a
              className="text-blue-900"
              href={detailData?.company_url}
              target="_blank"
            >
              {detailData?.company_url}
            </a>
          </div>
          <div className="border-8 mt-8 py-4 px-4">
            <div className="flex flex-row px-4 py-4">
              <p className="font-bold text-lg">How to apply</p>
            </div>
            <HTMLRenderer html={detailData.how_to_apply} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecruitmentDetail;
