import {RiDeleteBin6Line} from 'react-icons/ri';
import {FaThumbsUp} from 'react-icons/fa';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount,setLikeCount] = useState(0);  

    function handleDEleteComment() {
      onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state => {
            return state + 1
        }));
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/96690576?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Esdras Freitas</strong>
                            <time title="02 de Julho às 20:38h" dateTime="2022-07-02 20:38:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDEleteComment} title="Deletar comentário">
                           <RiDeleteBin6Line size={24}/>
                        </button>

                    </header>

                    <p>{content}</p>
                    
                </div>

                 <footer>
                    <button  onClick={handleLikeComment}>
                        <FaThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                 </footer>

            </div>

        </div>
    )
}