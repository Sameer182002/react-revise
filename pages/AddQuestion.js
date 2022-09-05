import React, {useState} from "react";
import Buttons from '../components/button/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRecoilState} from "recoil"
import { questionAndAnsListAtom } from "../Recoil_States/addQuestion-atom";

export default function AddQuestion() {
  const [open, setOpen] = useState(false);
  const [questionDetails ,setQuestionDetails] = useState({})
  const [questionArr,setQuestionArr] = useRecoilState(questionAndAnsListAtom) //useRecoilValue, useSetRecoilState
  console.log(questionDetails);
  const handleOnChange = (key,value) => {
    console.log(key,value)
    if(key==='question'){
      setQuestionDetails({...questionDetails,question:value,id:Math.floor(Math.random() * 10000)})
      return;
    }
    setQuestionDetails({...questionDetails,answer:value})
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const AdddataToRecoil=()=>{
    if(questionDetails['question']===undefined || questionDetails['question'].trim().length==0||questionDetails['question']==='undefined' ) {
      return alert('Add Some Text In Ques Then Click On Submit')}
      if(questionDetails['answer']===undefined || questionDetails['answer'].trim().length==0||questionDetails['answer']==='undefined' ) {
        return alert('Add Some Text In Answer Then Click On Submit')}
    setQuestionArr([...questionArr,questionDetails])
    setOpen(!open)
    setQuestionDetails({})
  }
  console.log(questionArr);

  return (
    <div>
      <Buttons onClick={handleClickOpen} buttonText='Add Question' color='navy'/>
      <Dialog open={open} onClose={handleClose} maxWidth='xl'>
        <DialogTitle>Questions</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add Question Wisely
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
            value={questionDetails.question}
            onChange={(e)=>handleOnChange("question",e.target.value)}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Answer"
            type="text"
            fullWidth
            variant="standard"
            value={questionDetails.answer}
            onChange={(e)=>handleOnChange("answer",e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Buttons onClick={AdddataToRecoil} buttonText='Submit' color='navy'/>
          <Buttons onClick={handleClose} buttonText='Cancel' color='navy'/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
