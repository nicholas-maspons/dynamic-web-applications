function InstructionList(props) {
    const {instructions, title} = props;

    return (
        <div className="list">
            <h2>{title}</h2>
            <ol>
                {instructions.map((instruction) => <li>{instruction}</li>)}
            </ol>
        </div>
    )
}

export default InstructionList;
