import React from 'react'
import TopComponent from '../../components/GuidesComponent/TopComponent'
import FirstComponent from '../../components/GuidesComponent/FirstComponent'
import FirstStepComponent from '../../components/GuidesComponent/FirstStepComponent'
import './GuideStyile.css'



export default function Guides() {
  return (
      <>
      <TopComponent />
    <div className="container">
        <FirstComponent />  
    </div>
      <FirstStepComponent />
      <FirstStepComponent />
      <FirstStepComponent />
    </>
  )
}
