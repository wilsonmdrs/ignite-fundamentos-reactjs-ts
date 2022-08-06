
import React, {useState} from 'react'

import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { fromUnixTime } from 'date-fns/esm'


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)
    
    function handleLikeCount() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar  src="https://github.com/wilsonmdrs.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wilson Medeiros</strong>
                             <time title="27 de Julho às 12:00h" dateTime='2022-07-27 12:00:00'>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}