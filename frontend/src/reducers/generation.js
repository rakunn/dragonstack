import { GENERATION } from '../actions/types';

const DEFAULT_GENERATION = { generationId: '', expiration: '' };

const generation = (state = DEFAULT_GENERATION, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default generation;