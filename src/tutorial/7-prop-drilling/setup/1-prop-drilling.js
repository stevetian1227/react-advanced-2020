import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>prop drillings</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <>
      <div className="item">
        <h4>SinglePerson</h4>
        <h4>{id}</h4>
        <h4>{name}</h4>
      </div>
    </>
  );
};

export default PropDrilling;
