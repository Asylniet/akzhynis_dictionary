import { useState, useEffect } from "react";
import { useGetPlaceholder } from "../../hooks/useGetPlaceholder";
import { useDispatch, useSelector } from 'react-redux';
import { searchWord } from "../../store/globalSlice";
import volume from "../../assets/images/volume.svg";
import { spotWord } from "../../hooks/useSpotWord";

export const Search = () => {
    const [word, setWord] = useState("");
    const placeholder = useGetPlaceholder();
    const wordInfo = useSelector((state) => state.global.wordInfo)
    const dispatch = useDispatch();
    useEffect(() => {
        word && dispatch(searchWord(word));
    }, [word]);
    
    useEffect(() => {
        document.querySelectorAll(".volume").forEach((element) => {
            element.addEventListener("click", function () {
                var audio = element.previousElementSibling;
                audio.play();
            });
        });
        spotWord(word);
    }, [wordInfo]);

    return (
        <>
            <form
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                setWord(document.querySelector("form").firstChild.value);
            }}
            className="flex column start"
            >
            <input
                type="text"
                placeholder={`${placeholder}`}
                onChange={(e) => setWord(e.target.value)}
            />
            {wordInfo.length > 0 && wordInfo[0].phonetics && wordInfo[0].phonetics.length > 0 && (
                <div className="flex phonetics">
                {wordInfo[0].phonetics.map(
                    (el, index) =>
                    el.text &&
                    el.audio && (
                        <div className="phonetic flex" key={index}>
                        <span>{el.text.replace(/\//g, " ")}</span>
                        <audio>
                            <source src={el.audio} type="audio/mp3" />
                        </audio>
                        <img
                            src={volume}
                            alt=""
                            audio={el.audio}
                            className="volume"
                        />
                        </div>
                    )
                )}
                </div>
            )}
            </form>
        </>
    )
}