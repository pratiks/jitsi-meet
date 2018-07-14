/**
 * The type of the action which sets the feature tile view for video
 * thumbnails.
 *
 * @returns {{
 *     type: SET_TILE_VIEW,
 *     enabled: boolean
 * }}
 */
export const SET_TILE_VIEW = Symbol('SET_TILE_VIEW');

/**
 * The type of the action which signals to toggle feature tile view for video
 * thumbnails.
 *
 * {
 *     type: TOGGLE_TILE_VIEW
 * }
 */
export const TOGGLE_TILE_VIEW = Symbol('TOGGLE_TILE_VIEW');
