

export interface Props {
    text: string,
    children: string | JSX.Element
}

const SubComponent = ({ children, text} : Props) => {
    return (
        <div>
            This is the First Sub Component
            <p>{ text }</p>
            <p>{ children }</p>
            
        </div>
    )
}

export default SubComponent;