import OutlinedInput01 from "../../commons/inputs/outlined/01/OutlinedInput01.container";
import Alert from "../../commons/modals/alert/Alert.container";
import * as Login from "./Login.styles";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ILoginUIProps {
  register: any;
  handleSubmit: any;
  onclickSubmit: any;
  errorMsg: any;
  moveToPage: (id: string) => () => void;
  onModal: () => void;
  modalContents: string;
  onClick?: () => void;
}
export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      {props.modalContents && (
        <Alert
          onClick={props.onModal}
          onClickSubmit={props.onModal}
          contents={props.modalContents}
        />
      )}

      <Login.Container>
        <Login.Bg>
          <Login.LoginBox>
            <h3>Flog</h3>
            <Login.Form onSubmit={props.handleSubmit(props.onclickSubmit)}>
              <Login.FormLabel>이메일</Login.FormLabel>
              <OutlinedInput01
                type="text"
                register={props.register("email")}
                placeholder="이메일을 입력하세요"
                error={props.errorMsg.email !== ""}
              ></OutlinedInput01>
              <Login.ErrorMsg>{props.errorMsg.email}</Login.ErrorMsg>

              <Login.FormLabel>비밀번호</Login.FormLabel>
              <OutlinedInput01
                type="password"
                register={props.register("password")}
                placeholder="비밀번호를 입력하세요"
                error={props.errorMsg.password !== ""}
              ></OutlinedInput01>
              <Login.ErrorMsg>{props.errorMsg.password}</Login.ErrorMsg>
              <Login.checkBox>
                <input type="checkbox"></input>
                <div>로그인 유지하기</div>
              </Login.checkBox>
              <Login.SubmitBtn type="submit">로그인</Login.SubmitBtn>
              <Login.SubmitBtn
                className="google"
                type="button"
                onClick={props.moveToPage("https://flog.today/login/google")}
              >
                <img src="/img/login-google.png" /> Google로 시작하기
              </Login.SubmitBtn>
              <Login.NonSubmitBtn type="button" onClick={props.nonMember}>
                비회원으로 시작하기
              </Login.NonSubmitBtn>
            </Login.Form>
            <Login.SignUp>
              계정이 아직 없으신가요?
              <Login.MoveSignUp onClick={props.moveToPage("/signUp")}>
                회원가입하기
              </Login.MoveSignUp>
            </Login.SignUp>
          </Login.LoginBox>
        </Login.Bg>
      </Login.Container>
    </>
  );
}
