import { doc,setDoc } from "firebase/firestore";
import { db } from "./confiq";

export const ADDDocument=async(Student_name,class_std,predicted_grades,actual_Grades,study_hour,gender)=>{
    await setDoc(doc(db,"Student"),{
        Student_name:Student_name,
        class_std:class_std,
        predicted_grades:predicted_grades,
        actual_Grades:actual_Grades,
        study_hour:study_hour,
        gender:gender
    });

}
