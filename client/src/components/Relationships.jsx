import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL1, config } from "../services/index.js";
// import Form1 from '../components/Form1'

function Relationships(props) {
  const [relationships, setRelationships] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const {
    title,
    situation,
    dreamReact,
    reality,
    anonAuthor,
  } = props.relationships.fields;

  // useEffect(() => {
  //   const getRelationships = async () => {
  //     const res = await axios.get(baseURL1, config);
  //     setRelationships(res.data.records);
  //     console.log(res.data.records)
  //   };
  //   getRelationships();
  // }, [toggleFetch]);

  return (

    <Link to="/relationships">
      <div>
        <h3>{title}</h3>
        <h6>The Scene: {situation}</h6>
        <h4>My Mind: {dreamReact}</h4>
        <h6>What Actually Happened: {reality}</h6>
        <h6>posted by {anonAuthor}</h6>
      </div>
    </Link>
  );
}

export default Relationships;
