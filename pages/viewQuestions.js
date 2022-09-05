import Link from "next/link";
import BasicButtons from "../components/button/Button";
import { questionAndAnsListAtom } from "../Recoil_States/addQuestion-atom";
import styles from "../styles/question-and-answer.module.css";
import QuestionInfoCard from "../components/question-info-card";
import { useRecoilValue } from "recoil";




export default function ViewQuestionsAndAnswers() {

  const questionsAndAnswerList = useRecoilValue(questionAndAnsListAtom);

  return (
    <div className={styles.quesAndAns}>
      <h1 className={styles.h1}>THE QUESTIONS LIST</h1>
      <hr/>

      {questionsAndAnswerList.map((questionDetail,index)=>
      <QuestionInfoCard 
        questionDetail = {questionDetail} index={index}
      />
      )}
      {/* </div> */}
      <div className={styles.backtoHomepage}>
        <Link href="./landingPage">
          <BasicButtons buttonText="Back to HomePage" color="red" />
        </Link>
      </div>
    </div>
  );
}
