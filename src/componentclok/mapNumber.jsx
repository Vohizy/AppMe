import React, { useRef, useState } from "react";
import { useEffect } from "react";
export const Number=()=>{
    const obj=[
        {1:"one"},
        {2:"two"},
        {3:"three"},
        {4:"four"},
        {5:"five"},
        {6:"six"},
        {7:"seven"},
        {8:"eight"},
        {9:"nine"},
        {10:"ten"},
        {11:"eleven"},
        {12:"twelve "}
    ]
let second_doc = useRef();
let minute_doc = useRef();
let hour_doc = useRef();

/* UseState */
 const[second,setSecond]=useState()
 const[minute,setMinute]=useState()
 const[hour,setHour]=useState()

 /* useState display and transform */
 const[displayMinu,setDisplayMinu]=useState()
 const[displaySecond,setDisplaySecond]=useState()
 const[displayHour,setDisplayHour]=useState()
 const[transformMinu,setTransformMinu]=useState()
 const[transformSecond,setTransformSecond]=useState()
 const[transformHour,setTransformHour]=useState()
useEffect(()=>{
    window.setInterval(()=> {
        setSecond(e=>e=new Date().getSeconds());
        setMinute(e=>e=new Date().getMinutes()); 
        setHour(e=>e=new Date().getHours());
        if(hour > 12){
            return setHour(e=>e-12);
        }
        setTransformMinu(e=>e=`rotate(${(minute * 6) + (second / 10)}deg)`);
        setDisplayMinu(e=>e='block');
        setTransformSecond(e=>e=`rotate(${(second * 6) }deg)`);
        setDisplaySecond(e=>e='block');
        setTransformHour(e=>e=`rotate(${((hour * 30) + (minute / 2) + (second /120))}deg)`);
        setDisplayHour(e=>e='block');
        console.log(hour,minute,second);

    }, 10)
})

    
    return<>
    <div className="clock">
        <div className="clock-cadre">
            <div className="clock-body">
                <div className="clock-center"></div>
                <div className="clock-second" id="second" ref={second_doc} style={{transform:{transformSecond},display:{displaySecond}}}></div>
                <div className="clock-minute" id="minute" ref={minute_doc} style={{transform:{transformMinu},display:{displayMinu}}}></div>
                <div className="clock-hour" id="hour" ref={hour_doc} style={{transform:{transformHour},display:{displayHour}}}></div>
                {
                    obj.map((key)=>(
                <h2 className={Object.values(key)}>
                    {Object.keys(key)}
                </h2>

                    )) 
                }
            </div>
        </div>
    </div>    
        
    </>
}