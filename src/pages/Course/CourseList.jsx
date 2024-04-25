import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux'

import CourseCard from '../../components/CourseCard';
import HomeLayout from "../../layouts/HomeLayout";
import { getAllCourses } from '../../redux/slices/courseSlice';

const CourseList=()=>{
    const dispatch=useDispatch();
    const loadCourses=()=>{
        dispatch(getAllCourses())
    }
    const {courseList}=useSelector((state)=>state.course)
    useEffect(()=>{loadCourses()},[])
    return(
        <HomeLayout>
            <div className="min-h-[90vh] flex flex-col  gap-10 text-white pt-15 pb-14 md:pl-20 items-center md:items-start">
                <h1 className="font-semibold mb-4 text-center md:text-4xl w-4/5 md:w-full text-2xl p">Explore Courses made by <span className="text-yellow-500">Industry exports</span></h1>
                <div className='mb-10 flex w-4/5 md:w-full flex-wrap gap-14'>
                {courseList?.map((element)=>{
                    return <CourseCard key={element.id} data={element}/>
                })}
            </div>
            </div>
            
          
            
        </HomeLayout>
    )
}
export default CourseList;