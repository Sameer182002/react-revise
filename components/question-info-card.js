import DeleteIcon from "@mui/icons-material/Delete";
import { Fragment } from "react";
import { questionAndAnsListAtom } from "../Recoil_States/addQuestion-atom";
import styles from './q-and-a-info.module.css'
import { useRecoilState, useRecoilValue } from "recoil";



export default function QuestionInfoCard ({questionDetail,index}){
const [questionArr,setQuestionArr] =useRecoilState(questionAndAnsListAtom)
// const questionsAndAnswerList = useRecoilValue(questionAndAnsListAtom);
const questionsAndAnswerList = useRecoilValue(questionAndAnsListAtom)
 const deleteEntryFromrecoil = (id) => {
  const filterItems= questionArr.filter(e=>(e.id!=id))
    console.log(id)
    setQuestionArr(filterItems)
  };    
    return(
        <Fragment>
        <div className={styles.quesInfoCard}>
        <ul>
            <li><p>Ques {index+1}:{questionDetail.question}</p>
            <p>Ans:{questionDetail.answer}</p></li>
            </ul>
            <div
             className={styles.deleteIcon}
              item
              xs={10}
            >
              <DeleteIcon fontSize="large"  onClick={()=>{deleteEntryFromrecoil(questionDetail.id)}}/>
            </div>
        </div>
            <hr/>
            </Fragment>
    )
}