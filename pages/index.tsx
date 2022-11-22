import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Job from '../components/Job'

export default function Home({jobs}) {
  
  return (
    <div className='md:px-16 px-4'>
      <Head>
        <title>Every web3 job</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className='flex justify-center items-center py-8'>
            <h1 className='text-4xl font-bold'>
                Web3 Jobs Index
            </h1>
        </div>
        <div className='min-h-screen py-8 flex-col justify-center'>
            {
                jobs.data.map((x) => {
                return(
                    <Job
                    key={Math.floor(Math.random() * 20000)}
                    title={x.title}
                    company={x.company}
                    salary={x.salaryRange}
                    location={x.location}
                    tags={x.tags}
                />
                )
            })
            }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hello`);
    const data = await response.json(); 
    return {
      props: {
        jobs: data
      }
    }
}

