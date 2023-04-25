## Summary

Through the power of computer science, this extension lets you download videos behind the runnerspace paywall on 
the armory's website (like races). Ideally, would like to get past other paywalls for running races if they exist,
but that will be implemented as I want other race videos.

## Implementation

This is a chrome extension. The armory's website lets you preview a video for 15 seconds before it blocks access.
This preview fetches a set of mp4 encoded video files that are sequentially named. This extension essentially
listens for requests to these previews, and fetches sequentially named videos files past the preview limit
using your current session.

The extension built as is will download a set of preview files. None of these are encrypted or obfuscated, and it
is possible to directly view them as a set of independent .mp4 files. They are downloaded as .ts files, for the video
stream. 

Once these are downloaded, you can collate them into a single file as such:

```
cat *.ts > all.ts
```

It is possible to view this file using quicktime (on mac), or probably VLC on other systems.

## Notes

This current state is super experimental so far, and has a bunch of shit I need to fix. But it let me download my
race videos in its current state.