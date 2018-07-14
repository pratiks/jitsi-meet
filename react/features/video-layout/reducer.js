import { ReducerRegistry } from '../base/redux';

import { SET_TILE_VIEW, TOGGLE_TILE_VIEW } from './actionTypes';

ReducerRegistry.register('features/video-layout', (state = {}, action) => {
    switch (action.type) {
    case SET_TILE_VIEW:
        return {
            ...state,
            tileView: action.enabled
        };
    case TOGGLE_TILE_VIEW:
        return {
            ...state,
            tileView: !state.tileView
        };
    }

    return state;
});
