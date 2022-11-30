import styles from '../styles/Job.module.css'

export default function Job({title, company, salary, location, tags} : {title: string; company: string, salary: string, location: string, tags: Array<string>}){
    return (
        <div className='pb-4 text-xl md:flex md:items-center justify-between'>
            <div>
                <h1 className='text-3xl font-bold'> {title} </h1>
                <p> <span>Company:</span> {company} </p>
                <p> <span>Salary:</span> {salary ? salary : "N/A"} </p>
                <p> <span>Location:</span> {location ? location : "N/A"} </p>
                <p> {tags.join(' | ')} </p>
            </div>
            <div className='font-bold text-center border-2 md:border-0 border-black rounded py-2 my-2 '>
                <a>
                   Apply
                </a>
            </div>
        </div>
    )
}