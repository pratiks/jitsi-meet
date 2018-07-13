import { ReducerRegistry } from '../base/redux';

import { TOGGLE_TILE_VIEW } from './actionTypes';

ReducerRegistry.register('features/video-layout', (state = {}, action) => {
    switch (action.type) {
    case TOGGLE_TILE_VIEW:
        return {
            ...state,
            tileView: !state.tileView
        };
    }

    return state;
});
