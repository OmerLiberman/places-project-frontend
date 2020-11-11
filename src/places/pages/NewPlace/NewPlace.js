import React from 'react';

import './NewPlace.css';
import Input from '../../../shared/components/FormElements/Input/Input';
import {VALIDATOR_REQUIRE} from '../../../shared/util/validators';

const NewPlace = () => {
  return (
      <form className="form-place">
        <Input element="input"
               type="text"
               label="Place Title"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid title"
               placeholder=""/>
      </form>
  );
};

export default NewPlace;