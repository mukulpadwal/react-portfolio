import './index.scss';

function AnimatedLetters(props){
    return (
        <span>
            {
                props.strArray.map(function (char, i){
                    return (
                        <span key={char+i} className={`${props.letterClass} _${i + props.index}`}>
                            {char}
                        </span>
                    );
                })
            }
        </span>
    )
};

export default AnimatedLetters;