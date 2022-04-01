import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { insertCommaPrice } from "../../../../commons/utils/insertComma";
import DetailBudgetForm from "../../../commons/modals/formBudget/DetailBudgetForm.container";
import TripWriteBanner from "../banner/TripWriteBanner.container";
import TripWriteBottomBar from "../bottomBar/TripWriteBottomBar.container";
import TripWriteNavigation from "../navigation/TripWriteNavigation.container";
import TripWriteMoneyAdd from "./add/TripWriteMoneyAdd.container";
import TripWriteMoneyCard from "./card/TripWriteMoneyCard.container";
import * as Write from "./TripWriteMoney.styles";

export default function TripWriteMoneyUI(props) {
  return (
    <Write.Container>
      <TripWriteBanner />
      <TripWriteNavigation />
      <Write.Contents>
        <Write.InnerWrap>
          <Write.BudgetBox>
            <Write.ProgressBar progress={(720000 / 900000) * 100}>
              <div className="progress"></div>
            </Write.ProgressBar>
            <Write.BudgetText>
              <Write.AllAmount>
                <span className="text1">
                  예산
                  {props.viewport <= 767 && (
                    <Write.EditButton>
                      <img src="/img/icon-mytrip-write-money-editMobile.svg" />
                    </Write.EditButton>
                  )}
                </span>
                <span className="text2">
                  900,000원
                  {props.viewport > 767 && (
                    <Write.EditButton>
                      <img src="/img/icon-mytrip-write-money-edit.svg" />
                    </Write.EditButton>
                  )}
                </span>
              </Write.AllAmount>
              <Write.Amount>
                <span className="text1">총 지출</span>
                <span className="text2">720,000원</span>
              </Write.Amount>
            </Write.BudgetText>
          </Write.BudgetBox>
          <Write.MoneyBookBox>
            {props.isLoading && (
              <DragDropContext onDragEnd={props.onDragEndReorder}>
                {props.moneyList.map((el, index) => (
                  <Droppable key={el.date} droppableId={String(index)}>
                    {(provided, snapshot) => (
                      <Write.MoneyBookColumn
                        className={`title day${index + 1}`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <Write.MoneyBookTitle>
                          <span className="title">
                            {el.date === "ready"
                              ? "여행 준비"
                              : el.date.slice(-5).replace("-", ".")}
                          </span>
                          <span className="amount">
                            {`${insertCommaPrice(
                              String(props.dailyAmount[index])
                            )}`}
                            원
                          </span>
                        </Write.MoneyBookTitle>
                        <Write.MoneyBookCards>
                          <TripWriteMoneyCard el={el} />
                        </Write.MoneyBookCards>
                        <TripWriteMoneyAdd
                          date={el.date}
                          onClick={props.onClickDetailBudgetFormModal(el.date)}
                        />
                        {provided.placeholder}
                      </Write.MoneyBookColumn>
                    )}
                  </Droppable>
                ))}
              </DragDropContext>
            )}
          </Write.MoneyBookBox>
        </Write.InnerWrap>
      </Write.Contents>
      <TripWriteBottomBar />
      {props.detailBudgetFormModal && (
        <DetailBudgetForm
          onClickExit={props.onClickExitDetailBudgetFormModal}
          onClickSubmit={props.onClickSubmitDetailBudgetFormModal}
          onClickCategory={props.onClickCategory}
          TRIP_CATEGORY={props.TRIP_CATEGORY}
          isSelect={props.isSelect}
        />
      )}
    </Write.Container>
  );
}
