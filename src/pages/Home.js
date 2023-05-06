import React from 'react'
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Banner />
      <Projects />
    </>
  )
}