import React, {useState} from 'react';
import styled from "styled-components";
import {menuItems} from "../../util/menuItems.jsx";

function Navigation({active,setActive}) {


    return (
        <NavStyled>
            <div className="user-con">
                <img src="" alt=""/>
                <div className="text">
                    <h2>Hello</h2>
                    <p>User</p>
                </div>
            </div>
            <ul className="menu-item">
                {menuItems.map((item, index) => {
                    const {title, icon, link} = item;
                    return <li key={index} onClick={() => {setActive(index)}} className={active === index ? '' : 'active'}>
                        {icon}
                        <span>{title}</span>
                    </li>
                })}
            </ul>
        </NavStyled>
    );
}
const NavStyled = styled.div`
        padding: 2rem 1.5rem;
        height: 100%;
        width: 374px;
        background: rgba(252, 252, 252, 0.8);
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
        .user-con{
            gap: 1.5rem;
        }
        
        .menu-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            li{
                display: grid;
                grid-template-columns: 40px auto;
                margin: 0.6rem ;
                font-weight: 500;
                cursor: pointer;
                background: #222260;
                transition: all .4s ease-in-out;
            }
        }
        .active{
            
            i{
                color: transparent;
            }
            &::before{
                position: absolute;
                content: "";
                left: 0;
                top: 0;
                width: 1px;
                height: 100%;
                border-radius: 0 10px 10px;
            }
        }
    `

export default Navigation;