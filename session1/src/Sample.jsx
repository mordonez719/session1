import './Sample.css'

function Sample(props){

    return (
        <>
            <div>
                Sample Component
            </div>
            <p>{props.name}</p>
        </>
    )

}

export default Sample