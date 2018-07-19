import { ReducerRegistry } from '../base/redux';

import { SET_TILE_VIEW } from './actionTypes';

const DEFAULT_STATE = {
    /**
     * The indicator which determines whether the {@link tileView} is enabled by default.
     *
     * @public
     * @type {boolean}
     */
    tileView: false,

};

ReducerRegistry.register('features/video-layout', (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case SET_TILE_VIEW:
        return {
            ...state,
            tileView: action.enabled
        };
    }

    return state;
});
