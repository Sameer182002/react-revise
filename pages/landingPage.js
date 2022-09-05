import React from "react";
import styles from "../styles/Home.module.css";
import Buttons from "../components/button/Button";
import Link from "next/link";
import AddQuestion from "./AddQuestion";
import {useRecoilValue} from 'recoil'
import { questionAndAnsListAtom } from "../Recoil_States/addQuestion-atom";
export default function LandingPage() {
  const questionList = useRecoilValue(questionAndAnsListAtom)
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.container}>
          <div className={styles.animateCharcter}>ADD Question Assignment!!</div>
        </div>

        <div className={styles.component}>
          <AddQuestion />
          <h2 id={styles.heading}> {`No Of Questions Are ${questionList.length}` } </h2>
          <Link href="/viewQuestions">
              <Buttons buttonText="View All Questions" color="navy"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
