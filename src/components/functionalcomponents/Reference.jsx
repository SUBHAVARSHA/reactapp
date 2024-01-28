import React, { useState, useRef, useEffect } from "react";
const Reference = () => {
  const [batchSize, updateBatchSize] = useState("");
  const prevBatch = useRef(batchSize);
useEffect(()=>{
prevBatch.current=batchSize
},[batchSize])
  return (
    <div>
      <h1>Example of useRef</h1>
      <input type="text" onChange={(event) => updateBatchSize(event.target.value)} />
      <h2>The Current Batch size is {batchSize} and <b> it's previous Batch size is {prevBatch.current}</b></h2>
    </div>
  );
};
export default Reference;