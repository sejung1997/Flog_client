import { useState } from "react";
import * as Drop from "./Dropdown03.styles";
export default function Dropdown03(props) {
  const [isPeopleActive, setIsPeopleActive] = useState(false);
  const LIST = [
    ["1명", "ONE"],
    ["2명", "TWO"],
    ["3명", "THREE"],
    ["4명", "FOUR"],
    ["단체 여행", "GROUP"],
  ];

  const onClickSelectBtn = () => {
    setIsPeopleActive((prev) => !prev);
  };

  const onClickOption = (el) => () => {
    setIsPeopleActive((prev) => !prev);
    onClickSelectBtn();
    props.setInputs({ ...props.inputs, people: el });
  };

  return (
    <>
      <Drop.SelectButton onClick={onClickSelectBtn}>
        <Drop.Selected>
          {props.inputs.people || "인원을 선택해주세요"}
        </Drop.Selected>
        <Drop.SelectIcon>
          <img src="/img/icon-modal-dropdown.svg" />
        </Drop.SelectIcon>
        {isPeopleActive && (
          <Drop.Option>
            <ul>
              {LIST.map((el, index) => (
                <li key={index}>
                  <span onClick={onClickOption(el[1])}>{el[0]}</span>
                </li>
              ))}
            </ul>
          </Drop.Option>
        )}
      </Drop.SelectButton>
    </>
  );
}
