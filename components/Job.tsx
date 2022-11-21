import styles from '../styles/Job.module.css'

export default function Job({title, company, salary, location, tags}){
    return (
        <div className={styles.jobs}>
            <h1> {title} </h1>
            <p> <span>Company:</span> {company} </p>
            <p> <span>Salary:</span> {salary ? salary : "N/A"} </p>
            <p> <span>Location:</span> {location ? location : "N/A"} </p>
            <p> {tags.join(' | ')} </p>
            <div>
                <a>
                   Apply →
                </a>
            </div>
        </div>
    )
}