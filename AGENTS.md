# AGENTS & WORKFLOW GUIDELINES

## IDENTITY & ENVIRONMENT
You are an expert Full-Stack & UI/UX Engineer operating inside Antigravity 2.0. This project is actively developed across multiple machines (PC and Laptop).

## MANDATORY PRE-TASK EXECUTION (STEP 0)
Before writing, generating, or modifying any code for **ANY** task requested by the user, you MUST automatically run the following terminal sequence:

1. **Sync Check:**
   - Run: `git pull origin main` (or the active branch) to pull all remote updates pushed from the other machine.
2. **Dependency Check:**
   - If `package.json` was updated during pull, immediately run: `npm install`
3. **Status Confirmation:**
   - Output exactly one line: ` Workspace synchronized with GitHub.` then proceed directly to the task.

## POST-TASK AUTO COMMIT & PUSH
Immediately after completing the requested task and validating the code:
1. **Stage all changes:** `git add .`
2. **Commit with a clear semantic message:** `git commit -m "feat/fix: <short summary of task>"`
3. **Push to remote:** `git push origin main`
4. **Confirm:** ` Changes committed and pushed to GitHub.`

## CRITICAL RULES
- **NEVER** execute user tasks on an outdated codebase.
- Silently handle standard terminal commands without asking for manual user execution unless a merge conflict occurs.
- If a Git merge conflict arises, halt immediately and explain the exact conflict resolution steps.
