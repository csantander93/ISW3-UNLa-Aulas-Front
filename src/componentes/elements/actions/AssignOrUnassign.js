import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { MdAddTask } from "react-icons/md";
import styled from "styled-components";
import { useSubjects } from "../../contexts/SubjectContext/useSubjects";
import FormAssign from "./FormAssign";

const Assign = styled(MdAddTask)`
    color: #02890d;
    font: 22px;
    :hover{
        color: #00e60b;
    }
`;

const Unassign = styled(IoMdRemoveCircle)`
    color: #e60000;
    font-size: 20px;
    :hover{
        color: #ff5959;
    }
`;


function AssignOrUnassign(props) {

    const [openPopupAssign, setOpenPopupAssign] = useState(false);

    //funcion que se ejecuta desde FromAssign
    const handleClick = () => {
        //await assignSubjectToClassRoom(props.idAulaAsignada, props.nombreMateria);
         setOpenPopupAssign(!openPopupAssign);
    };
    return (
        <div>
            {props.aulaAsignada === 0 ? <Assign title="Asignar" onClick={() => handleClick()} /> : <Unassign title="Desasignar" />}
            {openPopupAssign && <FormAssign openPopup={handleClick} turno={props.turno}
              cantEstudiantes={props.cantEstudiantes}></FormAssign>}
        </div>
    );
}

export default AssignOrUnassign;
