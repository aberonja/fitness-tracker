import { createAction } from '@ngrx/store';

const START_LOADING = '[UI] Start Loading';
const STOP_LOADING = '[UI] Stop Loading';

export const StartLoading = createAction(START_LOADING);
export const StopLoading = createAction(STOP_LOADING);
