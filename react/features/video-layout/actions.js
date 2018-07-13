import { TOGGLE_TILE_VIEW } from './actionTypes';

/**
 * Creates a (redux) action which signals to change the UI layout to enter or
 * exit tiled video thumbnail view.
 *
 * @returns {{
 *     type: TOGGLE_TILE_VIEW
 * }}
 */
export function toggleTileView() {
    return {
        type: TOGGLE_TILE_VIEW
    };
}

