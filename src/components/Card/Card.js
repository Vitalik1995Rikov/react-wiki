const Card = ({results}) => {
    let display;

    if (results) {
    }
    else {
        display = "No Chareacters Found :/";
    }
    return <>{display}</>
}