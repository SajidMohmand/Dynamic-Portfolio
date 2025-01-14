import React, { useEffect } from 'react'
import Header from "../../components/Header"
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProject';
import AdminCourse from './AdminCourse';
import AdminContact from './AdminContact';
const { TabPane } = Tabs;

const index = () => {
  const { portfolioData } = useSelector((state) => state.root)


  const items = [
    {
      key: '1',
      label: 'Intro',
      children: <AdminIntro />
    },
    {
      key: '2',
      label: 'About',
      children: <AdminAbout />,
    },
    {
      key: '3',
      label: 'Experiences',
      children: <AdminExperiences />,
    },
    {
      key: '4',
      label: 'Projects',
      children: <AdminProjects />,
    },
    {
      key: '5',
      label: 'Courses',
      children: <AdminCourse />,
    },
    {
      key: '6',
      label: 'Contact',
      children: <AdminContact />,
    },

  ];


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login"
    }
  }, [])
  return (

    <div>
      <Header />
      <div className='flex gap-10 items-center px-5 py-2 justify-between'>
        <div className='flex gap-10 items-center'>
          <h1 className='text-primary text-3xl'>Portfolio Admin</h1>
          <div className='w-60 h-[1px] bg-gray-500'></div>
        </div>
        <h1 className='underline text-primary text-xl cursor-pointer' onClick={()=>{localStorage.removeItem("token");
          window.location.href = "/admin-login"
        }}>Logout</h1>
      </div>
      {
        portfolioData && <div className='px-5 pb-10'>
          <Tabs defaultActiveKey="1" items={items} />;
        </div>
      }

    </div>
  )
}

export default index
