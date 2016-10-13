import { IDiscoveryResult, IToolDiscoveryResult } from '../types/IStateEx';

import { createAction } from 'redux-act';

/**
 * change game being managed
 */
export const setGameMode = createAction('SET_GAME_MODE');

/**
 * add info about a discovered game
 */
export const addDiscoveredGame =
  createAction('ADD_DISCOVERED_GAME',
        (id: string, result: IDiscoveryResult) => { return { id, result }; });

/**
 * add info about a discovered tool
 */
export const addDiscoveredTool =
  createAction('ADD_DISCOVERED_TOOL',
        (gameId: string, toolId: string, result: IToolDiscoveryResult) => {
          return { gameId, toolId, result }; });

/**
 * add a search path (path that is searched for game installations)
 */
export const addSearchPath = createAction('ADD_SEARCH_PATH');

/**
 * remove a search path
 */
export const removeSearchPath = createAction('REMOVE_SEARCH_PATH',
    (id: string, result: IDiscoveryResult) => { return { id, result }; });
