# Updating the Lincoln–Douglas example topic

The Lincoln–Douglas example round follows the current NSDA topic, which changes every two months (https://www.speechanddebate.org/topics/).

1. Update `src/season.mjs` with the new resolution and dates.
2. Rewrite the seven stage scripts, model notes and questions in `src/Rally.js` (the `zE` list), the cross-examination walkthrough (`YE`), the quick cross-ex rep, and the two topic-specific tips in `BE`. Keep each speech about 50–60 words and avoid factual claims that would need evidence.
3. Delete the old `public/audio/ld-*.mp3` files and generate new ones:

   ```sh
   node scripts/ld-tts.mjs src/Rally.js public/audio > /tmp/ld-audio.json
   ```

   The script uses Inworld TTS on fal.ai (Kayla for the affirmative, Ethan for the negative), matches the old loudness, and names files by content hash so browsers don't keep cached old audio. Copy the printed `src`, `duration`, `sourceHash` and `voices` into the `JE` list in `src/Rally.js`.
4. Transcribe the new files (for example with Whisper) to confirm each matches its script, and use the timestamps to set when each model-note line appears in `src/flow-cues.mjs`.
5. Run `npm test`, `npm run test:browser` and `npm run build`.
