import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import "./scroll.css"
import Task from "./Task";


const Container = styled.div`
    background-color: #f4f5f7;
    border-radius: 2.5px;
    width: 400px;
    height: 900px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;`;

const Title = styled.h3`
    padding: 8px;
    background-color: pink;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: #f4f5f7;
    flex-grow: 1;
    min-height: 100px;
`;

function Column ({ title, tasks, id} ) {

    return (
        <Container className="column">
            <Title style={{backgroundColor: "blue", position: "stick"}}>
                {title}
            </Title>
            
            <Droppable droppableId={id}>
                {(provided, snapshot) => {
                <TaskList   
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
>
                    {/*Provide your tasks*/}

                    {tasks.map((task, index) => (<Task key={index} index={index} task={task} />))}
                    <Task task={{id:123 , title: "make a progress board"}} index={1}/>
                    {provided.placeholder}
                </TaskList>


                }}


            </Droppable>

        </Container>
            
    );

}

export default Column;