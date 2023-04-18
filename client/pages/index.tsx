import styles from '@/styles/Home.module.css'
import Link from "next/link";
import React from "react";


export default function Home() {
  return <>
    <h1>Home</h1>
    <Link href={"/login"}>Ir para login</Link>
  </>
}
