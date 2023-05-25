import React from 'react'
import './GuideStyile.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import BikeImg from '../../assets/Bike.png'



export default function Guides() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const HeadingContent = ({title, content}) => {
    return (
      <>
            <div className="__contentsubheading">
            <h4>
              {title}
            </h4>
          </div>

          <div className="__content">
           <p>
              {/* if content has \n then add new line */}
              {content.split('/n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}


           </p>
          </div>
      </>
    )}
  return (
      <>
        <div className="punchline">
          At QuickHub Solutions, we are a team of highly skilled and experienced professionals who are passionate about delivering the best results for our clients.
        </div>
        <div className="topbar">
          Transform teamwork with Confluence. See why Confluence is the content collaboration hub for all teams
        </div>
      <div className="guides">
        <div className="guides__sidebar">
          <Sidebar>
            <Menu iconShape="square"
            menuItemStyles={
              {
                button: (base) => ({
                  ...base,
                  color: 'black',
                  backgroundColor: ' #f5f5f5',
                  '&:hover': {
                    color: 'white', 
                    backgroundColor: ' #5A5A5A',
                  },
                  '&:focus': {
                    color: 'white',
                    backgroundColor: ' #5A5A5A',
                  },
                  
                }),

              }
            }
            >
              <MenuItem>Browse Topics</MenuItem>
                <SubMenu label="Heading 1">

                  <MenuItem
                    component={<Link to="/guides/#Heading1.1" />}>
                    Heading 1.1
                  </MenuItem>

                  <MenuItem
                    component={<Link to="/guides/#Heading1.2" />}>
                  Heading 1.2
                  </MenuItem>
                  
                  <SubMenu label="Heading 1.3">
                    <MenuItem
                    component={<Link to="/guides/#Heading1.3.1" />}>        
                      SubHeading 1.3.1
                    </MenuItem>
                    <MenuItem
                    component={<Link to="/guides/#Heading1.3.2" />}>
                      SubHeading 1.3.2
                    </MenuItem>
                    <MenuItem
                    component={<Link to="/guides/#Heading1.3.3" />}>
                      SubHeading 1.3.3
                    </MenuItem>
                  </SubMenu>
              
                </SubMenu>
              
                <SubMenu label="Heading 2">

                  <MenuItem>Heading 2.1</MenuItem>
                  <MenuItem>Heading 2.2</MenuItem>

                </SubMenu>

                <SubMenu label="Heading 3">

                  <MenuItem>Heading 3.1</MenuItem>
                  <MenuItem>Heading 3.2</MenuItem>
                  <MenuItem>Heading 3.3</MenuItem>

                </SubMenu>


            </Menu>
          </Sidebar>
        </div>
        <div className="guides__content">
          <h1>Guides</h1>

        <div className="guide1data">

          <div className="imageContainer">
            <img src={BikeImg} alt="bike" />
          </div>

          <div className="guide1data">
            <p className="__content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum ac ex malesuada faucibus. Suspendisse non nibh vel tortor ullamcorper accumsan. Proin et convallis lectus, vitae sodales elit. Donec nec rhoncus turpis. Fusce bibendum fringilla ipsum ut aliquam. 
              Maecenas venenatis, elit et sagittis tristique, nisi tellus ultrices nulla, eu iaculis est justo a nulla
              <br/><br/>
              Phasellus tempor mi id quam fermentum, eu consequat lorem varius. Nulla porttitor metus vel mi lobortis malesuada. Phasellus venenatis, leo vel ullamcorper convallis, turpis massa aliquet tortor, et feugiat lectus felis id orci. Donec efficitur justo ac mi venenatis, id tincidunt est luctus.
              <br/>
              <br/>
              Aliquam erat volutpat. N
            </p>
          </div>
            <HeadingContent 
            title="What you will learn"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum ac ex malesuada faucibus. Suspendisse non nibh vel tortor ullamcorper accumsan. Proin et convallis lectus, vitae sodales elit. Donec nec rhoncus turpis. Fusce bibendum fringilla ipsum ut aliquam.
            Maecenas venenatis, elit et sagittis tristique, nisi tellus ultrices nulla, eu iaculis est justo a nulla"
            />
            <HeadingContent
            title="What you will need"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum ac ex malesuada faucibus. Suspendisse non nibh vel tortor ullamcorper accumsan. Proin et convallis lectus, vitae sodales elit. Donec nec rhoncus turpis. Fusce bibendum fringilla ipsum ut aliquam.
            Maecenas venenatis, elit et sagittis tristique, nisi tellus ultrices nulla, eu iaculis est justo a nulla
            /n/n
            Phasellus tempor mi id quam fermentum, eu consequat lorem varius. Nulla porttitor metus vel mi lobortis malesuada. Phasellus venenatis, leo vel ullamcorper convallis, turpis massa aliquet tortor, et feugiat lectus felis id orci. Donec efficitur justo ac mi venenatis, id tincidunt est luctus.
            /n/n
            Aliquam erat volutpat. N"
            />

            <HeadingContent
            title="How to get started"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum ac ex malesuada faucibus. Suspendisse non nibh vel tortor ullamcorper accumsan. Proin et convallis lectus, vitae sodales elit. Donec nec rhoncus turpis. Fusce bibendum fringilla ipsum ut aliquam.
            Maecenas venenatis, elit et sagittis tristique, nisi tellus ultrices nulla, eu iaculis est justo a nulla
            /n/n
            Phasellus tempor mi id quam fermentum, eu consequat lorem varius. Nulla porttitor metus vel mi lobortis malesuada. Phasellus venenatis, leo vel ullamcorper convallis, turpis massa aliquet tortor, et feugiat lectus felis id orci. Donec efficitur justo ac mi venenatis, id tincidunt est luctus.
            "
            />

    

        </div>


            
      </div>
        </div>


    </>
  )
}
