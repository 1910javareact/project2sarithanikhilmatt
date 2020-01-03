import React from 'react'

function UserBoardComponent(props: any) {
    
    const drop = (e:any) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
       // let card : HTMLElement | null;
      const card = document.getElementById(card_id);

    //  card.style.display ='block';
        e.target.appendChild(card);
    }

    const dragOver = (e: any) => {
        e.preventDefault();

    }

    return (
        <div>
            id={props.id}
            className={props.calssName}
            onDrop={drop}
            onDragOver={dragOver}
            {props.children}
        </div>
    )
}

export default UserBoardComponent
