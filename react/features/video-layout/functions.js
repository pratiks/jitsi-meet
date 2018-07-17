// @flow

import { getParticipantCount } from '../base/participants';

/**
 * Selector for determining if the local participant has enabled tile view to
 * be displayed when display conditions are met.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} True if tile view is set to display when conditions are
 * met.
 */
export function isTileViewEnabled(state: Object) {
    return Boolean(state['features/video-layout'].tileView);
}

/**
 * Selector for determining if the UI layout should be in tile view.
 *
 * @param {Object} state - The redux state.
 * @returns {boolean} True if tile view should be displayed.
 */
export function shouldDisplayTileView(state: Object) {
    return Boolean(
        state['features/video-layout'].tileView
            && getParticipantCount(state) > 2
            && !state['features/etherpad'].editing
    );
}
