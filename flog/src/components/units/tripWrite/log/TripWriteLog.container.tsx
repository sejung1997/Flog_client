import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TripWriteLogUI from "./TripWriteLog.presenter";
import {
  UPDATE_SHARE,
  FETCH_SCHEDULE,
  PAYMENT_POINT_TRANSACTION,
  FETCH_USER,
} from "./TripWriteLog.queries";

export default function TripWriteLog(props) {
  const router = useRouter();
  const [pointModal, setPointModal] = useState(false);
  const [point, setPoint] = useState(0);
  const [responsiveToggle, setResponsiveToggle] = useState(false);
  const [pointSelect, setPointSelect] = useState(true);
  const [sharing, setSharing] = useState(false);
  const [alertModal, setAlertModal] = useState(false);
  const [modalContents, setModalContents] = useState("");
  const [totalMoney, setTotalMoney] = useState(false);

  const onClickAlertModal = () => {
    setModalContents("flog 여행을 위한 후원 감사합니다!");
    setAlertModal(true);
  };

  const onClickExitAlertModal = () => {
    setAlertModal(false);
  };

  const onClickSubmitAlertModal = () => {
    setAlertModal(false);
  };

  // const onClickTotalMoneyModal = () => {
  //   setTotalMoney(true);
  //   console.log("모달입니다");
  // };

  const onClickExitTotalMoneyModal = () => {
    setTotalMoney(false);
  };

  const onClickSubmitTotalMoneyModal = () => {
    setTotalMoney(false);
  };


  const { data: userData } = useQuery(FETCH_SCHEDULE, {
    variables: { scheduleId: String(router.query.scheduleId) },
  });
  const { data: myData } = useQuery(FETCH_USER);

  const saveButtonRef = [1, 1, 1, 1].map((el) =>
    useRef<HTMLButtonElement>(null)
  );
  const [share] = useMutation(UPDATE_SHARE);
  const [paymentPointTransaction] = useMutation(PAYMENT_POINT_TRANSACTION);

  const [viewport, setViewport] = useState(0);
  useEffect(() => {
    const viewportWidth = window.visualViewport.width;
    setViewport(viewportWidth);
  }, []);

  useEffect(() => {
    console.log(userData);
    console.log(sharing);

    if (!userData) return;
    if (userData?.fetchSchedule?.isShare === "1") {
      setSharing(true);
    }
  }, [userData]);

  const [isShow, setIsShow] = useState([false, false, false, false]);

  const toggle = (index: any) => () => {
    const temp = new Array(4).fill(false);
    if (isShow[index]) return setIsShow(temp);
    else {
      temp[index] = true;
      setIsShow(temp);
    }
  };
  const shareBtn = async () => {
    console.log("as");
    try {
      const result = await share({
        variables: {
          scheduleId: String(router.query.scheduleId),
        },
      });
      setSharing((prev) => !prev);
      // console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  const donation = async () => {
    try {
      const result = await paymentPointTransaction({
        variables: {
          userId: userData?.fetchSchedule.user.id,
          point: Number(point),
        },
      });
      setPointModal(false);
      setTimeout(() => {
        onClickAlertModal();
      }, 500);
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangePoint = (event) => {
    setPoint(event.target.value);
    setPointSelect(false);
  };

  return (
    <TripWriteLogUI
      isMine={props.isMine}
      isShow={isShow}
      toggle={toggle}
      isEdit={props.isEdit}
      index={props.index}
      saveButtonRef={saveButtonRef}
      shareBtn={shareBtn}
      userData={userData}
      pointModal={pointModal}
      setPointModal={setPointModal}
      onChangePoint={onChangePoint}
      pointSelect={pointSelect}
      donation={donation}
      setResponsiveToggle={setResponsiveToggle}
      responsiveToggle={responsiveToggle}
      myData={myData}
      sharing={sharing}
      setSharing={setSharing}
      viewport={viewport}
      onClickExitAlertModal={onClickExitAlertModal}
      onClickSubmitAlertModal={onClickSubmitAlertModal}
      modalContents={modalContents}
      alertModal={alertModal}
      onClickExitTotalMoneyModal={onClickExitTotalMoneyModal}
      onClickSubmitTotalMoneyModal={onClickSubmitTotalMoneyModal}
      totalMoney={totalMoney}
      setTotalMoney={setTotalMoney}
    />
  );
}
