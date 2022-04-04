import React from "react";
import Skill from './Skill';


const SkillList = ({entry}) => {
    const lst = Object.values(entry);
    const skillArray = lst.map((user, i) => {
        return (
            <Skill
                key = {i} 
                id ={entry[i].id} 
                name = {entry[i].name} 
                skill= {entry[i].skill}
                img = {entry[i].img}
            />
        );
    });
    return (
        <>
            {skillArray}
        </>
    );
}

export default SkillList;