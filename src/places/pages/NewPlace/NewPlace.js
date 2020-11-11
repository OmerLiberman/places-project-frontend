import React, {useCallback, useReducer} from 'react';

import './NewPlace.css';
import Input from '../../../shared/components/FormElements/Input/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../../shared/util/validators';
import Button from '../../../shared/components/FormElements/Button/Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const iid in state.inputs) { // iid <- input id
        if (iid === action.iid) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[iid].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.iid]: {value: action.value, isValid: action.isValid},
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  // useCallback to assure we are not in an infinite loop.
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch(
        {type: 'INPUT_CHANGE', value: value, isValid: isValid, iid: id});
  }, []);

  const submissionHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  }

  return (
      <form className="place-form">
        <Input id="title"
               element="input"
               type="text"
               label="Place Title"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid title."
               onInput={inputHandler}/>
        <Input id="description"
               element="textarea"
               label="Place Description"
               validators={[VALIDATOR_MINLENGTH(5)]}
               errorText="Please enter a valid description."
               onInput={inputHandler}/>
        <Input id="address"
               element="input"
               label="Place Address"
               validators={[VALIDATOR_REQUIRE()]}
               errorText="Please enter a valid address."
               onInput={inputHandler}/>

        <Button type="submit" disabled={!formState.isValid} onClick={submissionHandler}> Submit </Button>
      </form>
  );
};

export default NewPlace;