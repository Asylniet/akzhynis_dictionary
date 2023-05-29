import { useSelector } from 'react-redux';
import { Search } from './Search';
export const Hero = () => {
    const wordInfo = useSelector((state) => state.global.wordInfo);
    return (
        <div className="flex column">
            <Search />
            {wordInfo.length > 0 && (
                wordInfo.title !== "No Definitions Found" ? (
                <div className="word flex column start">
                    {wordInfo[0].meanings.map((meaning) => (
                        <div
                            className="meaning flex column start"
                            key={meaning.definitions[0].definition}
                        >
                        <div>
                            {meaning.partOfSpeech}
                            {meaning.definitions.map((definition, index) => (
                            <div
                                className="definitions"
                                key={index}
                                data-order={index + 1}
                            >
                                <span className="definition">
                                {definition.definition}
                                </span>
                                {definition.example && (
                                <div className="flex column start extra">
                                    <h4>Example:</h4>
                                    <span className="example">{definition.example}</span>
                                </div>
                                )}
                                <span>{definition.antonyms}</span>
                                <span>{definition.synonyms}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h4>Результатов не найдено</h4>
            ))}
        </div>
        );
}