# Kentucky Cutups for PFF Ultimate

Two bookmark buttons for **ultimate.pff.com**:

- **Kentucky Cutups**: type a player (first, last, school), pick a position, then click **Build cutup**. It finds every snap PFF has for him, builds the Kentucky 50-play cutup for that position, saves it as a playlist named `POS_Last_First_School_#Jersey`, and moves it into the matching position folder (Quarterbacks … Safeties).
- **KC Review**: quality control. It lists every Kentucky cutup by position, newest first, with when it was created. Click one to see each play's cutup, band (best / worst / recent / ranked), grade, date, opponent, situation, role, result, and whether it fits the cutup rule.

Everything runs inside the coach's own PFF Ultimate login. This code holds no passwords, keys or player data.

## How updates work
The bookmarks are tiny loaders. Each click loads the latest `kc.js` from this repository, so a change pushed here reaches every coach's Chrome on their next click (allow up to ~5 minutes). Nobody has to re-install anything.

## Files
| File | What it is |
|---|---|
| `kc.js` | Everything the buttons load. Inside, in order: the Kentucky 50-play plan (`KC_PLAN`: cutups per position, plays per cutup, best / worst / recent split), the play-feed reader and cutup rules (`RULES`), the 50-play selection, then the in-Ultimate build and review panels. |
| `install.html` | The install page with the two drag-to-bookmarks buttons. Download it and open it in Chrome. |

## Changing the cutups
Describe the change to Claude in plain English (for example: "LB Zone Coverage: hook/curl drops only" or "make Negative Plays 4 and add a Screens cutup for RBs"). Claude edits `kc.js`, tests it against real play data and pushes it here.
