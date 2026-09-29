import test from 'node:test';
import assert from 'node:assert/strict';
import {parseBackup,makeBackup,mergeEntries} from '../src/notebook-storage.mjs';
const note={id:'one',date:'2026-09-29',topic:'Belonging',judge:'Me',keep:'Pause',next:'Explain why',ratings:{clarity:'Good'}};
test('backup round trip and legacy notebook arrays',()=>{assert.deepEqual(parseBackup(makeBackup([note])),[note]);assert.deepEqual(parseBackup(JSON.stringify([note])),[note]);});
test('restore preserves both notes when IDs conflict and repeated restore is idempotent',()=>{const other={...note,keep:'Speak slowly'};const merged=mergeEntries([note],[other],()=> 'two');assert.equal(merged.length,2);assert.deepEqual(merged[0],note);assert.equal(merged[1].id,'two');assert.deepEqual(mergeEntries(merged,[other]),merged);});
test('rejects invalid, unsupported, and oversized backups',()=>{for(const text of ['no','{}','{"app":"rally","version":2,"entries":[]}',JSON.stringify([{...note,keep:42}]),JSON.stringify([{...note,ratings:[]}]),' '.repeat(2_000_001)])assert.throws(()=>parseBackup(text));});
