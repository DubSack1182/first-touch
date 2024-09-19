import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as touchService from '../../services/touchesService';

export default function TouchListPage(props) {
      console.log("props", props)
  return (
    <>
  {props.touches.map(touch => (
      <div key={touch._id}>
      {touch.location}
      </div>
    ))} 
    </>
  )
}