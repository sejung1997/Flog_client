import * as List from "./MyTripList.styles";
import { v4 as uuid4 } from "uuid";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function TripListUIItem(props) {
  const fileRef = useRef(null);
  const router = useRouter();
  const onClickUploadBanner = () => {
    fileRef.current?.click();
  };

  return (
    <List.CardWrapper key={uuid4()}>
      <List.Wrapper>
        {props.el.isShare === "1" ? (
          <List.Mark>
            <img src="/img/icon-body-marker.svg" alt="공유한 여행" />
          </List.Mark>
        ) : (
          ""
        )}
        <List.EditWrap>
          <img
            src="/img/icon-body-edit.svg"
            alt="여행이미지 수정"
            onClick={onClickUploadBanner}
            id={props.el.id}
          ></img>
          <input
            type="file"
            onChange={props.onChangeFile}
            ref={fileRef}
            style={{ display: "none" }}
            id={props.el.id}
          />
        </List.EditWrap>
        <List.Image>
          <img
            onClick={() => {
              router.push(`/myTrips/${props.el.id}`);
            }}
            src={
              props.el.url
                ? `https://storage.cloud.google.com/${props.el.url}`
                : `/img/tripList-default.jpg`
            }
            alt="여행이미지"
          />
        </List.Image>
        <List.Text>
          <List.Title>{props.el.title}</List.Title>
          <List.Subtitle>
            <ul>
              <li className="date">
                {props.el.startDate.slice(2, 10)} ~{" "}
                {props.el.endDate.slice(2, 10)}
              </li>
              <li className="location">
                {props.el.location.split(".").join(" ")}
              </li>
            </ul>
          </List.Subtitle>
        </List.Text>
      </List.Wrapper>
    </List.CardWrapper>
  );
}
