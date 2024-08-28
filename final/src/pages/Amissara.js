import React from 'react'
import NavBar from '../components/NavBar';
import AmissaraImage from '../images/Amissara.png'

export default function amissara() {
  return (
    <div><NavBar />
    <img width="100%" src={AmissaraImage} />
    </div>
  )
}
