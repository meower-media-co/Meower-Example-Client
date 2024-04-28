// This is where the stuff that all clients should put their shared data in
import * as mjs from '@meower-media/meower';
import {writable} from "svelte/store";
import type { EventEmitter } from 'events';

//@ts-ignore-error
export const client = writable<mjs.Client & EventEmitter>(new mjs.Client())
