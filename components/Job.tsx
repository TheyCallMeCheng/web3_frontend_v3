export default function Job({title, company, salary, location}){
    return (
        <div className="jobs">
            <h1> {title} </h1>
            <p> {company} </p>
            <p> {salary} </p>
            <p> {location} </p>
        </div>
    )
}