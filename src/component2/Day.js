import dummy from '../db/data.json'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import useFetch from '../hook/useFetch'
import Word from "./Word";
export default function Day() {
    // dummy.words
   // const day = useParams.day;
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    //const [words, setWords] = useState([]);
    /*const wordList = dummy.words.filter(word =>(
        word.day === day
    ))

    useEffect(() =>{
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res =>{
                return res.json();
            })
            .then(data => {
                setWords(data);
            });
    },[day])
*/
/*    const a = useParams();
    console.log(a);*/
    return <>
        <h2>Day {day}</h2>
        {words.length ===0 && <span>Loding...</span>}
        <table>
            <tbody>
                {words.map(word =>(
                    <Word word={word} key={word.id}/>
                ))}
            </tbody>
        </table>
    </>


};