import React from "react";
import { Card } from "../card";
import { ContainerImgInf } from "../containerImgInfo";
import { MultipleContaint } from "../textAndInfo";

export const Body=()=>{
    return <>
    <div className="body-card">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <MultipleContaint />
    <ContainerImgInf />
    </>
}